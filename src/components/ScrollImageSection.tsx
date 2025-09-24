"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollImageSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);

  const [path, setPath] = useState<string>("");

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const dashOffset = useTransform(scrollYProgress, [0, 1], [0, 1]); // 1 → 0 fill

  useEffect(() => {
    function updatePath() {
      if (!img1Ref.current || !img2Ref.current || !containerRef.current) return;

      const containerBox = containerRef.current.getBoundingClientRect();
      const img1Box = img1Ref.current.getBoundingClientRect();
      const img2Box = img2Ref.current.getBoundingClientRect();

      // Calculate relative positions inside the container
      const x1 = img1Box.left + img1Box.width / 2 - containerBox.left;
      const y1 = img1Box.top + img1Box.height / 2 - containerBox.top;
      const x2 = img2Box.left + img2Box.width / 2 - containerBox.left;
      const y2 = img2Box.top + img2Box.height / 2 - containerBox.top;

      // Simple quadratic curve between the two points
      const cx = (x1 + x2) / 2;
      const cy = Math.min(y1, y2) - 100; // control point above

      setPath(`M ${x1},${y1} Q ${cx},${cy} ${x2},${y2}`);
    }

    updatePath();
    window.addEventListener("resize", updatePath);
    window.addEventListener("scroll", updatePath);
    return () => {
      window.removeEventListener("resize", updatePath);
      window.removeEventListener("scroll", updatePath);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative px-4 py-16 md:px-2">

       {/* SVG Path */}
        {/* <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d={path}
            stroke="#000"
            strokeWidth="3"
            fill="none"
            strokeDasharray="1"
            style={{
              pathLength: dashOffset, // animate with scroll
            }}
          />
        </svg> */}
      <div className="flex md:flex-nowrap flex-wrap justify-between">
        {/* Left Text */}
        <div className="flex flex-col justify-between">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-black">
            Our new hiking collection is the ultimate invitation to explore the
            great outdoors, where cutting-edge technology meets contemporary style.
          </h1>
          <p className="mt-8 text-gray-600 md:max-w-md mx-auto flex justify-center mb-10 md:mb-0">
            Designed in the heart of the French Alps and crafted with hikers in
            mind, our latest collection combines technical performance with modern
            aesthetics, ensuring you look and feel your best on every trail.
            Embrace the wonders of hiking and elevate your outdoor experience,
            where every step inspires a deeper connection to the mountains.
          </p>
        </div>

        {/* Right Hero Image */}
        <div className="relative w-full h-full md:h-[600px]">
          <Image
            src="/hikingOne.jpg"
            alt="Hero"
            fill
            className="rounded-2xl shadow-lg object-cover w-full h-full"
          />
        </div>


      </div>

      {/* Floating Images with Connector Line */}
      <div className=" mt-20 flex flex-col gap-12 items-start">
       

        {/* First Floating Image */}
        <div
          ref={img1Ref}
          className="flex items-center w-full h-full md:w-[200px] md:h-[200px] gap-4 aspect-square relative z-10"
        >
          <Image
            src="/hikingTwo.jpg"
            alt="Hiking boots"
            width={200}
            height={200}
            className="rounded-2xl shadow-md object-cover h-full w-full"
          />
        </div>

        {/* Second Floating Image */}
        <div
          ref={img2Ref}
          className="flex items-center gap-4 self-center w-full md:w-auto h-full md:aspect-[16/9] relative z-10"
        >
          <Image
            src="/hikingThree.jpg"
            alt="Camping scene"
            width={200}
            height={200}
            className="rounded-2xl shadow-md object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
