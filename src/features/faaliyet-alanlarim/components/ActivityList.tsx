import { services } from "@/data/service";
import Container from "@/components/container/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Section from "@/components/section/Section";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { kirikkaleLocation } from "@/data/locations";

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

export default function ActivityList() {
  return (
    <Section className="bg-gradient-to-br from-gray-50 to-white">
      <Container className="mx-auto w-full">
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service) => {
            const id = slugify(service.title);
            const Icon = service.icon;
            const cityLinks = [
              {
                href: kirikkaleLocation.slug,
                label: "Kırıkkale Gayrimenkul Avukatı",
                aria: `Kırıkkale Gayrimenkul Avukatı - ${service.title}`,
              },
            ];

            return (
              <article
                key={id}
                id={id}
                aria-labelledby={`${id}-title`}
                className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <Card className="h-full border border-gray-200 shadow-sm">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <Icon
                        className="w-7 h-7 text-blue-700"
                        aria-hidden="true"
                      />
                      <CardTitle
                        id={`${id}-title`}
                        className="text-2xl font-bold text-gray-900"
                      >
                        {service.title}
                      </CardTitle>
                    </div>
                    <Separator className="mt-4 h-[3px] w-16 bg-yellow-600 rounded" />
                  </CardHeader>

                  <CardContent>
                    <ul className="mt-4 space-y-3 text-[17px] leading-8 text-gray-800">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-[9px] inline-block h-1.5 w-1.5 rounded-full bg-blue-700" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {cityLinks.map((city) => (
                        <Link
                          key={city.href}
                          href={city.href}
                          prefetch={false}
                          className="text-sm px-3 py-1.5 rounded-full border border-blue-200 text-blue-700 hover:border-blue-500 hover:text-blue-800 transition"
                          aria-label={city.aria}
                        >
                          {city.label}
                        </Link>
                      ))}
                      <Button asChild variant="outline" className="ml-auto">
                        <Link href="/iletisim" prefetch={false}>
                          İletişim
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
