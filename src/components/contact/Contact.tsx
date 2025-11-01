"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Iletisim() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Ekran genişliği takibi (mobil algısı)
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 831px)");
    const set = () => setIsMobile(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  useEffect(() => {
    // Anasayfa dışındaysa her zaman görünür
    if (pathname !== "/") {
      setVisible(true);
      return;
    }

    // Anasayfa + masaüstü (>=768): her zaman görünür
    if (!isMobile) {
      setVisible(true);
      return;
    }

    // Anasayfa + mobil: hero görünürken gizle
    const hero = document.getElementById("hero-slider");
    if (!hero) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        const heroOnScreen =
          entry.isIntersecting && entry.intersectionRatio > 0.1;
        setVisible(!heroOnScreen);
      },
      { threshold: [0, 0.1, 0.2] }
    );

    io.observe(hero);
    return () => io.disconnect();
  }, [pathname, isMobile]);

  return (
    <Button
      asChild
      className={[
        // konum
        "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-16 z-40",
        // boyut ve görünüm
        "rounded-full h-12 px-5 gap-2 shadow-lg hover:shadow-xl",
        "focus-visible:ring-2 focus-visible:ring-white/60",
        "bg-blue-900 text-white font-semibold",
        "transition-all duration-300 ease-out",
        "hover:bg-blue-600 hover:scale-105",
        // görünürlük animasyonu
        visible
          ? "opacity-100 pointer-events-auto translate-y-0"
          : "opacity-0 pointer-events-none translate-y-2",
        visible ? "animate-bounce [animation-duration:2.5s]" : "",
      ].join(" ")}
    >
      <Link
        href="tel:+905340181933"
        aria-label="Hemen iletişime geçin"
        prefetch={false}
      >
        <Phone className="size-5" aria-hidden="true" />
        <span className="whitespace-nowrap">İletişime Geçin</span>
      </Link>
    </Button>
  );
}
