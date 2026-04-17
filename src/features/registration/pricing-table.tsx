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
    className="relative"
    initial={{ opacity: 0, y: 20 }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <div className="mb-5 flex items-center gap-4 md:mb-6">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c78f6a]/60 to-[#c78f6a]" />
      <h3 className="font-headline text-center text-lg font-bold tracking-tight text-[#7b4528] md:text-3xl">
        {title}
      </h3>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#c78f6a]/60 to-[#c78f6a]" />
    </div>

    <div className="overflow-hidden rounded-[1.25rem] border border-[#c78f6a] bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(231,238,237,0.96))] shadow-[0_18px_38px_rgba(95,57,38,0.14)]">
      <div className="overflow-x-auto">
        <table className="w-full table-fixed text-left">
          <colgroup>
            <col className="w-[32%]" />
            <col className="w-[34%]" />
            <col className="w-[34%]" />
          </colgroup>
          <thead>
            <tr className="bg-[#c78f6a]">
              <th className="bg-[linear-gradient(135deg,#8f4f2c,#67351e)] px-2 py-2.5 text-center text-[11px] font-bold text-white md:px-4 md:py-4 md:text-xl">
                Category
              </th>
              <th className="border-l border-[#c78f6a] bg-[linear-gradient(135deg,#8f4f2c,#67351e)] px-2 py-2.5 text-center text-[11px] font-bold text-white md:px-4 md:py-4 md:text-xl">
                Before Sept 1, 2026
              </th>
              <th className="border-l border-[#c78f6a] bg-[linear-gradient(135deg,#8f4f2c,#67351e)] px-2 py-2.5 text-center text-[11px] font-bold text-white md:px-4 md:py-4 md:text-xl">
                After Sept 1, 2026
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={row.category}
                className={i % 2 === 0 ? "bg-[rgba(216,221,222,0.62)]" : "bg-transparent"}
              >
                <td className="px-2 py-2.5 text-xs font-medium leading-tight text-[#5b3926] md:px-5 md:py-5 md:text-[1.1rem]">
                  {row.category}
                </td>
                <td className="px-2 py-2.5 text-center text-xs font-medium text-[#5b3926] md:px-4 md:py-5 md:text-[1.1rem]">
                  {row.early}
                </td>
                <td className="px-2 py-2.5 text-center text-xs font-medium text-[#5b3926] md:px-4 md:py-5 md:text-[1.1rem]">
                  {row.regular}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <p className="mt-4 text-xs italic text-[#6a5448] md:mt-5">
      * Early Bird registration is valid up to September 1, 2026.
    </p>
  </motion.div>
);

export default function PricingTable() {
  return (
    <section className="py-12 md:py-24 space-y-12">
      <div className="space-y-10">
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
              Before September 1, 2026 and After September 1, 2026.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
