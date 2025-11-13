import { cityContent, CityKey } from "./data/cities";
import PageHeader from "@/components/page-header/PageHeader";
import Section from "@/components/section/Section";
import Container from "@/components/container/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import CityMapClient from "./components/CityMapClient";
import CityGallery from "./components/CityGallery";
import ContactInfoCard from "@/features/iletisim/components/ContactInfoCard";

export default function CityPageWrapper({ city }: { city: CityKey }) {
  const data = cityContent[city];
  if (!data) return notFound();

  return (
    <>
      <PageHeader
        title={data.heroTitle}
        description={data.heroDescription}
        extraContent={
          <Button asChild size="lg">
            <Link href="/iletisim#iletisim-form" prefetch={false}>
              İletişim Formu
            </Link>
          </Button>
        }
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-900 text-blue-50 px-4 py-1.5 rounded-full">
                {data.heroHighlight}
              </Badge>
              <p className="text-lg text-gray-700 leading-relaxed">
                {data.summary}
              </p>
              <Button asChild size="lg" variant="outline">
                <Link href="/faaliyet-alanlarim" prefetch={false}>
                  Bütün Faaliyet Alanlarım
                </Link>
              </Button>
            </div>
            <div className="relative h-[360px] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <Image
                src={data.heroImage}
                alt={`${data.name} gayrimenkul hukuku`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/10" />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <ContactInfoCard title={`${data.name} Adres`} icon={MapPin}>
              <div className="text-center space-y-2">
                <a
                  href={data.address.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block not-italic font-medium text-foreground hover:text-primary transition-colors"
                >
                  {data.address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </a>
              </div>
            </ContactInfoCard>

            <ContactInfoCard
              title="Telefon"
              icon={Phone}
              iconColor="text-green-600"
            >
              <div className="text-center pt-2">
                <a
                  href={`tel:${data.phone.replace(/\s|\(|\)|-/g, "")}`}
                  className="inline-flex items-center justify-center hover:text-primary transition-colors duration-200 text-lg md:text-xl font-semibold text-foreground"
                >
                  {data.phone}
                </a>
              </div>
            </ContactInfoCard>

            <ContactInfoCard
              title="E-posta"
              icon={Mail}
              iconColor="text-purple-600"
            >
              <div className="text-center pt-2">
                <a
                  href={`mailto:${data.email}`}
                  className="inline-flex items-center justify-center hover:text-primary transition-colors duration-200 text-base md:text-lg font-semibold text-foreground break-all"
                >
                  {data.email}
                </a>
              </div>
            </ContactInfoCard>

            <ContactInfoCard
              title="Çalışma Saatleri"
              icon={Clock}
              iconColor="text-orange-600"
            >
              <div className="text-center pt-2 space-y-1">
                <p className="font-semibold text-foreground text-base md:text-lg">
                  {data.officeHours}
                </p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Hafta sonu: Kapalı
                </p>
              </div>
            </ContactInfoCard>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <CityMapClient
            coords={data.coords}
            title={`${data.name} Ofis Konumu`}
            mapsLink={data.address.mapsLink}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <h3 className="text-2xl font-semibold text-gray-900">
              Ofisten Kareler
            </h3>
          </div>
          <CityGallery items={data.gallery} />
        </Container>
      </Section>
    </>
  );
}
