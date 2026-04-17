"use client";

import { motion } from "framer-motion";
import Icon from "@/components/icon";

const travelModes = [
  {
    icon: "flight",
    title: "By Air",
    nearest: "Nearest Airport:",
    station: "Calicut International Airport (CCJ)",
    distance: "(~26 km)",
    fares: [
      { label: "Prepaid Taxi to University", cost: "₹ 800" },
      { label: "Auto Rickshaw to University", cost: "₹ 500" },
    ],
  },
  {
    icon: "train",
    title: "By Train",
    nearest: "Nearest Station:",
    station: "Kozhikode Railway Station (CLT)",
    distance: "(~24 km)",
    fares: [
      { label: "Taxi to University", cost: "₹ 600" },
      { label: "Auto Rickshaw to University", cost: "₹ 400" },
    ],
  },
];

export default function HowToReach() {
  return (
    <section className="relative overflow-hidden bg-[#f9f9f9] py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center md:mb-16"
        >
          <h2 className="font-headline text-3xl leading-tight text-[#00375e] md:text-5xl">
            How to Reach
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {travelModes.map((mode, index) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="overflow-hidden rounded-xl bg-white shadow-lg"
            >
              {/* Top border accent */}
              <div className="h-1.5 w-full bg-[#00375e]" />

              <div className="p-6 md:p-8">
                {/* Icon + Title */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f0f4f8]">
                    <Icon name={mode.icon} className="size-5 text-[#00375e]" />
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-[#00375e]">
                    {mode.title}
                  </h3>
                </div>

                {/* Station info */}
                <p className="font-body mb-6 text-base text-[#42474f]">
                  {mode.nearest}{" "}
                  <span className="font-bold text-[#1a1a1a]">{mode.station}</span>
                  <br />
                  {mode.distance}
                </p>

                {/* Fare rows */}
                <div className="space-y-3">
                  {mode.fares.map((fare) => (
                    <div
                      key={fare.label}
                      className="flex items-center justify-between"
                    >
                      <span className="font-body text-sm text-[#42474f]">
                        {fare.label}
                      </span>
                      <span className="font-body text-sm font-bold text-[#1a1a1a]">
                        ~ {fare.cost}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
