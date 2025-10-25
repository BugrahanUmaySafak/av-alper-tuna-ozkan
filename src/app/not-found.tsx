import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-dvh grid place-items-center bg-[#fdf8f2] px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold text-blue-600">
          404 - Sayfa Bulunamadı
        </h1>
        <p className="mt-2 text-gray-700">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>

        <div className="mt-5 flex items-center justify-center gap-3">
          <Button asChild>
            <Link href="/">Ana sayfaya dön</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/iletisim">İletişime geç</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
