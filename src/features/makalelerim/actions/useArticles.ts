"use client";

import { useEffect, useState } from "react";
import type { Article } from "../types";

export function useArticles(initial?: Article[]) {
  const [data, setData] = useState<Article[] | undefined>(initial);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (initial && initial.length) return;
    const ac = new AbortController();
    const API =
      process.env.API_BASE_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL;
    fetch(`${API}/makalelerim`, { signal: ac.signal })
      .then(async (r) => {
        if (!r.ok) throw new Error("Makaleler alınamadı");
        const json = await r.json();
        setData(json.items as Article[]);
      })
      .catch((e) => {
        if (e.name !== "AbortError") setError(e);
      });
    return () => ac.abort();
  }, [initial]);

  return { data, error, isLoading: !error && !data };
}
