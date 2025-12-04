import PageHeader from "@/components/page-header/PageHeader";
import Container from "@/components/container/Container";
import Section from "@/components/section/Section";
import ContactForm from "../components/ContactForm";
import ContactDetails from "../components/ContactDetails";
import ContactMapClient from "../components/ContactMapClient";
import CitiesPromo from "@/components/cities/CitiesPromo";
import { Separator } from "@/components/ui/separator";

export default function ContactWrapper() {
  return (
    <>
      <PageHeader
        title="İletişim"
        description="Hukuki sorularınız için hemen iletişime geçin."
      />

      <Section>
        <Container>
          <ContactDetails />
        </Container>
      </Section>

      <Container>
        <Separator />
      </Container>

      <CitiesPromo />

      <Container>
        <Separator />
      </Container>

      <ContactMapClient />

      <Container>
        <Separator />
      </Container>

      <ContactForm />
    </>
  );
}
