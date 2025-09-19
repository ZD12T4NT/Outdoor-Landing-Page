"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    // Watch all <a> and <button> tags for hover state
    const interactiveElements = document.querySelectorAll("a, button");

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => setIsLinkHovered(true));
      el.addEventListener("mouseleave", () => setIsLinkHovered(false));
    });

    return () => {
      window.removeEventListener("mousemove", move);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => setIsLinkHovered(true));
        el.removeEventListener("mouseleave", () => setIsLinkHovered(false));
      });
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
      animate={{
        x: position.x - 16, // offset so cursor centers on mouse
        y: position.y - 16,
        scale: isLinkHovered ? 2 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <div className="w-5 h-5 rounded-full bg-[#d4d414] opacity-80 mix-blend-difference" />
    </motion.div>
  );
}
