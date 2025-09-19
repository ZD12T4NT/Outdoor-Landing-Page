"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alice",
    role: "CEO",
    text:
      "This service completely transformed the way I run my business. Tasks that used to take hours are now seamless, freeing me up to focus on strategy instead of operations. It’s hands-down one of the best investments we’ve ever made."
  },
  {
    id: 2,
    name: "Bob",
    role: "Designer",
    text:
      "The design quality is absolutely top notch, and the attention to detail is unmatched. Every feature feels carefully thought out and beautifully executed, which makes my work feel more creative and effortless. I recommend it to every designer I know."
  },
  {
    id: 3,
    name: "Charlie",
    role: "Developer",
    text:
      "Fast, reliable, and elegant — everything I look for as a developer. The integration process was simple, and performance has been rock solid since day one. It’s rare to find a tool that’s both powerful and pleasant to use."
  },
  {
    id: 4,
    name: "Dana",
    role: "Manager",
    text:
      "Our team’s efficiency skyrocketed once we switched to this tool. Collaboration became smoother, tasks were easier to track, and deadlines stopped feeling stressful. It gave us back control over our projects in a way we didn’t expect."
  },
  {
    id: 5,
    name: "Eli",
    role: "Freelancer",
    text:
      "I love how smooth and intuitive it feels to use. As a freelancer, I don’t have time to wrestle with clunky systems, and this platform just works. Clients have even noticed how much faster I can deliver results now."
  },
  {
    id: 6,
    name: "Fiona",
    role: "Marketer",
    text:
      "The growth we’ve seen since adopting this tool has been nothing short of incredible. Campaigns are easier to launch, and tracking results is clearer than ever. It gave us insights that turned into real, measurable growth."
  },
  {
    id: 7,
    name: "George",
    role: "Consultant",
    text:
      "An absolute game changer for my workflow. I can manage multiple clients with less stress, and everything stays perfectly organized. It feels like I finally have a personal assistant who never makes mistakes."
  },
  {
    id: 8,
    name: "Hannah",
    role: "Founder",
    text:
      "This tool quickly became essential in my daily routine. From the very first week, I could see improvements in productivity and clarity across the team. It’s rare to find something that’s both innovative and dependable."
  },
  {
    id: 9,
    name: "Ian",
    role: "Engineer",
    text:
      "Super reliable and simple to use, which is exactly what I need. The learning curve was almost non-existent, and performance has been rock solid. I trust it completely for critical work — and that says a lot."
  }
];


export default function TestimonialParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms for desktop
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full bg-black py-32 overflow-hidden px-6 md:px-12 lg:px-20"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col items-center text-center gap-6 max-w-md mx-auto pb-20"
      >
        <div className="flex text-center items-center gap-2 text-[#d4d414] font-normal uppercase tracking-wide text-base">
          <span className="w-6 h-[3px] bg-[#d4d414]" />
          Testimonials
        </div>
        <h2 className="text-3xl lg:text-5xl font-normal text-white mt-2">
          Heartfelt Reviews By Rydex Drivers
        </h2>
      </motion.div>

      {/* Desktop View: 3 Parallax Columns */}
      
     <div className="h-screen relative hidden overflow-hidden md:grid grid-cols-3 gap-8 text-white">
          {/* Top fade */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/60 to-transparent z-20 pointer-events-none" />
          
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/60 to-transparent z-20 pointer-events-none" />

          {/* Column 1 */}
          <motion.div style={{ y: y1 }} className="space-y-8">
            {testimonials.slice(0, 4).map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg w-full h-[285px] lg:h-[300px]"
              >
                <p className="text-lg text-white/80 mb-4">“{t.text}”</p>
                <div className="text-base text-[#D4D414]">
                  {t.name} — {t.role}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Column 2 */}
          <motion.div style={{ y: y2 }} className="space-y-8">
            {testimonials.slice(2, 6).map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg w-full h-[285px] lg:h-[300px]"
              >
                <p className="text-lg text-white/80 mb-4">“{t.text}”</p>
                <div className="text-base text-[#D4D414]">
                  {t.name} — {t.role}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Column 3 */}
          <motion.div style={{ y: y3 }} className="space-y-8">
            {testimonials.slice(4, 8).map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg w-full h-[285px] lg:h-[300px]"
              >
                <p className="text-lg text-white/80 mb-4">“{t.text}”</p>
                <div className="text-base text-[#D4D414]">
                  {t.name} — {t.role}
                </div>
              </div>
            ))}
          </motion.div>
        </div>


      {/* Mobile View: Continuous Auto-Scroll Row */}
      <div className="md:hidden relative w-full overflow-hidden">
          {/* Top fade */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black via-black/60 to-transparent z-20 pointer-events-none" />
          
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black via-black/60 to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex gap-4"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div
              key={idx}
              className="min-w-[250px] p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg h-full md:h-[285px] lg:h-[300px]"
            >
              <p className="text-lg text-white/80 mb-4">“{t.text}”</p>
              <div className="text-base text-[#D4D414]">
                {t.name} — {t.role}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
