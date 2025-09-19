"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type HeroProps = {
  backgroundImage: string;
  location?: string;
  tagline?: string;
  rightText?: string;
  category?: string;
  title: string;
};

const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  location = "Dubai, UAE",
  tagline = "Prime Collection by Rydex!",
  rightText = "Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet nunc ut.",
  category = "Car Rental",
  title,
}) => { 
  return (
    <section className="relative h-screen w-full overflow-hidden mt-4 md:mt-5">
  {/* Background image wrapper with border-radius */}
  <div className="absolute inset-0 -z-10 mx-4 rounded-2xl overflow-hidden">
    <Image
      src={backgroundImage}
      alt="Hero Background"
      fill
      priority
      className="object-cover"
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50" />
  </div>

  {/* Content */}
  <div className="relative z-10 w-full h-full px-6 md:px-12 lg:px-20 flex flex-col justify-between pt-[120px] pb-12">
    {/* Top row */}
    <div className="flex flex-col md:flex-row justify-between text-white/80 text-base">
      <div className="flex items-center gap-4">
        <span>{location}</span>
        <span className="w-5 md:w-40 h-[1px] bg-white/50" />
        <span className="md:w-44">{tagline}</span>
      </div>
      <div className="mt-9 md:mt-0 max-w-sm text-right">{rightText}</div>
    </div>

    {/* Bottom content */}
    <div className="flex flex-col md:flex-row items-start">
      {/* Category */}
      <div className="flex items-center gap-2 text-[#d4d414] font-normal uppercase tracking-wide text-base mb-4 mr-10">
        <span className="w-6 h-[3px] bg-[#d4d414]" />
        {category}
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[42px] md:text-6xl lg:text-7xl font-medium leading-tight text-white max-w-3xl"
      >
        {title}
      </motion.h1>
    </div>
  </div>
</section>

  );
};

export default Hero;
