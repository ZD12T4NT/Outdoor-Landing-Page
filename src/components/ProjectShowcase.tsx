"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

type Product = {
  outfitImage: string;
  outfitType: string;
  gender: string;
  smallImage: string;
  color: string;
  colorways: string;
};

type ProductShowcaseProps = {
  firstRowProducts: Record<string, Product>;
  secondRowProducts?: Record<string, Product>;
  firstRowBg: string;
  secondRowBg?: string;
  firstRowTabs?: Array<string | number>; // can be string or number
  secondRowTabs?: Array<string | number>;
};


// Utility for public or external images
export function getImagePath(src: string) {
  if (!src) return "";
  return src.startsWith("http") ? src : src.startsWith("/") ? src : `/${src}`;
}

export default function ProductShowcase({
  firstRowProducts,
  secondRowProducts,
  firstRowBg,
  secondRowBg,
  firstRowTabs,
  secondRowTabs,
}: ProductShowcaseProps) {
  const firstTabs = firstRowTabs ?? Object.keys(firstRowProducts);
  const secondTabs = secondRowTabs ?? (secondRowProducts ? Object.keys(secondRowProducts) : []);

  const [activeTabFirstRow, setActiveTabFirstRow] = useState(firstTabs[0]);
  const [activeTabSecondRow, setActiveTabSecondRow] = useState(secondTabs[0]);

  const firstRow = firstRowProducts[activeTabFirstRow];
  const secondRow = secondRowProducts?.[activeTabSecondRow];

  const renderTabs = (
  active: string | number,
  setActive: (tab: string | number) => void,
  tabs: Array<string | number>
) => (
  <div className="flex mb-4">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setActive(tab)}
        className={`px-2 py-2 rounded-md font-semibold text-2xl transition ${
          active === tab ? "text-[#2A2928]" : "text-black/30"
        }`}
      >
        {tab.toString()}
      </button>
    ))}
  </div>
);


  return (
    <div className="px-6 py-16 md:px-2">
      {/* ---------- First row ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-8 md:mb-0">
        {/* Big image left */}
        <div
          className="relative w-full rounded-2xl md:rounded-br-none overflow-hidden h-[400px] md:h-[650px]"
          style={{
            backgroundImage: `url(${getImagePath(firstRowBg)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute flex items-center justify-center inset-0">
            {firstRow?.outfitImage && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={firstRow.outfitImage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-[15rem] h-[15rem] md:w-[25rem] md:h-[25rem]"
                >
                  <Image
                    src={getImagePath(firstRow.outfitImage)}
                    alt="Outfit Left"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>
            )}
          </div>
          <div className="absolute bottom-2 text-white px-5 py-1 rounded-lg text-2xl flex justify-between w-full">
            <motion.div key={firstRow?.outfitType} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              {firstRow?.outfitType}
            </motion.div>
            <motion.div key={firstRow?.gender} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              {firstRow?.gender}
            </motion.div>
          </div>
        </div>

        {/* Small image + button */}
        <div className="flex flex-col items-center space-y-4 justify-center relative h-full">
          {renderTabs(activeTabFirstRow, setActiveTabFirstRow, firstTabs)}

          {firstRow?.smallImage && (
            <div className="relative w-full h-80 md:w-52 md:h-52 overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={firstRow.smallImage}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image src={getImagePath(firstRow.smallImage)} alt="Small Right" fill className="object-cover" />
                </motion.div>
              </AnimatePresence>
            </div>
          )}

          <Button text="Buy Now" variant="primary" />

          {/* Color + colorways */}
          <div className="absolute bottom-2 text-black px-5 py-1 text-base md:flex justify-between w-full hidden">
            <motion.div key={firstRow?.color} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              {firstRow?.color}
            </motion.div>
            <motion.div key={firstRow?.colorways} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              {firstRow?.colorways}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ---------- Second row (optional) ---------- */}
      {secondRowProducts && secondRowBg && (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1 flex flex-col items-center space-y-4 justify-center relative h-full">
            {renderTabs(activeTabSecondRow, setActiveTabSecondRow, secondTabs)}

            {secondRow?.smallImage && (
              <div className="relative w-full h-80 md:w-52 md:h-52 rounded-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={secondRow.smallImage}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image src={getImagePath(secondRow.smallImage)} alt="Small Left" fill className="object-cover" />
                  </motion.div>
                </AnimatePresence>
              </div>
            )}

            <Button text="Buy Now" variant="primary" />

            <div className="absolute bottom-2 text-black px-5 py-1 text-base hidden md:flex justify-between w-full">
              <motion.div key={secondRow?.color} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                {secondRow?.color}
              </motion.div>
              <motion.div key={secondRow?.colorways} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                {secondRow?.colorways}
              </motion.div>
            </div>
          </div>

          {/* Big image right */}
          <div
            className="relative w-full rounded-2xl md:rounded-tl-none overflow-hidden h-[400px] md:h-[650px] order-1 md:order-2"
            style={{
              backgroundImage: `url(${getImagePath(secondRowBg)})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {secondRow?.outfitImage && (
              <div className="absolute flex items-center justify-center inset-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={secondRow.outfitImage}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-[15rem] h-[15rem] md:w-[25rem] md:h-[25rem]"
                  >
                    <Image src={getImagePath(secondRow.outfitImage)} alt="Outfit Right" fill className="object-contain" />
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
