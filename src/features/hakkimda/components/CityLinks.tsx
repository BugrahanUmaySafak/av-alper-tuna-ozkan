"use client";

import Link from "next/link";
import Section from "@/components/section/Section";
import Container from "@/components/container/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { kirikkaleLocation } from "@/data/locations";

export default function CityLinks() {
  const items = [kirikkaleLocation];

  return (
    <Section className="bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Şehir Bazlı Hizmetler
          </h2>
          <p className="text-gray-600 mt-2">
            Kırıkkale için odaklı gayrimenkul hukuku sayfamız.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1">
          {items.map((loc) => (
            <Card
              key={loc.slug}
              className="border border-gray-200 bg-gradient-to-br from-slate-50 via-white to-white shadow-sm"
            >
              <CardContent className="p-5 sm:p-6 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                  <span className="text-sm font-semibold">
                    {loc.city} Odaklı Hizmet
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {loc.city} Gayrimenkul Avukatı
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {loc.intro.split(/(?<=\.)\s+/)[0] ?? loc.intro}
                </p>

                <div className="flex flex-wrap gap-2">
                  {loc.services.slice(0, 4).map((s) => (
                    <span
                      key={s.title}
                      className="text-xs px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-800 shadow-sm"
                    >
                      {s.title}
                    </span>
                  ))}
                </div>

                <Button asChild>
                  <Link
                    href={loc.slug}
                    prefetch={false}
                    aria-label={`${loc.city} Gayrimenkul Avukatı sayfasına git`}
                  >
                    {loc.city} sayfasına git
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
