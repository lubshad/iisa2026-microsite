"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Icon from "@/components/icon";
import universityImg from "@/assets/images/university-of-calicut.jpg";

export default function CallForPapersHero() {
  return (
    <section className="relative flex h-[70vh] min-h-[600px] items-end overflow-hidden bg-[#00375e] md:h-[85vh] md:min-h-[750px]">
      <Image
        alt="University of Calicut campus aerial view"
        className="object-cover object-center"
        fill
        fetchPriority="high"
        priority
        sizes="100vw"
        src={universityImg}
      />
      <div className="hero-gradient absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-24 md:px-8 md:pb-20 md:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-label mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffe08d] md:mb-6 md:text-xs">
            Call for Papers
          </p>
          <h1 className="font-headline mb-4 max-w-3xl text-3xl font-bold leading-tight text-white md:text-7xl">
            India International Symposium on Acoustics
          </h1>
          <p className="font-headline mb-8 text-xl font-light text-white/70 md:mb-10 md:text-3xl">
            IISA 2026
          </p>
          <div className="mb-8 h-1 w-16 bg-[#745b04] md:mb-10 md:w-24" />
          <p className="font-body mb-10 max-w-2xl text-base leading-relaxed text-white/80 md:mb-12 md:text-lg">
            IISA 2026 invites researchers, academicians, industry professionals,
            and practitioners to submit original research papers in all areas of
            acoustics, ultrasonics, and vibration.
          </p>

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
