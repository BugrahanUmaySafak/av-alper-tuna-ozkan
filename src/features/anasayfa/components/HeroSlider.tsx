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
const TIGHT_WIDTH_PX = 442;

export default function HeroSlider() {
  const slidesLen = SLIDES_DATA.length;
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [tightProgress, setTightProgress] = useState(false); // progress altta

  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const bottomProgressRef = useRef<HTMLSpanElement>(null);

  const indexRef = useRef(index);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const holdTimer = useRef<number | null>(null);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  // Ekran genişliği & "progress alta" modu
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 831px)");
    const apply = () => {
      setIsMobile(mq.matches);
      setTightProgress(window.innerWidth < TIGHT_WIDTH_PX);
    };
    apply();
    mq.addEventListener("change", apply);
    window.addEventListener("resize", apply);
    return () => {
      mq.removeEventListener("change", apply);
      window.removeEventListener("resize", apply);
    };
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

        // aktif bar’ı güncelle (üstteki ya da alttaki)
        const bar = tightProgress
          ? bottomProgressRef.current
          : progressRef.current;
        if (bar) bar.style.width = `${frac * 100}%`;

        if (acc.current >= SLIDE_DURATION) {
          acc.current = 0;
          if (bar) bar.style.width = "0%";
          setIndex((prev) => (prev + 1) % slidesLen);
        }
      }

      rafId.current = requestAnimationFrame(tick);
    },
    [slidesLen, tightProgress]
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
      e.preventDefault();
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
        setIndex((prev) => (prev < SLIDES_DATA.length - 1 ? prev + 1 : 0));
      } else if (dx >= threshold) {
        setIndex((prev) => (prev > 0 ? prev - 1 : slidesLen - 1));
      }
      acc.current = 0;

      // iki barı da sıfırla
      if (progressRef.current) progressRef.current.style.width = "0%";
      if (bottomProgressRef.current)
        bottomProgressRef.current.style.width = "0%";
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
    if (bottomProgressRef.current) bottomProgressRef.current.style.width = "0%";
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
      id="hero-slider"
      className="relative w-full h-[calc(100dvh-72px)] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 touch-pan-y [&_*]:touch-pan-y"
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
                  fetchPriority={i === 0 ? "high" : "auto"}
                  loading={i === 0 ? "eager" : "lazy"}
                  quality={i === 0 ? 55 : 60}
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
                          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
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
                      <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl font-light">
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

      {/* Üst kontrol grubu */}
      <div className="absolute inset-x-0 bottom-8 z-20">
        <Container>
          <div className="flex justify-center">
            <div className="flex items-center gap-4 rounded-2xl bg-black/50 backdrop-blur px-4 py-2 border border-white/10 shadow">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {SLIDES_DATA.map((_, i) => {
                  const active = i === index;
                  return (
                    <button
                      key={i}
                      onClick={() => jumpTo(i)}
                      aria-label={`${i + 1}. slayda git`}
                      aria-current={active ? "true" : "false"}
                      className={`
                        group relative inline-flex items-center justify-center
                        w-10 h-10 rounded-full transition
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/80
                        bg-transparent
                      `}
                    >
                      <span
                        aria-hidden
                        className={`
                          block rounded-full transition
                          ${
                            active
                              ? "size-3 bg-yellow-500 shadow"
                              : "size-2.5 bg-white/70 group-hover:bg-white"
                          }
                        `}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Ayraç & yan progress */}
              {!tightProgress && (
                <>
                  <span className="w-px h-5 bg-white/20" />
                  <div className="flex w-28 md:w-36 h-2 rounded-full bg-white/10 overflow-hidden">
                    <span
                      ref={progressRef}
                      className="h-full bg-white/70"
                      style={{ width: "0%", transition: "width 80ms linear" }}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </Container>
      </div>

      {tightProgress && (
        <div className="absolute inset-x-0 bottom-[16px] z-20">
          <Container>
            <div className="w-full max-w-md mx-auto h-2 rounded-full bg-black/30 backdrop-blur border border-white/10 overflow-hidden">
              <span
                ref={bottomProgressRef}
                className="block h-full bg-white/70"
                style={{ width: "0%", transition: "width 80ms linear" }}
              />
            </div>
          </Container>
        </div>
      )}
    </section>
  );
}
