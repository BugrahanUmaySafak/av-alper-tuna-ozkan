"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";

export default function Iletisim() {
  return (
    <Section className="relative">
      <Button
        asChild
        className={`
          fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-16
          z-40 rounded-full h-12 px-5 gap-2
          shadow-lg hover:shadow-xl
          animate-bounce [animation-duration:2.5s]
          focus-visible:ring-2 focus-visible:ring-white/60
          bg-blue-900 text-white font-semibold
          transition-all duration-300 ease-out
          hover:bg-blue-600 hover:scale-105
        `}
      >
        <Link href="tel:+905340181933" aria-label="Hemen iletişime geçin">
          <Phone className="size-5" aria-hidden="true" />
          <span className="whitespace-nowrap">İletişime Geçin</span>
        </Link>
      </Button>
    </Section>
  );
}
