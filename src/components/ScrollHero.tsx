"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ScrollHeroProps = {
  backgroundImage: string;
  heading: string;
};

export default function ScrollHero({ backgroundImage, heading }: ScrollHeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // Animation starts when section top hits viewport bottom
    // and ends when section top hits viewport top
    offset: ["start end", "start start"],
  });

  // Animate radius + margin
  const borderRadius = useTransform(scrollYProgress, [0, 1], [32, 0]); // 32px -> 0px
  const margin = useTransform(scrollYProgress, [0, 1], [24, 0]); // 24px -> 0px

  // Animate text
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.9]); // slight shrink
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.5]); // fade a bit

  return (
    <motion.section
      ref={ref}
      style={{ borderRadius, margin }}
      className="relative h-screen overflow-hidden"
    >
      {/* Background Image */}
      <Image
         src={backgroundImage}
        alt="Hiking background"
        fill
        priority
        className="object-cover"
      />
        {/* Grain Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[url('/grain.jpg')] opacity-70 mix-blend-overlay" />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Centered Content */}
      <motion.div
        style={{ scale }}
        className="relative z-10 flex h-full items-center justify-center text-center px-6"
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
              {heading}
          </h1>
        </div>
      </motion.div>
    </motion.section>
  );
}
