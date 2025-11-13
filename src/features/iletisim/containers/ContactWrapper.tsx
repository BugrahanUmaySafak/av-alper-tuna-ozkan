import PageHeader from "@/components/page-header/PageHeader";
import Container from "@/components/container/Container";
import Section from "@/components/section/Section";
import ContactForm from "../components/ContactForm";
import ContactDetails from "../components/ContactDetails";
import CityContactCTA from "../components/CityContactCTA";

export default function ContactWrapper() {
  return (
    <>
      <PageHeader
        title="İletişim"
        description="Hukuki sorularınız için hemen iletişime geçin."
      />

      <Section>
        <Container>
          <CityContactCTA />
        </Container>
      </Section>

      <Section>
        <Container>
          <ContactDetails />
        </Container>
      </Section>

      <ContactForm />
    </>
  );
}
