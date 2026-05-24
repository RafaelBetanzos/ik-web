"use client";
import { motion } from "framer-motion";

const links = [
  {
    label: "About",
    href: "/about",
    children: ["Our mission", "History", "Values"],
  },
  {
    label: "Innovation",
    href: "/innovation",
    children: ["Traditional knowledge", "Modern science", "Environmental quality"],
  },
  {
    label: "Health",
    href: "/health",
    children: ["Research", "Products", "Quality"],
  },
  {
    label: "Animals",
    href: "/animals",
    children: ["Research", "Products", "Quality"],
  },
  {
    label: "Agriculture",
    href: "/agriculture",
    children: ["Research", "Products", "Quality"],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-forest overflow-hidden">
      {/* Top gold rule */}
      <div className="w-full h-px bg-gold/20" />

      {/* Botanical watermark */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40%] h-[80%] bg-no-repeat bg-contain bg-bottom opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "url('/assets/images/botanical-line-01.png')" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 xl:px-16 pt-20 pb-12">

        {/* Top row: logo + nav */}
        <div className="grid grid-cols-1 lg:grid-cols-[auto,1fr] gap-16 lg:gap-24 mb-16">

          {/* Logo block */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start gap-6"
          >
            <img
              src="/assets/images/logo.svg"
              alt="Ik-Holcán"
              className="h-20 lg:h-24 w-auto invert opacity-70"
            />
            <div className="w-8 h-px bg-gold/50" />
            <p className="font-mono text-[10px] tracking-[0.25em] text-cream/25 uppercase text-center lg:text-left leading-loose">
              Traditional Wisdom<br />Modern Science
            </p>
          </motion.div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {links.map((section, i) => (
              <motion.div
                key={section.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="flex flex-col gap-3"
              >
                <a
                  href={section.href}
                  className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold/80 hover:text-gold transition-colors"
                >
                  {section.label}
                </a>
                <div className="flex flex-col gap-2">
                  {section.children.map((child) => (
                    <a
                      key={child}
                      href={section.href}
                      className="font-sans text-xs text-cream/35 hover:text-cream/70 transition-colors leading-relaxed"
                    >
                      {child}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-cream/[0.07] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] tracking-[0.2em] text-cream/20 uppercase">
            © 2024 Ik-Holcán™ — All rights reserved
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              aria-label="Facebook"
              className="opacity-20 hover:opacity-60 transition-opacity"
            >
              <img src="/assets/images/facebook.svg" alt="" className="w-5 invert" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="opacity-20 hover:opacity-60 transition-opacity"
            >
              <img src="/assets/images/instagram.svg" alt="" className="w-5 invert" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
