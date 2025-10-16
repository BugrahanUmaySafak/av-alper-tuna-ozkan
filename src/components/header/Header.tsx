"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";

const MenuPanel = dynamic(() => import("./MenuPanel"), { ssr: false });

export default function Header() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const items = [
    { name: "Hakkımda", href: "/hakkimda" },
    { name: "Faaliyet Alanlarım", href: "/faaliyet-alanlarim" },
    { name: "İletişim", href: "/iletisim" },
    { name: "Makalelerim", href: "/makalelerim" },
    { name: "Videolarım", href: "/videolarim" },
    { name: "+90 534 018 1933", href: "tel:05340181933" },
  ] as const;

  const navOnly = items.slice(0, -1);
  const phone = items[items.length - 1];

  const [tabletOpen, setTabletOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setTabletOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onResize = () => {
      setTabletOpen(false);
      setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setTabletOpen(false);
        setMobileOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setTabletOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const getLinkClasses = (
    href: string,
    { isPhone = false }: { isPhone?: boolean } = {}
  ) => {
    const isActive = pathname === href;
    const base = "transition-colors text-base font-medium";

    if (isPhone) {
      return `${base} ${
        isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
      } font-semibold`;
    }

    return `${base} ${
      isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
    }`;
  };

  return (
    <div ref={containerRef} className="sticky top-0 z-50">
      <header className="shadow-lg relative">
        {/* DESKTOP + TABLET */}
        <div className="flex items-stretch max-[832px]:hidden">
          {/* SOL BLOK (Logo) */}
          <div className="bg-blue-900 text-white py-3 px-6 lg:px-16 flex items-center space-x-4 min-h-[72px]">
            <Link
              href="/"
              prefetch={false}
              className="group inline-flex items-center gap-4 hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
            >
              {/* LOGO: büyük, uyarısız, taşma yok */}
              <div className="relative w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] lg:w-[48px] lg:h-[48px] shrink-0 overflow-hidden">
                <Image
                  src="/logo/logo.svg"
                  alt="Logo"
                  fill
                  priority
                  sizes="(min-width:1024px) 48px, (min-width:640px) 44px, 40px"
                  className="object-contain block"
                />
              </div>

              <span className="block">
                <span className="block text-lg text-white font-extrabold">
                  AV. ALPER TUNA ÖZKAN
                </span>
                <span className="block text-[12px] sm:text-xs text-blue-100">
                  H U K U K &nbsp; &amp; &nbsp; D A N I Ş M A N L I K
                </span>
              </span>
            </Link>
          </div>

          {/* SAĞ BLOK (Nav / Tablet bar) */}
          <div className="bg-[#fdf3e7] flex-1 px-6 lg:px-16 py-3 flex items-center min-h-[72px]">
            {/* Desktop NAV (≥1180px) */}
            <nav className="hidden min-[1180px]:flex w-full items-center px-0">
              <ul className="flex w-full items-center justify-between">
                {items.map((item) => {
                  const isActive =
                    pathname === item.href && !item.href.startsWith("tel:");
                  return (
                    <li key={item.name} className="whitespace-nowrap">
                      <Link
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={`${getLinkClasses(item.href, {
                          isPhone: item.href.startsWith("tel:"),
                        })} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Tablet bar (833–1179px) */}
            <div className="hidden min-[833px]:flex max-[1180px]:flex min-[1180px]:hidden items-center justify-between w-full">
              <Link
                href={phone.href}
                className={`${getLinkClasses(phone.href, {
                  isPhone: true,
                })} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2`}
              >
                {phone.name}
              </Link>

              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 bg-transparent"
                aria-label="Menüyü aç"
                aria-expanded={tabletOpen}
                aria-controls="tablet-menu"
                onClick={() => {
                  setMobileOpen(false);
                  setTabletOpen((v) => !v);
                }}
              >
                <Menu className="h-4 w-4" />
                Menü
              </Button>
            </div>
          </div>
        </div>

        {/* MOBILE (≤832px) */}
        <div className="hidden max-[832px]:flex items-center justify-between bg-blue-900 text-white px-4 h-[73.3px]">
          <Link
            href="/"
            className="flex items-center gap-3 min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
          >
            {/* Mobil logo: biraz büyük */}
            <div className="relative w-[36px] h-[36px] overflow-hidden">
              <Image
                src="/logo/logo.svg"
                alt="Logo"
                fill
                sizes="36px"
                className="object-contain block"
              />
            </div>
          </Link>

          <Link
            href="/"
            className="flex-1 text-center leading-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
          >
            <h1 className="text-sm font-extrabold">AV. ALPER TUNA ÖZKAN</h1>
            <p className="text-[12px] text-blue-100">
              H U K U K &nbsp; &amp; &nbsp; D A N I Ş M A N L I K
            </p>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Menüyü aç"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="text-white bg-transparent hover:bg-white/10 focus-visible:ring-0 focus-visible:ring-offset-0"
            onClick={() => {
              setTabletOpen(false);
              setMobileOpen((v) => !v);
            }}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* TABLET DROPDOWN */}
      <MenuPanel
        open={tabletOpen}
        id="tablet-menu"
        className="absolute top-full left-0 right-0 bg-[#fdf3e7] shadow-lg border-t z-40 overflow-hidden min-[833px]:block max-[1180px]:block min-[1180px]:hidden"
      >
        <nav className="py-2 text-center">
          {navOnly.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <div key={item.name}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`inline-block py-2 ${getLinkClasses(
                    item.href
                  )} transition-colors duration-200`}
                  onClick={() => setTabletOpen(false)}
                >
                  {item.name}
                </Link>
                {index < navOnly.length - 1 && <Separator className="my-1" />}
              </div>
            );
          })}
        </nav>
      </MenuPanel>

      {/* MOBILE DROPDOWN */}
      <MenuPanel
        open={mobileOpen}
        id="mobile-menu"
        className="absolute top-full left-0 right-0 bg-[#fdf3e7] shadow-lg border-t z-40 overflow-hidden max-[832px]:block"
      >
        <nav className="py-2 text-center">
          {items.map((item, index) => {
            const isActive =
              pathname === item.href && !item.href.startsWith("tel:");
            return (
              <div key={item.name}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`inline-block py-2 ${getLinkClasses(item.href, {
                    isPhone: item.href.startsWith("tel:"),
                  })} transition-colors duration-200`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
                {index < items.length - 1 && <Separator className="my-1" />}
              </div>
            );
          })}
        </nav>
      </MenuPanel>
    </div>
  );
}
