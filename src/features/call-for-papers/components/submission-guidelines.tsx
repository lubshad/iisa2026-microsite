"use client";

import { motion } from "framer-motion";
import Icon from "@/components/icon";
import { submissionGuidelines } from "@/features/call-for-papers/data";

export default function SubmissionGuidelines() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-24">
      <div className="pointer-events-none absolute left-0 top-16 hidden h-64 w-64 rounded-full bg-[#9fcafc]/20 blur-3xl md:block" />
      <div className="mx-auto max-w-7xl grid grid-cols-1 items-start gap-8 px-4 md:gap-16 md:px-8 lg:grid-cols-12">
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: -30 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-label mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#745b04] md:mb-4 md:text-xs">
            Paper Submission
          </p>
          <h2 className="font-headline mb-6 text-3xl leading-tight text-[#00375e] md:mb-8 md:text-5xl">
            Submission Guidelines
          </h2>
          <div className="mb-6 h-1 w-16 bg-[#745b04] md:mb-10 md:w-24" />
          <p className="font-body mb-8 text-base leading-relaxed text-[#42474f] md:mb-12 md:text-lg">
            IISA 2026 invites original contributions that have not been published or
            submitted for publication elsewhere. All submissions undergo a
            double-blind peer review by at least three members of the technical
            program committee.
          </p>
          <div className="space-y-8">
            {submissionGuidelines.map((guideline, index) => (
              <motion.div
                key={guideline.title}
                className="group relative overflow-hidden rounded-lg border border-[#00375e]/10 bg-[#f9f9f9] p-5 md:p-6"
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#00375e] via-[#9fcafc] to-[#745b04]" />
                <div className="flex gap-6">
                  <div className="flex size-12 flex-shrink-0 items-center justify-center bg-[#745b04]/10 text-[#745b04] transition-colors group-hover:bg-[#745b04] group-hover:text-white">
                    <Icon className="size-6" name={guideline.icon} />
                  </div>
                  <div>
                    <h3 className="font-headline mb-2 text-lg text-[#00375e]">{guideline.title}</h3>
                    <p className="font-body leading-relaxed text-[#42474f]">{guideline.description}</p>
                    <div className="mt-4 overflow-hidden rounded bg-white px-2 py-2">
                      <svg className="h-4 w-full" preserveAspectRatio="none" viewBox="0 0 200 24">
                        <path d="M0,12 C10,12 10,4 20,4 C30,4 30,20 40,20 C50,20 50,8 60,8 C70,8 70,15 80,15 C90,15 90,5 100,5 C110,5 110,19 120,19 C130,19 130,9 140,9 C150,9 150,16 160,16 C170,16 170,6 180,6 C190,6 190,12 200,12" fill="none" stroke="#1e4e79" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, x: 30 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative overflow-hidden border-l-4 border-[#745b04] bg-[#f3f3f4] p-6 md:p-12">
            <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-bl-[3rem] bg-white/50" />
            <div className="mb-6 flex items-center gap-4 md:mb-8">
              <Icon className="size-6 text-[#745b04] md:size-8" name="upload" />
              <h3 className="font-headline text-2xl text-[#00375e] md:text-3xl">Official Submission Portal</h3>
            </div>
            <p className="font-body mb-8 text-base leading-relaxed text-[#42474f] md:mb-10 md:text-lg">
              Click the button below to access the official submission system.
              Ensure your submission meets all guidelines before uploading.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="kasavu-gold-gradient inline-flex items-center gap-3 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] md:px-8 md:py-4 md:text-base"
                href="#"
              >
                Access Portal
                <Icon className="size-4 md:size-5" name="external-link" />
              </a>
              <a
                className="inline-flex items-center gap-3 border border-[#c2c7d0] bg-white px-8 py-4 text-base font-semibold text-[#00375e] transition-colors hover:bg-[#f3f3f4]"
                href="#"
              >
                <Icon className="size-5" name="download" />
                Download Template
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-[#c2c7d0]/30 pt-10">
              {[
                { label: "Max Pages", value: "6 pages" },
                { label: "Paper Size", value: "A4 format" },
                { label: "Review Process", value: "Double-blind" },
                { label: "Min Reviewers", value: "3 members" },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-[#745b04]/40 pl-4">
                  <p className="font-label text-xs font-bold uppercase tracking-widest text-[#745b04]">
                    {item.label}
                  </p>
                  <p className="font-headline mt-1 text-xl text-[#00375e]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
