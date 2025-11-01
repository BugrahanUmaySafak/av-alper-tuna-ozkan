// src/features/makalelerim/actions/articles.ts
"use server";

import type { Article } from "../types";

const RAW =
  process.env.API_BASE_URL ??
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  "http://localhost:4001";
const BASE = RAW.replace(/\/+$/, "");
const API_BASE = BASE.endsWith("/api") ? BASE : `${BASE}/api`;

type ApiArticle = {
  _id?: string;
  id?: string;
  title: string;
  slug: string;
  content: string;
  image: {
    url: string;
    alt: string;
    tinyUrl?: string;
    publicId?: string;
  };
  summary?: string;
  category?: string | { id?: string; _id?: string; name: string } | null;
  keywords?: string[];
  readingMinutes?: number;
  createdAt?: string;
  updatedAt?: string;
};

type ApiList = { items: ApiArticle[] } | ApiArticle[];

function normalizeArticle(a: ApiArticle): Article {
  // kategori adı yoksa göstermeyiz
  let category: Article["category"];
  if (typeof a.category === "string") {
    // sadece id var, isim yok → boş bırak
    category = undefined;
  } else if (a.category && typeof a.category === "object") {
    category = {
      id: String(a.category.id || a.category._id || ""),
      name: a.category.name,
    };
  }

  return {
    id: a.id || a._id || a.slug,
    title: a.title,
    slug: a.slug,
    content: a.content,
    image: {
      url: a.image.url,
      alt: a.image.alt,
      tinyUrl: a.image.tinyUrl,
      // istersen: publicId: a.image.publicId,
    },
    summary: a.summary,
    category,
    keywords: a.keywords ?? [],
    // backend createdAt veriyorsa onu createdAt gibi kullan
    createdAt: a.createdAt ?? new Date().toISOString(),
    updatedAt: a.updatedAt,
    readingMinutes: a.readingMinutes,
  };
}

export async function getArticles(): Promise<Article[]> {
  const res = await fetch(`${API_BASE}/makalelerim`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Makaleler alınamadı");
  const json = (await res.json()) as ApiList;
  const raw = Array.isArray(json) ? json : json.items ?? [];
  return raw.map(normalizeArticle);
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const res = await fetch(
    `${API_BASE}/makalelerim/${encodeURIComponent(slug)}`,
    {
      next: { revalidate: 60 },
    }
  );
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Makale alınamadı");
  const raw = (await res.json()) as ApiArticle;
  return normalizeArticle(raw);
}
