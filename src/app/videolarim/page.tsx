import VideoListWrapper from "@/features/videolarim/containers/VideoListWrapper";
import { buildMetadata } from "@/config/seo";
import { serviceLocationKeywords } from "@/data/service";

export const metadata = buildMetadata({
  title: "Gayrimenkul Hukuku Videoları",
  description: "Gayrimenkul hukukuna dair güncel ve açıklayıcı içerikler.",
  path: "/videolarim",
  keywords: [
    "gayrimenkul hukuku videoları",
    "kira artış videosu",
    "kat karşılığı video",
    ...serviceLocationKeywords,
  ],
});

// SSG + 15 dk ISR
export const revalidate = 900;
export const dynamic = "force-static";

export default function VideolarimPage() {
  return <VideoListWrapper />;
}
