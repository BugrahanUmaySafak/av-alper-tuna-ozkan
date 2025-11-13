// ============================================================================
// Galeri – a11y iyileştirmeleri (aria-label)
// ============================================================================

"use client";

import { useState, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type GalleryItem = {
  title: string;
  description: string;
  image: string;
  layout?: "square" | "wide" | "tall";
};

export default function CityGallery({ items }: { items: GalleryItem[] }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const openAt = useCallback((index: number) => {
    setCurrent(index);
    setOpen(true);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const sizeClass = (layout?: string) => {
    switch (layout) {
      case "wide":
        return "aspect-[4/3]";
      case "tall":
        return "aspect-[3/4]";
      default:
        return "aspect-square";
    }
  };

  return (
    <>
      <p className="text-sm text-gray-600 mb-4">
        Görseli büyütmek için kartlara tıklayın.
      </p>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => (
          <button
            key={item.title + idx}
            type="button"
            onClick={() => openAt(idx)}
            className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition ${sizeClass(
              item.layout
            )}`}
            aria-label={`${item.title} görselini aç`}
          >
            <span className="sr-only">{item.title}</span>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition">
              <div className="absolute inset-x-0 bottom-0 p-3 text-left text-white">
                <p className="text-sm font-semibold">{item.title}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <div className="relative bg-black">
            <Image
              src={items[current].image}
              alt={items[current].title}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[70vh] object-contain bg-black"
              priority
            />
            <button
              type="button"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-900 hover:bg-white"
              onClick={prev}
              aria-label="Önceki görsel"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-900 hover:bg-white"
              onClick={next}
              aria-label="Sonraki görsel"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="absolute right-3 top-3 rounded-full bg-white/80 p-2 text-gray-900 hover:bg-white"
              onClick={() => setOpen(false)}
              aria-label="Kapat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4 space-y-1">
            <DialogTitle className="text-lg font-semibold">
              {items[current].title}
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-600">
              {items[current].description}
            </DialogDescription>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
