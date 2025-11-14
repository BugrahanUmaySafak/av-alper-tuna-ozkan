import type { Metadata } from "next";
import LocationLanding from "@/features/locations/LocationLanding";
import { ankaraLocation } from "@/data/locations";

const locationData = ankaraLocation;

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alpertunaozkan.com";

const toAbsoluteUrl = (value: string) =>
  value.startsWith("http") ? value : new URL(value, SITE_URL).toString();

export const revalidate = 900;
export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  const ogImageAbsolute = toAbsoluteUrl(locationData.ogImage);

  return {
    title: "Ankara Gayrimenkul Avukatı | Özkan Hukuk & Danışmanlık",
    description:
      "Ankara’da tapu iptal ve tescil, kira uyarlama, kamulaştırma ve kat karşılığı inşaat sözleşmelerinde hukuki süreç desteği.",
    alternates: { canonical: locationData.pageUrl },
    openGraph: {
      type: "website",
      url: locationData.pageUrl,
      siteName: "Özkan Hukuk & Danışmanlık",
      locale: "tr_TR",
      title: "Ankara Gayrimenkul Avukatı | Özkan Hukuk & Danışmanlık",
      description:
        "Başkentteki tapu, kira, inşaat ve kamulaştırma süreçlerini planlı bir şekilde yürütmek için bilgi alın.",
      images: [
        {
          url: ogImageAbsolute,
          width: 1200,
          height: 630,
          alt: locationData.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ankara Gayrimenkul Avukatı",
      description:
        "Ankara’da gayrimenkul hukuku, kira, kat karşılığı ve kamulaştırma süreçleri hakkında bilgilendirme.",
      images: [ogImageAbsolute],
      site: "@alpertunaozkan",
      creator: "@alpertunaozkan",
    },
  };
}

export default function Page() {
  const heroImageAbsolute = toAbsoluteUrl(locationData.heroImage);
  const mapPlaceAbsolute = toAbsoluteUrl(locationData.mapPlaceUrl);

  const legalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${locationData.pageUrl}#legalservice`,
    name: "Özkan Hukuk & Danışmanlık",
    url: locationData.pageUrl,
    image: heroImageAbsolute,
    areaServed: { "@type": "City", name: locationData.city },
    parentOrganization: {
      "@type": "Organization",
      "@id": "https://www.alpertunaozkan.com/#org",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: locationData.address.street,
      addressLocality:
        locationData.address.district ?? locationData.address.city,
      addressRegion: locationData.address.city,
      postalCode: locationData.address.postalCode,
      addressCountry: locationData.address.country,
    },
    telephone: locationData.phone,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "https://schema.org/Monday",
          "https://schema.org/Tuesday",
          "https://schema.org/Wednesday",
          "https://schema.org/Thursday",
          "https://schema.org/Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    hasMap: mapPlaceAbsolute,
    geo: {
      "@type": "GeoCoordinates",
      latitude: locationData.geo.lat,
      longitude: locationData.geo.lng,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: locationData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: "https://www.alpertunaozkan.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Ankara Gayrimenkul Avukatı",
        item: locationData.pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <LocationLanding location={locationData} />
    </>
  );
}
