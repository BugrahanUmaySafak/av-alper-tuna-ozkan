"use client";

import { useEffect, useState, useCallback } from "react";
import type { Video } from "../types";

const BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

export function useVideos(initial: Video[] = []) {
  const [data, setData] = useState<Video[]>(initial);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const refresh = useCallback(async () => {
    if (!BASE) return;
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE}/videolarim`, { cache: "no-store" });
      if (!res.ok) throw new Error("Fetch failed");
      const json = await res.json();
      setData(Array.isArray(json.items) ? json.items : []);
      setError(null);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {}, [refresh]);

  return { data, isLoading, error, refresh };
}
