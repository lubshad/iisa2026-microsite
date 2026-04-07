"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Icon from "@/components/icon";

export default function VenueSection() {
  return (
    <section id="venue" className="mb-32">
      <div className="bg-surface-dim/20 dark:bg-slate-900/40 -mx-8 px-8 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-headline text-5xl font-bold text-primary dark:text-white mb-8 leading-tight">
              Venue:
              <br />
              University of Calicut
            </h2>
            <p className="text-on-surface-variant dark:text-slate-400 text-lg leading-relaxed mb-10">
              Located at Thenhipalam, Malappuram, the campus is a masterpiece of
              intellectual serenity. Spread across 500 acres of lush greenery,
              it stands as the largest university in Kerala, bridging the
              historic city of Kozhikode and the industrial corridors of
              Malappuram.
            </p>
            <div className="space-y-6">
              {[
                {
                  icon: "flight",
                  title: "Air Access",
                  desc: "Calicut International Airport (CCJ) is just 12km from the campus, offering direct global connectivity.",
                },
                {
                  icon: "train",
                  title: "Rail Connectivity",
                  desc: "Parappanangadi (12km) and Calicut (24km) Railway Stations connect the venue to all major Indian cities.",
                },
                {
                  icon: "bus",
                  title: "Roadways",
                  desc: "NH 66 passes right by the campus, ensuring effortless transit via road from Kozhikode and Kannur.",
                },
              ].map((item, index) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="bg-secondary/10 dark:bg-[#E4C368]/10 p-2 rounded-full">
                    <Icon
                      name={item.icon as any}
                      className="w-5 h-5 text-secondary dark:text-[#E4C368]"
                    />
                  </span>
                  <div>
                    <h4 className="font-bold text-primary dark:text-[#9fcafc]">
                      {item.title}
                    </h4>
                    <p className="text-sm text-on-surface-variant dark:text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l-4 border-t-4 border-secondary/20 dark:border-[#E4C368]/20"></div>
            <div className="aspect-square overflow-hidden shadow-2xl relative">
              <Image
                src="/university of calicut.png"
                alt="University of Calicut"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary dark:bg-[#1e4e79] p-8 text-on-primary dark:text-white max-w-xs shadow-xl">
              <p className="font-headline text-lg italic">
                &quot;A sanctuary of learning where tradition meets futuristic
                research.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
