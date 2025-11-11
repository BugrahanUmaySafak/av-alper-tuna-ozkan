import HomePageWrapper from "@/features/anasayfa/containers/HomaPageWrapper";
import { buildMetadata } from "@/config/seo";

export const metadata = buildMetadata({
  title: "Ankara Gayrimenkul Avukatı",
  description:
    "Ankara’da tapu iptal ve tescil, kira davaları, kamulaştırma ve inşaat sözleşmeleri alanlarında stratejik gayrimenkul avukatlığı hizmeti.",
  path: "/ankara-gayrimenkul-avukati",
  type: "article",
});

export default function Page() {
  return <HomePageWrapper />;
}
