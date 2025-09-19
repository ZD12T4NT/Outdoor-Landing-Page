"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Search, Car, Mail } from "lucide-react";
import { useRef } from "react";
import Button from "./Button";

type Step = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Browse Our Elite Fleet",
    description:
      "Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    icon: <Search className="w-6 h-6 text-[#d4d414]" />,
  },
  {
    id: 2,
    title: "Pick Your Ideal Vehicle",
    description:
      "Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    icon: <Car className="w-6 h-6 text-[#d4d414]" />,
  },
  {
    id: 3,
    title: "Submit Your Enquiry",
    description:
      "Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    icon: <Mail className="w-6 h-6 text-[#d4d414]" />,
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  // Map scroll progress (0 → 1) to scale
  const rawScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Apply spring smoothing
  const scaleY = useSpring(rawScaleY, {
    stiffness: 120, // responsiveness
    damping: 20,    // smoothness (higher = less bounce)
    mass: 0.8,
  });

  return (
    <section
      ref={containerRef}
      className="bg-black text-white px-6 md:px-12 lg:px-20 py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
        {/* Left side */}
        <div className="md:sticky md:top-32 self-start">
          <h3 className="flex items-center text-base font-normal text-[#d4d414] uppercase mb-4">
            <span className="w-6 h-[2px] bg-[#d4d414] mr-2" />
            How It Works
          </h3>
          <h2 className="text-3xl md:text-5xl font-medium mb-6">
            Follow these simple steps to choose your ideal vehicle and drive
            away effortlessly.
          </h2>
          <Button text="Book Now" variant="tertiary" href="/" />
        </div>

        {/* Right side */}
        <div className="relative">
          {/* Static background line */}
          <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-white/10" />

          {/* Smooth animated line */}
        <motion.div
          style={{ scaleY }}
          className="absolute left-3 top-0 w-[2px] h-full bg-[#d4d414] origin-top"
        />


          <div className="space-y-12 ml-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-black border-2 border-[#d4d414] flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#d4d414]" />
                </div>

                {/* Card */}
                <div className="p-6 rounded-2xl bg-[#111] border border-white/10 shadow-md">
                  <div className="flex flex-col items-start gap-3 mb-3">
                    {step.icon}
                    <h4 className="text-2xl font-medium">{step.title}</h4>
                  </div>
                  <p className="text-white/70 text-base">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
