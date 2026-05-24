"use client";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

/* ── Focus areas ──────────────────────────────── */
const areas = [
  {
    number: "01",
    label: "Animal Health",
    headline: "Compassionate care, natural solutions.",
    body: "Our natural remedies and pharmaceutical innovations are designed to address the unique physiological needs of animals — safe, effective, and free from unnecessary synthetic compounds.",
    botanical: "/assets/images/botanical-line-01.png",
  },
  {
    number: "02",
    label: "Holistic Wellness",
    headline: "Beyond treatment. Toward prevention.",
    body: "Animal care at Ik-Holcán is not just about treating ailments. We focus on prevention, natural nutrition, and balanced lifestyle support — nurturing vitality from the inside out.",
    botanical: "/assets/images/botanical-line-02.png",
  },
  {
    number: "03",
    label: "Nature-Inspired Remedies",
    headline: "Herbalism in every formula.",
    body: "Drawing from herbalism and biotechnology, we harness the therapeutic potential of natural ingredients — from soothing topicals to nutritional supplements — for the animals in our care.",
    botanical: "/assets/images/botanical-line-03.png",
  },
  {
    number: "04",
    label: "Eco Guardianship",
    headline: "Caring for animals. Protecting their world.",
    body: "Responsible sourcing, eco-friendly practices, and a deep respect for biodiversity — because the health of animals and the health of ecosystems are inseparable.",
    botanical: "/assets/images/botanical-line-05.png",
  },
];

/* ── AreaCard ─────────────────────────────────── */
function AreaCard({ a }: { a: typeof areas[0] }) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{ rest: { y: 0 }, hover: { y: -4 } }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative overflow-hidden border border-stone-100 bg-white p-10 cursor-default"
    >
      <motion.div
        variants={{ rest: { opacity: 0 }, hover: { opacity: 0.07 } }}
        transition={{ duration: 0.5 }}
        className="pointer-events-none absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${a.botanical}')` }}
      />
      <motion.div
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute inset-0 border border-primary"
      />
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-8 flex items-center gap-3">
          <span className="font-mono text-xs text-stone-300">{a.number}</span>
          <div className="h-px flex-1 bg-stone-100" />
          <span className="font-mono text-xs uppercase tracking-widest text-stone-400">
            {a.label}
          </span>
        </div>
        <h3 className="font-display-serif mb-4 text-2xl font-medium leading-snug text-stone-800 md:text-3xl">
          {a.headline}
        </h3>
        <p className="text-sm font-light leading-relaxed text-stone-500 md:text-base">
          {a.body}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Page ─────────────────────────────────────── */
export default function Animals() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <NavBar dark={scrollPos > 0} />

      {/* ── HERO ──────────────────────────────── */}
      <div className="relative h-screen overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-center bg-cover brightness-[0.55]"
          style={{ backgroundImage: `url("/assets/images/animals.jpg")` }}
        />
        <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <motion.p
              className="font-mono text-xs uppercase tracking-[0.3em] text-stone-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ik-Holcán
            </motion.p>
            <motion.h1
              className="font-display mt-3 text-5xl font-bold tracking-widest text-stone-100 sm:text-[5rem]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Animals
            </motion.h1>
            <motion.p
              className="mt-4 max-w-xl text-4xl font-light leading-snug text-stone-300 sm:text-5xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              The same science we apply to human health — devoted to the
              well-being of our animal companions.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ── INTRO STATEMENT ───────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.p
            className="font-mono text-xs uppercase tracking-[0.3em] text-stone-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our commitment
          </motion.p>
          <motion.p
            className="font-display-serif mt-6 text-2xl font-medium leading-snug text-stone-700 md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Animals deserve nature-inspired care as much as we do — and the
            science to back it up.
          </motion.p>
        </div>
      </section>

      {/* ── FOCUS AREAS ───────────────────────── */}
      <section className="bg-stone-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-stone-400">
              What we focus on
            </span>
            <h2 className="font-display mt-3 text-4xl tracking-wide text-stone-800 md:text-5xl">
              Animal Care
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-px bg-stone-100 md:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {areas.map((a) => (
              <AreaCard key={a.number} a={a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BOND STATEMENT ────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-stone-400">
                A bond beyond words
              </span>
              <h2 className="font-display mt-4 text-4xl tracking-wide text-stone-800 md:text-5xl">
                They trust us.<br />We take that seriously.
              </h2>
            </motion.div>
            <motion.p
              className="text-base font-light leading-relaxed text-stone-500"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Animals give us unconditional companionship. At Ik-Holcán we
              approach every product and every formula with that responsibility
              in mind — because a happy, healthy animal is the most honest
              measure of whether our science is truly working.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────── */}
      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-stone-400">
              Work with us
            </span>
            <h2 className="font-display mt-4 text-4xl tracking-wide text-stone-800 md:text-5xl">
              Collaborate on animal health.
            </h2>
            <p className="mt-6 text-base font-light leading-relaxed text-stone-500">
              Are you a veterinarian, researcher, or animal care brand looking
              for nature-based solutions? Let&apos;s explore what we can build
              together.
            </p>
            <Link
              href="/#contact"
              className="mt-10 inline-flex items-center gap-2 border border-stone-800 px-8 py-3 font-mono text-xs uppercase tracking-widest text-stone-800 transition-all duration-200 hover:bg-stone-800 hover:text-white"
            >
              Contact us
              <svg
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
