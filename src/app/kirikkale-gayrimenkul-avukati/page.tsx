import { buildMetadata } from "@/config/seo";
import CityPageWrapper from "@/features/gayrimenkul-avukati/CityPageWrapper";
import { cityContent } from "@/features/gayrimenkul-avukati/data/cities";

const CITY = cityContent.kirikkale;

export const metadata = buildMetadata({
  title: CITY.metaTitle,
  description: CITY.metaDescription,
  path: CITY.slug,
  keywords: CITY.keywords,
  type: "article",
});

export default function Page() {
  return <CityPageWrapper city="kirikkale" />;
}
