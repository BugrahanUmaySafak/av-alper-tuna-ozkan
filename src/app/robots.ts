import type { MetadataRoute } from "next";

export const revalidate = 3600;

export default function robots(): MetadataRoute.Robots {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alpertunaozkan.com";
  const sitemapUrl = new URL("/sitemap.xml", siteUrl).toString();
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: sitemapUrl,
  };
}
