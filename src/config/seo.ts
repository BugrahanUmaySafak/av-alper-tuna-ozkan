// ============================================================================
// SEO config + buildMetadata + (YENİ) organizationJsonLd (tarafsız Organization)
// ============================================================================

import type { Metadata } from "next";
import { serviceLocationKeywords } from "@/data/service";

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
    ...serviceLocationKeywords,
  ],
  defaultOgImage: {
    url: "/alpertunaozkan-homePage-contact.webp",
    width: 1920,
    height: 1080,
    alt: "Özkan Hukuk & Danışmanlık",
  },
} as const;

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

  // keywords'i daha derli toplu tutalım (ilk 20 özgün anahtar kelime)
  const mergedKeywords = Array.from(
    new Set([...seoConfig.baseKeywords, ...keywords])
  ).slice(0, 20);

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

// ============================================================================
// Global Organization JSON-LD (tarafsız): adres/NAP içermez, çakışma yaratmaz
// Şehir sayfalarında LocalBusiness/LegalService JSON-LD NAP sinyallerini verir.
// ============================================================================

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization", // Kurum düzeyi; NAP yok (adres şehir sayfalarına ait)
  name: seoConfig.siteName,
  url: seoConfig.siteUrl,
  logo: absoluteUrl("/logo/logo.svg"),
  image: absoluteUrl(seoConfig.defaultOgImage.url),
  sameAs: [
    "https://www.instagram.com/alpertunaozkan",
    "https://www.youtube.com/@alpertunaozkan",
  ],
  // İsterseniz iletişim için tarafsız bir contactPoint ekleyebilirsiniz:
  // "contactPoint": [{
  //   "@type": "ContactPoint",
  //   "contactType": "customer service",
  //   "email": "av.alpertunaozkan@gmail.com",
  //   "availableLanguage": ["tr"]
  // }]
} as const;
