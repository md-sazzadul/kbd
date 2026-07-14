import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export default function Card({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
