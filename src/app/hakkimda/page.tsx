import AboutWrapper from "@/features/hakkimda/containers/AboutWrapper";
import { buildMetadata } from "@/config/seo";
import { serviceLocationKeywords } from "@/data/service";

export const metadata = buildMetadata({
  title: "Avukat Alper Tuna Özkan",
  description:
    "Kırıkkale doğumlu Av. Alper Tuna Özkan, Ankara ve İç Anadolu’da gayrimenkul hukuku, inşaat ve kira uyuşmazlıklarında stratejik danışmanlık sağlar.",
  path: "/hakkimda",
  keywords: [
    "avukat alper tuna özkan",
    "Kırıkkale avukat",
    "Ankara gayrimenkul hukuku",
    ...serviceLocationKeywords,
  ],
});

export const revalidate = 900;
export const dynamic = "force-static";

export default function Hakkimda() {
  return <AboutWrapper />;
}
