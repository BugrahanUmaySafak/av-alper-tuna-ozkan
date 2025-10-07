"use client";

import { services } from "@/data/service";
import { Container } from "@/components/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ı/g, "i")
    .replace(/ş/g, "s")
    .replace(/ç/g, "c")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function ActivityListSimple() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <Container className="mx-auto w-full max-w-none">
        <div className="-mx-4 flex flex-wrap justify-center">
          {services.map((service) => {
            const Icon = service.icon;
            const id = slugify(service.title);

            return (
              <div
                key={id}
                className="
                  w-full px-4 mb-8
                  sm:w-1/2
                  lg:w-1/3
                "
              >
                <Card className="h-full border border-gray-200 shadow-sm">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <Icon
                        className="w-7 h-7 text-blue-700"
                        aria-hidden="true"
                      />
                      {/* Yaşlı kitle için daha büyük başlık */}
                      <CardTitle className="text-2xl font-bold text-gray-900">
                        {service.title}
                      </CardTitle>
                    </div>
                    <Separator className="mt-4 h-[3px] w-16 bg-yellow-600 rounded" />
                  </CardHeader>

                  <CardContent>
                    {/* Okunabilirlik için daha büyük metin ve geniş satır aralığı */}
                    <ul className="mt-4 space-y-3 text-[17px] leading-8 text-gray-800">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-[9px] inline-block h-1.5 w-1.5 rounded-full bg-blue-700" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
