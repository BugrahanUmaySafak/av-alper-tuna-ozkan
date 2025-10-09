import { Separator } from "@/components/ui/separator";
import HeroSlider from "@/features/anasayfa/components/HeroSlider";
import React, { Suspense } from "react";
import { yaziData as makaleler, videoData as videos } from "@/data/articles";
import Container from "@/components/Container";

const ServicesPreview = React.lazy(
  () => import("@/features/anasayfa/components/ServicesPreview")
);

const InformationContent = React.lazy(
  () => import("@/features/anasayfa/components/InformationContent")
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
        <InformationContent videos={videos} makaleler={makaleler} />
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
