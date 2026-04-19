import { MetadataRoute } from "next";

import { getFrameworks, getPublishedArticles } from "@/lib/content/repository";
import { siteConfig } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articles, frameworks] = await Promise.all([
    getPublishedArticles(),
    getFrameworks(),
  ]);

  return [
    "",
    "/essays",
    "/frameworks",
    "/book",
    "/assessment",
    "/about",
    ...articles.map((article) => `/essays/${article.slug}`),
    ...frameworks.map((framework) => `/frameworks/${framework.slug}`),
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
  }));
}
