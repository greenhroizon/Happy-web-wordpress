import type { MetadataRoute } from "next";
import { fetchAllWordPressPostSlugs, SITE_URL } from "@/lib/wordpress";

export const dynamic = "force-dynamic";

const staticRoutes = ["", "/AboutUs", "/Programs", "/Corporate", "/Resources", "/Payment"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  let articleEntries: MetadataRoute.Sitemap = [];

  try {
    const posts = await fetchAllWordPressPostSlugs();
    articleEntries = posts.map((post) => ({
      url: `${SITE_URL}/Resources/${post.slug}`,
      lastModified: new Date(post.modified),
      changeFrequency: "daily",
      priority: 0.7,
    }));
  } catch {
    articleEntries = [];
  }

  return [...staticEntries, ...articleEntries];
}