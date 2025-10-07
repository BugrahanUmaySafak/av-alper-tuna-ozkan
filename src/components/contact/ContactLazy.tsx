"use client";

import dynamic from "next/dynamic";

const Iletisim = dynamic(() => import("./Contact"), {
  ssr: false,
  loading: () => null,
});

export default function IletisimLazy() {
  return <Iletisim />;
}
