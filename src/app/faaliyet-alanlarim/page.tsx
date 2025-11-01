// src/app/faaliyet-alanlarim/page.tsx
import ActivityPageWrapper from "@/features/faaliyet-alanlarim/containers/ActivityPageWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Özkan Hukuk Danışmanlık - Faaliyet Alanlarım",
  description: "Gayrimenkul hukuku odağında tüm hizmet alanları.",
};

export const revalidate = 900;
export const dynamic = "force-static";

export default function FaaliyetAlanlarim() {
  return <ActivityPageWrapper />;
}
