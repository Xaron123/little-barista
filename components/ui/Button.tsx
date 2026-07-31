"use client";

import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ease-out-quart disabled:opacity-40 disabled:pointer-events-none whitespace-nowrap",
  {
    variants: {
      variant: {
        primary: "bg-ink text-milk hover:bg-graphite",
        secondary: "bg-milk text-ink hover:bg-cream",
        outline: "border border-ink/20 text-ink hover:bg-ink hover:text-milk",
        ghost: "text-ink hover:bg-ink/5",
        light: "bg-milk text-ink hover:bg-latte",
        dark: "bg-ink text-milk hover:bg-black",
      },
      size: {
        sm: "px-4 py-2 text-sm rounded-full",
        md: "px-5 py-2.5 text-sm rounded-full",
        lg: "px-6 py-3.5 text-base rounded-full",
        xl: "px-8 py-4 text-base rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  arrow?: "up-right" | "right" | "none";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, arrow = "up-right", children, ...props }, ref) => {
    const content = (
      <>
        <span>{children}</span>
        {arrow === "up-right" && (
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
        )}
        {arrow === "right" && (
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        )}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={cn(buttonVariants({ variant, size }), className)}>
          {content}
        </Link>
      );
    }
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {content}
      </button>
    );
  }
);
Button.displayName = "Button";
