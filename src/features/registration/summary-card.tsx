"use client";

import { motion } from "framer-motion";
import { getRegistrationPrice, type RegistrationFormData } from "./types";
import { UseFormWatch } from "react-hook-form";
import Icon from "@/components/icon";

type SummaryCardProps = {
  watch: UseFormWatch<RegistrationFormData>;
  isSubmitting: boolean;
};

const INCLUSIONS = [
  "Conference proceedings & materials",
  "Working lunch & coffee breaks",
  "Traditional Kerala Cultural program",
  "Exclusive Conference banquet",
  "Venue-to-accommodation transport"
];

export const SummaryCard = ({ watch, isSubmitting }: SummaryCardProps) => {
  const allValues = watch();
  const { amount, currency } = getRegistrationPrice(allValues);
  const isEarly = allValues.registrationType === "EARLY_BIRD";

  return (
    <div className="sticky top-24 space-y-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[32px] p-5 md:p-8 shadow-2xl shadow-primary/10 ring-1 ring-slate-100 overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl" />

        <div className="relative z-10">
          <h4 className="font-headline text-lg font-bold text-slate-800 mb-6 flex items-center gap-2 uppercase tracking-tight">
            <Icon name="credit-card" className="w-5 h-5 text-primary" />
            Pricing Summary
          </h4>

          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500 font-medium">Rate Category</span>
              <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-widest ${isEarly ? "bg-green-50 text-green-600" : "bg-slate-100 text-slate-500"}`}>
                {isEarly ? "Early Bird" : "Regular"}
              </span>
            </div>
            
            <div className="flex justify-between items-start text-xs border-b border-slate-50 pb-4">
              <span className="text-slate-500 font-medium uppercase tracking-tighter">Membership</span>
              <span className="font-bold text-slate-800 text-right max-w-[150px] uppercase leading-none">
                {allValues.membershipType?.replace(/_/g, " ")}
              </span>
            </div>

            {allValues.hasAccompanyingPerson && (
              <div className="flex justify-between items-center text-xs text-primary font-bold">
                <span className="uppercase tracking-tighter italic">Accompanying Person</span>
                <span>+ {currency} {isEarly ? (currency === "$" ? 125 : 2000) : (currency === "$" ? 175 : 3000)}</span>
              </div>
            )}
          </div>

          <div className="pt-6 border-t border-dashed border-slate-200">
            <div className="flex justify-between items-end mb-2">
              <span className="font-bold text-slate-800 uppercase text-xs tracking-widest">Total Amount</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-primary">
                  {currency === "$" ? "$" : ""} {amount.toLocaleString()} {currency === "₹" ? "₹" : ""}
                </span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full mt-8 py-5 rounded-2xl font-label text-sm font-black uppercase tracking-[0.2em] transition-all relative overflow-hidden group
              ${
                isSubmitting
                  ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                  : "bg-primary text-white shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95"
              }`}
          >
            <span className="relative z-10">{isSubmitting ? "Processing..." : "Complete Registration"}</span>
          </button>
        </div>
      </motion.div>

      <div className="bg-slate-900 rounded-3xl p-5 md:p-8 text-white shadow-xl">
        <h5 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4">Registration Includes</h5>
        <ul className="space-y-4">
          {INCLUSIONS.map((item, i) => (
            <li key={i} className="flex gap-3 items-start text-xs font-medium text-slate-300">
              <div className="w-5 h-5 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Icon name="check" className="w-3 h-3" />
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
