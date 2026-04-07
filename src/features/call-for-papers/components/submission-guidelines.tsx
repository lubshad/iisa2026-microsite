"use client";

import { motion } from "framer-motion";
import Icon from "@/components/icon";
import { submissionGuidelines } from "@/features/call-for-papers/data";

export default function SubmissionGuidelines() {
  return (
    <section className="bg-white py-12 md:py-24">
      <div className="mx-auto max-w-7xl grid grid-cols-1 items-start gap-8 px-4 md:gap-16 md:px-8 lg:grid-cols-12">
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: -30 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-label mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#745b04]">
            Paper Submission
          </p>
          <h2 className="font-headline mb-6 text-3xl leading-tight text-[#00375e] md:mb-8 md:text-5xl">
            Submission Guidelines
          </h2>
          <div className="mb-6 h-1 w-16 bg-[#745b04] md:mb-10 md:w-24" />
          <p className="font-body mb-8 text-lg leading-relaxed text-[#42474f] md:mb-12">
            IISA 2026 invites original contributions that have not been published or
            submitted for publication elsewhere. All submissions undergo a
            double-blind peer review by at least three members of the technical
            program committee.
          </p>
          <div className="space-y-8">
            {submissionGuidelines.map((guideline, index) => (
              <motion.div
                key={guideline.title}
                className="group flex gap-6"
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex size-12 flex-shrink-0 items-center justify-center bg-[#745b04]/10 text-[#745b04] transition-colors group-hover:bg-[#745b04] group-hover:text-white">
                  <Icon className="size-6" name={guideline.icon} />
                </div>
                <div>
                  <h3 className="font-headline mb-2 text-lg text-[#00375e]">{guideline.title}</h3>
                  <p className="font-body text-[#42474f] leading-relaxed">{guideline.description}</p>
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
          <div className="border-l-4 border-[#745b04] bg-[#f3f3f4] p-8 md:p-12">
            <div className="mb-8 flex items-center gap-4">
              <Icon className="size-8 text-[#745b04]" name="upload" />
              <h3 className="font-headline text-3xl text-[#00375e]">Official Submission Portal</h3>
            </div>
            <p className="font-body mb-10 text-lg leading-relaxed text-[#42474f]">
              Click the button below to access the official submission system.
              Ensure your submission meets all guidelines before uploading.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="kasavu-gold-gradient inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
                href="#"
              >
                Access Submission Portal
                <Icon className="size-5" name="external-link" />
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
