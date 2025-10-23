// app/makalelerim/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleDetailWrapper from "@/features/makalelerim/containers/ArticleDetailWrapper";
import { getArticleBySlug } from "@/features/makalelerim/actions/articles";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ozkanhukukdanismanlik.com";

function absoluteUrl(pathOrUrl: string) {
  try {
    return new URL(pathOrUrl).toString();
  } catch {
    return new URL(pathOrUrl, SITE_URL).toString();
  }
}

type ParamsPromise = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: ParamsPromise;
}): Promise<Metadata> {
  // 🔴 ÖNEMLİ: params Promise olduğu için await et
  const { slug } = await params;

  const article = await getArticleBySlug(slug);
  if (!article) return {};

  const { seo, title, image, keywords, publishedAt, updatedAt } = article;

  const pageTitle = seo?.title || `${title} | Özkan Hukuk & Danışmanlık`;
  const description =
    seo?.description || `${title} – Özkan Hukuk & Danışmanlık`;
  const canonical = absoluteUrl(seo?.canonicalUrl || `/makalelerim/${slug}`);

  return {
    title: pageTitle,
    description,
    alternates: { canonical },
    keywords,
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      url: canonical,
      siteName: "Özkan Hukuk & Danışmanlık",
      title: pageTitle,
      description,
      images: image?.url ? [{ url: absoluteUrl(image.url) }] : undefined,
      publishedTime: publishedAt,
      modifiedTime: updatedAt,
      authors: ["Alper Tuna Ozkan"],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: image?.url ? [absoluteUrl(image.url)] : undefined,
      creator: "Alper Tuna Ozkan",
    },
  };
}

export default async function SlugPage({ params }: { params: ParamsPromise }) {
  const { slug } = await params;

  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  // JSON-LD (Article)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.seo?.title || article.title,
    description: article.seo?.description || article.title,
    image: article.image?.url ? [absoluteUrl(article.image.url)] : undefined,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(article.seo?.canonicalUrl || `/makalelerim/${slug}`),
    },
    author: [{ "@type": "Person", name: "Alper Tuna Ozkan" }],
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
