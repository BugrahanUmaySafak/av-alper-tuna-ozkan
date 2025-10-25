import AboutWrapper from "@/features/hakkimda/containers/AboutWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Özkan Hukuk Danışmanlık - Hakkımda",
  description:
    "Özkan Hukuk Danışmanlık olarak, müvekkillerimize güvenilir ve etkili hukuki çözümler sunuyoruz.",
};

export const revalidate = 900;
export const dynamic = "force-static";

export default function Hakkimda() {
  return <AboutWrapper />;
}
