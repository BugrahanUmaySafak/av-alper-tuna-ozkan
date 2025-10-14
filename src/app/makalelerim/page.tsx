import ArticlesWrapper from "@/features/makalelerim/containers/ArticlesWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Makalelerim | Özkan Hukuk Danışmanlık",
  description:
    "Özkan Hukuk Danışmanlık tarafından hazırlanan makaleleri inceleyin.",
};

export default function Makalelerim() {
  return <ArticlesWrapper />;
}
