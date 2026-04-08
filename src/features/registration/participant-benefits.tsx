"use client";

import { motion } from "framer-motion";
import Icon from "@/components/icon";
import Image from "next/image";

const benefits = [
  {
    icon: "description",
    title: "Conference Proceedings",
    description: "Full access to digital and printed abstracts, including IEEE Xplore publication rights for authors.",
  },
  {
    icon: "utensils",
    title: "Gala Dinners & Meals",
    description: "Working lunches, tea breaks, and the exclusive Symposium Gala Dinner featuring authentic Kerala cuisine.",
  },
  {
    icon: "mask",
    title: "Cultural Programs",
    description: "Evening access to traditional Kathakali and Mohiniyattam performances organized for international guests.",
  },
] as const;

export default function ParticipantBenefits() {
  return (
    <section className="bg-background py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXCWc0XabVl4IWrYfCWkNpPmBhuSYkaBiD89e6UkzU0dwiahvx_FxaypKq2nmV7nXmEvgxiyAQHmYk519Rp4Vjy-GdwOCKURGoqdgZob2zBhS36Jeg790oT5JkwRXCDamwhuYvYImUMf-g03gL5SnblnCAQPG3Ew8Y8xc5QFxiMUQerpmILR7JXe9igaGHyIk_7tg9ltIM-sYy_tIzJheg8biZsq0yZOqBJ6cUMhaaGXxGo-hydsOdcyJs35cGGTBo7XKiDdMhweTR"
              alt="Delegate Experience"
              fill
              className="object-cover transition-all duration-700 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>

          <div className="flex flex-col">
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-headline mb-8 text-3xl font-bold text-primary underline decoration-secondary decoration-4 underline-offset-8 md:mb-12 md:text-4xl"
            >
              Delegate Inclusions
            </motion.h2>

            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex items-start gap-4 md:gap-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-container/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white md:h-14 md:w-14">
                    <Icon name={benefit.icon} className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-body mb-1 text-lg font-bold text-primary md:text-xl">{benefit.title}</h3>
                    <p className="font-body text-on-surface-variant leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
