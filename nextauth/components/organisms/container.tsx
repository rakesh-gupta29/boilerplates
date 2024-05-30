import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const sizeMap = {
  default: "md:w-11/12 max-w-screen-2xl px-3 xl:w-10/12 mx-auto",
  large: "",
  small: "md:w-10/12 sm:w-11/12 max-w-screen-[1440px] px-3 xl:w-9/12 mx-auto",
  full: "",
};

export default function Container({
  size,
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  size: keyof typeof sizeMap;
}) {
  const sizeClass = sizeMap[size];
  return <section className={cn(sizeClass, className)}>{children}</section>;
}
