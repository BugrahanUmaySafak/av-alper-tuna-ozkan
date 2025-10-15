"use server";
import type { Video } from "../types";

const BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

type ListResponse = { items: Video[] };

export async function getVideos(): Promise<Video[]> {
  if (!BASE) throw new Error("NEXT_PUBLIC_API_BASE_URL eksik.");

  const res = await fetch(`${BASE}/videolarim`, {
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`GET /videolarim failed: ${res.status} ${text}`);
  }

  const data = (await res.json()) as ListResponse;

  return Array.isArray(data.items) ? data.items : [];
}
