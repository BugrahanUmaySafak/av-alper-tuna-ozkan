import type { Metadata } from "next";
import ContactWrapper from "@/features/iletisim/containers/ContactWrapper";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alpertunaozkan.com";
const PAGE_URL = `${SITE_URL}/iletisim`;

export const metadata: Metadata = {
  title: "İletişim | Avukat Alper Tuna Özkan",
  description:
    "Randevu ve danışmanlık talepleriniz için iletişim bilgileri. Ofis başvuru kanalları ve çalışma saatleri.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "İletişim | Avukat Alper Tuna Özkan",
    description: "İletişim kanalları ve çalışma saatleri.",
    images: [
      { url: `${SITE_URL}/og/og-contact.jpg`, width: 1200, height: 630 },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "İletişim | Avukat Alper Tuna Özkan",
    description: "İletişim kanalları ve çalışma saatleri.",
    images: [`${SITE_URL}/og/og-contact.jpg`],
  },
};

export const revalidate = 900;
export const dynamic = "force-static";

export default function Iletisim() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#org`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+905340181933",
        availableLanguage: ["tr"],
        areaServed: "TR",
      },
    ],
    url: PAGE_URL,
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactWrapper />
    </>
  );
}
