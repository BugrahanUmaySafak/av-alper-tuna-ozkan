import PageHeader from "@/components/PageHeader";
import AboutMe from "../components/AboutMe";
import AboutInformationContent from "../components/AboutInformationContent";
import { yaziData as makaleler, videoData as videos } from "@/data/articles";

export default function AboutWrapper() {
  return (
    <>
      <PageHeader
        title="Hakkımda"
        description="Gayrimenkul hukukunda uzmanlık ve güven.
"
      />
      <AboutMe />
      <AboutInformationContent videos={videos} makaleler={makaleler} />
    </>
  );
}
