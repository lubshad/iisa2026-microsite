"use client";

import { motion } from "framer-motion";

export default function VenueOverview() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-24">
      <div className="mx-auto max-w-7xl grid grid-cols-1 items-center gap-8 px-4 md:gap-16 md:px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <p className="font-label mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#745b04]">
            Academic Hub
          </p>
          <h2 className="font-headline mb-6 text-3xl leading-tight text-[#00375e] md:mb-8 md:text-5xl">
            About the Venue
          </h2>
          <div className="mb-6 h-1 w-16 bg-[#745b04] md:mb-8 md:w-24" />

          <p className="font-body mb-6 text-lg leading-relaxed text-[#42474f]">
            IISA 2026 will be held at the University of Calicut, one of Kerala&apos;s premier
            higher education institutions. Established in 1968, it is recognised for academic
            excellence, inclusive education, and impactful research.
          </p>
          <p className="font-body mb-8 text-lg leading-relaxed text-[#42474f] md:mb-12">
            Located at Thenhipalam in Malappuram district, the campus offers a serene academic
            setting with modern infrastructure and active national and international collaborations.
          </p>
        </motion.div>

        {/* Google Map embed */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.97 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.7225133027396!2d75.89266047508725!3d11.134031952495741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba651d12ad11f7d%3A0xcdc1f327bd56c1a3!2sUniversity%20of%20Calicut!5e0!3m2!1sen!2sin!4v1776412563251!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="University of Calicut on Google Maps"
              className="absolute inset-0 h-full w-full"
            />
          </div>
          {/* Decorative border accent */}
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-xl border-2 border-[#745b04]/20" />
        </motion.div>
      </div>
    </section>
  );
}
