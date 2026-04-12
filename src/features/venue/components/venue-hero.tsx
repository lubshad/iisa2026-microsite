"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Icon from "@/components/icon";
import universityImg from "@/assets/images/university-of-calicut.jpg";

export default function VenueHero() {
  return (
    <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden md:h-[85vh] md:min-h-[750px]">
      {/* Full-bleed campus photo */}
      <Image
        alt="University of Calicut Campus"
        className="object-cover object-center"
        fill
        fetchPriority="high"
        priority
        sizes="100vw"
        src={universityImg}
      />

      {/* Gradient: strong at bottom-left, fades right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00375e]/90 via-[#00375e]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#00375e]/80 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-screen">
        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1000 400">
          <path d="M0,220 Q100,90 200,220 T400,220 T600,220 T800,220 T1000,220" fill="none" stroke="#ffe08d" strokeWidth="2" />
          <path d="M0,250 Q150,130 300,250 T600,250 T900,250 T1000,250" fill="none" stroke="#9fcafc" strokeWidth="1" />
        </svg>
      </div>

      {/* Content anchored to bottom-left */}
      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-7xl px-4 pb-10 md:px-8 md:pb-20">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <p className="font-label mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ffe08d] md:mb-5 md:text-xs">
              Conference Venue
            </p>
            <h1 className="font-headline mb-3 text-4xl font-bold leading-tight text-white md:text-7xl">
              University of Calicut
            </h1>
            <p className="font-headline mb-8 text-xl font-light text-white/70 md:text-3xl">
              Thenhipalam, Malappuram, Kerala
            </p>
            <p className="mb-8 max-w-3xl text-sm leading-relaxed text-white/80 md:text-base">
              University of Calicut Campus, Malappuram (Dt.), Kerala - 673635, India
            </p>

            {/* Gold accent rule */}
            <div className="mb-8 h-1 w-24 bg-[#745b04]" />

            {/* Key facts row */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-white md:gap-x-10 md:gap-y-4">
              <div className="flex items-center gap-3">
                <Icon className="size-5 text-[#ffe08d]" name="verified" />
                <span className="text-sm font-medium">NAAC &lsquo;A+&rsquo; Accredited</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon className="size-5 text-[#ffe08d]" name="school" />
                <span className="text-sm font-medium">Est. 1968</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon className="size-5 text-[#ffe08d]" name="flight" />
                <span className="text-sm font-medium">11 km from Calicut Airport (CCJ)</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon className="size-5 text-[#ffe08d]" name="map" />
                <span className="text-sm font-medium">NH 66 direct access</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gold bottom accent */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-[#745b04]" />
    </section>
  );
}
