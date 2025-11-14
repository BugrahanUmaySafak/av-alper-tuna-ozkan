import type { Metadata } from "next";
import HomePageWrapper from "@/features/anasayfa/containers/HomaPageWrapper";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alpertunaozkan.com";

export const metadata: Metadata = {
  title: "Kırıkkale Gayrimenkul Avukatı | Özkan Hukuk",
  description:
    "Kırıkkale’de miras paylaşımı, kira uyuşmazlıkları, kat karşılığı sözleşmeler ve kamulaştırma davaları için uzman gayrimenkul avukatı desteği.",
  keywords: ["Kırıkkale gayrimenkul avukatı"],
  alternates: {
    canonical: `${SITE_URL}/kirikkale-gayrimenkul-avukati`,
  },
};

export default function Page() {
  return <HomePageWrapper />;
}
