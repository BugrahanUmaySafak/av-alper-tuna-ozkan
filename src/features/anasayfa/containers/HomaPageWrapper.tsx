import { Separator } from "@/components/ui/separator";
import HeroSlider from "@/features/anasayfa/components/HeroSlider";
import React, { Suspense } from "react";
import Container from "@/components/container/Container";

const ServicesPreview = React.lazy(
  () => import("@/features/anasayfa/components/ServicesPreview")
);

const InformativeContentWrapper = React.lazy(
  () => import("@/components/shared/InformativeContentWrapper")
);

const HomeContact = React.lazy(
  () => import("@/features/anasayfa/components/HomeContact")
);

export default function HomePageWrapper() {
  return (
    <>
      <HeroSlider />

      <Suspense fallback={<div>Yükleniyor...</div>}>
        <ServicesPreview />
      </Suspense>

      <Container>
        <Separator />
      </Container>

      <Suspense fallback={<div>Yükleniyor...</div>}>
        <InformativeContentWrapper
          videoTake={2}
          articleTake={2}
          upperContent="Hukuki gelişmeler ve pratik çözümler hakkında uzman perspektifiyle hazırlanmış içeriklere erişin."
          lowerContent="Hukuki gelişmeleri takip etmek ve doğru bilgiye ulaşmak için düzenli olarak hazırladığımız içerikleri inceleyebilirsiniz."
        />
      </Suspense>

      <Container>
        <Separator />
      </Container>

      <Suspense fallback={<div>Yükleniyor...</div>}>
        <HomeContact />
      </Suspense>
    </>
  );
}
