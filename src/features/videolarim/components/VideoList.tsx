"use client";

import Container from "@/components/container/Container";
import Section from "@/components/section/Section";
import type { Video } from "../types";
import VideoCard from "./VideoCard";

export default function VideoList({ videos }: { videos: Video[] }) {
  if (!videos?.length) {
    return (
      <Section>
        <Container>
          <div className="text-center py-16 text-muted-foreground">
            Gösterilecek video bulunamadı.
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((v, i) => (
            <VideoCard
              key={v.id || v.youtubeId || i}
              {...v}
              priority={i === 0}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
