"use client";

import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/footer/footer"), {
  ssr: false,
  loading: () => <div style={{ height: 96 }} />,
});

export default function FooterLazy() {
  return <Footer />;
}
