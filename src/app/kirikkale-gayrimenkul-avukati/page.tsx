import type { Metadata } from "next";
import KirikkaleLocationWrapper from "@/features/locations/containers/KirikkaleLocationWrapper";
import {
  kirikkaleLocationPageData,
  type LocationPageData,
} from "@/data/LocationServices";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alpertunaozkan.com";

const locationData: LocationPageData = kirikkaleLocationPageData;

const toAbsoluteUrl = (value: string) =>
  value.startsWith("http") ? value : new URL(value, SITE_URL).toString();

export const revalidate = 900;
export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  const pageUrlAbsolute = toAbsoluteUrl(locationData.pageUrl);
  const ogImageAbsolute = toAbsoluteUrl(locationData.ogImage);

  return {
    title: "Kırıkkale Gayrimenkul Avukatı | Özkan Hukuk & Danışmanlık",
    description:
      "Kırıkkale’de kamulaştırma, miras paylaşımı, kira ve kat karşılığı inşaat sözleşmeleri süreçlerinde hukuki yol haritası.",
    alternates: { canonical: pageUrlAbsolute },
    openGraph: {
      type: "website",
      url: pageUrlAbsolute,
      siteName: "Özkan Hukuk & Danışmanlık",
      locale: "tr_TR",
      title: "Kırıkkale Gayrimenkul Avukatı | Özkan Hukuk & Danışmanlık",
      description:
        "Kırıkkale’de kamulaştırma, kira ve kat karşılığı inşaat uyuşmazlıklarının nasıl yönetildiğini öğrenin.",
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
      title: "Kırıkkale Gayrimenkul Avukatı",
      description:
        "Kamulaştırma, miras payı ve kira dosyaları için yerel hukuki bilgiler.",
      images: [ogImageAbsolute],
      site: "@alpertunaozkan",
      creator: "@alpertunaozkan",
    },
  };
}

export default function Page() {
  const heroImageAbsolute = toAbsoluteUrl(locationData.heroImage);
  const mapPlaceAbsolute = toAbsoluteUrl(locationData.mapPlaceUrl);
  const pageUrlAbsolute = toAbsoluteUrl(locationData.pageUrl);

  const legalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${pageUrlAbsolute}#legalservice`,
    name: "Özkan Hukuk & Danışmanlık",
    url: pageUrlAbsolute,
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
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
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
        name: "Kırıkkale Gayrimenkul Avukatı",
        item: pageUrlAbsolute,
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
      <KirikkaleLocationWrapper data={locationData} />
    </>
  );
}
