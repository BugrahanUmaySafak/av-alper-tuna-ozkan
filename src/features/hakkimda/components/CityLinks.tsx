"use client";

import Link from "next/link";
import Image from "next/image";
import Section from "@/components/section/Section";
import Container from "@/components/container/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ankaraLocation, kirikkaleLocation } from "@/data/locations";

export default function CityLinks() {
  const items = [ankaraLocation, kirikkaleLocation];

  return (
    <Section className="bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Şehir Bazlı Hizmetler
          </h2>
          <p className="text-gray-600 mt-2">
            Ankara ve Kırıkkale için odaklı gayrimenkul hukuku sayfalarımız.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((loc) => (
            <Card
              key={loc.slug}
              className="overflow-hidden border border-gray-200"
            >
              <div className="relative h-44">
                <Image
                  src={loc.heroImage}
                  alt={loc.heroAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false}
                />
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {loc.city} Gayrimenkul Avukatı
                </h3>

                <ul className="text-sm text-gray-700 mb-4 list-disc pl-5">
                  {loc.services.slice(0, 3).map((s) => (
                    <li key={s.title}>{s.title}</li>
                  ))}
                </ul>

                <Button asChild>
                  <Link
                    href={loc.slug}
                    prefetch={false}
                    aria-label={`${loc.city} Gayrimenkul Avukatı sayfasına git`}
                  >
                    {loc.city} Gayrimenkul Avukatı
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
