"use client";

import { motion } from "framer-motion";
import Icon from "@/components/icon";

export default function RegistrationHero() {
  return (
    <section className="relative flex h-[70vh] min-h-[600px] items-center overflow-hidden bg-[#00375e] md:h-[85vh] md:min-h-[750px]">
      {/* Subtle geometric accents */}
      <div className="absolute right-0 top-0 -z-0 h-full w-1/2 translate-x-1/4 skew-x-12 transform bg-[#1e4e79]/40" />
      <div className="absolute bottom-0 left-0 -z-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#745b04]/10 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center md:px-8">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-label mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ffe08d] md:mb-6 md:text-xs">
            IISA 2026 Symposium
          </p>
          <h1 className="font-headline mb-4 text-4xl font-bold leading-tight text-white md:mb-6 md:text-7xl">
            Registration &amp;
            <br />
            <span className="italic text-[#ffe08d]">Fee Information</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/80 md:text-xl">
            Find everything you need to know about attendance fees, categories, and delegate
            benefits for the 2026 conference.
          </p>
        </motion.div>

        <div className="mt-6 flex flex-wrap justify-center gap-4 text-white md:mt-12 md:gap-10">
          <div className="flex items-center gap-2 md:gap-3">
            <Icon className="size-4 text-[#ffe08d] md:size-5" name="calendar" />
            <span className="text-xs font-medium md:text-sm">Early Bird: Oct 30, 2025</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <Icon className="size-4 text-[#ffe08d] md:size-5" name="calendar" />
            <span className="text-xs font-medium md:text-sm">November 19–22, 2026</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <Icon className="size-4 text-[#ffe08d] md:size-5" name="school" />
            <span className="text-xs font-medium md:text-sm">University of Calicut, Kerala</span>
          </div>
        </div>
      </div>

      {/* Gold bottom accent */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-[#745b04]" />
    </section>
  );
}
