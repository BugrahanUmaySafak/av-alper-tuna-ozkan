import PageHeader from "@/components/page-header/PageHeader";
import AboutMe from "../components/AboutMe";
import InformativeContentWrapper from "@/components/shared/InformativeContentWrapper";
import CityLinks from "../components/CityLinks";
import Container from "@/components/container/Container";
import { Separator } from "@/components/ui/separator";

export default function AboutWrapper() {
  return (
    <>
      <PageHeader
        title="Hakkımda"
        description="Gayrimenkul hukukunda uzmanlık ve güven."
      />
      <AboutMe />

      <CityLinks />

      <Container>
        <Separator />
      </Container>

      <InformativeContentWrapper videoTake={1} articleTake={1} />
    </>
  );
}
