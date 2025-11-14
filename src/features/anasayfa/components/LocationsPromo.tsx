"use client";

import Image from "next/image";
import Link from "next/link";
import Section from "@/components/section/Section";
import Container from "@/components/container/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { ankaraLocation, kirikkaleLocation } from "@/data/locations";

const LOCATIONS = [ankaraLocation, kirikkaleLocation];

export default function LocationsPromo() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-8">
          <Badge className="mb-3">Hizmet Bölgeleri</Badge>
          <h2
            id="hizmet-bolgeleri"
            className="text-2xl md:text-3xl font-semibold text-gray-900"
          >
            Ankara ve Kırıkkale Odaklı Gayrimenkul Hukuku
          </h2>
          <p className="mt-2 text-gray-600">
            Şehrinize özel süreç, evrak ve yol haritası için ilgili açılış
            sayfasına gidin.
          </p>
        </div>

        <div
          className="grid gap-6 md:grid-cols-2"
          role="list"
          aria-labelledby="hizmet-bolgeleri"
        >
          {LOCATIONS.map((loc, index) => {
            const teaser =
              loc.intro.split(/(?<=\.)\s+/)[0] ?? loc.intro;
            return (
            <article
              key={loc.slug}
              role="listitem"
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="relative h-56 sm:h-64">
                <Image
                  src={loc.heroImage}
                  alt={loc.heroAlt}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                  <MapPin className="h-4 w-4" aria-hidden />
                  <span>{loc.city}</span>
                </div>

                {/* SEO-dostu, tam eşleşen anchor */}
                <h3 className="text-xl font-semibold text-gray-900">
                  <Link
                    href={loc.slug}
                    prefetch={false}
                    className="hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                    aria-label={`${loc.city} sayfasını aç (${loc.city} Gayrimenkul Avukatı)`}
                  >
                    {loc.city} Gayrimenkul Avukatı
                  </Link>
                </h3>

                <p className="mt-2 text-gray-700 text-sm leading-relaxed line-clamp-3">
                  {teaser}
                </p>

                <div className="mt-4">
                  <Button asChild className="group/btn">
                    <Link href={loc.slug} prefetch={false}>
                      Detayları Gör
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          );
          })}
        </div>
      </Container>
    </Section>
  );
}
