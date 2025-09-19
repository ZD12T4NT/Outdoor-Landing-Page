"use client"

import { motion } from "framer-motion"
import CountUp from "react-countup"
import Button from "./Button"

const stats = [
  { id: 1, name: "Total Bookings", value: 2500 },
  { id: 2, name: "Models In Stock", value: 300 },
  { id: 3, name: "Happy Clients", value: 99 },
  { id: 4, name: "Daily Bookings", value: 50 },
]

type SplitSectionProps = {
  pretitle?: string
  title: string
  description: string
}

export default function SplitSection({
  pretitle = "ABOUT US",
  title,
  description,
}: SplitSectionProps) {
  return (
    <section className="bg-black py-24 sm:py-32 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-12 items-start">
        {/* Left side Pretitle */}
        <motion.div
          className="md:col-span-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="flex items-center gap-3 text-[#d4d414] font-normal uppercase tracking-wide text-base">
            <span className="w-6 h-[3px] bg-[#d4d414]" />
            {pretitle}
          </h2>
        </motion.div>

        {/* Right side content */}
        <motion.div
          className="md:col-span-3 flex flex-col gap-12"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Big heading */}
          <p className="text-[28px] md:text-4xl lg:text-5xl font-medium leading-snug text-white max-w-4xl">
            {description}
          </p>

          {/* Stats grid */}
          <dl className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col">
                <dd className="text-4xl md:text-5xl text-white mb-2">
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2}
                    suffix={stat.id === 1 ? "K+" : stat.id === 2 ? "+" : stat.id === 3 ? "%" : "+"}
                  />
                </dd>
                <dt className="text-base font-thin text-white/50">{stat.name}</dt>
              </div>
            ))}
          </dl>

          {/* Footer text + button */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <p className="text-base text-white/50 md:max-w-xl">
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat aenean.
            </p>
            <Button text="Learn More" variant="tertiary" href="/" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
