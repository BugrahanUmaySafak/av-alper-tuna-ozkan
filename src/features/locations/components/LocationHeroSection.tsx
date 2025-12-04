import Image from "next/image";
import Section from "@/components/section/Section";
import Container from "@/components/container/Container";
import { Badge } from "@/components/ui/badge";

type LocationHeroSectionProps = {
  title: string;
  city: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
};

export default function LocationHeroSection({
  title,
  city,
  intro,
  heroImage,
  heroAlt,
}: LocationHeroSectionProps) {
  return (
    <Section>
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {title}
            </h1>
            <Badge className="w-fit bg-blue-900 text-blue-100">
              {city} taşınmaz uyuşmazlıkları
            </Badge>
            <p className="text-gray-700 leading-relaxed">{intro}</p>
          </div>
          <div className="relative h-72 md:h-80 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src={heroImage}
              alt={heroAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
              priority
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
