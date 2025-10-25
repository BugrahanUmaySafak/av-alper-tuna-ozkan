import PageHeader from "@/components/page-header/PageHeader";
import VideoList from "../components/VideoList";
import Link from "next/link";
import { getVideos } from "../actions/videos";

export default async function VideoListWrapper() {
  const videos = await getVideos();

  return (
    <>
      <PageHeader
        title="Videolarımız"
        description="Gayrimenkul hukukuna dair güncel ve açıklayıcı içerikler."
        extraContent={
          <p className="text-sm sm:text-base text-muted-foreground">
            <Link
              href="https://www.youtube.com/@ozkanhukuk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              YouTube kanalımı ziyaret etmek için tıklayın.
            </Link>
          </p>
        }
      />
      <VideoList videos={videos} />
    </>
  );
}
