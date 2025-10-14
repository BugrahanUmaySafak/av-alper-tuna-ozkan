// app/makalelerim/[slug]/page.tsx
import type { Metadata } from "next";
import ArticleDetailWrapper from "@/features/makalelerim/containers/ArticleDetailWrapper";

export const metadata: Metadata = {
  title: "Makale | Özkan Hukuk Danışmanlık",
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ArticleDetailWrapper slug={slug} />;
}
