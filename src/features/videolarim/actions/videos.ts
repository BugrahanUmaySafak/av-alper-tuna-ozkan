"use server";

import type { Video } from "../types";

const RAW_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4001";

const BASE = RAW_BASE.replace(/\/+$/, "");
const API_BASE = BASE.endsWith("/api") ? BASE : `${BASE}/api`;

// API'nin verebileceği kategori şekilleri
type ApiCategory =
  | { id?: string; _id?: string; name: string }
  | string
  | null
  | undefined;

type ApiVideo = {
  id?: string;
  _id?: string;
  title: string;
  youtubeId: string;
  createdAt?: string;
  updatedAt?: string;
  coverUrl?: string | null;
  coverPublicId?: string | null;
  category?: ApiCategory;
};

type ApiVideoList = { items: ApiVideo[] } | ApiVideo[];

type ApiCategoryItem = {
  id?: string;
  _id?: string;
  name: string;
};

type ApiCategoryList = { items: ApiCategoryItem[] } | ApiCategoryItem[];

export async function getVideos(): Promise<Video[]> {
  // videolar ve kategoriler aynı anda gelsin
  const [videosRes, catsRes] = await Promise.all([
    fetch(`${API_BASE}/videolarim`, {
      cache: "force-cache",
      next: { revalidate: 900 },
      headers: { Accept: "application/json" },
    }),
    fetch(`${API_BASE}/kategoriler`, {
      cache: "force-cache",
      next: { revalidate: 900 },
      headers: { Accept: "application/json" },
    }).catch(() => null), // kategoriler bozulsa bile videolar gelsin
  ]);

  if (!videosRes.ok) {
    const text = await videosRes.text().catch(() => "");
    throw new Error(
      `GET ${API_BASE}/videolarim failed: ${videosRes.status} ${text}`
    );
  }

  const jsonVideos = (await videosRes.json()) as ApiVideoList;
  const rawVideos: ApiVideo[] = Array.isArray(jsonVideos)
    ? jsonVideos
    : Array.isArray(jsonVideos.items)
    ? jsonVideos.items
    : [];

  // kategori map'i
  const categoryById = new Map<string, string>();
  if (catsRes && catsRes.ok) {
    const jsonCats = (await catsRes.json()) as ApiCategoryList;
    const rawCats: ApiCategoryItem[] = Array.isArray(jsonCats)
      ? jsonCats
      : Array.isArray(jsonCats.items)
      ? jsonCats.items
      : [];

    for (const c of rawCats) {
      const id = String(c.id || c._id || "");
      if (!id) continue;
      categoryById.set(id, c.name);
    }
  }

  return rawVideos.map((v, idx): Video => {
    const id =
      v.id ||
      v._id ||
      `${v.youtubeId || "video"}-${v.createdAt || "no-date"}-${idx}`;

    let category: Video["category"] = undefined;

    // 1) backend zaten obje gönderdiyse
    if (v.category && typeof v.category === "object") {
      const catId = String(v.category.id || v.category._id || "");
      category = {
        id: catId,
        name: v.category.name,
      };
    }
    // 2) backend sadece ObjectId string gönderdiyse
    else if (typeof v.category === "string") {
      const catId = v.category.trim();
      const catName = categoryById.get(catId);
      if (catName) {
        category = { id: catId, name: catName };
      }
      // catName yoksa hiç göstermiyoruz
    }

    return {
      id,
      title: v.title,
      youtubeId: v.youtubeId,
      createdAt: v.createdAt ?? new Date().toISOString(),
      updatedAt: v.updatedAt ?? undefined,
      coverUrl: v.coverUrl ?? undefined,
      category,
    };
  });
}
