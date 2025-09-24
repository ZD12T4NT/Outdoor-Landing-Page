"use client";

import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

type CommonProps = {
  text: string;
  variant?: ButtonVariant;
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
    "w-full md:w-fit px-6 py-2 rounded-full font-semibold transition-colors duration-200 text-center";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-black text-white hover:bg-gray-900",
    secondary: "bg-[#F5F4EF] text-black hover:bg-gray-200",
  };

  const classes = cn(baseClasses, variants[variant], className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {text}
    </button>
  );
}
