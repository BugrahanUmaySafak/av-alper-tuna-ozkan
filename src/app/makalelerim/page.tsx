import ArticlesWrapper from "@/features/makalelerim/containers/ArticlesWrapper";
import { getArticles } from "@/features/makalelerim/actions/articles";
import { buildMetadata } from "@/config/seo";

export async function generateMetadata() {
  const articles = await getArticles();
  const summaryText = articles
    .map((article) => article.summary || article.title)
    .filter(Boolean)
    .slice(0, 3)
    .join(" · ");
  const keywordPool = Array.from(
    new Set(
      articles
        .flatMap((article) => article.keywords || [])
        .concat(["makale", "hukuk makalesi"])
    )
  ).slice(0, 10);

  return buildMetadata({
    title: "Gayrimenkul Hukuku Makaleleri",
    description:
      summaryText ||
      "Kırıkkale ve Ankara gayrimenkul avukatı tarafından hazırlanan güncel hukuki makaleleri okuyun.",
    path: "/makalelerim",
    keywords: keywordPool,
  });
}

export default async function Makalelerim() {
  const items = await getArticles();
  return <ArticlesWrapper initialItems={items} />;
}
