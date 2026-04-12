"use client";

import { motion } from "framer-motion";
import Icon from "@/components/icon";

export default function CallForPapersHero() {
  return (
    <section className="relative flex min-h-[560px] items-center overflow-hidden bg-[#00375e] md:min-h-[700px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(159,202,252,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(116,91,4,0.18),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-screen">
        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1000 400">
          <path d="M0,220 Q100,90 200,220 T400,220 T600,220 T800,220 T1000,220" fill="none" stroke="#ffe08d" strokeWidth="2" />
          <path d="M0,250 Q150,130 300,250 T600,250 T900,250 T1000,250" fill="none" stroke="#e4c368" strokeWidth="1" />
        </svg>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-16 opacity-40">
        <svg className="h-24 w-full" preserveAspectRatio="none" viewBox="0 0 1200 160">
          <path
            d="M0,88 C60,88 60,30 120,30 C180,30 180,138 240,138 C300,138 300,48 360,48 C420,48 420,120 480,120 C540,120 540,22 600,22 C660,22 660,126 720,126 C780,126 780,62 840,62 C900,62 900,108 960,108 C1020,108 1020,44 1080,44 C1140,44 1140,90 1200,90"
            fill="none"
            stroke="#9fcafc"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-label mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffe08d] md:mb-6 md:text-xs">
            Call for Papers
          </p>
          <h1 className="font-headline mb-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-7xl">
            Submit Your Work to IISA 2026
          </h1>
          <p className="font-headline mb-8 max-w-2xl text-lg font-light text-white/80 md:mb-10 md:text-3xl">
            Acoustics, ultrasonics, vibration, and intelligent sound systems.
          </p>
          <div className="mb-8 h-1 w-16 bg-[#745b04] md:mb-10 md:w-24" />
          <div className="mb-8 max-w-3xl rounded-lg border-l-4 border-l-[#745b04] bg-white/10 p-4 backdrop-blur-md md:mb-12 md:p-6">
            <p className="font-label mb-2 text-[10px] uppercase tracking-widest text-[#ffe08d] md:text-sm">Focus</p>
            <p className="text-base font-light italic leading-relaxed text-white/90 md:text-xl">
              Original contributions across the 11 technical areas of IISA 2026.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-4 md:gap-x-10 md:gap-y-6">
            <div className="flex items-center gap-2 md:gap-3">
              <Icon className="size-4 text-[#ffe08d] md:size-5" name="calendar" />
              <div>
                <p className="text-[10px] uppercase opacity-60 text-white">Date</p>
                <p className="text-sm font-medium text-white md:text-base">November 19–22, 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <Icon className="size-4 text-[#ffe08d] md:size-5" name="location" />
              <div>
                <p className="text-[10px] uppercase opacity-60 text-white">Venue</p>
                <p className="text-sm font-medium text-white md:text-base">University of Calicut, Kerala</p>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <Icon className="size-4 text-[#ffe08d] md:size-5" name="article" />
              <div>
                <p className="text-[10px] uppercase opacity-60 text-white">Format</p>
                <p className="text-sm font-medium text-white md:text-base">Max 6 pages, A4</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Gold bottom accent */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-[#745b04]" />
    </section>
  );
}
