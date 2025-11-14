import { Phone, Mail, Clock, Users } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import ContactInfoCard from "./ContactInfoCard";
import AddressCard from "./AddressCard";

export default function ContactDetails() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
      <AddressCard
        title="Ankara Adres"
        lines={[
          "Aşağı Öveçler Mahallesi 1328. Cadde",
          "Demirağ Apartmanı, No: 14/8",
          "Çankaya / Ankara",
        ]}
        mapsLink="https://www.google.com/maps/search/?api=1&query=Aşağı+Öveçler+Mahallesi+1328.+Cadde+Demirağ+Apt.+No:+14/8+Çankaya+ANKARA"
        directionsLink="https://www.google.com/maps/dir/?api=1&destination=39.894828,32.840317"
      />

      <AddressCard
        title="Kırıkkale Adres"
        lines={[
          "Yaylacık Mahallesi Ulubatlıhasan Caddesi",
          "Aydınlık Apartmanı, No: 22/9",
          "Merkez / Kırıkkale",
        ]}
        mapsLink="https://www.google.com/maps/place/Avukat+Alper+Tuna+Özkan/@39.8406944,33.4994228,17z/data=!3m1!4b1"
        directionsLink="https://www.google.com/maps/dir/?api=1&destination=39.8413091,33.5002971"
      />

      <ContactInfoCard title="Telefon" icon={Phone} iconColor="text-green-600">
        <div className="text-center pt-2">
          <a
            href="tel:+905340181933"
            className="inline-flex items-center justify-center hover:text-primary transition-colors duration-200 text-lg md:text-xl font-semibold text-foreground"
          >
            +90 (534) 018 1933
          </a>
        </div>
      </ContactInfoCard>

      <ContactInfoCard title="E-posta" icon={Mail} iconColor="text-purple-600">
        <div className="text-center pt-2">
          <a
            href="mailto:av.alpertunaozkan@gmail.com"
            className="inline-flex items-center justify-center hover:text-primary transition-colors duration-200 text-base md:text-lg font-semibold text-foreground break-all"
          >
            av.alpertunaozkan@gmail.com
          </a>
        </div>
      </ContactInfoCard>

      <ContactInfoCard
        title="Çalışma Saatleri"
        icon={Clock}
        iconColor="text-orange-600"
      >
        <div className="text-center pt-2 space-y-1">
          <p className="font-semibold text-foreground text-base md:text-lg">
            Pazartesi - Cuma: 09:00 - 18:00
          </p>
          <p className="text-muted-foreground text-xs md:text-sm">
            Hafta sonu: Kapalı
          </p>
        </div>
      </ContactInfoCard>

      <ContactInfoCard
        title="Sosyal Medya"
        icon={Users}
        iconColor="text-indigo-600"
      >
        <div className="flex justify-center gap-3 pt-3 flex-wrap">
          {[
            {
              href: "https://www.instagram.com/av.alpertunaozkan",
              icon: faInstagram,
              label: "Instagram",
              className:
                "bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
            },
            {
              href: "https://x.com/alpertunaozkan",
              icon: faXTwitter,
              label: "Twitter / X",
              className: "bg-slate-900 hover:bg-slate-800",
            },
            {
              href: "https://linkedin.com",
              icon: faLinkedin,
              label: "LinkedIn",
              className: "bg-blue-700 hover:bg-blue-800",
            },
            {
              href: "https://facebook.com",
              icon: faFacebook,
              label: "Facebook",
              className: "bg-blue-600 hover:bg-blue-700",
            },
          ].map(({ href, icon, label, className }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className={`w-11 h-11 ${className} rounded-xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg`}
            >
              <FontAwesomeIcon icon={icon} className="w-5 h-5" />
            </a>
          ))}
        </div>
      </ContactInfoCard>
    </div>
  );
}
