"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/container/Container";
import { slides as SLIDES_DATA } from "@/data/slide";

const SLIDE_DURATION = 5000;
const SWIPE_THRESHOLD_RATIO = 0.15;
const HOLD_DELAY_MS = 150;
const TAP_SLOP_PX = 6;

export default function HeroSlider() {
  const slidesLen = SLIDES_DATA.length;
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const indexRef = useRef(index);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const holdTimer = useRef<number | null>(null);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const rafId = useRef<number | null>(null);
  const last = useRef(0);
  const acc = useRef(0);

  const tick = useCallback(
    (ts: number) => {
      if (!last.current) last.current = ts;
      const delta = ts - last.current;
      last.current = ts;

      if (!pausedRef.current && !draggingRef.current) {
        acc.current += delta;
        const frac = Math.min(acc.current / SLIDE_DURATION, 1);
        if (progressRef.current)
          progressRef.current.style.width = `${frac * 100}%`;

        if (acc.current >= SLIDE_DURATION) {
          acc.current = 0;
          if (progressRef.current) progressRef.current.style.width = "0%";
          if (indexRef.current + 1 >= slidesLen) {
            setIndex(0);
          } else {
            setIndex(indexRef.current + 1);
          }
        }
      }

      rafId.current = requestAnimationFrame(tick);
    },
    [slidesLen]
  );

  useEffect(() => {
    last.current = 0;
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(tick);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [tick]);

  const drag = useRef({
    active: false,
    startX: 0,
    lastX: 0,
    width: 1,
    startedDragging: false,
  });

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const resize = () => (drag.current.width = el.clientWidth || 1);
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const clearHold = () => {
    if (holdTimer.current !== null) {
      clearTimeout(holdTimer.current);
      holdTimer.current = null;
    }
  };

  const onPointerDown = (e: React.PointerEvent) => {
    drag.current.active = true;
    drag.current.startedDragging = false;
    drag.current.startX = e.clientX;
    drag.current.lastX = e.clientX;

    clearHold();
    holdTimer.current = window.setTimeout(() => {
      if (!drag.current.startedDragging) pausedRef.current = true;
    }, HOLD_DELAY_MS);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    drag.current.lastX = e.clientX;

    if (!drag.current.startedDragging && Math.abs(dx) >= TAP_SLOP_PX) {
      drag.current.startedDragging = true;
      clearHold();
      pausedRef.current = true;
      draggingRef.current = true;
      trackRef.current?.setPointerCapture(e.pointerId);
    }

    if (drag.current.startedDragging) {
      const offsetPercent = (dx / drag.current.width) * 100;
      setOffset(offsetPercent);
    }
  };

  const finishInteraction = (e?: React.PointerEvent) => {
    if (!drag.current.active) return;

    if (e?.pointerId !== undefined) {
      trackRef.current?.releasePointerCapture(e.pointerId);
    }

    const dx = drag.current.lastX - drag.current.startX;
    const threshold = drag.current.width * SWIPE_THRESHOLD_RATIO;

    if (drag.current.startedDragging) {
      if (dx <= -threshold) {
        if (index < slidesLen - 1) {
          setIndex((prev) => prev + 1);
        } else {
          setIndex(0);
        }
      } else if (dx >= threshold && index > 0) {
        setIndex((prev) => prev - 1);
      }
      acc.current = 0;
      if (progressRef.current) progressRef.current.style.width = "0%";
    }

    drag.current.active = false;
    drag.current.startedDragging = false;
    draggingRef.current = false;
    setOffset(0);
    pausedRef.current = false;
    clearHold();
  };

  const jumpTo = (i: number) => {
    setIndex(i);
    acc.current = 0;
    if (progressRef.current) progressRef.current.style.width = "0%";
    pausedRef.current = false;
  };

  const transform = `translateX(${-index * 100 + offset}%)`;

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel as EventListener);
  }, []);

  return (
    <section
      className="relative w-full h-[calc(100dvh-72px)] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
      aria-label="Ana görsel slayt"
    >
      <div className="w-full h-full select-none">
        <div
          ref={trackRef}
          className={`flex h-full will-change-transform ${
            offset !== 0
              ? "transition-none"
              : "transition-transform duration-700 ease-in-out"
          }`}
          style={{
            transform,
            touchAction: "pan-y",
            backfaceVisibility: "hidden",
            overscrollBehaviorX: "contain",
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={finishInteraction}
          onPointerCancel={finishInteraction}
          onPointerLeave={finishInteraction}
        >
          {SLIDES_DATA.map((slide, i) => {
            const imgSrc = isMobile
              ? slide.mobileImage || slide.image
              : slide.image;
            return (
              <div
                key={i}
                className="relative w-full h-full flex-[0_0_100%]"
                aria-hidden={i !== index}
              >
                <Image
                  src={imgSrc}
                  alt={slide.title}
                  fill
                  sizes="100vw"
                  priority={i === 0}
                  loading={i === 0 ? "eager" : "lazy"}
                  draggable={false}
                  className="object-cover sm:object-top object-center select-none pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 flex justify-start">
                  <Container className="h-full flex items-start sm:items-center pt-8 sm:pt-0">
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
                        {slide.features.map((f, idx) => (
                          <Link key={idx} href="/faaliyet-alanlarim">
                            <Badge
                              variant="glass"
                              size="sm"
                              className="cursor-pointer"
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
                            className="bg-blue-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 ease-out hover:bg-blue-600 hover:scale-105 focus:ring-2 focus:ring-blue-400 focus:outline-none"
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

      <div className="absolute z-20 left-4 bottom-4 md:left-1/2 md:bottom-8 md:-translate-x-1/2">
        <div className="flex items-center gap-4 rounded-2xl bg-black/50 backdrop-blur px-4 py-2 border border-white/10 shadow">
          {/* ... */}
          <div className="flex items-center gap-2">
            {SLIDES_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => jumpTo(i)}
                aria-label={`${i + 1}. slayda git`}
                aria-current={i === index ? "true" : "false"}
                className={`
        group relative rounded-full transition
        focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/80

        size-3
        ${i === index ? "bg-yellow-600" : "bg-white/40 hover:bg-white/60"}

        md:size-auto md:w-10 md:h-10 md:bg-transparent md:p-2 md:-m-2
      `}
              >
                <span
                  aria-hidden
                  className={`
          hidden md:block
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          rounded-full transition
          ${
            i === index
              ? "size-3.5 bg-yellow-500 shadow"
              : "size-2.5 bg-white/60 group-hover:bg-white/80"
          }
        `}
                />
              </button>
            ))}
          </div>
          {/* ... */}

          <span className="hidden md:block w-px h-5 bg-white/20" />
          <div className="hidden md:flex w-36 h-2 rounded-full bg-white/10 overflow-hidden">
            <span
              ref={progressRef}
              className="h-full bg-white/60"
              style={{ width: "0%", transition: "width 80ms linear" }}
            />
          </div>

          <span className="md:hidden text-white/90 text-sm tabular-nums">
            {index + 1} / {slidesLen}
          </span>
        </div>
      </div>
    </section>
  );
}
