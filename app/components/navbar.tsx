"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "About",       href: "/about" },
  { name: "Innovation",  href: "/innovation" },
  { name: "Health",      href: "/health" },
  { name: "Animals",     href: "/animals" },
  { name: "Agriculture", href: "/agriculture" },
  { name: "Contact",     href: "/contact" },
];

interface NavBarProps {
  dark: boolean;
}

export default function NavBar({ dark }: NavBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full">
      <motion.nav
        className="flex items-center justify-between px-6 lg:px-10 transition-all duration-500"
        animate={{
          paddingTop:       dark ? "0.75rem" : "1.25rem",
          paddingBottom:    dark ? "0.75rem" : "1.25rem",
          backgroundColor:  dark ? "rgba(15,26,14,0.88)" : "transparent",
          backdropFilter:   dark ? "blur(12px)" : "blur(0px)",
        }}
      >
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <span className="sr-only">Ik-Holcán</span>
          <img
            className={`h-7 w-auto transition-all duration-500 ${dark ? "" : "invert"} hover:scale-105`}
            src="/assets/images/iso.svg"
            alt="Ik-Holcán"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`font-sans text-xs tracking-[0.15em] uppercase transition-all duration-300 opacity-70 hover:opacity-100 ${
                dark ? "text-cream" : "text-cream"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#" aria-label="Facebook" className="opacity-50 hover:opacity-100 transition-opacity">
            <img
              src="/assets/images/facebook.svg"
              alt="Facebook"
              className={`w-5 ${dark ? "invert" : "invert"}`}
            />
          </a>
          <a href="#" aria-label="Instagram" className="opacity-50 hover:opacity-100 transition-opacity">
            <img
              src="/assets/images/instagram.svg"
              alt="Instagram"
              className={`w-5 ${dark ? "invert" : "invert"}`}
            />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden text-cream opacity-80 hover:opacity-100 transition-opacity"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open menu</span>
          <Bars3Icon className="h-6 w-6" />
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <motion.div
              className="fixed inset-0 bg-forest/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <Dialog.Panel
              as={motion.div}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-forest px-6 py-6 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-10">
                <img src="/assets/images/iso.svg" alt="" className="h-6 w-auto invert opacity-60" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-cream/60 hover:text-cream transition-colors"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-1">
                {navigation.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-3xl font-light text-cream/70 hover:text-cream py-2 transition-colors tracking-wide"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-12 flex gap-4">
                <a href="#" className="opacity-40 hover:opacity-80 transition-opacity">
                  <img src="/assets/images/facebook.svg" alt="" className="w-6 invert" />
                </a>
                <a href="#" className="opacity-40 hover:opacity-80 transition-opacity">
                  <img src="/assets/images/instagram.svg" alt="" className="w-6 invert" />
                </a>
              </div>

              <div className="mt-8 w-8 h-px bg-gold" />
              <p className="mt-4 font-mono text-[10px] tracking-[0.25em] text-cream/30 uppercase">
                ikholcan.com
              </p>
            </Dialog.Panel>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
}
