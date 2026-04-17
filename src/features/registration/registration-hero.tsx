"use client";

import { motion } from "framer-motion";
import Icon from "@/components/icon";
import HeroBackdrop from "@/components/hero-backdrop";

export default function RegistrationHero() {
  return (
    <section className="relative flex h-[70vh] min-h-[600px] items-center overflow-hidden bg-[#120f2e] md:h-[85vh] md:min-h-[750px]">
      <HeroBackdrop />

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
            Find the brochure-backed registration categories, fee slabs, exhibition rates,
            and sponsorship information for IISA 2026.
          </p>
          <div className="mx-auto mt-6 max-w-3xl rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm md:mt-8">
            <p className="font-label mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffe08d] md:text-xs">
              Delegate Value
            </p>
            <p className="text-sm leading-relaxed text-white/80 md:text-base">
              Registration includes proceedings and conference materials, lunch and coffee
              breaks, the cultural program, the conference banquet, and transport from the
              venue to the place of accommodation.
            </p>
          </div>
        </motion.div>

        <div className="mt-6 flex flex-wrap justify-center gap-4 text-white md:mt-12 md:gap-10">
          <div className="flex items-center gap-2 md:gap-3">
            <Icon className="size-4 text-[#ffe08d] md:size-5" name="calendar" />
            <span className="text-xs font-medium md:text-sm">Early Bird Cutoff: September 1, 2025</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <Icon className="size-4 text-[#ffe08d] md:size-5" name="calendar" />
            <span className="text-xs font-medium md:text-sm">November 19–22, 2026</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <Icon className="size-4 text-[#ffe08d] md:size-5" name="school" />
            <span className="text-xs font-medium md:text-sm">University of Calicut Campus, Malappuram (Dt.), Kerala</span>
          </div>
        </div>
      </div>

      {/* Gold bottom accent */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-[#745b04]" />
    </section>
  );
}
