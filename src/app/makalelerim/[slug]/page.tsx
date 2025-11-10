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

export async function generateStaticParams() {
  try {
    const articles = await getArticles();
    return articles.map((article) => ({ slug: article.slug }));
  } catch (error) {
    console.warn("[makalelerim][slug] Failed to prebuild articles:", error);
    return [];
  }
}

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

  const { title, image, keywords, createdAt, updatedAt, summary } = article;
  const description = summary || title;
  const path = `/makalelerim/${slug}`;
  const baseMetadata = buildMetadata({
    title,
    description,
    path,
    keywords,
    type: "article",
    images: image?.url
      ? [
          {
            url: image.url,
            width: 1200,
            height: 630,
            alt: image.alt,
          },
        ]
      : undefined,
  });

  return {
    ...baseMetadata,
    openGraph: {
      ...baseMetadata.openGraph,
      type: "article",
      publishedTime: createdAt,
      modifiedTime: updatedAt,
      authors: ["Alper Tuna Özkan"],
      tags: keywords,
    },
  };
}

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
    description: article.summary || article.title,
    image: article.image?.url ? [absoluteUrl(article.image.url)] : undefined,
    datePublished: article.createdAt,
    dateModified: article.updatedAt,
    url: canonicalUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    author: [{ "@type": "Person", name: "Alper Tuna Özkan" }],
    publisher: {
      "@type": "Organization",
      name: "Özkan Hukuk & Danışmanlık",
      logo: { "@type": "ImageObject", url: absoluteUrl("/logo/logo.png") },
    },
    articleSection: article.category?.name,
    keywords: article.keywords?.join(", "),
    wordCount: estimatedWordCount,
    timeRequired: article.readingMinutes
      ? `PT${Math.max(1, Math.round(article.readingMinutes))}M`
      : undefined,
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
