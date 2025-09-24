"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  heading: string;
  text: string;
  buttonText: string;
  image: string;
};

type SwiperProps = {
  slides: Slide[];
};

export default function Swiper({ slides }: SwiperProps) {
  const [offset, setOffset] = useState(0);

  const visibleSlides = 3; // number of slides to show at once
  const slideWidth = 250; // px width for each slide

  const nextSlide = () =>
    setOffset((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setOffset((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative flex flex-col md:flex-row items-center w-full overflow-hidden px-6 py-16 md:px-2">
      {/* ---------- Static Text Left ---------- */}
      <div className="md:w-1/2 space-y-4 md:pr-12 z-20">
        <h2 className="text-3xl md:text-5xl font-bold">{slides[0].heading}</h2>
        <p className="text-base md:text-lg">{slides[0].text}</p>
        <div className="mt-4">
          <Button text={slides[0].buttonText} variant="primary" />
        </div>

            {/* ---------- Navigation ---------- */}
      <div className="absolute flex space-x-4 z-30">
        <button
          onClick={prevSlide}
          className=" bg-[#DAD6CD] rounded-full flex items-center justify-center h-10 w-10 transition"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className=" bg-[#DAD6CD] rounded-full flex items-center justify-center h-10 w-10 transition"
        >
        <ChevronRight />
        </button>
      </div>
      </div>

      {/* ---------- Carousel Right ---------- */}
      <div className="md:w-1/2 relative w-full overflow-hidden mt-6 md:mt-0">
        <motion.div
          className="flex gap-2"
          animate={{ x: -offset * (slideWidth + 16) }} // 16px gap
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative w-[250px] h-[200px] flex-shrink-0"
            >
              <Image
                src={slide.image}
                alt={slide.heading}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          ))}
        </motion.div>
      </div>

  
    </div>
  );
}
