import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cityList } from "@/features/gayrimenkul-avukati/data/cities";

export default function CityContactCTA() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {cityList.map((city) => (
        <Card
          key={city.slug}
          className="p-6 flex flex-col justify-between border border-gray-200 shadow-sm"
        >
          <div className="space-y-3">
            <p className="text-sm font-semibold text-blue-700">
              {city.name} Ofisi
            </p>
            <h3 className="text-xl font-semibold text-gray-900">
              {city.heroTitle}
            </h3>
            <p className="text-gray-600">{city.heroDescription}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button asChild>
              <Link href={city.slug} prefetch={false}>
                Detayları Gör
              </Link>
            </Button>
            <Button asChild variant="outline">
              <a
                href={city.address.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Haritada Aç
              </a>
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
