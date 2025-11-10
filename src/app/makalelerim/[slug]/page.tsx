// src/app/makalelerim/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleDetailWrapper from "@/features/makalelerim/containers/ArticleDetailWrapper";
import {
  getArticleBySlug,
  getArticles,
} from "@/features/makalelerim/actions/articles";
import { absoluteUrl, buildMetadata } from "@/config/seo";

type ParamsPromise = Promise<{ slug: string }>;

export const revalidate = 900;

/* ---------- helpers ---------- */
function normalizeSpaces(s: string) {
  return s.trim().replace(/\s+/g, " ");
}
function clampDescription(input?: string, max = 155) {
  if (!input) return undefined;
  const s = normalizeSpaces(input);
  if (s.length <= max) return s; 
  const cut = s.slice(0, max - 1);
  const i = cut.lastIndexOf(" ");
  return (i > 120 ? cut.slice(0, i) : cut) + "…";
}
function minutesToISO(minutes?: number) {
  return minutes && minutes > 0 ? `PT${Math.round(minutes)}M` : undefined;
}

/* ---------- SSG ---------- */
export async function generateStaticParams() {
  try {
    const articles = await getArticles();
    return articles.map((article) => ({ slug: article.slug }));
  } catch (error) {
    console.warn("[makalelerim][slug] Failed to prebuild articles:", error);
    return [];
  }
}

/* ---------- Metadata ---------- */
export async function generateMetadata({
  params,
}: {
  params: ParamsPromise;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return buildMetadata({
      title: "Makale Bulunamadı",
      description: "Aradığınız makale yayından kaldırılmış olabilir.",
      path: `/makalelerim/${slug}`,
      noIndex: true,
    });
  }

  const { title, image, createdAt, updatedAt, summary } = article;
  const description = summary ? clampDescription(summary) : title;
  const path = `/makalelerim/${slug}`;
  const url = absoluteUrl(path);

  // buildMetadata: keywords gönderilmez; meta keywords kaldırıldı.
  const base = buildMetadata({
    title,
    description,
    path,
    type: "article",
    images: image?.url
      ? [{ url: image.url, width: 1200, height: 630, alt: image.alt || title }]
      : undefined,
  });

  return {
    ...base,
    alternates: { canonical: url, languages: { tr: url } },
    robots: { index: true, follow: true },
    openGraph: {
      ...base.openGraph,
      type: "article",
      url,
      publishedTime: createdAt,
      modifiedTime: updatedAt ?? createdAt,
      // OG tags alanına keywords/tags eklenmiyor
    },
    twitter: {
      card: "summary_large_image",
      title: (base.title as string) || title,
      description: description,
      images: image?.url ? [image.url] : undefined,
      site: "@alpertunaozkan",
      creator: "@alpertunaozkan",
    },
  };
}

/* ---------- Page ---------- */
export default async function SlugPage({ params }: { params: ParamsPromise }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const canonicalUrl = absoluteUrl(`/makalelerim/${slug}`);

  const estimatedWordCount = article.content
    ? article.content
        .replace(/<[^>]+>/g, " ")
        .split(/\s+/)
        .filter(Boolean).length
    : undefined;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: clampDescription(article.summary || article.title),
    image: article.image?.url ? [absoluteUrl(article.image.url)] : undefined,
    datePublished: article.createdAt,
    dateModified: article.updatedAt ?? article.createdAt,
    url: canonicalUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    author: [{ "@type": "Person", name: "Alper Tuna Özkan" }],
    publisher: {
      "@type": "Organization",
      name: "Özkan Hukuk & Danışmanlık",
      logo: { "@type": "ImageObject", url: absoluteUrl("/logo/logo.png") },
    },
    articleSection: article.category?.name,
    // keywords kaldırıldı
    wordCount: estimatedWordCount,
    timeRequired: minutesToISO(article.readingMinutes),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Makaleler",
        item: absoluteUrl("/makalelerim"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ArticleDetailWrapper slug={slug} initialArticle={article} />
    </>
  );
}
