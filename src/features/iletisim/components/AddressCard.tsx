import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactInfoCard from "./ContactInfoCard";

type AddressCardProps = {
  title: string;
  lines: string[];
  mapsLink: string;
  directionsLink: string;
};

export default function AddressCard({
  title,
  lines,
  mapsLink,
  directionsLink,
}: AddressCardProps) {
  return (
    <ContactInfoCard title={title} icon={MapPin}>
      <div className="text-center space-y-2">
        <address className="not-italic font-medium text-foreground">
          {lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
        <div className="flex justify-center gap-2 flex-wrap">
          <Button asChild size="sm" variant="outline">
            <a href={mapsLink} target="_blank" rel="noopener noreferrer">
              Haritada Aç
            </a>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <a href={directionsLink} target="_blank" rel="noopener noreferrer">
              Yol Tarifi
            </a>
          </Button>
        </div>
      </div>
    </ContactInfoCard>
  );
}
