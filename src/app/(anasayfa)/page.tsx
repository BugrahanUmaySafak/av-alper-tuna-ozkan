import type { Metadata } from "next";
import HomePageWrapper from "@/features/anasayfa/containers/HomaPageWrapper"; // düzeltme: Homa -> Home

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alpertunaozkan.com";

export const metadata: Metadata = {
  title: "Avukat Alper Tuna Özkan",
  description:
    "Ankara ve İç Anadolu’da gayrimenkul hukuku odağında danışmanlık ve dava takibi. Tapu, kira, inşaat sözleşmeleri ve kamulaştırma konuları hakkında bilgi alın.",
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/`,
    title: "Avukat Alper Tuna Özkan | Özkan Hukuk & Danışmanlık",
    description: "Gayrimenkul hukuku odağında danışmanlık ve dava hizmetleri.",
    images: [
      {
        url: `${SITE_URL}/og/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: "Özkan Hukuk & Danışmanlık",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avukat Alper Tuna Özkan | Gayrimenkul Hukuku",
    description: "Gayrimenkul hukuku odağında danışmanlık ve dava hizmetleri.",
    images: [`${SITE_URL}/og/og-default.jpg`],
    site: "@alpertunaozkan",
    creator: "@alpertunaozkan",
  },
};

export default function Anasayfa() {
  return <HomePageWrapper />;
}
