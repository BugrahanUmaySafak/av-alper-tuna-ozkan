import Link from "next/link";
import Image from "next/image";
import Section from "@/components/section/Section";
import Container from "@/components/container/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

export type LocationLandingData = {
  slug: string;
  city: string;
  title: string;
  heroImage: string;
  heroAlt: string;
  intro: string;
  ogImage: string;
  ogAlt: string;
  pageUrl: string;
  services: { title: string; description: string }[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  addressLines: string[];
  address: {
    street: string;
    district?: string;
    city: string;
    postalCode?: string;
    country: string;
  };
  phone: string;
  phoneDisplay: string;
  email?: string;
  workingHours: string;
  mapEmbed: string;
  mapLink: string;
  directionsLink: string;
  mapPlaceUrl: string;
  geo: { lat: number; lng: number };
  supportingLinks: { href: string; label: string; description: string }[];
  crossLink: { href: string; label: string; description: string };
};

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[ç]/g, "c")
    .replace(/[ğ]/g, "g")
    .replace(/[ı]/g, "i")
    .replace(/[ö]/g, "o")
    .replace(/[ş]/g, "s")
    .replace(/[ü]/g, "u")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const tocLabels = [
  "Hizmet Kapsamı",
  "Süreç & Yol Haritası",
  "Sık Sorulan Sorular",
  "İletişim & Harita",
] as const;
const tocItems = tocLabels.map((label) => ({
  label,
  id: slugify(label),
}));

export default function LocationLanding({
  location,
  showTitle = true,
}: {
  location: LocationLandingData;
  showTitle?: boolean;
}) {
  return (
    <div className="flex flex-col gap-6">
      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              {showTitle && (
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {location.title}
                </h1>
              )}
              <Badge className="w-fit bg-blue-900 text-blue-100">
                {location.city} taşınmaz uyuşmazlıkları
              </Badge>
              <p className="text-gray-700 leading-relaxed">{location.intro}</p>
            </div>
            <div className="relative h-72 md:h-80 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src={location.heroImage}
                alt={location.heroAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
            <p className="font-semibold text-sm text-gray-600 mb-3">
              İçindekiler
            </p>
            <div className="flex flex-wrap gap-3">
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-sm px-3 py-2 rounded-full border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <div id={tocItems[0].id}>
        <Section>
          <Container>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              {location.city} Hizmet Kapsamı
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {location.services.map((service) => (
                <div
                  key={service.title}
                  className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm"
                >
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      </div>

      <div id={tocItems[1].id}>
        <Section>
          <Container>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Süreç ve Yol Haritası
            </h2>
            <ol className="space-y-4">
              {location.process.map((step, idx) => (
                <li key={step.title} className="flex gap-4">
                  <span className="text-blue-700 font-semibold text-xl">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Container>
        </Section>
      </div>

      <div id={tocItems[2].id}>
        <Section>
          <Container>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              {location.city} İçin Sık Sorulan Sorular
            </h2>
            <div className="space-y-3">
              {location.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="border border-gray-200 rounded-xl bg-white"
                >
                  <summary className="cursor-pointer px-4 py-3 font-semibold text-gray-900">
                    {faq.question}
                  </summary>
                  <p className="px-4 pb-4 text-gray-700 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </Container>
        </Section>
      </div>

      <div id={tocItems[3].id}>
        <Section>
          <Container>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4 border border-gray-200 rounded-2xl p-5 bg-white">
                <h2 className="text-lg font-semibold text-gray-900">
                  {location.city} Ofis İletişimi
                </h2>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold">Adres</p>
                  <address className="not-italic">
                    {location.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                  <p className="font-semibold mt-3">Telefon</p>
                  <a
                    href={`tel:${location.phone}`}
                    className="inline-flex items-center gap-2 text-blue-700 font-semibold"
                  >
                    <Phone className="h-4 w-4" />
                    {location.phoneDisplay}
                  </a>
                  {location.email && (
                    <>
                      <p className="font-semibold mt-3">E-posta</p>
                      <a
                        href={`mailto:${location.email}`}
                        className="text-blue-700"
                      >
                        {location.email}
                      </a>
                    </>
                  )}
                  <p className="font-semibold mt-3">Çalışma Saatleri</p>
                  <p>{location.workingHours}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button asChild>
                    <a href={`tel:${location.phone}`}>Hemen Ara</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/iletisim">Danışmanlık Formu</Link>
                  </Button>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p className="font-semibold flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Harita & Yol Tarifi
                  </p>
                  <a
                    href={location.mapPlaceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline block"
                  >
                    Google Maps üzerinde ofisi aç
                  </a>
                  <a
                    href={location.directionsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline block"
                  >
                    Google Maps üzerinden yol tarifi alın
                  </a>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow">
                <iframe
                  src={location.mapEmbed}
                  title={`${location.city} ofis haritası`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[320px]"
                />
              </div>
            </div>
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 space-y-3">
            <p className="font-semibold text-gray-900">Diğer bağlantılar</p>
            <div className="flex flex-wrap gap-3">
              {location.supportingLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm px-4 py-2 rounded-full border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={location.crossLink.href}
                className="text-sm px-4 py-2 rounded-full border border-blue-200 text-blue-700 hover:border-blue-500 transition"
              >
                {location.crossLink.label}
              </Link>
            </div>
            <p className="text-sm text-gray-600">
              {location.crossLink.description}
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}
