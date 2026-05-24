"use client";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

/* ── Research areas ───────────────────────────── */
const areas = [
  {
    number: "01",
    label: "Phytochemistry",
    headline: "Unlocking nature's chemical library.",
    body: "We investigate secondary metabolites, bioactive compounds, and botanical extracts — identifying the molecules that make traditional medicine work and why.",
    botanical: "/assets/images/botanical-line-01.png",
  },
  {
    number: "02",
    label: "Computational Discovery",
    headline: "From years to weeks.",
    body: "Using bioinformatics, AI-aided drug design, and molecular simulation, we accelerate the identification of novel natural compounds with therapeutic potential.",
    botanical: "/assets/images/botanical-line-02.png",
  },
  {
    number: "03",
    label: "Formulation",
    headline: "Science you can apply.",
    body: "Bridging laboratory discovery and real-world use — developing cosmetics, nutraceuticals, and pharmaceutical-grade products that meet the highest standards.",
    botanical: "/assets/images/botanical-line-03.png",
  },
  {
    number: "04",
    label: "Agro-Science",
    headline: "Sustaining the source.",
    body: "Responsible crop solutions, sustainable sourcing, and agricultural research that ensures the long-term viability of the plants we depend on.",
    botanical: "/assets/images/botanical-line-04.png",
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
      className="group relative overflow-hidden border border-stone-100 bg-white p-10 cursor-default"
    >
      {/* botanical watermark */}
      <motion.div
        variants={{ rest: { opacity: 0 }, hover: { opacity: 0.07 } }}
        transition={{ duration: 0.5 }}
        className="pointer-events-none absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${a.botanical}')` }}
      />
      {/* green border */}
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
export default function Innovation() {
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
          style={{ backgroundImage: `url("/assets/images/innovation.jpg")` }}
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
              Innovation
            </motion.h1>
            <motion.p
              className="mt-4 max-w-xl text-4xl font-light leading-snug text-stone-300 sm:text-5xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Where ancient botanical wisdom meets programmable molecular
              intelligence.
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
            Our approach
          </motion.p>
          <motion.p
            className="font-display-serif mt-6 text-2xl font-medium leading-snug text-stone-700 md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            We believe the next generation of medicine is written in nature —
            and we are building the tools to read it.
          </motion.p>
        </div>
      </section>

      {/* ── RESEARCH AREAS ────────────────────── */}
      <section className="bg-stone-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-stone-400">
              What we research
            </span>
            <h2 className="font-display mt-3 text-4xl tracking-wide text-stone-800 md:text-5xl">
              Research Areas
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

      {/* ── FEATURED PROJECT: MOKA BIO ────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-stone-400">
              Projects
            </span>
            <h2 className="font-display mt-3 text-4xl tracking-wide text-stone-800 md:text-5xl">
              From Lab to Platform
            </h2>
          </motion.div>

          {/* Moka Bio card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-stone-900"
          >
            {/* botanical watermark */}
            <div
              className="pointer-events-none absolute inset-0 bg-contain bg-right bg-no-repeat opacity-[0.04]"
              style={{ backgroundImage: `url('/assets/images/botanical-line-05.png')` }}
            />

            <div className="relative z-10 grid grid-cols-1 gap-0 lg:grid-cols-2">
              {/* left — info */}
              <div className="flex flex-col justify-center p-10 md:p-14">
                <span className="inline-block self-start rounded-full border border-primary/40 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">
                  Featured Project
                </span>

                <h3 className="font-display mt-6 text-3xl font-bold tracking-wide text-stone-100 md:text-4xl">
                  Moka Bio
                </h3>

                <p className="font-display-serif mt-2 text-lg font-light italic text-stone-400">
                  The operating system for natural product discovery.
                </p>

                <p className="mt-6 text-sm font-light leading-relaxed text-stone-400 md:text-base">
                  Moka Bio is Ik-Holcán&apos;s AI-driven computational platform
                  that transforms botanical knowledge and natural chemistry into
                  programmable bioactive intelligence — accelerating molecular
                  discovery from years to weeks.
                </p>

                {/* three pillars */}
                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-stone-700 pt-8">
                  {["Index", "Program", "Scale"].map((s) => (
                    <div key={s} className="flex flex-col gap-1">
                      <div className="h-px w-6 bg-primary" />
                      <span className="font-display text-base font-bold text-stone-100">
                        {s}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-stone-500">
                        {s === "Index"
                          ? "Botanical data & AI knowledge graphs"
                          : s === "Program"
                          ? "Bioactivity & molecular intelligence"
                          : "IP-protected, regulatory-compliant assets"}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://moka.bio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-2 self-start border border-primary px-6 py-3 font-mono text-xs uppercase tracking-widest text-primary transition-all duration-200 hover:bg-primary hover:text-white"
                >
                  Visit moka.bio
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
                </a>
              </div>

              {/* right — stats / detail */}
              <div className="flex flex-col justify-center gap-8 border-t border-stone-700 p-10 md:p-14 lg:border-l lg:border-t-0">
                {[
                  {
                    label: "Invisible Chemistry Gap",
                    body: "Thousands of bioactive compounds remain unmapped. Moka Bio indexes and connects them into a living, searchable knowledge graph.",
                  },
                  {
                    label: "Consistency Crisis",
                    body: "Natural product variability blocks clinical adoption. Moka Bio uses metabolic engineering to deliver pharmaceutical-grade consistency.",
                  },
                  {
                    label: "Scalability Bottleneck",
                    body: "Traditional agriculture can't keep pace with demand. Cellular factories replace conventional cultivation — without depleting ecosystems.",
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="font-mono text-xs uppercase tracking-widest text-primary">
                        {item.label}
                      </span>
                    </div>
                    <p className="pl-4 text-sm font-light leading-relaxed text-stone-400">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Ipnite card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative mt-px overflow-hidden"
            style={{ backgroundColor: "#4c0815" }}
          >
            {/* subtle grid texture */}
            <div
              className="pointer-events-none absolute inset-0 bg-contain bg-right bg-no-repeat"
              style={{
                backgroundImage: `url('/assets/images/botanical-line-03.png')`,
                opacity: 0.03,
              }}
            />

            <div className="relative z-10 grid grid-cols-1 gap-0 lg:grid-cols-2">
              {/* left — info */}
              <div className="flex flex-col justify-center p-10 md:p-14">
                <span
                  className="inline-block self-start rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-widest"
                  style={{ border: "1px solid rgba(237,237,237,0.3)", color: "#ededed" }}
                >
                  Featured Project
                </span>

                <h3
                  className="font-display mt-6 text-3xl font-bold tracking-wide md:text-4xl"
                  style={{ color: "#ededed" }}
                >
                  IPnite
                </h3>

                <p
                  className="font-display-serif mt-2 text-lg font-light italic"
                  style={{ color: "#938d8e" }}
                >
                  Protection shouldn&apos;t be a privilege.
                </p>

                <p
                  className="mt-6 text-sm font-light leading-relaxed md:text-base"
                  style={{ color: "rgba(237,237,237,0.6)" }}
                >
                  IPnite is an AI-powered intellectual property platform that
                  makes patent protection accessible to every innovator —
                  regardless of team size or budget. Simple, transparent, and
                  built for creators who are changing the world.
                </p>

                {/* three pillars */}
                <div
                  className="mt-8 grid grid-cols-3 gap-4 pt-8"
                  style={{ borderTop: "1px solid rgba(107,42,47,0.6)" }}
                >
                  {[
                    { label: "No Idea Too Small", sub: "Every innovation deserves protection" },
                    { label: "Simple & Transparent", sub: "No legal teams, no hidden costs" },
                    { label: "Empowering Creators", sub: "Built for researchers & innovators" },
                  ].map((s) => (
                    <div key={s.label} className="flex flex-col gap-1">
                      <div className="h-px w-6" style={{ backgroundColor: "#6b2a2f" }} />
                      <span
                        className="font-display text-sm font-bold leading-tight"
                        style={{ color: "#ededed" }}
                      >
                        {s.label}
                      </span>
                      <span
                        className="text-[10px] uppercase tracking-widest"
                        style={{ color: "#938d8e" }}
                      >
                        {s.sub}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://www.ipnite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-2 self-start px-6 py-3 font-mono text-xs uppercase tracking-widest transition-all duration-200"
                  style={{ border: "1px solid #6b2a2f", color: "#ededed" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#6b2a2f";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                  }}
                >
                  Visit ipnite.com
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* right — detail */}
              <div
                className="flex flex-col justify-center gap-8 p-10 md:p-14"
                style={{ borderTop: "1px solid rgba(107,42,47,0.4)" }}
              >
                {[
                  {
                    label: "Accessible IP Protection",
                    body: "Most innovators believe patents require massive legal teams and big budgets. IPnite proves otherwise — making protection a right, not a privilege.",
                  },
                  {
                    label: "AI-Powered Platform",
                    body: "Smart automation handles the complexity of patent filing and IP management, so researchers and creators can focus on what they do best.",
                  },
                  {
                    label: "Built for Innovators",
                    body: "From individual inventors to research teams — IPnite is designed for the people creating the ideas that deserve to be protected.",
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#6b2a2f" }} />
                      <span
                        className="font-mono text-xs uppercase tracking-widest"
                        style={{ color: "#938d8e" }}
                      >
                        {item.label}
                      </span>
                    </div>
                    <p
                      className="pl-4 text-sm font-light leading-relaxed"
                      style={{ color: "rgba(237,237,237,0.55)" }}
                    >
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
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
              Get involved
            </span>
            <h2 className="font-display mt-4 text-4xl tracking-wide text-stone-800 md:text-5xl">
              Partner with us.
            </h2>
            <p className="mt-6 text-base font-light leading-relaxed text-stone-500">
              Whether you are a researcher, institution, or industry partner —
              we believe the best discoveries happen in collaboration. Let&apos;s
              build the future of natural medicine together.
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
