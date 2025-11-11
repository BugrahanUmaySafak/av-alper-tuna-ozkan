import HomePageWrapper from "@/features/anasayfa/containers/HomaPageWrapper";
import { buildMetadata } from "@/config/seo";

export const metadata = buildMetadata({
  title: "Kırıkkale Gayrimenkul Avukatı",
  description:
    "Kırıkkale’de tapu iptal ve tescil, kira uyuşmazlıkları, kamulaştırma ve inşaat sözleşmeleri alanlarında uzman gayrimenkul avukatlığı desteği.",
  path: "/kirikkale-gayrimenkul-avukati",
  type: "article",
});

export default function Page() {
  return <HomePageWrapper />;
}
