"use client";

import Link from "next/link";
import Section from "@/components/section/Section";
import Container from "@/components/container/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CityContactLinks() {
  const items = [
    {
      city: "Kırıkkale",
      slug: "/kirikkale-gayrimenkul-avukati",
      intro:
        "Fabrikalar Mahallesi ve çevre ilçelerde yürütülen kamulaştırma, miras paylaşımı, kira ve kat karşılığı inşaat projelerinde yerel dinamikleri yakından takip ediyoruz. Bu açılış sayfası, Kırıkkale’de taşınmaz süreciyle karşılaşan kişiler için hangi hukuki başvuruların gündeme geldiğini, hangi belgelerin toplanması gerektiğini ve nasıl bir yol haritası izlediğimizi özetler.",
      services: [
        { title: "Kamulaştırma ve Bedel Artırımı" },
        { title: "Kamulaştırmasız El Atma" },
        { title: "Miras Paylaşımı ve Muris Muvazaası" },
        { title: "Kira ve Tahliye Uyuşmazlıkları" },
      ],
    },
  ];

  return (
    <Section className="bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Şehir Bazlı Hizmet Sayfaları
          </h2>
          <p className="text-gray-600 mt-2">
            Bölgenize özel süreç, SSS ve yol haritası için sayfaya geçin.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-1">
          {items.map((loc) => (
            <Card key={loc.slug} className="border border-gray-200">
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {loc.city} Gayrimenkul Avukatı
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {loc.intro}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {loc.services.slice(0, 3).map((s) => (
                    <span
                      key={s.title}
                      className="text-xs px-2 py-1 rounded-full border border-gray-200 text-gray-700"
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
