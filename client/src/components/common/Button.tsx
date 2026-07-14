import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30",
        secondary:
          "border border-white/10 bg-white/5 text-white hover:bg-white/10",
        danger:
          "bg-red-600 text-white hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/30",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6",
        lg: "h-14 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

export default function Button({
  className,
  variant,
  size,
  loading,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
      {children}
    </button>
  );
}
