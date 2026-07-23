import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

export interface ContainerProps
  extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

export function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-6 lg:px-8",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}