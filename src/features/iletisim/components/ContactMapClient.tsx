"use client";

import dynamic from "next/dynamic";
import Section from "@/components/section/Section";
import Container from "@/components/container/Container";

// ContactMap'i client'ta, SSR kapalı ve skeleton ile yükle
const ContactMap = dynamic(
  () => import("@/features/iletisim/components/ContactMap"),
  {
    ssr: false,
    loading: () => (
      <Section>
        <Container>
          <div className="h-96 w-full rounded-xl bg-gray-100 animate-pulse border border-gray-200" />
        </Container>
      </Section>
    ),
  }
);

export default function ContactMapClient() {
  return <ContactMap />;
}
