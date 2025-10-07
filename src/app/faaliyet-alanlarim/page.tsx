import ActivityPageWrapper from "@/features/faaliyet-alanlarım/containers/ActivityPageWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Özkan Hukuk Danışmanlık",
  description: "Bu sayfa projenin ana sayfasıdır.",
};

export default function FaaliyetAlanlarim() {
  return (
    <>
     <ActivityPageWrapper/>
    </>
  );
}
