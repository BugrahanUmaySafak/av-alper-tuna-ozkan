import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/seo";
import { getArticles } from "@/features/makalelerim/actions/articles";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date(); // Date veya ISO string kabul edilir

  const staticPages: MetadataRoute.Sitemap = [
    { path: "/", priority: 1 },
    { path: "/makalelerim", priority: 0.9 },
    { path: "/faaliyet-alanlarim", priority: 0.8 },
    { path: "/hakkimda", priority: 0.8 },
    { path: "/videolarim", priority: 0.8 },
    { path: "/iletisim", priority: 0.8 },
  ].map(({ path, priority }) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: "weekly",
    priority,
  }));

  let articlesEntries: MetadataRoute.Sitemap = [];
  try {
    const articles = await getArticles();
    articlesEntries = articles.map((article) => ({
      url: absoluteUrl(`/makalelerim/${article.slug}`),
      lastModified: article.updatedAt ?? article.createdAt,
      changeFrequency: "monthly",
      priority: 0.9,
    }));
  } catch {
    // API erişmezse statik sayfalar yine döner
  }

  return [...staticPages, ...articlesEntries];
}
