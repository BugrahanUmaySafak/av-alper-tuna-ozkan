import VideoListWrapper from "@/features/videolarim/containers/VideoListWrapper";
import { buildMetadata } from "@/config/seo";

export const metadata = buildMetadata({
  title: "Gayrimenkul Hukuku Videoları",
  description:
    "Gayrimenkul davaları, kira artışı, kat karşılığı sözleşmeler ve kamulaştırma süreçlerine dair uzman videoları izleyin.",
  path: "/videolarim",
  keywords: [
    "gayrimenkul hukuku videoları",
    "kira artış videosu",
    "kat karşılığı video",
  ],
});

// SSG + 15 dk ISR
export const revalidate = 900;
export const dynamic = "force-static";

export default function VideolarimPage() {
  return <VideoListWrapper />;
}
