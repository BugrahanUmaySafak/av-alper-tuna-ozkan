"use client";

import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/footer/Footer"), {
  ssr: false,
  loading: () => (
    <footer className="w-full border-t bg-[#fdf3e7]">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="py-6" />
      </div>
      <div className="min-h-[160px] md:min-h-[180px] pb-16 md:pb-20" />
    </footer>
  ),
});

export default function FooterLazy() {
  return <Footer />;
}
