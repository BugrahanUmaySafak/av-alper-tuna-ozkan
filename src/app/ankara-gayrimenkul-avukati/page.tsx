import HomePageWrapper from "@/features/anasayfa/containers/HomaPageWrapper";
import { buildMetadata } from "@/config/seo";

export const metadata = buildMetadata({
  title: "Ankara Gayrimenkul Avukatı | Özkan Hukuk",
  description:
    "Ankara’da tapu iptal ve tescil, kira uyuşmazlıkları, kamulaştırma ve kat karşılığı inşaat sözleşmelerinde uzman gayrimenkul avukatı desteği alın.",
  path: "/ankara-gayrimenkul-avukati",
  keywords: ["Ankara gayrimenkul avukatı"],
  type: "article",
});

export default function Page() {
  return <HomePageWrapper />;
}
