export const sanitizeHtml = sanitizeWordPressHtml;
const BLOGGER_FEED_BASE = "https://happyhooblog.blogspot.com/feeds/posts/default";

export interface WordPressRenderedField {
  rendered: string;
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
    "wp:featuredmedia"?: Array<{
      source_url?: string;
      media_details?: {
        sizes?: {
          large?: { source_url?: string };
          medium_large?: { source_url?: string };
          medium?: { source_url?: string };
          thumbnail?: { source_url?: string };
        };
      };
    }>;
  };
}

interface BloggerFeedLink {
  rel?: string;
  href?: string;
}

interface BloggerFeedMediaThumbnail {
  url?: string;
}

interface BloggerFeedText {
  $t?: string;
}

interface BloggerFeedEntry {
  id?: BloggerFeedText;
  title?: BloggerFeedText;
  content?: BloggerFeedText;
  summary?: BloggerFeedText;
  published?: BloggerFeedText;
  updated?: BloggerFeedText;
  link?: BloggerFeedLink[];
  "media$thumbnail"?: BloggerFeedMediaThumbnail;
}

interface BloggerFeed {
  entry?: BloggerFeedEntry[];
}

interface BloggerFeedResponse {
  feed?: BloggerFeed;
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
  return decodeNumericEntities(value).replace(/\[(.*?)\]/g, "").trim();
}

export function stripHtml(value: string): string {
  const withoutTags = sanitizeWordPressHtml(value).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  return decodeHtmlEntities(withoutTags);
}

function normalizeImageUrl(value?: string): string | null {
  if (!value) return null;

  const cleaned = decodeHtmlEntities(value).replace(/\\/g, "").trim();
  if (!cleaned) return null;

  if (cleaned.startsWith("//")) {
    return `https:${cleaned}`;
  }

  if (cleaned.startsWith("http://") || cleaned.startsWith("https://")) {
    return cleaned;
  }

  return null;
}

function convertBloggerThumbToLarge(url?: string): string | null {
  if (!url) return null;
  const normalized = normalizeImageUrl(url);
  if (!normalized) return null;

  return normalized
    .replace(/\/s\d+(-c)?\//, "/s1600/")
    .replace(/=s\d+(-c)?$/, "=s1600");
}

function extractSlugFromLink(link: string): string {
  try {
    const pathname = new URL(link).pathname;
    const lastPart = pathname.split("/").filter(Boolean).pop() ?? "";
    return lastPart.replace(/\.html$/i, "");
  } catch {
    return "";
  }
}

function mapEntryToPost(entry: BloggerFeedEntry, index: number): WordPressPost | null {
  const alternateLink = entry.link?.find((link) => link.rel === "alternate")?.href;
  const slug = extractSlugFromLink(alternateLink ?? "");

  if (!alternateLink || !slug) {
    return null;
  }

  const title = entry.title?.$t ?? "Untitled";
  const content = entry.content?.$t ?? "";
  const summary = entry.summary?.$t ?? content;
  const published = entry.published?.$t ?? new Date().toISOString();
  const updated = entry.updated?.$t ?? published;
  const imageUrl = convertBloggerThumbToLarge(entry["media$thumbnail"]?.url);

  return {
    id: Number(entry.id?.$t?.replace(/\D+/g, "") || index + 1),
    date: published,
    modified: updated,
    slug,
    link: alternateLink,
    title: { rendered: title },
    content: { rendered: content },
    excerpt: { rendered: summary },
    yoast_head_json: imageUrl
      ? {
          og_image: [{ url: imageUrl }],
        }
      : undefined,
  };
}

async function fetchFromBlogger(search?: string, startIndex = 1, maxResults = 10): Promise<WordPressPost[]> {
  const params = new URLSearchParams({
    alt: "json",
    "max-results": String(maxResults),
    "start-index": String(startIndex),
  });

  if (search && search.trim().length > 0) {
    params.set("q", search.trim());
  }

  const response = await fetch(`${BLOGGER_FEED_BASE}?${params.toString()}`, {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error(`Blogger feed request failed (${response.status})`);
  }

  const json = (await response.json()) as BloggerFeedResponse;
  const entries = json.feed?.entry ?? [];

  return entries
    .map((entry, index) => mapEntryToPost(entry, index))
    .filter((post): post is WordPressPost => Boolean(post));
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

export async function fetchWordPressPosts(search?: string, page = 1, perPage = 10): Promise<WordPressPost[]> {
  const safePage = Math.max(1, page);
  const startIndex = (safePage - 1) * perPage + 1;
  return fetchFromBlogger(search, startIndex, perPage);
}

export async function fetchWordPressPostBySlug(slug: string): Promise<WordPressPost | null> {
  const posts = await fetchFromBlogger(undefined, 1, 200);
  return posts.find((post) => post.slug === slug) ?? null;
}

export async function fetchAllWordPressPostSlugs(): Promise<Array<Pick<WordPressPost, "slug" | "modified">>> {
  const posts = await fetchFromBlogger(undefined, 1, 200);
  return posts.map((post) => ({ slug: post.slug, modified: post.modified }));
}
