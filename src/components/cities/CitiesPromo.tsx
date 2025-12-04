"use client";

import Link from "next/link";
import Section from "@/components/section/Section";
import Container from "@/components/container/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { locationPromoData } from "@/data/LocationServices";

const slug = "/kirikkale-gayrimenkul-avukati";
const roadMapSteps = [
  "Bilgi Toplama",
  "Ön Görüşme ve Yol Haritası",
  "Arabuluculuk / Uzlaşma",
  "Dava Takini",
  "Karar sonrası İşlemler",
];

export default function CitiesPromo() {
  const loc = {
    city: "Kırıkkale",
    intro: locationPromoData.teaser,
    services: locationPromoData.services,
    process: locationPromoData.process,
  };

  return (
    <Section>
      <Container>
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-sm font-semibold">
              <MapPin className="h-4 w-4" aria-hidden />
              {loc.city}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              {loc.city} Gayrimenkul Hukuku
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed text-base">{loc.intro}</p>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-600">
              Hizmet Başlıkları
            </p>
            <div className="flex flex-wrap gap-2">
              {loc.services.map((s) => (
                <span
                  key={s.title}
                  className="text-xs px-3 py-1.5 rounded-full bg-blue-50 text-blue-800 border border-blue-100"
                >
                  {s.title}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 space-y-3">
              <p className="text-sm font-semibold text-gray-700">
                Kırıkkale’de neler yapıyoruz?
              </p>
              <ul className="space-y-2 text-sm text-gray-800">
                {loc.process.map((step) => (
                  <li key={step.title} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <span className="font-semibold">{step.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 space-y-3">
              <p className="text-sm font-semibold text-gray-700">
                Süreç ve Yol Haritası
              </p>
              <ul className="space-y-2 text-sm text-gray-800">
                {roadMapSteps.map((item, idx) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-blue-700">
                      {idx + 1}.
                    </span>
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild className="group/btn">
              <Link href={slug} prefetch={false}>
                Detayları Gör
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
              </Link>
            </Button>
            <Link
              href="/iletisim"
              prefetch={false}
              className="text-sm font-semibold text-blue-700 hover:text-blue-800"
            >
              İletişim ve randevu
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
