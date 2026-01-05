import { cn } from "@/lib/cn";
import type { ComponentPropsWithoutRef } from "react";

type CardProps = ComponentPropsWithoutRef<"div">;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-surface/60 p-6 backdrop-blur",
        className
      )}
      {...props}
    />
  );
}
