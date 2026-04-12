"use client";

import { motion } from "framer-motion";

const pastPresidents = [
  "Dr. V. K. Aatre",
  "Dr. S. S. Agrawal",
  "Prof. M. L. Munjal",
  "Prof. N. Narayanan",
  "Prof. B. V. A. Rao",
  "Dr. V. Mohanan",
  "Dr. V. Bhujanga Rao",
  "Dr. V. Rajendran",
  "Dr. V. R. Singh",
  "Dr. D. K. Aswal",
];

export default function PastPresidentsASI() {
  return (
    <section className="mb-12 md:mb-20">
      <h3 className="font-headline mb-6 border-b border-[#c2c7d0]/30 pb-4 text-2xl text-[#00375e] md:mb-8 md:text-3xl">
        Past Presidents of Acoustical Society of India (ASI)
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {pastPresidents.map((president, index) => (
          <motion.div
            key={president}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="relative overflow-hidden rounded-lg border border-[#c2c7d0]/10 bg-[#f3f3f4] p-4 text-center"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#00375e] via-[#9fcafc] to-[#745b04]" />
            <p className="text-[#42474f] text-sm font-medium">
              {president}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
