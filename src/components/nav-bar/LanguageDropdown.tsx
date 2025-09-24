"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const languages = ["EN", "FR", "ES"];

export default function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative w-28"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Button + morph background */}
      <div className="relative cursor-pointer text-white">
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
        <div className="relative flex items-center justify-between px-4 py-2">
          <span className="font-medium">EN</span>
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
            className="absolute right-0 mt-2 w-full rounded-xl  backdrop-blur-md shadow-lg overflow-hidden z-50"
          >
            <ul className="p-2 space-y-1">
              {languages.map((lang) => (
                <li
                  key={lang}
                  className="px-3 py-1 text-white cursor-pointer hover:bg-white/20 rounded-md transition"
                >
                  {lang}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
