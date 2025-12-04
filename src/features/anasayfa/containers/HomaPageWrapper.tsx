import { Separator } from "@/components/ui/separator";
import HeroSlider from "@/features/anasayfa/components/HeroSlider";
import Container from "@/components/container/Container";
import ServicesPreview from "@/features/anasayfa/components/ServicesPreview";
import InformativeContentWrapper from "@/components/shared/InformativeContentWrapper";
import HomeContact from "@/features/anasayfa/components/HomeContact";
import LocationsPromo from "../components/LocationsPromo";

export default function HomePageWrapper() {
  return (
    <>
      <HeroSlider />

      <ServicesPreview />

      <Container>
        <Separator />
      </Container>

      <LocationsPromo />

      <Container>
        <Separator />
      </Container>

      <InformativeContentWrapper
        videoTake={2}
        articleTake={2}
        upperContent="Hukuki gelişmeler ve pratik çözümler hakkında uzman perspektifiyle hazırlanmış içeriklere erişin."
        lowerContent="Hukuki gelişmeleri takip etmek ve doğru bilgiye ulaşmak için düzenli olarak hazırladığımız içerikleri inceleyebilirsiniz."
      />

      <Container>
        <Separator />
      </Container>

      <HomeContact />
    </>
  );
}
