"use client";

import { motion } from "framer-motion";
import Icon from "@/components/icon";

const technicalAreas = [
  {
    icon: "waves" as const,
    title: "Aero, Hydro & Underwater Acoustics",
    description: "Research in propagation, sensing, sonar systems, and sound behavior across air and water environments.",
  },
  {
    icon: "building" as const,
    title: "Architectural & Building Acoustics",
    description: "Room acoustics, building performance, and sound environments designed for comfort, clarity, and function.",
  },
  {
    icon: "health" as const,
    title: "Bioacoustics",
    description: "Acoustic communication, biological sound studies, and sound-based understanding of living systems.",
  },
  {
    icon: "bolt" as const,
    title: "Environmental Noise",
    description: "Noise assessment, mitigation, monitoring, and sustainable acoustic planning for built and natural environments.",
  },
  {
    icon: "settings" as const,
    title: "Instrumentation & Signal Processing",
    description: "Measurement systems, acoustic devices, signal analysis, and computational methods for real-world applications.",
  },
  {
    icon: "music" as const,
    title: "Musical Acoustics",
    description: "Research on musical sound, instruments, performance acoustics, and the physics of musical expression.",
  },
  {
    icon: "science" as const,
    title: "Physical Acoustics & Ultrasonics",
    description: "Wave phenomena, ultrasonics, propagation, and advanced physical principles in acoustical science.",
  },
  {
    icon: "microphone" as const,
    title: "Speech",
    description: "Speech acoustics, spoken communication, hearing-related systems, and speech-oriented signal technologies.",
  },
  {
    icon: "psychology" as const,
    title: "Sound Perception",
    description: "Listening, auditory cognition, psychoacoustics, and human response to sound environments.",
  },
  {
    icon: "speaker" as const,
    title: "Transducers & Electro-acoustics",
    description: "Electro-acoustic systems, transducer design, actuation, sensing, and sound reproduction technologies.",
  },
  {
    icon: "construction" as const,
    title: "Vibro-acoustics & Noise",
    description: "Vibration, structure-borne sound, machinery acoustics, and engineering approaches to noise control.",
  },
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#f9f9f9] py-12 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 opacity-60">
        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <motion.path 
            d="M0,78 C70,78 70,34 140,34 C210,34 210,98 280,98 C350,98 350,22 420,22 C490,22 490,88 560,88 C630,88 630,46 700,46 C770,46 770,100 840,100 C910,100 910,26 980,26 C1050,26 1050,74 1120,74 C1160,74 1180,58 1200,58" 
            fill="none" 
            stroke="#9fcafc" 
            strokeWidth="2" 
            animate={{ y: [0, 4, -4, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          <motion.path 
            d="M0,96 C80,96 80,64 160,64 C240,64 240,112 320,112 C400,112 400,52 480,52 C560,52 560,104 640,104 C720,104 720,36 800,36 C880,36 880,92 960,92 C1040,92 1040,48 1120,48 C1160,48 1180,56 1200,56" 
            fill="none" 
            stroke="#e4c368" 
            strokeWidth="1.5" 
            animate={{ y: [0, -6, 5, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-4 md:px-8 md:gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-label mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#745b04]">
            Scientific Context
          </p>
          <h2 className="font-headline mb-6 text-3xl leading-tight text-[#00375e] md:mb-8 md:text-5xl">
            About the <br />
            Conference
          </h2>
          <div className="mb-6 h-1 w-16 bg-[#745b04] md:mb-8 md:w-24"></div>
          <p className="mb-6 text-lg leading-relaxed text-on-surface-variant">
            IISA 2026 brings together acousticians, engineers, scientists, healthcare professionals, and industry leaders across the full spectrum of acoustics, ultrasonics, vibration, and intelligent sound systems. The conference is structured around 11 technical areas drawn directly from the symposium tracks.
          </p>
          <p className="text-lg leading-relaxed text-on-surface-variant">
            From underwater acoustics and environmental noise to speech, sound perception, electro-acoustics, and vibro-acoustics, the program is designed to reflect the complete research breadth described in the brochure.
          </p>
          <div className="editorial-shadow mt-8 rounded-lg border border-[#00375e]/10 bg-white p-5 md:p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary-container text-[#00375e]">
                <Icon className="size-5" name="waves" />
              </div>
              <div>
                <p className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-[#745b04]">Technical Areas</p>
                <p className="font-headline text-xl text-[#00375e]">A Broad Research Spectrum in Acoustics</p>
              </div>
            </div>
            <div className="mb-4 overflow-hidden rounded bg-[#f3f3f4] px-3 py-4">
              <svg className="h-10 w-full" preserveAspectRatio="none" viewBox="0 0 600 80">
                <motion.path 
                  d="M0,40 L30,40 L45,18 L60,62 L75,26 L90,54 L120,40 L150,40 L165,12 L180,68 L195,24 L210,58 L240,40 L270,40 L285,16 L300,64 L315,28 L330,52 L360,40 L390,40 L405,14 L420,66 L435,30 L450,50 L480,40 L510,40 L525,20 L540,60 L555,34 L570,46 L600,40" 
                  fill="none" 
                  stroke="#00375e" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  animate={{ y: [0, -3, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                />
              </svg>
            </div>
            <p className="text-sm leading-relaxed text-on-surface-variant">
              The home page now reflects all 11 brochure-defined technical areas: aero and hydro acoustics, building acoustics, bioacoustics, environmental noise, instrumentation, musical acoustics, ultrasonics, speech, perception, transducers, and vibro-acoustics.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-7 xl:grid-cols-3">
          {technicalAreas.map((area, index) => (
            <div key={area.title} className={`editorial-shadow relative overflow-hidden rounded-lg bg-white p-5 md:p-8 ${index % 2 === 1 ? "md:mt-12" : ""}`}>
              <div className="absolute right-0 top-0 h-16 w-16 rounded-bl-[2rem] bg-[#f3f3f4]" />
              <Icon className="relative mb-3 size-8 text-[#00375e] md:mb-4 md:size-10" name={area.icon} />
              <h3 className="font-headline mb-3 text-xl text-[#00375e]">{area.title}</h3>
              <p className="text-sm text-on-surface-variant">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
