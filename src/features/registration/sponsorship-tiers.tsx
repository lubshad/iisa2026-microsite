"use client";

import { motion } from "framer-motion";
import Icon from "@/components/icon";

const tiers = [
  {
    name: "Standard Sponsor",
    price: "₹30,000 / $1,000",
    features: [
      "Logo on all printed materials and publications",
      "Mention in conference program and abstract book",
      "One-page sponsor description with website link in digital materials",
    ],
    variant: "standard",
  },
  {
    name: "Silver Sponsor",
    price: "₹60,000 / $2,000",
    features: [
      "All Standard Sponsor benefits",
      "Inclusion of sponsor leaflet (max 8 pages) in participant kits",
    ],
    variant: "standard",
  },
  {
    name: "Gold Sponsor",
    price: "₹90,000 / $3,000",
    description: "Most Popular",
    features: [
      "All Silver Sponsor benefits",
      "Sponsor logo on items (pen, notepad, or bags)",
      "Recognition during events (receptions, lunches, awards)",
    ],
    variant: "popular",
  },
  {
    name: "Platinum Sponsor",
    price: "₹1,20,000+ / $6,000+",
    features: [
      "All Gold Sponsor benefits",
      "Additional custom benefits to be discussed with organizers",
    ],
    variant: "exclusive",
  },
] as const;

const generalBenefits = [
  "Logo placement on conference materials and publications",
  "Inclusion in sponsor list in program and abstract book",
  "Sponsor profile included in conference digital materials",
];

export default function SponsorshipTiers() {
  return (
    <section className="py-16">
      {/* Section header */}
      <div className="mb-10 max-w-3xl md:mb-16">
        <p className="font-label mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#745b04]">
          Partnership Opportunities
        </p>
        <h2 className="font-headline mb-6 text-3xl leading-tight text-[#00375e] md:mb-8 md:text-5xl">
          IISA 2026 Sponsorship
        </h2>
        <div className="mb-6 h-1 w-16 bg-[#745b04] md:mb-8 md:w-24" />
        <div className="border-l-4 border-l-[#745b04] py-2 pl-6">
          <p className="mb-2 font-body text-lg font-bold text-[#1a1c1c]">
            India International Symposium on Acoustics 2026
          </p>
          <p className="mb-3 font-body italic text-[#42474f]">
            &ldquo;AI for Acoustics: Innovation, Inclusion and Impact for Social Good&rdquo;
          </p>
          <p className="font-body text-sm font-semibold text-[#00375e]">
            November 19–22, 2026 &nbsp;·&nbsp; University of Calicut, Kerala, India
          </p>
        </div>
        <p className="mt-8 font-body text-lg leading-relaxed text-[#42474f]">
          Sponsorship opportunities are open for companies and institutions to support IISA 2026.
          Sponsors will gain visibility among researchers, industry professionals, and international
          delegates. Sponsorship contributions will support student participation and conference
          activities.
        </p>
      </div>

      {/* Tier cards */}
      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {tiers.map((tier, index) => (
          <motion.div
            key={index}
            className={`group relative flex flex-col rounded-xl p-6 transition-all duration-300 md:p-8 ${
              tier.variant === "popular"
                ? "editorial-shadow ring-2 ring-[#00375e] bg-[#00375e]/5 -translate-y-2"
                : tier.variant === "exclusive"
                  ? "bg-[#00375e] text-white"
                  : "editorial-shadow bg-white hover:shadow-lg"
            }`}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {tier.variant === "popular" && (
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00375e] px-6 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white">
                {tier.description}
              </div>
            )}

            <div className="mb-8">
              <span
                className={`font-label mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] ${
                  tier.variant === "exclusive" ? "text-[#9fcafc]" : "text-[#72777f]"
                }`}
              >
                {tier.name}
              </span>
              <div
                className={`font-body text-xl font-bold ${
                  tier.variant === "exclusive" ? "text-white" : "text-[#1a1c1c]"
                }`}
              >
                {tier.price}
              </div>
            </div>

            <ul className="mb-10 flex-1 space-y-4">
              {tier.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-start gap-3">
                  <Icon
                    className={`mt-0.5 size-4 shrink-0 ${
                      tier.variant === "exclusive" ? "text-[#ffe08d]" : "text-[#00375e]"
                    }`}
                    name="check"
                  />
                  <span
                    className={`font-body text-xs leading-relaxed ${
                      tier.variant === "exclusive" ? "text-white/70" : "text-[#42474f]"
                    }`}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full rounded-md py-3.5 font-label text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95 ${
                tier.variant === "popular"
                  ? "bg-[#00375e] text-white shadow-lg hover:bg-[#1e4e79]"
                  : tier.variant === "exclusive"
                    ? "bg-white text-[#00375e] hover:bg-white/90"
                    : "border border-[#00375e]/20 bg-white text-[#00375e] hover:border-[#00375e]"
              }`}
            >
              Inquire Now
            </button>
          </motion.div>
        ))}
      </div>

      {/* General benefits */}
      <motion.div
        className="rounded-xl bg-[#f9f9f9] p-10 md:p-14 border border-[#f3f3f4]"
        initial={{ opacity: 0, scale: 0.98 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h3 className="font-headline mb-6 text-3xl text-[#00375e]">
              General Benefits for All Sponsors
            </h3>
            <ul className="space-y-4">
              {generalBenefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-4 font-body font-medium text-[#42474f]">
                  <div className="flex size-6 items-center justify-center rounded-full bg-[#00375e]/10">
                    <Icon className="size-4 text-[#00375e]" name="check" />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="editorial-shadow flex items-center justify-center rounded-xl bg-white p-8">
            <button className="kasavu-gold-gradient w-full rounded-md py-5 font-label text-xs font-bold uppercase tracking-widest text-white transition-transform hover:scale-[1.02]">
              Download Sponsorship Brochure
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
