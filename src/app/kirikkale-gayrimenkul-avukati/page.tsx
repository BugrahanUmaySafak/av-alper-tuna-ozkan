import HomePageWrapper from "@/features/anasayfa/containers/HomaPageWrapper";
import { buildMetadata } from "@/config/seo";

export const metadata = buildMetadata({
  title: "Kırıkkale Gayrimenkul Avukatı | Özkan Hukuk",
  description:
    "Kırıkkale’de miras paylaşımı, kira uyuşmazlıkları, kat karşılığı sözleşmeler ve kamulaştırma davaları için uzman gayrimenkul avukatı desteği.",
  path: "/kirikkale-gayrimenkul-avukati",
  keywords: ["Kırıkkale gayrimenkul avukatı"],
  type: "article",
});

export default function Page() {
  return <HomePageWrapper />;
}
