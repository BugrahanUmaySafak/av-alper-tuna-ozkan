import ContactWrapper from "@/features/iletisim/containers/ContactWrapper";
import { buildMetadata } from "@/config/seo";
import { serviceLocationKeywords } from "@/data/service";

export const metadata = buildMetadata({
  title: "İletişim",
  description:
    "Kırıkkale ve Ankara gayrimenkul avukatı olarak tapu, kira, inşaat ve kamulaştırma uyuşmazlıkları için randevu ve danışmanlık talep edin.",
  path: "/iletisim",
  keywords: [
    "gayrimenkul avukatı iletişim",
    "hukuki danışmanlık randevusu",
    ...serviceLocationKeywords,
  ],
});

// SSG + bfcache dostu
export const revalidate = 900;
export const dynamic = "force-static";

export default function Iletisim() {
  return <ContactWrapper />;
}
