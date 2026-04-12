"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNavigation, routes, type RoutePath } from "@/navigation/routes";

type NavbarProps = {
  activePath?: RoutePath;
};

export default function Navbar({ activePath = routes.home }: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 shadow-[0_20px_40px_rgba(30,78,121,0.06)] backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
          <Link href="/" className="font-serif text-[1.7rem] font-bold text-[#1E4E79]">
            IISA 2026
          </Link>
          <div className="hidden items-center gap-4 md:flex">
            {primaryNavigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative px-3 py-2 text-[14px] tracking-[0.02em] transition-colors ${
                  item.href === activePath
                    ? "font-semibold text-[#745B04]"
                    : "font-medium text-[#00375e] hover:text-[#745B04]"
                }`}
              >
                {item.label}
                {item.href === activePath && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-[#745B04]" aria-hidden="true" />
                )}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              className="kasavu-gold-gradient rounded-md px-4 py-2 text-[13px] font-medium text-white transition-transform active:opacity-80 md:px-6"
            >
              Register Now
            </button>
            <button
              className="flex size-9 items-center justify-center rounded-md text-[#1E4E79] transition-colors hover:bg-[#f3f3f4] md:hidden"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-white shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between border-b border-[#f3f3f4] px-6 py-4">
                <span className="font-serif text-lg font-bold text-[#1E4E79]">IISA 2026</span>
                <button
                  className="flex size-8 items-center justify-center rounded-md text-[#42474f] hover:bg-[#f3f3f4]"
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close menu"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-1 flex-col gap-1 px-4 py-4">
                {primaryNavigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setDrawerOpen(false)}
                    className={`rounded-md px-4 py-3 text-[14px] font-medium transition-colors ${
                      item.href === activePath
                        ? "bg-[#f3f3f4] font-semibold text-[#745B04]"
                        : "text-[#1E4E79] hover:bg-[#f9f9f9] hover:text-[#745B04]"
                    }`}
                  >
                    {item.href === activePath && (
                      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#745b04] align-middle" />
                    )}
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* CTA */}
              <div className="border-t border-[#f3f3f4] px-6 py-6">
                <button className="kasavu-gold-gradient w-full rounded-md py-3 text-[14px] font-semibold text-white transition-transform hover:scale-105">
                  Register Now
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
