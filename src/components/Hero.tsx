"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type HeroProps = {
  backgroundImage: string;
  backgroundVideo?: string;
  title: string;
  videoThumbnail?: string;
  popupVideoUrl?: string;
};

const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  backgroundVideo,
  title,
  videoThumbnail = "/hikingOne.jpg",
  popupVideoUrl = "/trailer.mp4",
}) => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 200], [1, 0.95]);
  const borderRadius = useTransform(scrollY, [0, 200], ["0px", "2rem"]);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hero section */}
      <motion.section
        style={{
          scale,
          borderBottomLeftRadius: borderRadius,
          borderBottomRightRadius: borderRadius,
        }}
        className="relative h-screen w-full overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {backgroundVideo ? (
            <video
              src={backgroundVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : backgroundImage ? (
            <Image
              src={backgroundImage}
              alt="Hero Background"
              fill
              priority
              className="object-cover"
            />
          ) : null}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full h-full flex justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[42px] md:text-6xl lg:text-8xl font-bold leading-tight text-white max-w-3xl text-center"
          >
            {title}
          </motion.h1>
        </div>

        {/* Floating video thumbnail (bottom right) */}
        <div className="absolute bottom-6 right-6 z-20">
          <button
            onClick={() => setIsOpen(true)}
            className="group relative w-28 h-16 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <Image
              src={videoThumbnail}
              alt="Play Video"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-white flex items-center justify-center">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-white"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </motion.section>

      {/* Video Modal (Bottom Sheet) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-white flex items-end justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal container */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="relative w-full h-[92vh] m-4 mb-8 rounded-2xl overflow-hidden bg-black shadow-xl"
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 z-50 p-2 bg-black/60 rounded-full hover:bg-black/80"
              >
                <X className="text-white w-6 h-6" />
              </button>

              {/* Video */}
              <video
                src={popupVideoUrl}
                autoPlay
                controls
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
