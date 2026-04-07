"use client";

import { motion } from "framer-motion";

export default function LocalOrganisingCommittee() {
  return (
    <section className="mb-32 bg-primary/5 dark:bg-[#1e4e79]/10 p-12 rounded-2xl border border-primary/10 dark:border-[#1e4e79]/20">
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
