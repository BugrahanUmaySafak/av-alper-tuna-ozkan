"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Toaster as Sonner, type ToasterProps } from "sonner";

function measureHeader(): number {
  // sticky header sarmalayıcısı: <div class="sticky top-0 z-50"> … </div>
  const el = document.querySelector(
    "div.sticky.top-0.z-50"
  ) as HTMLElement | null;
  return el ? Math.ceil(el.getBoundingClientRect().height) : 0;
}

const Toaster = ({ position = "top-center", ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();
  const pathname = usePathname(); // rota değişimlerinde yeniden ölç
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    let ro: ResizeObserver | null = null;

    const update = () => setOffset(measureHeader());
    update();

    const el = document.querySelector(
      "div.sticky.top-0.z-50"
    ) as HTMLElement | null;
    if (el && "ResizeObserver" in window) {
      ro = new ResizeObserver(update);
      ro.observe(el);
    }

    const onResize = () => update();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ro?.disconnect();
    };
  }, [pathname]);

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      position={position}
      offset={offset ? `${offset + 8}px` : 8} // header + 8px boşluk
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
