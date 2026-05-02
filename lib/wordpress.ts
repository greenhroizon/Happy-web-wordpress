const WORDPRESS_SITES = ["https://happyho.in", "https://www.happyho.in"];
const WORDPRESS_API_SUFFIX = "/wp-json/wp/v2";

export interface WordPressRenderedField {
  rendered: string;
}

interface WordPressMediaSize {
  source_url?: string;
}

interface WordPressFeaturedMedia {
  source_url?: string;
  media_details?: {
    sizes?: {
      large?: WordPressMediaSize;
      medium_large?: WordPressMediaSize;
      medium?: WordPressMediaSize;
      thumbnail?: WordPressMediaSize;
    };
  };
}

export interface WordPressPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  link: string;
  title: WordPressRenderedField;
  content: WordPressRenderedField;
  excerpt: WordPressRenderedField;
  yoast_head_json?: {
    og_image?: Array<{ url: string }>;
  };
  _embedded?: {
    "wp:featuredmedia"?: WordPressFeaturedMedia[];
  };
}

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://happyho.in";

function decodeNumericEntities(value: string): string {
  return value
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&#x([\da-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)));
}

function decodeHtmlEntities(value: string): string {
  return decodeNumericEntities(value)
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

export function sanitizeWordPressHtml(value: string): string {
  return decodeNumericEntities(
    value
      .replace(/\[(.*?)\]/g, "")
      .replace(/&#[xX]?[0-9a-fA-F]+;/g, "")
      .trim(),
  );
}

export function stripHtml(value: string): string {
  const withoutTags = sanitizeWordPressHtml(value).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  return decodeHtmlEntities(withoutTags);
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

export function resolvePostImage(post: WordPressPost): string {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];

  const featuredMediaUrl =
    media?.media_details?.sizes?.large?.source_url ??
    media?.media_details?.sizes?.medium_large?.source_url ??
    media?.media_details?.sizes?.medium?.source_url ??
    media?.source_url ??
    media?.media_details?.sizes?.thumbnail?.source_url;

  return normalizeImageUrl(featuredMediaUrl) ?? normalizeImageUrl(post.yoast_head_json?.og_image?.[0]?.url) ?? "/67.png";
}

async function fetchFromWordPress<T>(pathWithQuery: string): Promise<T> {
  let lastError: unknown;

  for (const baseUrl of WORDPRESS_SITES) {
    try {
      const response = await fetch(`${baseUrl}${WORDPRESS_API_SUFFIX}${pathWithQuery}`, {
        next: { revalidate: 300 },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      return (await response.json()) as T;
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError instanceof Error ? lastError : new Error("Unable to fetch WordPress content");
}

export async function fetchWordPressPosts(search?: string, page = 1, perPage = 10): Promise<WordPressPost[]> {
  const params = new URLSearchParams({
    per_page: String(perPage),
    page: String(page),
    orderby: "date",
    order: "desc",
    _embed: "true",
  });

  if (search && search.trim().length > 0) {
    params.set("search", search.trim());
  }

  return fetchFromWordPress<WordPressPost[]>(`/posts?${params.toString()}`);
}

export async function fetchWordPressPostBySlug(slug: string): Promise<WordPressPost | null> {
  const params = new URLSearchParams({
    slug,
    _embed: "true",
  });

  const posts = await fetchFromWordPress<WordPressPost[]>(`/posts?${params.toString()}`);
  return posts[0] ?? null;
}

export async function fetchAllWordPressPostSlugs(): Promise<Array<Pick<WordPressPost, "slug" | "modified">>> {
  return fetchFromWordPress<Array<Pick<WordPressPost, "slug" | "modified">>>(
    "/posts?per_page=100&orderby=date&order=desc&_fields=slug,modified",
  );
}