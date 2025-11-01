"use client";

import { useEffect, useState } from "react";
import type { Article } from "../types";

export function useArticle(slug: string, initial?: Article) {
  const [data, setData] = useState<Article | undefined>(initial);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (initial) return;
    const ac = new AbortController();
    const API =
      process.env.API_BASE_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL;

    fetch(`${API}/makalelerim/${encodeURIComponent(slug)}`, {
      signal: ac.signal,
    })
      .then(async (r) => {
        if (!r.ok) throw new Error("Makale bulunamadı");
        const json = (await r.json()) as Article;
        setData(json);
      })
      .catch((e) => {
        if (e.name !== "AbortError") setError(e);
      });
    return () => ac.abort();
  }, [slug, initial]);

  return { data, error, isLoading: !error && !data };
}
