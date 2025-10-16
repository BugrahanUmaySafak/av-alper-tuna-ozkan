"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "../container/Container";
import { Linkedin } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Hakkımda", href: "/hakkimda" },
    { name: "Faaliyet Alanlarım", href: "/faaliyet-alanlarim" },
    { name: "İletişim", href: "/iletisim" },
    { name: "Makalelerim", href: "/makalelerim" },
    { name: "Videolarım", href: "/videolarim" },
  ] as const;

  return (
    <footer className="w-full min-h-[180px] md:min-h-[200px] pb-28 md:pb-32 border-t bg-[#fdf3e7] text-sm text-gray-500 overflow-x-clip">
      <Container className="py-6 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-x-4 gap-y-4">
        {/* Telif Bilgisi */}
        <p className="text-center sm:text-left text-gray-700 text-sm md:text-base">
          © 2025 Özkan Hukuk & Danışmanlık. Tüm hakları saklıdır.
        </p>

        {/* Navigasyon Menüsü */}
        <nav
          className="flex flex-wrap justify-center items-center gap-x-2 gap-y-2"
          aria-label="Alt menü"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <div key={link.href} className="flex items-center text-black">
                {/* Sol çizgi */}
                <span className="select-none">|</span>

                {/* Nav Link */}
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-2 transition-colors font-medium inline-flex text-sm text-gray-700 hover:text-blue-600 ${
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>

                {/* Sağ çizgi */}
                <span className="select-none">|</span>
              </div>
            );
          })}
        </nav>
      </Container>

      <div className="mt-6 px-4 w-full text-center text-xs sm:text-sm text-gray-600">
        <Link
          href="https://www.linkedin.com/in/bugrahanumaysafak/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 transition-colors hover:text-blue-700 group"
        >
          <span className="text-gray-800 font-medium group-hover:text-blue-700">
            Tasarım ve Geliştirme: Buğrahan Umay Şafak
          </span>
          <Linkedin
            size={16}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            aria-hidden="true"
          />
        </Link>
      </div>
    </footer>
  );
}
