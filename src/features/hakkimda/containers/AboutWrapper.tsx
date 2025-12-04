import PageHeader from "@/components/page-header/PageHeader";
import AboutMe from "../components/AboutMe";
import InformativeContentWrapper from "@/components/shared/InformativeContentWrapper";
import Container from "@/components/container/Container";
import { Separator } from "@/components/ui/separator";
import CitiesPromo from "@/components/cities/CitiesPromo";

export default function AboutWrapper() {
  return (
    <>
      <PageHeader
        title="Hakkımda"
        description="Gayrimenkul hukukunda uzmanlık ve güven."
      />
      <AboutMe />

      <Container>
        <Separator />
      </Container>

      <CitiesPromo />

      <Container>
        <Separator />
      </Container>

      <InformativeContentWrapper videoTake={1} articleTake={1} />
    </>
  );
}
