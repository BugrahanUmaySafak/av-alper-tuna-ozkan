"use client";

import Image from "next/image";
import React from "react";
import clsx from "clsx";

type Props = {
  src: string;
  alt: string;
  className?: string;
  withBottomGradient?: boolean;
  sizes?: string;
  priority?: boolean;
};

export default function SmartFigureImage({
  src,
  alt,
  className,
  withBottomGradient = true,
  priority = false,
  sizes = `(min-width: 1024px) calc(100vw - 8rem),
           (min-width: 640px) calc(100vw - 3rem),
           calc(100vw - 2rem)`,
}: Props) {
  return (
    <div className={clsx("relative overflow-hidden rounded-xl", className)}>
      <Image
        src={src}
        alt=""
        aria-hidden
        fill
        sizes={sizes}
        className="object-cover blur-[2px] scale-105 will-change-transform"
        decoding="async"
        draggable={false}
        priority={priority}
      />

      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-contain object-center"
        decoding="async"
        draggable={false}
        priority={priority}
      />

      {withBottomGradient && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background/40 to-transparent" />
      )}
    </div>
  );
}
