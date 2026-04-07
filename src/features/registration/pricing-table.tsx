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
    className="editorial-shadow rounded-xl bg-white p-8 md:p-10"
    initial={{ opacity: 0, y: 20 }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <div className="mb-8 flex items-center gap-4">
      <div className="flex size-12 items-center justify-center rounded-xl bg-[#00375e]/10">
        <Icon className="size-6 text-[#00375e]" name="credit-card" />
      </div>
      <h3 className="font-headline text-2xl text-[#00375e]">{title}</h3>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-[#f3f3f4]">
            <th className="font-label pb-4 text-xs font-bold uppercase tracking-widest text-[#72777f]">
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
                <span className="font-body text-base font-semibold text-[#72777f]">
                  {row.regular}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p className="mt-8 text-xs italic text-[#72777f]">
      * Early Bird registration is valid until October 30, 2025.
    </p>
  </motion.div>
);

export default function PricingTable() {
  return (
    <section className="py-16 space-y-12">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <TableSection data={indianFees} title="Indian / SAARC Participants" />
        <TableSection data={foreignFees} title="Foreign Delegates" />
      </div>

      <motion.div
        className="relative overflow-hidden rounded-xl bg-[#00375e] p-10 md:p-16 text-white"
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="absolute right-0 top-0 h-64 w-64 -mr-32 -mt-32 rounded-full bg-[#1e4e79] blur-[100px]" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-headline mb-2 text-3xl font-bold text-white">
              Registration Includes
            </h3>
            <div className="mb-8 h-1 w-16 bg-[#745b04]" />
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
          <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
            <Icon className="mx-auto mb-6 size-12 text-[#9fcafc]" name="info" />
            <h4 className="font-headline mb-4 text-xl font-bold text-white">Need Help?</h4>
            <p className="font-body mb-8 text-sm leading-relaxed text-white/60">
              If you have any questions regarding the registration categories or payment methods,
              please reach out to our organizing committee.
            </p>
            <a
              className="kasavu-gold-gradient inline-flex items-center gap-2 rounded-md px-8 py-4 font-label text-xs font-bold uppercase tracking-widest text-white transition-transform hover:scale-105"
              href="mailto:support@iisa2026.org"
            >
              Contact Support
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
