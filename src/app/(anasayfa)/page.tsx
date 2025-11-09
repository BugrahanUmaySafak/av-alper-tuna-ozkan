import HomePageWrapper from "@/features/anasayfa/containers/HomaPageWrapper";
import { buildMetadata } from "@/config/seo";

export const metadata = buildMetadata({
  title: "Kırıkkale ve Ankara Gayrimenkul Avukatı",
  description:
    "Tapu iptali, inşaat sözleşmeleri, kira uyuşmazlıkları ve kamulaştırma davalarında deneyimli Kırıkkale ve Ankara gayrimenkul avukatı ekibiyle çözüm üretin.",
  path: "/",
  keywords: [
    "tapu iptal avukatı",
    "inşaat hukuku avukatı",
    "kamulaştırma avukatı",
  ],
});

export default function Anasayfa() {
  return <HomePageWrapper />;
}
