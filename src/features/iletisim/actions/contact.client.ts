// src/features/iletisim/actions/contact.client.ts
"use client";

import type { ContactInput } from "@/lib/validation/contact";

export type ApiError = {
  errors?: Record<string, { _errors?: string[] }>;
  message?: string;
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL!;

if (!API_BASE) {
  console.warn(
    "NEXT_PUBLIC_API_BASE_URL bulunamadı. .env.local dosyanızı kontrol edin."
  );
}

export async function postContactClient(data: ContactInput) {
  try {
    const res = await fetch(`${API_BASE}/iletisim`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      let err: ApiError | undefined;
      try {
        err = await res.json();
      } catch {}
      return { ok: false as const, error: err };
    }

    const json = await res.json();
    return { ok: true as const, data: json };
  } catch {
    // ağ hatası vb.
    return {
      ok: false as const,
      error: { message: "Sunucuya bağlanılamadı. Lütfen tekrar deneyin." },
    };
  }
}

export function pickFirstZodError(e?: ApiError) {
  return (
    e?.errors?.name?._errors?.[0] ??
    e?.errors?.email?._errors?.[0] ??
    e?.errors?.phone?._errors?.[0] ??
    e?.errors?.title?._errors?.[0] ??
    e?.errors?.content?._errors?.[0] ??
    e?.message ??
    "Mesaj gönderilemedi."
  );
}
