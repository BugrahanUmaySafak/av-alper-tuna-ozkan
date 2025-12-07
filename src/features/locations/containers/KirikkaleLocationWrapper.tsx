import Container from "@/components/container/Container";
import { Separator } from "@/components/ui/separator";
import {
  kirikkaleLocationPageData,
  type LocationPageData,
} from "@/data/LocationServices";
import LocationHeroSection from "../components/LocationHeroSection";
import LocationTableOfContents, {
  TocItem,
} from "../components/LocationTableOfContents";
import LocationServicesSection from "../components/LocationServicesSection";
import LocationProcessSection from "../components/LocationProcessSection";
import LocationFaqSection from "../components/LocationFaqSection";
import LocationOfficeSection from "../components/LocationOfficeSection";
import PageHeader from "@/components/page-header/PageHeader";
import ContactMapClient from "@/features/iletisim/components/ContactMapClient";

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[ç]/g, "c")
    .replace(/[ğ]/g, "g")
    .replace(/[ı]/g, "i")
    .replace(/[ö]/g, "o")
    .replace(/[ş]/g, "s")
    .replace(/[ü]/g, "u")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const tocLabels = [
  "Hizmetlerimiz",
  "Süreç & Yol Haritası",
  "Sık Sorulan Sorular",
  "Ofis İletişimi",
] as const;

const tocItems: TocItem[] = tocLabels.map((label) => ({
  label,
  id: slugify(label),
}));

const [servicesToc, processToc, faqToc, officeToc] = tocItems;

export default function KirikkaleLocationWrapper({
  data,
}: {
  data: LocationPageData;
}) {
  return (
    <>
      <PageHeader
        title="Kırıkkale Gayrimenkul Avukatı"
        description={kirikkaleLocationPageData.headerDescription}
      />
      <LocationHeroSection
        title={data.title}
        city={data.city}
        intro={data.intro}
        heroImage={data.heroImage}
        heroAlt={data.heroAlt}
      />

      <Container>
        <Separator />
      </Container>

      <LocationTableOfContents items={tocItems} />

      <LocationServicesSection
        id={servicesToc.id}
        services={data.services}
      />

      <Container>
        <Separator />
      </Container>

      <LocationProcessSection id={processToc.id} steps={data.process} />

      <Container>
        <Separator />
      </Container>

      <LocationFaqSection id={faqToc.id} city={data.city} faqs={data.faqs} />

      <Container>
        <Separator />
      </Container>

      <LocationOfficeSection
        id={officeToc.id}
        city={data.city}
        addressLines={data.addressLines}  
        phone={data.phone}
        phoneDisplay={data.phoneDisplay}
        email={data.email}
        workingHours={data.workingHours}
        mapEmbed={data.mapEmbed}
        mapPlaceUrl={data.mapPlaceUrl}
        directionsLink={data.directionsLink}
        mapImage={{
          src: "/kitaplik.webp",
          alt: "Kırıkkale gayrimenkul avukatı ofisinde kitaplık",
          width: 800,
          height: 1020,
        }}
      />

      <Container>
        <Separator />
      </Container>

      <ContactMapClient />
    </>
  );
}
