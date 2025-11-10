import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/seo";

export const revalidate = 3600;

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = absoluteUrl("/sitemap.xml");
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: sitemapUrl,
  };
}
