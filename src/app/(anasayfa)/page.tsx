import HomePageWrapper from "@/features/anasayfa/containers/HomaPageWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Özkan Hukuk Danışmanlık - Anasayfa",
  description: "Özkan Hukuk Danışmanlık & Anasayfa",
};

export default function Anasayfa() {
  return <HomePageWrapper />;
}
