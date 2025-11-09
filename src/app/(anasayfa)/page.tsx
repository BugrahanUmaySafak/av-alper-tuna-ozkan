import HomePageWrapper from "@/features/anasayfa/containers/HomaPageWrapper";
import { buildMetadata } from "@/config/seo";

export const metadata = buildMetadata({
  title: "Kırıkkale ve Ankara Gayrimenkul Avukatı",
  description:
    "Av. Alper Tuna Özkan, Kırıkkale ve Ankara’da tapu iptali, inşaat sözleşmeleri, kira uyuşmazlıkları ve kamulaştırma davalarında uzman gayrimenkul avukatlığı hizmeti sunar.",
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
