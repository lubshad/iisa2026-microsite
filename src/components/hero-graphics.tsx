"use client";

import { motion } from "framer-motion";

const equalizerConfig = [
  { duration: 2.2, delay: 0.1 },
  { duration: 2.8, delay: 0.35 },
  { duration: 3.1, delay: 0.2 },
  { duration: 2.5, delay: 0.5 },
  { duration: 3.3, delay: 0.15 },
  { duration: 2.7, delay: 0.4 },
] as const;

export default function HeroGraphics({
  showGradients = true,
  showBottomWave = true,
}: {
  showGradients?: boolean;
  showBottomWave?: boolean;
}) {
  return (
    <>
      {/* Background Gradients (Original) */}
      {showGradients && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(159,202,252,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(116,91,4,0.18),transparent_28%)]" />
      )}
      
      {/* Sound Waves (Sine waves) - Mild Animation */}
      <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-screen">
        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1000 400">
          <motion.path
            d="M0,220 Q100,90 200,220 T400,220 T600,220 T800,220 T1000,220"
            fill="none"
            stroke="#ffe08d"
            strokeWidth="2"
            animate={{ y: [0, 4, -4, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,250 Q150,130 300,250 T600,250 T900,250 T1000,250"
            fill="none"
            stroke="#e4c368"
            strokeWidth="1"
            animate={{ y: [0, -6, 4, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />

        </svg>
      </div>

      {/* Acoustic Equalizer Bars (New) - Mild Animation */}
      <div className="pointer-events-none absolute bottom-0 right-10 flex h-32 items-end gap-1 opacity-10 mix-blend-screen md:right-24 md:h-48 md:gap-2">
        {equalizerConfig.map((config, i) => (
          <motion.div
            key={i}
            className="w-2 rounded-t-sm bg-[#ffe08d] md:w-4"
            animate={{
              height: ["30%", "60%", "40%", "70%", "35%"],
            }}
            transition={{
              repeat: Infinity,
              duration: config.duration,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1],
              delay: config.delay,
            }}
          />
        ))}
      </div>

      {/* Sound Ripples (Expanding Circles) - Mild Animation */}
      <div className="pointer-events-none absolute left-0 top-1/4 size-64 -translate-y-1/2 opacity-50 md:left-24 md:size-96">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`ripple-${i}`}
            className="absolute inset-0 rounded-full border-2 border-[#9fcafc]"
            initial={{ scale: 0.5, opacity: 0.8 }}
            animate={{ scale: 1.2, opacity: 0 }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute right-1/4 top-1/4 size-48 opacity-40 mix-blend-screen">
         {[...Array(2)].map((_, i) => (
          <motion.div
            key={`ripple-right-${i}`}
            className="absolute inset-0 rounded-full border-2 border-[#e4c368]"
            initial={{ scale: 0.6, opacity: 0.6 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>



      {/* Main Bottom Wave (Original, Animated) - Mild Animation */}
      {showBottomWave && (
        <div className="pointer-events-none absolute inset-x-0 bottom-16 opacity-30">
          <svg className="h-24 w-full" preserveAspectRatio="none" viewBox="0 0 1200 160">
            <motion.path
              d="M0,88 C60,88 60,30 120,30 C180,30 180,138 240,138 C300,138 300,48 360,48 C420,48 420,120 480,120 C540,120 540,22 600,22 C660,22 660,126 720,126 C780,126 780,62 840,62 C900,62 900,108 960,108 C1020,108 1020,44 1080,44 C1140,44 1140,90 1200,90"
              fill="none"
              stroke="#9fcafc"
              strokeWidth="2"
              strokeLinecap="round"
              animate={{
                d: [
                  "M0,88 C60,88 60,30 120,30 C180,30 180,138 240,138 C300,138 300,48 360,48 C420,48 420,120 480,120 C540,120 540,22 600,22 C660,22 660,126 720,126 C780,126 780,62 840,62 C900,62 900,108 960,108 C1020,108 1020,44 1080,44 C1140,44 1140,90 1200,90",
                  "M0,88 C60,88 60,12 120,12 C180,12 180,118 240,118 C300,118 300,28 360,28 C420,28 420,100 480,100 C540,100 540,12 600,12 C660,12 660,96 720,96 C780,96 780,32 840,32 C900,32 900,128 960,128 C1020,128 1020,24 1080,24 C1140,24 1140,90 1200,90",
                  "M0,88 C60,88 60,30 120,30 C180,30 180,138 240,138 C300,138 300,48 360,48 C420,48 420,120 480,120 C540,120 540,22 600,22 C660,22 660,126 720,126 C780,126 780,62 840,62 C900,62 900,108 960,108 C1020,108 1020,44 1080,44 C1140,44 1140,90 1200,90"
                ]
              }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            />
          </svg>
        </div>
      )}
    </>
  );
}
