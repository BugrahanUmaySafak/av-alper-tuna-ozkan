import VideoListWrapper from "@/features/videolarim/containers/VideoListWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videolarım | Özkan Hukuk Danışmanlık",
  description: "Gayrimenkul hukukuna dair güncel ve açıklayıcı içerikler.",
};

export default function VideolarimPage() {
  return <VideoListWrapper />;
}
