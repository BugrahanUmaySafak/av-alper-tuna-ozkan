"use server";

import type { ContactInput } from "@/lib/validation/contact";

export async function postContactServer(data: ContactInput) {
  const API_BASE =
    process.env.API_BASE_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!API_BASE) {
    throw new Error(
      "API_BASE_URL veya NEXT_PUBLIC_API_BASE_URL tanımlı değil."
    );
  }

  const res = await fetch(`${API_BASE}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}));
    return { ok: false as const, error: errorBody };
  }

  const json = await res.json();
  return { ok: true as const, data: json };
}
