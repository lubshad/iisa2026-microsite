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
];

export default function ExhibitionExpo() {
  return (
    <section className="py-16">
      {/* Section header */}
      <div className="mb-16 max-w-3xl">
        <p className="font-label mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#745b04]">
          Showcase Your Innovation
        </p>
        <h2 className="font-headline mb-8 text-5xl leading-tight text-[#00375e]">
          IISA 2026 Exhibition
        </h2>
        <div className="mb-8 h-1 w-24 bg-[#745b04]" />
        <div className="border-l-4 border-l-[#745b04] py-2 pl-6">
          <p className="mb-2 font-body text-lg font-bold text-[#1a1c1c]">
            India International Symposium on Acoustics 2026
          </p>
          <p className="font-body text-sm font-semibold text-[#00375e]">
            November 19–22, 2026 &nbsp;·&nbsp; University of Calicut, Kerala, India
          </p>
        </div>
        <p className="mt-8 font-body text-lg leading-relaxed text-[#42474f]">
          An exhibition will be organized as part of IISA 2026, bringing together leading
          organizations, companies, and institutions working across all areas of acoustics. The
          exhibition provides a platform to showcase products, technologies, equipment, software,
          and services to a highly focused audience of researchers, industry professionals, and
          international delegates.
        </p>
      </div>

      {/* Scope + highlights + stats grid */}
      <div className="mb-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, x: -30 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div>
            <h3 className="font-headline mb-6 flex items-center gap-3 text-2xl text-[#00375e]">
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#00375e]/10">
                <Icon className="size-5 text-[#00375e]" name="search" />
              </div>
              Scope of Exhibition
            </h3>
            <ul className="space-y-4">
              {scopeItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-body text-sm font-medium text-[#42474f]">
                  <Icon className="size-4 text-[#00375e]" name="check" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline mb-6 flex items-center gap-3 text-2xl text-[#00375e]">
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#745b04]/10">
                <Icon className="size-5 text-[#745b04]" name="star" />
              </div>
              Exhibition Highlights
            </h3>
            <ul className="space-y-4">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-body text-sm font-medium text-[#42474f]">
                  <Icon className="size-4 text-[#745b04]" name="check" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="rounded-xl bg-[#00375e] p-10 md:p-12 text-white relative overflow-hidden"
          initial={{ opacity: 0, x: 30 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="absolute right-0 top-0 -mr-32 -mt-32 h-64 w-64 rounded-full bg-[#1e4e79] blur-[100px]" />
          <div className="relative z-10 space-y-10">
            <div>
              <h3 className="font-headline mb-6 text-2xl font-bold text-white">Target Audience</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <div className="font-body mb-1 text-3xl font-bold text-[#ffe08d]">200+</div>
                  <div className="font-label text-[10px] font-bold uppercase tracking-widest text-white/50">
                    Indian Participants
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <div className="font-body mb-1 text-3xl font-bold text-[#ffe08d]">100+</div>
                  <div className="font-label text-[10px] font-bold uppercase tracking-widest text-white/50">
                    International Participants
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-headline mb-6 text-2xl font-bold text-white">Booth Details</h3>
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-6">
                <Icon className="size-8 text-[#9fcafc]" name="settings" />
                <div>
                  <div className="text-lg font-bold text-white">9 Square Meters</div>
                  <div className="text-xs text-white/50">
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
        className="rounded-xl bg-[#f9f9f9] border border-[#f3f3f4] p-10 md:p-14"
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="mb-10 text-center">
          <h3 className="font-headline mb-2 text-3xl text-[#00375e]">Exhibition Fees</h3>
          <p className="font-body text-[#72777f]">
            Secure your spot early to take advantage of reduced rates.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="editorial-shadow rounded-xl bg-white p-8">
            <div className="mb-6 flex items-center gap-3">
              <Icon className="size-5 text-[#00375e]" name="globe" />
              <span className="font-label text-xs font-bold uppercase tracking-widest text-[#72777f]">
                Indian Exhibitors
              </span>
            </div>
            <div className="mb-4 flex items-baseline justify-between">
              <span className="font-body text-sm font-medium text-[#42474f]">
                Early (Before Sep 1, 2025)
              </span>
              <span className="font-body text-2xl font-bold text-[#1a1c1c]">₹30,000</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="font-body text-sm font-medium text-[#42474f]">
                Regular (After Sep 1, 2025)
              </span>
              <span className="font-body text-xl font-bold text-[#72777f]">₹40,000</span>
            </div>
          </div>

          <div className="editorial-shadow rounded-xl bg-white p-8">
            <div className="mb-6 flex items-center gap-3">
              <Icon className="size-5 text-[#745b04]" name="map" />
              <span className="font-label text-xs font-bold uppercase tracking-widest text-[#72777f]">
                Foreign Exhibitors
              </span>
            </div>
            <div className="mb-4 flex items-baseline justify-between">
              <span className="font-body text-sm font-medium text-[#42474f]">
                Early (Before Sep 1, 2025)
              </span>
              <span className="font-body text-2xl font-bold text-[#1a1c1c]">$1,000</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="font-body text-sm font-medium text-[#42474f]">
                Regular (After Sep 1, 2025)
              </span>
              <span className="font-body text-xl font-bold text-[#72777f]">$1,500</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 rounded-xl border border-[#00375e]/10 bg-[#f3f3f4] p-8 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-[#00375e] font-bold text-white">
              5%
            </div>
            <p className="font-body text-sm font-bold text-[#1a1c1c]">
              Discount available for sustaining members of{" "}
              <span className="text-[#00375e]">ASI</span> or{" "}
              <span className="text-[#00375e]">USI</span>
            </p>
          </div>
          <button className="kasavu-gold-gradient rounded-md px-8 py-4 font-label text-xs font-bold uppercase tracking-widest text-white transition-transform hover:scale-[1.02]">
            Enquire for Exhibition
          </button>
        </div>

        <p className="mt-10 mx-auto max-w-2xl text-center font-body italic text-[#72777f]">
          &ldquo;Organizations are invited to participate in the IISA 2026 Exhibition to showcase
          their innovations, connect with a global audience, and explore collaboration opportunities
          in acoustics and AI-driven technologies.&rdquo;
        </p>
      </motion.div>
    </section>
  );
}
