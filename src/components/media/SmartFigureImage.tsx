"use client";

import Image from "next/image";
import React from "react";
import clsx from "clsx";

type Props = {
  src: string;
  alt: string;
  /** Dış sarmalayıcıya boyut/yerleşim veren class’lar */
  className?: string;
  /** Alt gradient’i kapatmak istersen false yapabilirsin */
  withBottomGradient?: boolean;
};

export default function SmartFigureImage({
  src,
  alt,
  className,
  withBottomGradient = true,
}: Props) {
  return (
    <div className={clsx("relative overflow-hidden rounded-xl", className)}>
      {/* Arka plan: blur + cover */}
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover blur-[2px] scale-105"
        aria-hidden
      />

      {/* Ön plan: net görsel */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-contain object-center"
        priority={false}
      />

      {withBottomGradient && (
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
      )}
    </div>
  );
}
