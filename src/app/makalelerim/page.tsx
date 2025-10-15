import type { Metadata } from "next";
import ArticlesWrapper from "@/features/makalelerim/containers/ArticlesWrapper";
import { getArticles } from "@/features/makalelerim/actions/articles";

export const metadata: Metadata = {
  title: "Makalelerim | Özkan Hukuk Danışmanlık",
  description:
    "Özkan Hukuk Danışmanlık tarafından hazırlanan makaleleri inceleyin.",
};

export default async function Makalelerim() {
  const items = await getArticles();
  return <ArticlesWrapper initialItems={items} />;
}
