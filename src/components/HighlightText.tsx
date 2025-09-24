"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type HighlightTextProps = {
  text: string;
  className?: string;
};

export default function HighlightText({ text, className = "" }: HighlightTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll progress relative to the text
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  });

  const letters = text.split("");

  return (
    <div
      ref={ref}
      className={`md:w-[70%] inline-block px-4 py-16 md:px-2 leading-1 ${className}`}
    >
      {letters.map((char, i) => {
        // normalize position across full scroll range
        const start = i / letters.length;     
        const end = (i + 1) / letters.length; 

        const letterOpacity = useTransform(
          scrollYProgress,
          [start, end],
          [0.5, 1]
        );

        return (
          <motion.span
            key={i}
            style={{ opacity: letterOpacity }}
            className="inline-block text-black"
          >
            {char}
          </motion.span>
        );
      })}
    </div>
  );
}
