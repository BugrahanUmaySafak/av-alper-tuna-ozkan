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
        <div className="text-center mb-8">
          <h2
            id="hizmet-bolgeleri"
            className="text-2xl md:text-3xl font-semibold text-gray-900"
          >
            Kırıkkale’de Gayrimenkul Hukukunda Uzman Avukat
          </h2>
        </div>

        <article
          role="listitem"
          aria-labelledby="hizmet-bolgeleri"
          className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-slate-50 via-white to-white shadow-sm"
        >
          <div className="absolute -top-16 -right-16 h-48 w-48 bg-blue-100 rounded-full blur-3xl opacity-60" />
          <div className="absolute -bottom-10 -left-12 h-40 w-40 bg-amber-100 rounded-full blur-3xl opacity-60" />

          <div className="relative p-6 sm:p-8 lg:p-10 grid gap-8 lg:grid-cols-[1.6fr_1fr] items-start">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                <MapPin className="h-4 w-4" aria-hidden />
                <span>Kırıkkale ve çevresi</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Kırıkkale’de Gayrimenkul Hukuku Desteği
              </h3>

              <p className="text-gray-700 text-base leading-relaxed">
                {loc.intro}
              </p>

              <div className="flex flex-col gap-3">
                {loc.services.map((s) => (
                  <div
                    key={s.title}
                    className="flex flex-col gap-2 rounded-xl bg-white border border-gray-200 p-3 shadow-sm"
                  >
                    <span className="w-fit inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-xs font-semibold">
                      {s.title}
                    </span>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 items-center">
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

            <div className="relative">
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 space-y-4 mb-4">
                <p className="text-sm font-semibold text-gray-600">
                  Kırıkkale’de neler yapıyoruz?
                </p>
                <ul className="space-y-3 text-sm text-gray-800">
                  {loc.process.map((step) => (
                    <li key={step.title} className="flex gap-2">
                      <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          {step.title}
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 space-y-3">
                <p className="text-sm font-semibold text-gray-600">
                  Süreç ve Yol Haritası
                </p>
                <ul className="space-y-3 text-sm text-gray-800">
                  {roadMapSteps.map((item, idx) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[2px] text-sm font-semibold text-blue-700">
                        {idx + 1}.
                      </span>
                      <p className="font-semibold text-gray-900">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      </Container>
    </Section>
  );
}
