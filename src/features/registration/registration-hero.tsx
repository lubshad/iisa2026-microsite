"use client";

import { motion } from "framer-motion";

export default function RegistrationHero() {
  return (
    <section className="relative overflow-hidden bg-[#00375e] py-32 md:py-40">
      {/* Subtle geometric accents */}
      <div className="absolute right-0 top-0 -z-0 h-full w-1/2 translate-x-1/4 skew-x-12 transform bg-[#1e4e79]/40" />
      <div className="absolute bottom-0 left-0 -z-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#745b04]/10 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-8 text-center">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-label mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#ffe08d]">
            IISA 2026 Symposium
          </p>
          <h1 className="font-headline mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
            Registration &amp;
            <br />
            <span className="italic text-[#ffe08d]">Fee Information</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-white/80">
            Find everything you need to know about attendance fees, categories, and delegate
            benefits for the 2026 conference.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[#ffe08d]" />
            <span className="text-sm">Early Bird Deadline: Oct 30, 2025</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[#ffe08d]" />
            <span className="text-sm">November 19–22, 2026</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[#ffe08d]" />
            <span className="text-sm">University of Calicut, Kerala</span>
          </div>
        </div>
      </div>

      {/* Gold bottom accent */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-[#745b04]" />
    </section>
  );
}
