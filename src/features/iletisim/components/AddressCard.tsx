import { MapPin } from "lucide-react";
import ContactInfoCard from "./ContactInfoCard";

type AddressCardProps = {
  title: string;
  lines: string[];
  mapsLink: string;
};

export default function AddressCard({
  title,
  lines,
  mapsLink,
}: AddressCardProps) {
  return (
    <ContactInfoCard title={title} icon={MapPin}>
      <div className="text-center space-y-2">
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block not-italic font-medium text-foreground hover:text-primary transition-colors"
        >
          {lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </a>
      </div>
    </ContactInfoCard>
  );
}
