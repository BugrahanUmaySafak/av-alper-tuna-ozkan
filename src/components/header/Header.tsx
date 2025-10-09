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

  // route değişince ve resize olduğunda panelleri kapat
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

  // dış tık & ESC ile kapat
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

  /**
   * Footer’daki stilleri header linklerine uygular.
   * - Aktif: text-blue-600 + alt çizgi
   * - Pasif: text-gray-700 + hover:text-blue-600
   * Telefon linki için alt çizgi uygulanmaz.
   */
  const getLinkClasses = (
    href: string,
    { isPhone = false }: { isPhone?: boolean } = {}
  ) => {
    const isActive = pathname === href;

    if (isPhone) {
      // Telefonu sade tutuyoruz; alt çizgi yok.
      return `transition-colors text-sm font-semibold ${
        isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
      }`;
    }

    return `transition-colors text-sm font-medium ${
      isActive
        ? "text-blue-600 border-b-2 border-blue-600 pb-1"
        : "text-gray-700 hover:text-blue-600"
    }`;
  };

  return (
    // Sticky kapsayıcı: header + dropdownlar birlikte yapışır
    <div ref={containerRef} className="sticky top-0 z-50">
      <header className="shadow-lg relative">
        {/* DESKTOP (≥ 833px) */}
        <div className="flex max-[832px]:hidden">
          {/* Sol mavi blok (logo + isim) */}
          <div className="bg-blue-900 text-white py-3 px-16 flex items-center space-x-4">
            <Link
              href="/"
              prefetch={false}
              className="group inline-flex items-center gap-4 hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
            >
              <Image
                src="/logo/logo.svg"
                alt="Logo"
                width={30}
                height={30}
                priority
                className="shrink-0"
              />
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

          {/* Sağ açık renk blok (nav) */}
          <div className="bg-[#fdf3e7] flex-1 px-16 flex items-center">
            {/* Geniş ekran nav (≥1180px) */}
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

            {/* Tablet bar (833px–1179px) */}
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

        {/* MOBILE (≤ 832px) */}
        <div className="hidden max-[832px]:flex items-center justify-between bg-blue-900 text-white px-4 h-[73.3px]">
          {/* Sol: logo */}
          <Link
            href="/"
            className="flex items-center gap-3 min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
          >
            <Image src="/logo/logo.svg" alt="Logo" width={28} height={28} />
          </Link>

          {/* Orta: isim */}
          <Link
            href="/"
            className="flex-1 text-center leading-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
          >
            <h1 className="text-sm font-extrabold">AV. ALPER TUNA ÖZKAN</h1>
            <p className="text-[12px] text-blue-100">
              H U K U K &nbsp; &amp; &nbsp; D A N I Ş M A N L I K
            </p>
          </Link>

          {/* Sağ: menü butonu */}
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
        <nav className="py-2">
          {navOnly.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <div key={item.name}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`block text-center py-2 px-4 ${getLinkClasses(
                    item.href
                  )} hover:bg-gray-50 transition-colors duration-200`}
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
        <nav className="py-2">
          {items.map((item, index) => {
            const isActive =
              pathname === item.href && !item.href.startsWith("tel:");
            return (
              <div key={item.name}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`block text-center py-2 px-4 ${getLinkClasses(
                    item.href,
                    { isPhone: item.href.startsWith("tel:") }
                  )} hover:bg-gray-50 transition-colors duration-200`}
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
