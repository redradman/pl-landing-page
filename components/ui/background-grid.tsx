"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center",
        className
      )}
    >
      <div className="absolute h-full w-full bg-white dark:bg-black bg-grid-black/[0.05] dark:bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      {children}
    </div>
  );
};
