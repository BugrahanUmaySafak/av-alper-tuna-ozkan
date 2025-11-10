import HomePageWrapper from "@/features/anasayfa/containers/HomaPageWrapper";
import { buildMetadata } from "@/config/seo";
import { serviceLocationKeywords } from "@/data/service";

export const metadata = buildMetadata({
  title: "Kırıkkale ve Ankara Gayrimenkul Avukatı",
  description:
    "Avukat Alper Tuna Özkan, Kırıkkale ve Ankara’da gayrimenkul hukuku, tapu iptali, inşaat sözleşmeleri, kira uyuşmazlıkları ve kamulaştırma davalarında uzman gayrimenkul avukatlığı hizmeti sunar.",
  path: "/",
  keywords: [...serviceLocationKeywords],
});

export default function Anasayfa() {
  return <HomePageWrapper />;
}
