// src/app/faaliyet-alanlarim/page.tsx
import ActivityPageWrapper from "@/features/faaliyet-alanlarim/containers/ActivityPageWrapper";
import { buildMetadata } from "@/config/seo";

export const metadata = buildMetadata({
  title: "Faaliyet Alanları",
  description:
    "Kırıkkale ve Ankara gayrimenkul avukatı olarak tapu, kira, inşaat, miras ve kamulaştırma uyuşmazlıklarında uçtan uca hizmet sunuyoruz.",
  path: "/faaliyet-alanlarim",
  keywords: [
    "gayrimenkul dava avukatı",
    "kentsel dönüşüm hukuku",
    "kamulaştırmasız el atma",
  ],
});

export const revalidate = 900;
export const dynamic = "force-static";

export default function FaaliyetAlanlarim() {
  return <ActivityPageWrapper />;
}
