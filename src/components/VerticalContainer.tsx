import type { PropsWithChildren } from "react";
import clsx from "clsx";

export function VerticalContainer({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={clsx("max-w-7xl py-6 sm:py-8 lg:py-16", className)}>
      {children}
    </div>
  );
}

export default VerticalContainer;
