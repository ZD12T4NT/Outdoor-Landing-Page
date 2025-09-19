'use client';

import { motion } from 'framer-motion';
import {
  Cpu,
  ShieldCheck,
  BarChart3,
  Bot,
  Globe,
  BugOff,
} from 'lucide-react';

const cardData = [
  {
    icon: (
      <Cpu
        size={40}
        className="text-[#d4d414] border border-[#d4d414] rounded-full h-14 w-14 p-3"
      />
    ),
    title: 'AI Processing',
    description: 'Leverage ultra-fast parallel AI computation for dynamic, real-time tasks.',
  },
  {
    icon: (
      <ShieldCheck
        size={40}
        className="text-[#d4d414] border border-[#d4d414] rounded-full h-14 w-14 p-3"
      />
    ),
    title: 'Secure Cloud',
    description: 'AI-driven security across your cloud stack with predictive threat detection.',
  },
  {
    icon: (
      <BarChart3
        size={40}
        className="text-[#d4d414] border border-[#d4d414] rounded-full h-14 w-14 p-3"
      />
    ),
    title: 'Live Insights',
    description: 'Stream big data into live dashboards with near-zero latency.',
  },
    {
    icon: (
      <BarChart3
        size={40}
        className="text-[#d4d414] border border-[#d4d414] rounded-full h-14 w-14 p-3"
      />
    ),
    title: 'Live Insights',
    description: 'Stream big data into live dashboards with near-zero latency.',
  },
   
];

export default function CardGrid() {
  return (
    <section className="w-full bg-black relative z-10 py-10 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
             <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <h2 className="flex items-center gap-3 text-[#d4d414] font-medium uppercase tracking-wide text-base">
                      <span className="w-6 h-[3px] bg-[#d4d414]" />
                      why choose us?
                    </h2>
                    <h1 className="text-white text-[28px] md:text-[46px]">
                      Exceptional Service in Every Mile, Every Time
                    </h1>
                  </motion.div>
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="w-full h-full min-h-[280px]"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1, // stagger the animation based on index
                type: 'spring',
                stiffness: 80,
              }}
              viewport={{ once: true }}
            >
              <div className="bg-[#1a1a1a] backdrop-blur-sm transition duration-300 ease-in-out rounded-2xl p-4 h-full flex flex-col justify-between">
                <div className="mb-4">{card.icon}</div>
               <div className="flex flex-col">
                 <h4 className="text-white text-xl font-normal mb-2 tracking-wide">
                  {card.title}
                </h4>
                <p className="text-white/50 text-base leading-relaxed">
                  {card.description}
                </p>
               </div>
              </div>
            </motion.div>
          ))}
        </div>
    </section>
  );
}
