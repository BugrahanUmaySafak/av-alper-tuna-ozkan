import type { Metadata } from "next";
import ArticlesWrapper from "@/features/makalelerim/containers/ArticlesWrapper";
import { getArticles } from "@/features/makalelerim/actions/articles";
import type { Article } from "@/features/makalelerim/types";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alpertunaozkan.com";
const PAGE_URL = `${SITE_URL}/makalelerim`;

export async function generateMetadata(): Promise<Metadata> {
  const articles: Article[] = await getArticles();
  const summaryText = articles
    .map((a) => a.summary || a.title)
    .filter(Boolean)
    .slice(0, 3)
    .join(" · ");

  return {
    title: "Gayrimenkul Hukuku Makaleleri",
    description: summaryText || "Gayrimenkul hukuku üzerine güncel makaleler.",
    alternates: { canonical: PAGE_URL },
    openGraph: {
      type: "website",
      url: PAGE_URL,
      title: "Gayrimenkul Hukuku Makaleleri",
      description: summaryText || "Güncel makaleler.",
      images: [
        { url: `${SITE_URL}/og/og-articles.jpg`, width: 1200, height: 630 },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Gayrimenkul Hukuku Makaleleri",
      description: summaryText || "Güncel makaleler.",
      images: [`${SITE_URL}/og/og-articles.jpg`],
    },
  };
}

export default async function Makalelerim() {
  const items: Article[] = await getArticles();

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/makalelerim/${a.slug}`,
      item: {
        "@type": "Article",
        "@id": `${SITE_URL}/makalelerim/${a.slug}#article`,
        headline: a.title,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <ArticlesWrapper initialItems={items} />
    </>
  );
}
