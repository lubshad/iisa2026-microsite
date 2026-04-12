"use client";

import { motion } from "framer-motion";

export default function LocalOrganisingCommittee() {
  return (
    <section className="relative mb-16 overflow-hidden rounded-2xl border border-primary/10 bg-primary/5 p-6 md:mb-32 md:p-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 opacity-40">
        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M0,72 C80,72 80,32 160,32 C240,32 240,98 320,98 C400,98 400,26 480,26 C560,26 560,90 640,90 C720,90 720,40 800,40 C880,40 880,100 960,100 C1040,100 1040,34 1120,34 C1160,34 1180,48 1200,48" fill="none" stroke="#9fcafc" strokeWidth="2" />
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <h3 className="font-headline text-3xl text-[#00375e] mb-6">
          Local Organising Committee
        </h3>
        <p className="text-[#42474f] text-lg leading-relaxed">
          The symposium is proudly supported by dedicated members from the
          <span className="text-[#00375e] font-bold"> University of Calicut</span> and
          <span className="text-[#00375e] font-bold"> Kannur University</span>, Kerala.
        </p>
      </motion.div>
    </section>
  );
}
