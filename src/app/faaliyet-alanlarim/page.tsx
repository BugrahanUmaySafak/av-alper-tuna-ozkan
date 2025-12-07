import type { Metadata } from "next";
import ActivityPageWrapper from "@/features/faaliyet-alanlarim/containers/ActivityPageWrapper";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alpertunaozkan.com";

export const metadata: Metadata = {
  title: "Faaliyet Alanlarım | Avukat Alper Tuna Özkan",
  description:
    "Tapu, kira, inşaat, miras ve kamulaştırma uyuşmazlıklarında bilgi amaçlı içerikler ve hizmet kapsamı.",
  alternates: { canonical: `${SITE_URL}/faaliyet-alanlarim` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/faaliyet-alanlarim`,
    title: "Faaliyet Alanlarım | Avukat Alper Tuna Özkan",
    description:
      "Gayrimenkul hukuku ve ilişkili alanlarda sunduğumuz hizmet kapsamı.",
    images: [
      { url: `${SITE_URL}/og/og-services.jpg`, width: 1200, height: 630 },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faaliyet Alanlarım | Avukat Alper Tuna Özkan",
    description: "Gayrimenkul hukuku ve ilişkili alanlarda hizmet kapsamı.",
    images: [`${SITE_URL}/og/og-services.jpg`],
  },
};

export const revalidate = 900;
export const dynamic = "force-static";

export default function FaaliyetAlanlarim() {
  return <ActivityPageWrapper />;
}
