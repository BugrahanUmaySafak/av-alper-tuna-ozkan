import Image from "next/image";
import React from "react";
import clsx from "clsx";

type Props = {
  src: string; // asıl görsel (Cloudinary tam URL)
  tinySrc?: string; // Cloudinary tiny (q_20,w_96,e_blur vs.) – arka plan
  alt: string;
  className?: string;
  withBottomGradient?: boolean;
  sizes?: string;
  priority?: boolean;
};

export default function SmartFigureImage({
  src,
  tinySrc,
  alt,
  className,
  withBottomGradient = true,
  priority = false,
  // Kart kullanımına uygun, küçük ama esnek default sizes
  sizes = "(min-width:1024px) 224px, (min-width:768px) 208px, (min-width:640px) 176px, 128px",
}: Props) {
  const bgSrc = tinySrc || src;

  return (
    <div className={clsx("relative overflow-hidden rounded-xl", className)}>
      {/* Arka plan (bulanık) — tinySrc çok küçük byte ile gelir */}
      <Image
        src={bgSrc}
        alt=""
        aria-hidden
        fill
        sizes={sizes}
        className="object-cover blur-[2px] scale-105 will-change-transform"
        decoding="async"
        draggable={false}
        loading={priority ? undefined : "lazy"}
        priority={priority}
      />

      {/* Ön plan (net görsel) */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-contain object-center"
        decoding="async"
        draggable={false}
        loading={priority ? undefined : "lazy"}
        priority={priority}
      />

      {withBottomGradient && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background/40 to-transparent" />
      )}
    </div>
  );
}
