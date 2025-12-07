import type { Metadata } from "next";
import AboutWrapper from "@/features/hakkimda/containers/AboutWrapper";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alpertunaozkan.com";
const PAGE_URL = `${SITE_URL}/hakkimda`;

export const metadata: Metadata = {
  title: "Kırıkkale Gayrimenkul Avukatı Alper Tuna Özkan | Hakkımda",
  description:
    "Kırıkkale doğumlu Av. Alper Tuna Özkan; Kırıkkale'de gayrimenkul, inşaat ve kira uyuşmazlıklarında danışmanlık sağlar.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "profile",
    url: PAGE_URL,
    title: "Kırıkkale Gayrimenkul Avukatı Alper Tuna Özkan | Hakkımda",
    description:
      "Gayrimenkul hukuku ağırlıklı çalışma alanı ve mesleki bilgiler.",
    images: [{ url: `${SITE_URL}/og/og-alper.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kırıkkale Gayrimenkul Avukatı Alper Tuna Özkan | Hakkımda",
    description: "Çalışma alanları ve mesleki bilgiler.",
    images: [`${SITE_URL}/og/og-alper.jpg`],
  },
};

export const revalidate = 900;
export const dynamic = "force-static";

export default function Hakkimda() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${PAGE_URL}#person`,
    name: "Alper Tuna Özkan",
    url: PAGE_URL,
    worksFor: { "@id": `${SITE_URL}/#org` },
    jobTitle: "Avukat",
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <AboutWrapper />
    </>
  );
}
