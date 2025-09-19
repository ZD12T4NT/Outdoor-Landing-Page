"use client";

import { motion } from "framer-motion";

type SplitSectionProps = {
  pretitle?: string;
  title: string;
  description: string;
};

export default function SplitSection({
  pretitle = "Our Models",
  title,
  description,
}: SplitSectionProps) {
  return (
    <section className="px-6 md:px-12 lg:px-20 bg-black relative z-10">
      {/* Left Side */}

      <div className="flex justify-center gap-8 items-end lg:justify-between flex-col lg:flex-row w-full ">
      <motion.div
        className="w-full lg:w-1/2 text-black"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
         <div className="flex items-center gap-2 text-[#d4d414] font-normal uppercase tracking-wide text-base mb-1 md:mb-4 mr-10">
            <span className="w-6 h-[3px] bg-[#d4d414]" />
            {pretitle}
          </div>

        <h2 className="text-3xl lg:text-5xl font-normal text-white mt-3 md:mt-7">
          {title}
        </h2>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="w-full lg:w-1/2 text-white/50"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="mb-0 text-lg leading-relaxed text-white/50">
          {description}
        </p>
      </motion.div>
      </div>
     
    </section>
  );
}
