"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/Container";
import { slides as SLIDES_DATA } from "@/data/slide";

const SLIDE_DURATION = 6000;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(`(max-width:${breakpoint - 1}px)`);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    setIsMobile(mql.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [breakpoint]);
  return isMobile;
}

export default function HeroSlider() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile(768);

  const [isHovered, setHovered] = useState(false);
  const [isFocused, setFocused] = useState(false);
  const [inView, setInView] = useState(true);

  const sectionRef = useRef<HTMLElement | null>(null);

  const autoplayRef = useRef(
    Autoplay({
      delay: SLIDE_DURATION,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
      rootNode: (emblaRoot) => sectionRef.current ?? emblaRoot,
    })
  );

  const plugins = useMemo(
    () => (!prefersReducedMotion && inView ? [autoplayRef.current] : []),
    [prefersReducedMotion, inView]
  );

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false, dragFree: false },
    plugins
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const isIntersecting = entries[0]?.isIntersecting ?? true;
        setInView(isIntersecting);
        if (
          isIntersecting &&
          !prefersReducedMotion &&
          !isHovered &&
          !isFocused
        ) {
          autoplayRef.current?.play?.();
        } else {
          autoplayRef.current?.stop?.();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [prefersReducedMotion, isHovered, isFocused]);

  useEffect(() => {
    const onVis = () => {
      if (document.hidden) {
        autoplayRef.current?.stop?.();
      } else if (inView && !prefersReducedMotion && !isHovered && !isFocused) {
        autoplayRef.current?.play?.();
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [inView, prefersReducedMotion, isHovered, isFocused]);

  const handleMouseEnter = useCallback(() => {
    setHovered(true);
    autoplayRef.current?.stop?.();
  }, []);
  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    if (inView && !prefersReducedMotion && !isFocused) {
      autoplayRef.current?.play?.();
    }
  }, [inView, prefersReducedMotion, isFocused]);
  const handleFocusCapture = useCallback(() => {
    setFocused(true);
    autoplayRef.current?.stop?.();
  }, []);
  const handleBlurCapture = useCallback(() => {
    setFocused(false);
    if (inView && !prefersReducedMotion && !isHovered) {
      autoplayRef.current?.play?.();
    }
  }, [inView, prefersReducedMotion, isHovered]);

  return (
    <section
      ref={sectionRef}
      className="
        relative w-full
        h-[calc(100dvh-73.3px)]
        overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100
      "
      aria-label="Ana görsel slayt"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocusCapture={handleFocusCapture}
      onBlurCapture={handleBlurCapture}
    >
      <div className="embla w-full h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {SLIDES_DATA.map((slide, i) => {
            const imgSrc = isMobile
              ? slide.mobileImage || slide.image
              : slide.image;

            return (
              <div
                key={i}
                className="embla__slide relative w-full h-full flex-[0_0_100%]"
              >
                <Image
                  src={imgSrc}
                  alt={`${slide.title} görseli`}
                  fill
                  priority={i === 0}
                  loading={i === 0 ? "eager" : undefined}
                  fetchPriority={i === 0 ? "high" : "auto"}
                  sizes="100vw"
                  className="object-cover sm:object-top object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute inset-0 flex justify-start">
                  <Container className="h-full flex items-start sm:items-center pt-24 sm:pt-0">
                    <div className="space-y-8 max-w-4xl">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                              {slide.title}
                            </span>
                          </h1>
                          <span
                            aria-hidden
                            className="ml-6 hidden md:inline-block w-[3px] md:h-12 lg:h-16 bg-gradient-to-b from-transparent via-yellow-600 to-transparent rounded"
                          />
                        </div>
                        <Separator className="w-24 h-[3px] bg-yellow-600" />
                      </div>

                      <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl font-light">
                        {slide.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {slide.features.map((f: string, idx: number) => (
                          <Link
                            key={idx}
                            href="/faaliyet-alanlarim"
                            aria-label={`${f} - detayları gör`}
                          >
                            <Badge
                              variant="glass"
                              className="cursor-pointer"
                              size="sm"
                            >
                              {f}
                            </Badge>
                          </Link>
                        ))}
                      </div>

                      <div className="mt-6">
                        <Link href="/faaliyet-alanlarim">
                          <Button
                            size="lg"
                            className="
                              bg-blue-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg
                              transition-all duration-300 ease-out
                              hover:bg-blue-600 hover:scale-105 hover:shadow-xl
                              focus:ring-2 focus:ring-blue-400 focus:outline-none
                            "
                          >
                            Detaylı Bilgi
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Container>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
