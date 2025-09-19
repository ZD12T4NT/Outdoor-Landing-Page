"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";

type ButtonVariants = "primary" | "secondary" | "tertiary";

type CommonProps = {
  text: string;
  variant?: ButtonVariants;
  className?: string;
};

type ButtonProps = CommonProps &
  (
    | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
    | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  );

export default function Button({
  text,
  variant = "primary",
  className,
  href,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-between rounded-xl border transition duration-300 overflow-hidden w-full md:w-fit text-lg";

  const variants: Record<ButtonVariants, string> = {
    primary:
      "border border-white/80 text-white bg-transparent hover:bg-white/10",
    secondary:
      "border border-black/80 text-black bg-transparent hover:bg-black/5",
    tertiary:
      "bg-transparent text-[#d4d414] border-[#d4d414]",
  };

  const arrowClasses = cn(
  "flex items-center justify-center rounded-lg w-10 h-10 m-1 transition-transform duration-300 group-hover:translate-x-1",
  variant === "tertiary"
    ? "bg-[#d4d414] text-black" // Arrow style for tertiary
    : "bg-white text-black"      // Arrow style for primary & secondary
);


  const classes = cn(baseClasses, variants[variant], className);

 const renderContent = () => (
  <>
    {/* Text wrapper with two layers */}
    <span className="relative pr-10 py-3 pl-2 text-lg">
      <span className="block transition-transform duration-300 group-hover:-translate-y-[100px]">
        {text}
      </span>
      <span className="absolute left-2 top-full block transition-transform duration-300 group-hover:-translate-y-[40px]">
        {text}
      </span>
    </span>

    {/* Arrow */}
    <span className={arrowClasses}>
      <ArrowRight className="w-5 h-5" />
    </span>
  </>
);


  return href ? (
    <Link
      href={href}
      className={cn(classes, "group")}
      {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
    >
      {renderContent()}
    </Link>
  ) : (
    <button
      className={cn(classes, "group")}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {renderContent()}
    </button>
  );
}
