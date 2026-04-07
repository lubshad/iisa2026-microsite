"use client";

import { motion } from "framer-motion";
import Icon from "@/components/icon";
import { technicalTracks } from "@/features/call-for-papers/data";

export default function TechnicalTracks() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="font-label mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#745b04]">
            Research Areas
          </p>
          <h2 className="font-headline mb-8 text-5xl leading-tight text-[#00375e]">
            Technical Tracks
          </h2>
          <div className="mb-8 h-1 w-24 bg-[#745b04]" />
          <p className="font-body max-w-2xl text-lg leading-relaxed text-[#42474f]">
            We welcome submissions in the following specialized research domains.
            Each track is chaired by internationally renowned subject matter experts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {technicalTracks.map((track, index) => (
            <motion.article
              key={track.id}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className={`group flex flex-col justify-between bg-[#f3f3f4] p-8 transition-all hover:bg-[#00375e] ${
                track.wide ? "lg:col-span-2" : ""
              }`}
            >
              <div>
                <div className="mb-6 flex size-12 items-center justify-center bg-[#745b04]/10 text-[#745b04] transition-colors group-hover:bg-white/10 group-hover:text-[#ffe08d]">
                  <Icon className="size-6" name={track.icon} />
                </div>
                <span className="font-label mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#745b04] transition-colors group-hover:text-[#ffe08d]/70">
                  {track.id}
                </span>
                <h3 className="font-headline text-xl leading-snug text-[#00375e] transition-colors group-hover:text-white">
                  {track.title}
                </h3>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <div className="h-px flex-1 bg-[#745b04]/20 transition-colors group-hover:bg-white/20" />
                <Icon className="size-4 text-[#745b04]/40 transition-colors group-hover:text-white/40" name="arrow-right" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
