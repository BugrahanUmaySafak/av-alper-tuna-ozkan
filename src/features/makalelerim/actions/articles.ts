"use server";

import type { Article } from "../types";

const API =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ||
  "http://localhost:4000";

export async function getArticles(): Promise<Article[]> {
  const res = await fetch(`${API}/makalelerim`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Makaleler alınamadı");
  const data = (await res.json()) as { items: Article[] };
  return data.items;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const res = await fetch(`${API}/makalelerim/${encodeURIComponent(slug)}`, {
    next: { revalidate: 60 },
  });

  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Makale alınamadı");

  return (await res.json()) as Article;
}
