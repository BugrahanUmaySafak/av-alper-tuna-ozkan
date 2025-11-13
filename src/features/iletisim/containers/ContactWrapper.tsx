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

      <Section className="py-12 lg:py-16">
        <Container>
          <CityContactCTA />
        </Container>
      </Section>

      <Section className="py-12 lg:py-16">
        <Container>
          <ContactDetails />
        </Container>
      </Section>

      <ContactForm />
    </>
  );
}
