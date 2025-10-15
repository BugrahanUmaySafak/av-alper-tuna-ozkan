"use client";

import PageHeader from "@/components/page-header/PageHeader";
import dynamic from "next/dynamic";
import Container from "@/components/container/Container";
import { Separator } from "@/components/ui/separator";
import ContactForm from "../components/ContactForm";
import ContactDetails from "../components/ContactDetails";

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

      <ContactForm />

      <Container>
        <Separator />
      </Container>

      <ContactDetails />

      <Container>
        <Separator />
      </Container>

      <ContactMap />
    </>
  );
}
