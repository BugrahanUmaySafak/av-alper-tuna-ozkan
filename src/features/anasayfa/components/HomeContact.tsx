"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Container from "@/components/container/Container";
import Section from "@/components/section/Section";

export default function HomeContact() {
  return (
    <Section>
      <Container className="mx-auto w-full max-w-none">
        <Card className="relative w-full rounded-xl overflow-hidden shadow-xl border-0 inset-0">
          <div className="absolute inset-0 z-0">
            <Image
              src="/alpertunaozkan-homePage-contact.webp"
              alt=""
              aria-hidden
              fill
              sizes="100vw"
              className="object-cover object-center blur-[2px] scale-105 will-change-transform"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
          </div>

          <div className="relative z-10 text-center px-6 py-16 md:px-12 lg:px-16">
            <Link href="/iletisim" prefetch={false}>
              <Badge className="mb-4 cursor-pointer ">
                Hemen İletişime Geçin
              </Badge>
            </Link>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Hukuki Danışmanlık İçin Bize Ulaşın
            </h2>

            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Randevu ve bilgi talebi için bizi arayın veya form üzerinden mesaj
              bırakın.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button
                asChild
                size="lg"
                className="bg-blue-800 hover:bg-blue-700"
              >
                <Link href="tel:+905340181933" prefetch={false}>
                  <Phone className="h-5 w-5 mr-2" />
                  +90 (534) 018 19 33
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href="/iletisim" prefetch={false}>
                  <Mail className="h-5 w-5 mr-2" />
                  İletişim Formu
                </Link>
              </Button>
            </div>

            <p className="text-sm text-blue-100 mb-6">
              Mesai saatleri: Pazartesi - Cuma 09:00 - 18:00
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="bg-white/90 text-blue-900 hover:bg-white"
              >
                <Link href="/ankara-gayrimenkul-avukati" prefetch={false}>
                  Ankara Ofisi
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/20 text-white border-white/50 hover:bg-white hover:text-blue-900"
              >
                <Link href="/kirikkale-gayrimenkul-avukati" prefetch={false}>
                  Kırıkkale Ofisi
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
