"use client";

import { motion } from "framer-motion";
import Icon from "@/components/icon";

const scopeItems = [
  "Instruments and measurement systems",
  "Acoustic equipment and devices",
  "Software and simulation tools",
  "Services and solutions related to acoustics",
];

const highlights = [
  "Dedicated exhibition area within the conference venue",
  "Coffee breaks inside the exhibition space to encourage interaction",
  "Direct engagement with global experts and decision-makers",
  "Opportunity to demonstrate products and solutions",
  "Booths assigned on a first-come, first-served basis",
];

export default function ExhibitionExpo() {
  return (
    <section className="relative overflow-hidden py-12 md:py-24">
      {/* Section header */}
      <div className="mb-8 max-w-3xl md:mb-16">
        <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#745b04]/20 bg-[#fff7e8] px-4 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#745b04]" />
          <p className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-[#745b04] md:text-xs">
            Showcase Your Innovation
          </p>
        </div>
        <h2 className="font-headline mb-4 text-4xl leading-tight text-[#00375e] md:mb-5 md:text-6xl">
          IISA 2026 Exhibition
        </h2>
        <div className="mb-6 h-1.5 w-24 rounded-full bg-[linear-gradient(90deg,#745b04,#e4c368)] md:mb-8 md:w-32" />
        <div className="border-l-4 border-l-[#745b04] py-2 pl-5 md:pl-6">
          <p className="mb-1 font-body text-base font-bold text-[#1a1c1c] md:mb-2 md:text-lg">
            India International Symposium on Acoustics 2026
          </p>
          <p className="font-body text-xs font-semibold text-[#00375e] md:text-sm">
            November 19–22, 2026 &nbsp;·&nbsp; University of Calicut, Kerala, India
          </p>
        </div>
        <p className="mt-6 font-body text-base leading-relaxed text-[#42474f] md:mt-8 md:text-lg">
          An exhibition will be organized as part of IISA 2026, bringing together leading
          organizations, companies, and institutions working across all areas of acoustics. The
          exhibition provides a platform to showcase products, technologies, equipment, software,
          and services to a highly focused audience of researchers, industry professionals, and
          international delegates.
        </p>
        <div className="mt-6 rounded-lg border border-[#00375e]/10 bg-[#f9f9f9] p-5 md:mt-8 md:p-6">
          <p className="font-label mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#745b04] md:text-xs">
            Exhibition Committee
          </p>
          <div className="space-y-2 text-sm leading-relaxed text-[#42474f] md:text-base">
            <p><span className="font-semibold text-[#00375e]">Chair:</span> Dr. S. Kandaswamy</p>
            <p><span className="font-semibold text-[#00375e]">Co-Chair:</span> Dr. Mahavir Singh</p>
          </div>
        </div>
      </div>

      {/* Scope + highlights + stats grid */}
      <div className="mb-8 grid grid-cols-1 items-start gap-8 lg:mb-16 lg:grid-cols-2 lg:gap-12">
        <motion.div
          className="space-y-8 md:space-y-12"
          initial={{ opacity: 0, x: -30 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="relative overflow-hidden rounded-lg border border-[#00375e]/10 bg-[#f9f9f9] p-5 md:p-6">
            <h3 className="font-headline mb-4 flex items-center gap-3 text-xl text-[#00375e] md:mb-6 md:text-2xl">
              <div className="flex size-9 items-center justify-center rounded-lg bg-[#00375e]/10 md:size-10 md:rounded-xl">
                <Icon className="size-4 text-[#00375e] md:size-5" name="search" />
              </div>
              Scope of Exhibition
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {scopeItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-sm font-medium text-[#42474f]">
                  <Icon className="mt-1 size-3 text-[#00375e] md:size-4" name="check" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-[#745b04]/10 bg-white p-5 md:p-6">
            <h3 className="font-headline mb-4 flex items-center gap-3 text-xl text-[#00375e] md:mb-6 md:text-2xl">
              <div className="flex size-9 items-center justify-center rounded-lg bg-[#745b04]/10 md:size-10 md:rounded-xl">
                <Icon className="size-4 text-[#745b04] md:size-5" name="star" />
              </div>
              Exhibition Highlights
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-sm font-medium text-[#42474f]">
                  <Icon className="mt-1 size-3 text-[#745b04] md:size-4" name="check" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-lg bg-[#00375e] p-5 text-white md:rounded-xl md:p-12"
          initial={{ opacity: 0, x: 30 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="absolute right-0 top-0 -mr-32 -mt-32 h-64 w-64 rounded-full bg-[#1e4e79] blur-[100px]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 opacity-30">
            <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1200 120">
              <path d="M0,72 C80,72 80,32 160,32 C240,32 240,98 320,98 C400,98 400,26 480,26 C560,26 560,90 640,90 C720,90 720,40 800,40 C880,40 880,100 960,100 C1040,100 1040,34 1120,34 C1160,34 1180,48 1200,48" fill="none" stroke="#9fcafc" strokeWidth="2" />
            </svg>
          </div>
          <div className="relative z-10 space-y-8 md:space-y-10">
            <div>
              <h3 className="font-headline mb-4 text-xl font-bold text-white md:mb-6 md:text-2xl">Target Audience</h3>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="rounded-lg border border-white/10 bg-white/5 p-4 md:rounded-xl md:p-6">
                  <div className="font-body mb-1 text-2xl font-bold text-[#ffe08d] md:text-3xl">200+</div>
                  <div className="font-label text-[9px] font-bold uppercase tracking-widest text-white/50 md:text-[10px]">
                    Indian Participants
                  </div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4 md:rounded-xl md:p-6">
                  <div className="font-body mb-1 text-2xl font-bold text-[#ffe08d] md:text-3xl">100+</div>
                  <div className="font-label text-[9px] font-bold uppercase tracking-widest text-white/50 md:text-[10px]">
                    International Participants
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-headline mb-4 text-xl font-bold text-white md:mb-6 md:text-2xl">Booth Details</h3>
              <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 md:gap-4 md:rounded-xl md:p-6">
                <Icon className="size-6 text-[#9fcafc] md:size-8" name="settings" />
                <div>
                  <div className="text-base font-bold text-white md:text-lg">9 Square Meters</div>
                  <div className="text-[10px] text-white/50 md:text-xs">
                    Standard Booth Size &nbsp;·&nbsp; First-come, first-served
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Exhibition fees */}
      <motion.div
        className="rounded-lg border border-[#e7d4c7] bg-[linear-gradient(135deg,#fffdfa,#f7f1eb)] p-5 shadow-[0_20px_45px_rgba(95,57,38,0.08)] md:rounded-xl md:p-14"
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="mb-6 text-center md:mb-10">
          <div className="mb-3 inline-flex items-center gap-3 rounded-full border border-[#745b04]/20 bg-[#fff7e8] px-4 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#745b04]" />
            <span className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-[#745b04] md:text-xs">
              Pricing
            </span>
          </div>
          <h3 className="font-headline mb-2 text-3xl text-[#00375e] md:text-5xl">Exhibition Fees</h3>
          <p className="font-body text-sm text-[#42474f] md:text-lg">
            Secure your spot early to take advantage of reduced rates.
          </p>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 md:mb-10 md:grid-cols-2 md:gap-8">
          <div className="relative overflow-hidden rounded-lg border border-[#d5b7a0] bg-[linear-gradient(135deg,#ffffff,#eef3f2)] p-5 shadow-[0_18px_38px_rgba(95,57,38,0.12)] md:rounded-xl md:p-8">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#8f4f2c] via-[#c78f6a] to-[#745b04]" />
            <div className="mb-4 flex items-center gap-3 md:mb-6">
              <Icon className="size-4 text-[#00375e] md:size-5" name="globe" />
              <span className="font-label text-[10px] font-bold uppercase tracking-widest text-[#42474f] md:text-xs">
                Indian Exhibitors
              </span>
            </div>
            <div className="mb-3 flex items-baseline justify-between md:mb-4">
              <span className="font-body text-xs font-semibold text-[#42474f] md:text-sm">
                Early (Before Sep 1, 2026)
              </span>
              <span className="font-body text-2xl font-bold text-[#8f4f2c] md:text-4xl">₹30,000</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="font-body text-xs font-semibold text-[#42474f] md:text-sm">
                Regular (After Sep 1, 2026)
              </span>
              <span className="font-body text-xl font-bold text-[#1a1c1c] md:text-3xl">₹40,000</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-[#d5b7a0] bg-[linear-gradient(135deg,#ffffff,#eef3f2)] p-5 shadow-[0_18px_38px_rgba(95,57,38,0.12)] md:rounded-xl md:p-8">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#8f4f2c] via-[#c78f6a] to-[#745b04]" />
            <div className="mb-4 flex items-center gap-3 md:mb-6">
              <Icon className="size-4 text-[#745b04] md:size-5" name="map" />
              <span className="font-label text-[10px] font-bold uppercase tracking-widest text-[#42474f] md:text-xs">
                Foreign Exhibitors
              </span>
            </div>
            <div className="mb-3 flex items-baseline justify-between md:mb-4">
              <span className="font-body text-xs font-semibold text-[#42474f] md:text-sm">
                Early (Before Sep 1, 2026)
              </span>
              <span className="font-body text-2xl font-bold text-[#8f4f2c] md:text-4xl">$1,000</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="font-body text-xs font-semibold text-[#42474f] md:text-sm">
                Regular (After Sep 1, 2026)
              </span>
              <span className="font-body text-xl font-bold text-[#1a1c1c] md:text-3xl">$1,500</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 rounded-lg border border-[#00375e]/10 bg-[#f3f3f4] p-5 md:rounded-xl md:flex-row md:p-8">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#00375e] font-bold text-white">
              5%
            </div>
            <p className="font-body text-sm font-bold text-[#1a1c1c]">
              Discount available for sustaining members of{" "}
              <span className="text-[#00375e]">ASI</span> or{" "}
              <span className="text-[#00375e]">USI</span>
            </p>
          </div>
          <button className="kasavu-gold-gradient w-full rounded-md px-8 py-4 font-label text-xs font-bold uppercase tracking-widest text-white transition-transform hover:scale-[1.02] md:w-auto">
            Enquire for Exhibition
          </button>
        </div>

        <p className="mt-8 mx-auto max-w-2xl text-center font-body text-sm italic text-[#42474f] md:mt-10 md:text-base">
          &ldquo;Organizations are invited to participate in the IISA 2026 Exhibition to showcase
          their innovations, connect with a global audience, and explore collaboration opportunities
          in acoustics and AI-driven technologies.&rdquo;
        </p>
      </motion.div>
    </section>
  );
}
