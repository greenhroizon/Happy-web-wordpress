const BLOGGER_BASE_URL = "https://www.googleapis.com/blogger/v3";
const BLOGGER_BLOG_ID = process.env.BLOGGER_BLOG_ID ?? "";
const BLOGGER_API_KEY = process.env.BLOGGER_API_KEY ?? "";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://happyho.in";

export interface BloggerRenderedField {
  rendered: string;
}

export interface BloggerImage {
  url?: string;
}

export interface BloggerPost {
  id: string;
  published: string;
  updated: string;
  url?: string;
  title: string;
  content: string;
  images?: BloggerImage[];
}

interface BloggerPostsResponse {
  items?: BloggerPost[];
  nextPageToken?: string;
}

export interface BloggerPostsResult {
  posts: BloggerPost[];
  hasNext: boolean;
  nextPageToken?: string;
}

function stripHtmlTags(value: string): string {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function decodeHtmlEntities(value: string): string {
  return value
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&#x([\da-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

export function sanitizeHtml(value: string): string {
  return value.trim();
}

export function stripHtml(value: string): string {
  return decodeHtmlEntities(stripHtmlTags(value));
}

function normalizeImageUrl(value?: string): string | null {
  if (!value) {
    return null;
  }
  const cleaned = decodeHtmlEntities(value).replace(/\\/g, "").trim();

  if (!cleaned) {
    return null;
  }

  if (cleaned.startsWith("//")) {
    return `https:${cleaned}`;
  }

  if (cleaned.startsWith("http://") || cleaned.startsWith("https://")) {
    return cleaned;
  }

  return null;
}

export function resolvePostImage(post: BloggerPost): string {
  return normalizeImageUrl(post.images?.[0]?.url) ?? "/67.png";
}

function extractSlugFromUrl(url?: string): string {
  if (!url) return "";
  try {
    const pathname = new URL(url).pathname; // /2024/12/post-title.html
    const parts = pathname.split("/").filter(Boolean);
    const last = parts[parts.length - 1] ?? "";
    return last.replace(/\.html$/i, "");
  } catch {
    return "";
  }
}

export function getPostSlug(post: BloggerPost): string {
  const slug = extractSlugFromUrl(post.url);
  return slug || post.id;
}

async function fetchBlogger<T>(path: string, params: Record<string, string> = {}): Promise<T> {
  if (!BLOGGER_BLOG_ID || !BLOGGER_API_KEY) {
    throw new Error("Missing BLOGGER_BLOG_ID or BLOGGER_API_KEY");
  }

  const qs = new URLSearchParams({
    key: BLOGGER_API_KEY,
    ...params,
  });

  const response = await fetch(`${BLOGGER_BASE_URL}/blogs/${BLOGGER_BLOG_ID}${path}?${qs.toString()}`, {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error(`Blogger API request failed (${response.status})`);
  }

  return (await response.json()) as T;
}

export async function fetchBloggerPosts(search = "", pageToken = "", maxResults = 10): Promise<BloggerPostsResult> {
  const params: Record<string, string> = {
    maxResults: String(maxResults),
    fetchImages: "true",
    status: "live",
    orderBy: "published",
  };

  if (search.trim()) {
    params.q = search.trim();
  }

  if (pageToken) {
    params.pageToken = pageToken;
  }

  const data = await fetchBlogger<BloggerPostsResponse>("/posts", params);

  return {
    posts: data.items ?? [],
    hasNext: Boolean(data.nextPageToken),
    nextPageToken: data.nextPageToken,
  };
}

export async function fetchBloggerPostBySlug(slug: string): Promise<BloggerPost | null> {
  // Blogger API doesn't provide direct "slug" lookup.
  // Strategy: fetch recent live posts and match extracted slug.
  const data = await fetchBlogger<BloggerPostsResponse>("/posts", {
    maxResults: "50",
    fetchImages: "true",
    status: "live",
    orderBy: "published",
  });

  const posts = data.items ?? [];
  return posts.find((post) => getPostSlug(post) === slug || post.id === slug) ?? null;
}

export async function fetchAllBloggerPostSlugs(): Promise<Array<{ slug: string; modified: string }>> {
  let token = "";
  const results: Array<{ slug: string; modified: string }> = [];

  // Pull in pages (safe cap)
  for (let i = 0; i < 10; i += 1) {
    const data = await fetchBlogger<BloggerPostsResponse>("/posts", {
      maxResults: "100",
      fetchImages: "false",
      status: "live",
      orderBy: "published",
      ...(token ? { pageToken: token } : {}),
    });

    for (const post of data.items ?? []) {
      results.push({
        slug: getPostSlug(post),
        modified: post.updated,
      });
    }

    if (!data.nextPageToken) {
      break;
    }

    token = data.nextPageToken;
  }

  return results.filter((item) => item.slug);
}
