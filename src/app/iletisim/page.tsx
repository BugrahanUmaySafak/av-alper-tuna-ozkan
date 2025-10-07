import ContactWrapper from "@/features/iletisim/containers/ContactWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Özkan Hukuk Danışmanlık",
  description:
    "Özkan Hukuk Danışmanlık ile iletişime geçin. Profesyonel hukuk danışmanlığı için bize ulaşın.",
};

export default function Contact() {
  return <ContactWrapper />;
}
