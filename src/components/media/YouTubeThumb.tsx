// src/components/media/YouTubeThumb.tsx
"use client";

import { useMemo, useState } from "react";
import Image, { ImageProps } from "next/image";
import clsx from "clsx";

type Props = {
  youtubeId: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  // opsiyonel dış kapaktan gelir
  coverUrl?: string;
  blurDataURL?: string;
};

export default function YouTubeThumb({
  youtubeId,
  alt,
  className,
  sizes = "(min-width:1024px) 224px, (min-width:768px) 208px, (min-width:640px) 176px, 128px",
  priority = false,
  quality = 60,
  coverUrl,
  blurDataURL,
}: Props) {
  const YT = useMemo(
    () => ({
      maxres: `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`,
      sd: `https://i.ytimg.com/vi/${youtubeId}/sddefault.jpg`,
      hq: `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`,
    }),
    [youtubeId]
  );

  const [src, setSrc] = useState<string>(coverUrl ?? YT.maxres);

  const handleError: ImageProps["onError"] = () => {
    if (coverUrl) return; // dış kapak verildiyse fallback yapma
    if (src === YT.maxres) setSrc(YT.sd);
    else if (src === YT.sd) setSrc(YT.hq);
  };

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={clsx("object-cover", className)}
      sizes={sizes}
      priority={priority}
      fetchPriority={priority ? "high" : undefined}
      quality={quality}
      placeholder={blurDataURL ? "blur" : "empty"}
      blurDataURL={blurDataURL}
      decoding="async"
      loading={priority ? undefined : "lazy"}
      onError={handleError}
    />
  );
}
