"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

type PageTransitionProps = {
  children: React.ReactNode;
};

/** Lightweight fade/slide animation wrapper for route transitions */
export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  const key = useMemo(() => pathname || "root", [pathname]);

  return (
    <div key={key} className="page-transition-wrapper">
      {children}
    </div>
  );
}
