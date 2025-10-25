import PageHeader from "@/components/page-header/PageHeader";
import AboutMe from "../components/AboutMe";
import InformativeContentWrapper from "@/components/shared/InformativeContentWrapper";

export default function AboutWrapper() {
  return (
    <>
      <PageHeader
        title="Hakkımda"
        description="Gayrimenkul hukukunda uzmanlık ve güven."
      />
      <AboutMe />
      <InformativeContentWrapper videoTake={1} articleTake={1} />
    </>
  );
}
