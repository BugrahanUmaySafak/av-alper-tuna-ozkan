import type { Metadata } from "next";

const FALLBACK_URL = "https://www.alpertunaozkan.com";

export const seoConfig = {
  siteName: "Özkan Hukuk & Danışmanlık",
  owner: "Av. Alper Tuna Özkan",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_URL,
  shortName: "Alper Tuna Özkan",
  defaultTitle: "Kırıkkale ve Ankara Gayrimenkul Avukatı | Özkan Hukuk",
  defaultDescription:
    "Av. Alper Tuna Özkan, Kırıkkale ve Ankara’da gayrimenkul, inşaat, kira ve kamulaştırma davalarında stratejik hukuki danışmanlık sunar.",
  twitterHandle: "@alpertunaozkan",
  baseKeywords: [
    "Kırıkkale gayrimenkul avukatı",
    "Ankara gayrimenkul avukatı",
    "gayrimenkul avukatı",
    "inşaat hukuku",
    "kira hukuku",
    "kamulaştırma hukuku",
    "Özkan Hukuk",
  ],
  defaultOgImage: {
    url: "/alpertunaozkan-homePage-contact.webp",
    width: 1920,
    height: 1080,
    alt: "Özkan Hukuk & Danışmanlık",
  },
};

export type BuildMetadataOptions = {
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string;
  images?: { url: string; width?: number; height?: number; alt?: string }[];
  type?: "website" | "article" | "profile";
  alternates?: Metadata["alternates"];
  noIndex?: boolean;
};

export function absoluteUrl(path = "/"): string {
  try {
    return new URL(path, seoConfig.siteUrl).toString();
  } catch {
    return new URL(path, FALLBACK_URL).toString();
  }
}

export function buildMetadata({
  title,
  description = seoConfig.defaultDescription,
  keywords = [],
  path = "/",
  images,
  type = "website",
  alternates,
  noIndex = false,
}: BuildMetadataOptions = {}): Metadata {
  const canonical = absoluteUrl(path);
  const mergedKeywords = Array.from(
    new Set([...seoConfig.baseKeywords, ...keywords])
  );

  const resolvedImages = (images ?? [seoConfig.defaultOgImage]).map((img) => ({
    ...img,
    url: absoluteUrl(img.url),
  }));

  const fullTitle = title
    ? `${title} | ${seoConfig.siteName}`
    : seoConfig.defaultTitle;

  return {
    title: fullTitle,
    description,
    keywords: mergedKeywords,
    alternates: { canonical, ...alternates },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type,
      url: canonical,
      siteName: seoConfig.siteName,
      title: fullTitle,
      description,
      images: resolvedImages,
    },
    twitter: {
      card: "summary_large_image",
      site: seoConfig.twitterHandle,
      creator: seoConfig.twitterHandle,
      title: fullTitle,
      description,
      images: resolvedImages.map((img) => img.url),
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: seoConfig.siteName,
  image: absoluteUrl(seoConfig.defaultOgImage.url),
  url: seoConfig.siteUrl,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Fabrikalar Mah. Ulubatlı Hasan Cad. No:22",
    addressLocality: "Kırıkkale",
    addressRegion: "Kırıkkale",
    postalCode: "71100",
    addressCountry: "TR",
  },
  areaServed: [
    { "@type": "City", name: "Kırıkkale" },
    { "@type": "City", name: "Ankara" },
  ],
  telephone: "+903188151010",
  sameAs: [
    "https://www.instagram.com/alpertunaozkan",
    "https://www.youtube.com/@alpertunaozkan",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Kırıkkale gayrimenkul avukatı hizmeti",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Ankara gayrimenkul avukatı hizmeti",
      },
    },
  ],
};
