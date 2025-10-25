import ActivityPageWrapper from "@/features/faaliyet-alanlarım/containers/ActivityPageWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Özkan Hukuk Danışmanlık - Faaliyet Alanlarım",
  description: "Gayrimenkul hukuku odağında tüm hizmet alanları.",
};

// SSG + bfcache dostu
export const revalidate = 900;
export const dynamic = "force-static";

export default function FaaliyetAlanlarim() {
  return <ActivityPageWrapper />;
}
