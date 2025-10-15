import InformativeContent from "./InformativeContent";
import { getArticles } from "@/features/makalelerim/actions/articles";
import { getVideos } from "@/features/videolarim/actions/videos";

export default async function InformativeContentWrapper({
  videoTake = 2,
  articleTake = 2,
  title,
  upperContent = null,
  lowerContent = null,
}: {
  videoTake?: number;
  articleTake?: number;
  title?: string;
  upperContent?: string | null;
  lowerContent?: string | null;
}) {
  const [articles, videos] = await Promise.all([getArticles(), getVideos()]);
  return (
    <InformativeContent
      videos={videos}
      articles={articles}
      videoTake={videoTake}
      articleTake={articleTake}
      title={title}
      upperContent={upperContent}
      lowerContent={lowerContent}
    />
  );
}
