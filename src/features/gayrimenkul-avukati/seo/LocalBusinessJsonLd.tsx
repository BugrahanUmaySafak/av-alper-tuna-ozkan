// ============================================================================
// Şehre özgü LegalService/LocalBusiness JSON-LD
// ============================================================================

import { seoConfig } from "@/config/seo";
import type { CityContent } from "@/features/gayrimenkul-avukati/data/cities";

export default function LocalBusinessJsonLd({ city }: { city: CityContent }) {
  const phoneE164 = "+905340181933"; // JSON-LD için E.164

  const json = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${seoConfig.siteName} – ${city.name}`,
    url: `https://www.alpertunaozkan.com${city.slug}`,
    image: `https://www.alpertunaozkan.com${city.heroImage}`,
    telephone: phoneE164,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: city.address.lines.join(", "),
      addressLocality: city.name === "Ankara" ? "Çankaya" : "Merkez",
      addressRegion: city.name,
      postalCode: city.name === "Ankara" ? "06460" : "71100",
      addressCountry: "TR",
    },
    geo: { "@type": "GeoCoordinates", latitude: city.coords[0], longitude: city.coords[1] },
    hasMap: city.address.mapsLink,
    areaServed: [{ "@type": "City", name: city.name }],
    sameAs: [
      "https://www.instagram.com/alpertunaozkan",
      "https://www.youtube.com/@alpertunaozkan",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${city.name.toLocaleLowerCase("tr-TR")} gayrimenkul avukatı hizmeti`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
