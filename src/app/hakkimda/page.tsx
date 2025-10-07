import AboutWrapper from "@/features/hakkimda/containers/AboutWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Özkan Hukuk Danışmanlık - Hakkımda",
  description:
    "Özkan Hukuk Danışmanlık olarak, müvekkillerimize güvenilir ve etkili hukuki çözümler sunuyoruz.",
};

export default function Hakkimda() {
  return <AboutWrapper />;
}
