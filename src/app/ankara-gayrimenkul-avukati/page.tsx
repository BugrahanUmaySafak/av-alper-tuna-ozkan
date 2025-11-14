import type { Metadata } from "next";
import HomePageWrapper from "@/features/anasayfa/containers/HomaPageWrapper";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alpertunaozkan.com";

export const metadata: Metadata = {
  title: "Ankara Gayrimenkul Avukatı | Özkan Hukuk",
  description:
    "Ankara’da tapu iptal ve tescil, kira uyuşmazlıkları, kamulaştırma ve kat karşılığı inşaat sözleşmelerinde uzman gayrimenkul avukatı desteği alın.",
  keywords: ["Ankara gayrimenkul avukatı"],
  alternates: {
    canonical: `${SITE_URL}/ankara-gayrimenkul-avukati`,
  },
};

export default function Page() {
  return <HomePageWrapper />;
}
