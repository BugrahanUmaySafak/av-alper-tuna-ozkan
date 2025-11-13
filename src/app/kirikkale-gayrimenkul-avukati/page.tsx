// ============================================================================
// Kırıkkale şehir sayfası – şehir-özel Metadata, JSON-LD, içerik
// ============================================================================

import CityPageWrapper from "@/features/gayrimenkul-avukati/CityPageWrapper";
import { buildMetadata } from "@/config/seo";
import { cityContent } from "@/features/gayrimenkul-avukati/data/cities";
import LocalBusinessJsonLd from "@/features/gayrimenkul-avukati/seo/LocalBusinessJsonLd";
import FaqJsonLd from "@/features/gayrimenkul-avukati/seo/FaqJsonLd";

const CITY = cityContent.kirikkale;

export const metadata = buildMetadata({
  title: CITY.metaTitle,
  description:
    "Kırıkkale’de miras paylaşımı, kira uyuşmazlığı, kat karşılığı inşaat ve kamulaştırma davalarında stratejik gayrimenkul avukatı desteği.",
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
            q: "Kırıkkale’de kamulaştırmasız el atma için nasıl yol izlenir?",
            a: "El atmanın varlığı delillerle ortaya konur; bedel ve tazmin talepli dava açılır, keşif ve bilirkişi incelemesi yapılır.",
          },
          {
            q: "Miras paylaşımında muvazaa şüphesi varsa ne yapılır?",
            a: "Muris muvazaası iddiası açılır; tapu işlemleri, tanık ve emsal kararlarla desteklenir.",
          },
          {
            q: "Tahliye davasında tahliye nedenleri nelerdir?",
            a: "Kira bedelinin ödenmemesi, ihtiyaç nedeniyle tahliye, sözleşmeye aykırılıklar ve tahliye taahhüdü başlıca nedenlerdir.",
          },
        ]}
      />
      <CityPageWrapper city="kirikkale" />
    </>
  );
}
