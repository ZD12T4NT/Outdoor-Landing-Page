"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type Props = {
  isOpen: boolean;
  toggle: () => void;
};

const BurgerToggle: React.FC<Props> = ({ isOpen, toggle }) => {
  const lineClass = clsx(
    "absolute h-0.5 w-6 bg-white transition-all rounded"
  );

  return (
    <button
      onClick={toggle}
      aria-label="Toggle menu"
      className="relative w-10 h-10 flex items-center justify-center focus:outline-none bg-white/5 rounded-md border border-white/25"
    >
      {/* Top line */}
      <motion.span
        className={lineClass}
        initial={false}
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 0 : -8,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />

      {/* Middle line */}
      <motion.span
        className={lineClass}
        initial={false}
        animate={{
          opacity: isOpen ? 0 : 1,
          y: 0, // always centered
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Bottom line */}
      <motion.span
        className={lineClass}
        initial={false}
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? 0 : 8,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </button>
  );
};

export default BurgerToggle;
