import CityPageWrapper from "@/features/gayrimenkul-avukati/CityPageWrapper";
import { buildMetadata } from "@/config/seo";
import { cityContent } from "@/features/gayrimenkul-avukati/data/cities";
import LocalBusinessJsonLd from "@/features/gayrimenkul-avukati/seo/LocalBusinessJsonLd";
import FaqJsonLd from "@/features/gayrimenkul-avukati/seo/FaqJsonLd";

const CITY = cityContent.ankara;

export const metadata = buildMetadata({
  title: CITY.metaTitle,
  description:
    "Ankara’da tapu iptal–tescil, kira uyarlama–tahliye, kamulaştırma ve kat karşılığı sözleşmelerde uzman avukatlık. İlk değerlendirme için iletişime geçin.",
  path: CITY.slug,
  keywords: CITY.keywords,
  type: "website",
});

export default function Page() {
  return (
    <>
      <LocalBusinessJsonLd city={CITY} />
      <FaqJsonLd
        faqs={[
          {
            q: "Ankara’da kira tespit/uyarlama davası ne kadar sürer?",
            a: "Dosyanın yoğunluk ve delil durumuna göre 6–12 ay arası sürebilir. İhtiyati tedbir ve bilirkişi raporları süreyi etkiler.",
          },
          {
            q: "Kat karşılığı inşaat sözleşmesinde yüklenici temerrüdü olursa ne yapmalı?",
            a: "Sözleşmedeki cezai şart ve fesih şartları incelenir; tapu şerhleri, ihtiyati tedbir ve tazminat süreçleri devreye alınır.",
          },
          {
            q: "Kamulaştırma bedeline nasıl itiraz edilir?",
            a: "Tebligat sonrası yasal süre içinde bedel artırımı davası açılır; bilirkişi keşfi ve emsal değerlerle bedel tespiti yapılır.",
          },
        ]}
      />
      <CityPageWrapper city="ankara" />
    </>
  );
}
