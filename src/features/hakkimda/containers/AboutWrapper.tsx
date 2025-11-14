import PageHeader from "@/components/page-header/PageHeader";
import AboutMe from "../components/AboutMe";
import InformativeContentWrapper from "@/components/shared/InformativeContentWrapper";
import CityLinks from "../components/CityLinks";

export default function AboutWrapper() {
  return (
    <>
      <PageHeader
        title="Hakkımda"
        description="Gayrimenkul hukukunda uzmanlık ve güven."
      />
      <AboutMe />

      <CityLinks />

      <InformativeContentWrapper videoTake={1} articleTake={1} />
    </>
  );
}
