import PageHeader from "@/components/page-header/PageHeader";
import Container from "@/components/container/Container";
import Section from "@/components/section/Section";
import ContactForm from "../components/ContactForm";
import ContactDetails from "../components/ContactDetails";
import ContactMapClient from "../components/ContactMapClient";

export default function ContactWrapper() {
  return (
    <>
      <PageHeader
        title="İletişim"
        description="Hukuki sorularınız için hemen iletişime geçin."
      />

      {/* İletişim kartları */}
      <Section>
        <Container>
          <ContactDetails />
        </Container>
      </Section>

      <ContactMapClient />

      {/* Form */}
      <Section>
        <Container>
          <ContactForm />
        </Container>
      </Section>
    </>
  );
}
