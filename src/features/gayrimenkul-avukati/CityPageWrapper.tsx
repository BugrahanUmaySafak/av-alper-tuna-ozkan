import { cityContent, CityKey } from "./data/cities";
import PageHeader from "@/components/page-header/PageHeader";
import Section from "@/components/section/Section";
import Container from "@/components/container/Container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, MapPin, Phone, Mail, Clock } from "lucide-react";
import { notFound } from "next/navigation";

export default function CityPageWrapper({ city }: { city: CityKey }) {
  const data = cityContent[city];
  if (!data) return notFound();

  return (
    <>
      <PageHeader
        title={data.heroTitle}
        description={data.heroDescription}
        extraContent={
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <a href="tel:+905340181933">Telefon: {data.phone}</a>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/iletisim" prefetch={false}>
                İletişim Formu
              </Link>
            </Button>
          </div>
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
              <div className="grid grid-cols-2 gap-4">
                {data.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
                  >
                    <p className="text-3xl font-semibold text-gray-900">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
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
          <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
            <Card className="p-6 lg:p-8 space-y-5 shadow-lg border-0">
              <h2 className="text-2xl font-semibold text-gray-900">
                Şehre Özel Hukuki Çözümler
              </h2>
              <p className="text-gray-600">
                Ankara ve Kırıkkale’deki gayrimenkul uyuşmazlıkları benzer
                görünse bile, belediye kararları, imar planları ve yatırım
                dinamikleri tamamen farklıdır. Ekibimiz, yereldeki idarelerin
                ve mahkemelerin çalışma alışkanlıklarını dikkate alarak dava ve
                sözleşme stratejileri geliştirir.
              </p>
              <ul className="space-y-3">
                {data.services.map((item) => (
                  <li key={item} className="flex gap-3 text-gray-800">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 lg:p-8 bg-gradient-to-br from-blue-50 to-white shadow-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Hızlı Başvuru Adımları
              </h3>
              <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                <li>Dosyanızı ve hedefinizi özetleyen kısa bir mesaj gönderin.</li>
                <li>
                  Ön değerlendirme sonrası görüşme veya keşif planlamasını
                  birlikte belirleyelim.
                </li>
                <li>
                  Tüm süreç boyunca dava, uzlaşma ve sözleşme kararlarını yazılı
                  olarak raporlayalım.
                </li>
              </ol>
              <Button asChild className="w-full mt-5">
                <Link href="/iletisim" prefetch={false}>
                  Ön Görüşme Planla
                </Link>
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
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

            <Card className="p-0 overflow-hidden h-full flex flex-col">
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <p className="text-lg font-semibold text-gray-900">
                  Harita ve Yol Tarifi
                </p>
                <div className="flex gap-2">
                  <Button asChild size="sm">
                    <a
                      href={data.address.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Haritada Aç
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
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
              <div className="relative flex-1">
                <a
                  href={data.address.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label={`${data.name} ofisini haritada aç`}
                >
                  <span className="sr-only">
                    {data.name} ofisini haritada aç
                  </span>
                </a>
                <iframe
                  src={data.mapEmbed}
                  title={`${data.name} ofis haritası`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full border-0 pointer-events-none"
                />
              </div>
              <p className="text-sm text-center text-gray-500 py-3 border-t border-gray-100">
                Haritaya tıklayarak Google Maps üzerinden tam ekran görüntüleyebilirsiniz.
              </p>
            </Card>
          </div>
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

      <Section>
        <Container>
          <Card className="p-8 bg-gradient-to-br from-blue-900 to-blue-700 text-white text-center space-y-4">
            <h3 className="text-2xl font-semibold">
              Dosyanız için şehir özelinde strateji belirleyelim
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Tapu devri, kira, kamulaştırma veya kat karşılığı sözleşme sürecinin
              hangi aşamasında olursanız olun, belgelerinizi kısa sürede analiz edip
              riskleri raporlayabiliriz.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild variant="secondary" size="lg">
                <a href="tel:+905340181933">Hemen Ara</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white/50 hover:bg-white hover:text-blue-900">
                <Link href="/iletisim" prefetch={false}>
                  Dosya Gönder
                </Link>
              </Button>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
