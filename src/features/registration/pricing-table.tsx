"use client";

import { motion } from "framer-motion";
import Icon from "@/components/icon";

const indianFees = [
  { category: "Non-ASI / USI Member", early: "₹5,000", regular: "₹6,000" },
  { category: "ASI / USI Member", early: "₹4,000", regular: "₹5,000" },
  { category: "Student", early: "₹2,000", regular: "₹3,000" },
  { category: "Accompanying Person", early: "₹2,000", regular: "₹3,000" },
];

const foreignFees = [
  { category: "Non-Member", early: "$350", regular: "$400" },
  { category: "Member (SAS / IIAV / IEEE OES)", early: "$250", regular: "$300" },
  { category: "Student", early: "$125", regular: "$175" },
  { category: "Accompanying Person", early: "$125", regular: "$175" },
];

const inclusions = [
  "Conference proceedings and materials",
  "Lunch and coffee breaks",
  "Cultural program",
  "Conference banquet",
  "Transport from venue to accommodation",
];

const TableSection = ({ title, data }: { title: string; data: { category: string; early: string; regular: string }[] }) => (
  <motion.div
    className="editorial-shadow relative overflow-hidden rounded-xl bg-white p-5 md:p-10"
    initial={{ opacity: 0, y: 20 }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#00375e] via-[#9fcafc] to-[#745b04]" />
    <div className="mb-6 flex items-center gap-4 md:mb-8">
      <div className="flex size-12 items-center justify-center rounded-xl bg-[#00375e]/10">
        <Icon className="size-6 text-[#00375e]" name="credit-card" />
      </div>
      <h3 className="font-headline text-2xl text-[#00375e]">{title}</h3>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-[#f3f3f4]">
            <th className="font-label pb-4 text-xs font-bold uppercase tracking-widest text-[#42474f]">
              Category
            </th>
            <th className="font-label pb-4 text-xs font-bold uppercase tracking-widest text-[#745b04]">
              Early Bird
            </th>
            <th className="font-label pb-4 text-xs font-bold uppercase tracking-widest text-[#42474f]">
              Regular
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#f3f3f4]">
          {data.map((row, i) => (
            <tr key={i} className="transition-colors hover:bg-[#f9f9f9]/60">
              <td className="py-5 pr-4">
                <span className="font-body text-base font-semibold text-[#1a1c1c]">
                  {row.category}
                </span>
              </td>
              <td className="py-5">
                <span className="font-body text-lg font-bold text-[#00375e]">{row.early}</span>
              </td>
              <td className="py-5">
                <span className="font-body text-base font-semibold text-[#42474f]">
                  {row.regular}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="mt-6 overflow-hidden rounded bg-[#f9f9f9] px-2 py-2">
      <svg className="h-4 w-full" preserveAspectRatio="none" viewBox="0 0 200 24">
        <path d="M0,12 C10,12 10,5 20,5 C30,5 30,19 40,19 C50,19 50,8 60,8 C70,8 70,16 80,16 C90,16 90,4 100,4 C110,4 110,20 120,20 C130,20 130,9 140,9 C150,9 150,15 160,15 C170,15 170,7 180,7 C190,7 190,12 200,12" fill="none" stroke="#1e4e79" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
    <p className="mt-8 text-xs italic text-[#42474f]">
      * Early Bird registration is valid up to September 1, 2025.
    </p>
  </motion.div>
);

export default function PricingTable() {
  return (
    <section className="py-12 md:py-24 space-y-12">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <TableSection data={indianFees} title="Indian / SAARC Participants" />
        <TableSection data={foreignFees} title="Foreign Delegates" />
      </div>

      <motion.div
        className="relative overflow-hidden rounded-xl bg-[#00375e] p-6 text-white md:p-16"
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="absolute right-0 top-0 h-64 w-64 -mr-32 -mt-32 rounded-full bg-[#1e4e79] blur-[100px]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 opacity-30">
          <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M0,72 C80,72 80,32 160,32 C240,32 240,98 320,98 C400,98 400,26 480,26 C560,26 560,90 640,90 C720,90 720,40 800,40 C880,40 880,100 960,100 C1040,100 1040,34 1120,34 C1160,34 1180,48 1200,48" fill="none" stroke="#9fcafc" strokeWidth="2" />
          </svg>
        </div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-headline mb-2 text-3xl font-bold text-white">
              Registration Includes
            </h3>
            <div className="mb-6 h-1 w-16 bg-[#745b04] md:mb-8" />
            <p className="font-body mb-8 text-lg text-white/70">
              All registered delegates are entitled to the full conference experience and academic
              resources.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {inclusions.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-white/80">
                  <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#745b04]/40">
                    <Icon className="size-3 text-[#ffe08d]" name="check" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm md:p-8">
            <Icon className="mx-auto mb-6 size-12 text-[#9fcafc]" name="info" />
            <h4 className="font-headline mb-4 text-xl font-bold text-white">Registration Timing</h4>
            <p className="font-body mb-4 text-sm leading-relaxed text-white/70">
              The brochure defines two fee slabs for all categories:
            </p>
            <p className="font-body text-sm leading-relaxed text-white/80">
              Before September 1, 2025 and After September 1, 2025.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
