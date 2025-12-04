import Link from "next/link";
import Image from "next/image";
import Section from "@/components/section/Section";
import Container from "@/components/container/Container";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

type LocationOfficeSectionProps = {
  id: string;
  city: string;
  addressLines: string[];
  phone: string;
  phoneDisplay: string;
  email?: string;
  workingHours: string;
  mapEmbed: string;
  mapPlaceUrl: string;
  directionsLink: string;
  mapImage?: { src: string; alt: string; width?: number; height?: number; priority?: boolean };
};

export default function LocationOfficeSection({
  id,
  city,
  addressLines,
  phone,
  phoneDisplay,
  email,
  workingHours,
  mapEmbed,
  mapPlaceUrl,
  directionsLink,
  mapImage,
}: LocationOfficeSectionProps) {
  return (
    <div id={id}>
      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <div className="space-y-4 border border-gray-200 rounded-2xl p-5 bg-white lg:h-full">
              <h2 className="text-lg font-semibold text-gray-900">
                {city} Ofis İletişimi
              </h2>
              <div className="space-y-2 text-gray-700">
                <p className="font-semibold">Adres</p>
                <address className="not-italic">
                  {addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <p className="font-semibold mt-3">Telefon</p>
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center gap-2 text-blue-700 font-semibold"
                >
                  <Phone className="h-4 w-4" />
                  {phoneDisplay}
                </a>
                {email && (
                  <>
                    <p className="font-semibold mt-3">E-posta</p>
                    <a
                      href={`mailto:${email}`}
                      className="text-blue-700"
                    >
                      {email}
                    </a>
                  </>
                )}
                <p className="font-semibold mt-3">Çalışma Saatleri</p>
                <p>{workingHours}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button asChild>
                  <a href={`tel:${phone}`}>Hemen Ara</a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/iletisim">İletişim Formu</Link>
                </Button>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p className="font-semibold flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Harita & Yol Tarifi
                </p>
                <a
                  href={mapPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline block"
                >
                  Google Maps üzerinde ofisi aç
                </a>
                <a
                  href={directionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline block"
                >
                  Google Maps üzerinden yol tarifi alın
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow h-full max-h-[540px] flex">
              {mapImage ? (
                <Image
                  src={mapImage.src}
                  alt={mapImage.alt}
                  width={mapImage.width ?? 800}
                  height={mapImage.height ?? 1020}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={mapImage.priority}
                />
              ) : (
                <iframe
                  src={mapEmbed}
                  title={`${city} ofis haritası`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[360px]"
                />
              )}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
