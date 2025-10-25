"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="min-h-dvh grid place-items-center bg-[#fdf8f2] px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-red-600">Bir hata oluştu</h1>
        <p className="mt-2 text-gray-700">
          Lütfen tekrar deneyin veya daha sonra kontrol edin.
        </p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <Button onClick={reset}>Yeniden Dene</Button>
          <Button asChild variant="outline">
            <Link href="/">Ana sayfa</Link>
          </Button>
        </div>
        {error?.digest && (
          <p className="mt-3 text-xs text-gray-500">
            Hata kodu: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
