"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";

export default function HomeContact() {
  return (
    <section className="py-16">
      <Container className="mx-auto w-full max-w-none">
        <Card className="relative w-full rounded-2xl overflow-hidden shadow-xl border-0 inset-0">
          <div className="absolute inset-0 z-0 blur-xs">
            <Image
              src="/alpertunaozkan.webp"
              alt="Avukat Alper Tuna Özkan"
              fill
              sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1440px) 1440px, 1920px"
              className="object-cover object-center"
              decoding="async"
              fetchPriority="low"
            />
            <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
          </div>

          <div className="relative z-10 text-center px-6 py-16 md:px-12 lg:px-16">
            <Badge className="mb-4">Hemen İletişime Geçin</Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Hukuki Danışmanlık İçin Bize Ulaşın
            </h2>

            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Danışmanlık hizmetleri ile ilgili sorularınız için ücretsiz ön
              görüşme randevusu alın.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button
                asChild
                size="lg"
                className="bg-blue-800 hover:bg-blue-700"
              >
                <Link href="tel:+905340181933">
                  <Phone className="h-5 w-5 mr-2" />
                  +90 (534) 018 19 33
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href="/iletisim">
                  <Mail className="h-5 w-5 mr-2" />
                  İletişim Formu
                </Link>
              </Button>
            </div>

            <p className="text-sm text-blue-100">
              Mesai saatleri: Pazartesi - Cuma 09:00 - 18:00
            </p>
          </div>
        </Card>
      </Container>
    </section>
  );
}
