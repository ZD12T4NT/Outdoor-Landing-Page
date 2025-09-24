"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const overviewItems = [
  { label: "Car Models", img: "/images/car1.jpg" },
  { label: "Luxury Packages", img: "/images/car2.jpg" },
  { label: "Rental Offers", img: "/images/car3.jpg" },
];

export default function OverviewDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Button + morph background */}
      <div className="relative cursor-pointer text-white w-fit">
        <motion.div
          layout
          initial={{ borderRadius: 999 }}
          animate={{
            borderRadius: isOpen ? 24 : 999,
            backgroundColor: isOpen ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.3)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute inset-0 w-full h-full"
        />
        <div className="relative flex items-center justify-between w-full px-4 py-2">
          <span className="font-medium ">Overview</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </div>
      </div>

      

      {/* Dropdown content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto", backgroundColor: isOpen ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.3)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-0 mt-2 w-72 rounded-xl backdrop-blur-md  shadow-lg overflow-hidden z-50"
          >
            <ul className="p-4 space-y-3">
              {overviewItems.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 cursor-pointer hover:bg-white/20 rounded-md p-2 transition"
                >
                  <Image
                    src={item.img}
                    width={50}
                    height={50}
                    alt={item.label}
                    className="rounded-md"
                  />
                  <span className="text-white">{item.label}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
