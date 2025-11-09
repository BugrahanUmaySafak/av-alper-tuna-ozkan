// src/app/makalelerim/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleDetailWrapper from "@/features/makalelerim/containers/ArticleDetailWrapper";
import { getArticleBySlug } from "@/features/makalelerim/actions/articles";
import { absoluteUrl, buildMetadata } from "@/config/seo";

type ParamsPromise = Promise<{ slug: string }>;

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
    },
  };
}

export default async function SlugPage({ params }: { params: ParamsPromise }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary || article.title,
    image: article.image?.url ? [absoluteUrl(article.image.url)] : undefined,
    datePublished: article.createdAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/makalelerim/${slug}`),
    },
    author: [{ "@type": "Person", name: "Alper Tuna Özkan" }],
    publisher: {
      "@type": "Organization",
      name: "Özkan Hukuk & Danışmanlık",
      logo: { "@type": "ImageObject", url: absoluteUrl("/logo/logo.png") },
    },
    keywords: article.keywords?.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleDetailWrapper slug={slug} initialArticle={article} />
    </>
  );
}
