"use client";

import dynamic from "next/dynamic";
import type { CityMapProps } from "./CityMap";

const CityMap = dynamic(() => import("./CityMap"), {
  ssr: false,
  loading: () => (
    <div className="h-96 w-full rounded-xl border border-gray-200 bg-gray-100 animate-pulse" />
  ),
});

export default function CityMapClient(props: CityMapProps) {
  return <CityMap {...props} />;
}
