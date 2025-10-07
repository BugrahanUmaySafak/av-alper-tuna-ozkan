"use client";

import PageHeader from "@/components/PageHeader";
import dynamic from "next/dynamic";

const ContactMap = dynamic(
  () => import("@/features/iletisim/components/ContactMap"),
  { ssr: false }
);

export default function ContactWrapper() {
  return (
    <>
      <PageHeader
        title="İletişim"
        description="Hukuki sorularınız için hemen iletişime geçin."
      />

      <ContactMap />
    </>
  );
}
