"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Props = {
  id: string;
  title: string;
  youtubeId: string;
  createdAt: string;
  priority?: boolean;
  coverUrl?: string;
  coverBlurDataUrl?: string;
  category?: {
    id: string;
    name: string;
  };
};

function formatTR(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

export default function VideoCard({
  title,
  youtubeId,
  createdAt,
  priority = false,
  coverUrl,
  coverBlurDataUrl,
  category,
}: Props) {
  const [open, setOpen] = useState(false);

  const YT = useMemo(
    () => ({
      maxres: `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`,
      sd: `https://i.ytimg.com/vi/${youtubeId}/sddefault.jpg`,
      hq: `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`,
    }),
    [youtubeId]
  );

  // 🚩 sadece gerçekten panelden gelen kapakları kullan
  const hasRealCover =
    !!coverUrl && !!coverBlurDataUrl && coverUrl.trim().length > 0;

  // gerçek kapak yoksa hiç Cloudinary’ye gitme → direkt YouTube’a başla
  const [src, setSrc] = useState<string>(hasRealCover ? coverUrl! : YT.maxres);

  // fallback zinciri sadece "hasRealCover" old. durumda Cloudinary patlarsa işe yarar
  const [triedMaxres, setTriedMaxres] = useState(false);
  const [triedSd, setTriedSd] = useState(false);

  function handleThumbError() {
    // kapaklıydı ama 404 geldi → YouTube'a dön
    if (hasRealCover) {
      // ilk hatada direkt YouTube maxres'e geçiyoruz
      setSrc(YT.maxres);
      return;
    }

    // kapaksızdı, YouTube da 404 verdi → diğerlerine geç
    if (!triedMaxres) {
      setTriedMaxres(true);
      setSrc(YT.sd);
      return;
    }
    if (!triedSd) {
      setTriedSd(true);
      setSrc(YT.hq);
      return;
    }
  }

  const sizes = "(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 640px";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Card className="w-full overflow-hidden rounded-2xl p-0 transition hover:shadow-lg hover:bg-slate-50">
        <DialogTrigger asChild>
          <div
            className="relative w-full aspect-video rounded-t-2xl overflow-hidden cursor-pointer"
            role="button"
            aria-label={`Videoyu aç: ${title}`}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setOpen(true);
            }}
          >
            <Image
              src={src}
              alt={title}
              fill
              className="object-cover"
              onError={handleThumbError}
              priority={priority}
              fetchPriority={priority ? "high" : undefined}
              sizes={sizes}
              quality={72}
              // sadece gerçekten blur geldiyse blur kullan
              placeholder={hasRealCover ? "blur" : "empty"}
              blurDataURL={hasRealCover ? coverBlurDataUrl : undefined}
            />
            <div className="absolute inset-0 grid place-items-center">
              <div className="w-12 h-12 rounded-full bg-red-600/90 text-white grid place-items-center shadow-md">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </DialogTrigger>

        <CardHeader className="pt-4 pb-2 px-4 space-y-2">
          <CardTitle className="text-lg sm:text-xl truncate" title={title}>
            {title}
          </CardTitle>
          {/* 👇 İSTEDİĞİN: dialog açıldığında da kartta da badge gözüksün */}
          {category?.name ? (
            <Badge variant="category" className="w-fit">
              {category.name}
            </Badge>
          ) : null}
        </CardHeader>

        <CardContent className="px-4 pb-4 space-y-3">
          <p className="text-xs text-muted-foreground">{formatTR(createdAt)}</p>
          <Button variant="default" size="sm" className="w-full">
            Videoyu İzlemek İçin Tıklayın
          </Button>
        </CardContent>
      </Card>

      <DialogContent className="w-full max-w-sm sm:max-w-2xl md:max-w-3xl p-0 rounded-lg">
        <div className="p-4 sm:p-6 md:p-8">
          <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden bg-black">
            {open && (
              <iframe
                key={youtubeId}
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="eager"
              />
            )}
          </div>

          <div className="pt-4 sm:pt-6 space-y-2">
            <DialogTitle className="text-base sm:text-lg md:text-xl font-semibold">
              {title}
            </DialogTitle>
            {category?.name ? (
              <Badge variant="category" className="w-fit">
                {category.name}
              </Badge>
            ) : null}
            <DialogDescription className="text-sm text-muted-foreground">
              {formatTR(createdAt)}
            </DialogDescription>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
