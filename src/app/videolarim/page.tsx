import VideoListWrapper from "@/features/videolarim/containers/VideoListWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videolarım | Özkan Hukuk Danışmanlık",
  description: "Gayrimenkul hukukuna dair güncel ve açıklayıcı içerikler.",
};

// SSG + 15 dk ISR
export const revalidate = 900;
export const dynamic = "force-static";

export default function VideolarimPage() {
  return <VideoListWrapper />;
}
