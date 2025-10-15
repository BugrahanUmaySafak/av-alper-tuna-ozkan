import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleDetailWrapper from "@/features/makalelerim/containers/ArticleDetailWrapper";
import { getArticleBySlug } from "@/features/makalelerim/actions/articles";

export const metadata: Metadata = {
  title: "Makale | Özkan Hukuk Danışmanlık",
};

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  return <ArticleDetailWrapper slug={slug} initialArticle={article} />;
}
