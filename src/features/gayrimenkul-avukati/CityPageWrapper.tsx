import { cityContent, CityKey } from "./data/cities";
import PageHeader from "@/components/page-header/PageHeader";
import Section from "@/components/section/Section";
import Container from "@/components/container/Container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import CityMapClient from "./components/CityMapClient";
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
                <address className="not-italic font-medium text-foreground">
                  {data.address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <div className="flex justify-center gap-2 flex-wrap">
                  <Button asChild size="sm" variant="outline">
                    <a
                      href={data.address.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Haritada Aç
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="ghost">
                    <a
                      href={data.address.directionsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Yol Tarifi
                    </a>
                  </Button>
                </div>
              </div>
            </ContactInfoCard>

            <ContactInfoCard title="Telefon" icon={Phone} iconColor="text-green-600">
              <div className="text-center pt-2">
                <a
                  href={`tel:${data.phone.replace(/\s|\(|\)|-/g, "")}`}
                  className="inline-flex items-center justify-center hover:text-primary transition-colors duration-200 text-lg md:text-xl font-semibold text-foreground"
                >
                  {data.phone}
                </a>
              </div>
            </ContactInfoCard>

            <ContactInfoCard title="E-posta" icon={Mail} iconColor="text-purple-600">
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
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-gray-900">
              Ofis İletişim Bilgileri
            </h3>
            <Card className="p-6 space-y-4">
                <div className="flex gap-3">
                  <MapPin className="h-6 w-6 text-red-600" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {data.address.title}
                    </p>
                    <address className="not-italic text-gray-700">
                      {data.address.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                    <div className="flex gap-3 mt-2 flex-wrap">
                      <Button asChild size="sm" variant="outline">
                        <a
                          href={data.address.mapsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Haritada Aç
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="ghost">
                        <a
                          href={data.address.directionsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Yol Tarifi
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Phone className="h-6 w-6 text-emerald-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Telefon</p>
                    <a
                      href={`tel:${data.phone.replace(/\s|\(|\)|-/g, "")}`}
                      className="text-blue-700 font-medium"
                    >
                      {data.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Mail className="h-6 w-6 text-purple-600" />
                  <div>
                    <p className="font-semibold text-gray-900">E-posta</p>
                    <a
                      href={`mailto:${data.email}`}
                      className="text-blue-700 font-medium"
                    >
                      {data.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Clock className="h-6 w-6 text-amber-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Çalışma Saatleri</p>
                    <p className="text-gray-700">{data.officeHours}</p>
                  </div>
                </div>
              </Card>
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
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Ofisten Kareler</h3>
              <p className="text-gray-600">
                Görseller placeholder olarak eklenmiştir, kısa süre içerisinde
                güncellenecektir.
              </p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.gallery.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                  aria-label={item.title}
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

    </>
  );
}
