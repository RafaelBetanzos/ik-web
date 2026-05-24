"use client";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

/* ── Disciplines ──────────────────────────────── */
const disciplines = [
  {
    number: "01",
    label: "Pharmaceuticals",
    headline: "Nature's pharmacy, validated by science.",
    body: "We develop natural drugs for human and animal diseases — proving through rigorous research that traditional remedies can become safe, effective alternatives to conventional pharmaceuticals.",
    botanical: "/assets/images/botanical-line-01.png",
  },
  {
    number: "02",
    label: "Herbalism",
    headline: "Ancient wisdom. Modern proof.",
    body: "Herbalism is at the core of everything we do. We study the intricate bioactive compounds behind traditional remedies — preserving time-honored knowledge while elevating it with scientific rigor.",
    botanical: "/assets/images/botanical-line-02.png",
  },
  {
    number: "03",
    label: "Natural Cosmetics",
    headline: "Beauty rooted in health.",
    body: "Our cosmetics harness herbalism to enhance radiance from the outside while nurturing well-being within — meticulously formulated with purpose-driven, high-quality natural ingredients.",
    botanical: "/assets/images/botanical-line-03.png",
  },
  {
    number: "04",
    label: "Natural Pharmacy",
    headline: "Healing beyond the prescription pad.",
    body: "From skin conditions to chronic disease management, we explore how plant-derived solutions can complement and extend the reach of modern medicine — for both people and animals.",
    botanical: "/assets/images/botanical-line-04.png",
  },
];

/* ── DisciplineCard ───────────────────────────── */
function DisciplineCard({ d }: { d: typeof disciplines[0] }) {
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
        style={{ backgroundImage: `url('${d.botanical}')` }}
      />
      <motion.div
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute inset-0 border border-primary"
      />
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-8 flex items-center gap-3">
          <span className="font-mono text-xs text-stone-300">{d.number}</span>
          <div className="h-px flex-1 bg-stone-100" />
          <span className="font-mono text-xs uppercase tracking-widest text-stone-400">
            {d.label}
          </span>
        </div>
        <h3 className="font-display-serif mb-4 text-2xl font-medium leading-snug text-stone-800 md:text-3xl">
          {d.headline}
        </h3>
        <p className="text-sm font-light leading-relaxed text-stone-500 md:text-base">
          {d.body}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Page ─────────────────────────────────────── */
export default function Health() {
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
          style={{ backgroundImage: `url("/assets/images/health.jpg")` }}
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
              Health
            </motion.h1>
            <motion.p
              className="mt-4 max-w-xl text-4xl font-light leading-snug text-stone-300 sm:text-5xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Plant-derived solutions that care for your body — inside and out.
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
            Our focus
          </motion.p>
          <motion.p
            className="font-display-serif mt-6 text-2xl font-medium leading-snug text-stone-700 md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Nature holds the compounds. Science holds the proof.
            Together, they hold the future of health.
          </motion.p>
        </div>
      </section>

      {/* ── DISCIPLINES ───────────────────────── */}
      <section className="bg-stone-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-stone-400">
              What we develop
            </span>
            <h2 className="font-display mt-3 text-4xl tracking-wide text-stone-800 md:text-5xl">
              Our Disciplines
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-px bg-stone-100 md:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {disciplines.map((d) => (
              <DisciplineCard key={d.number} d={d} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── IK-01 FEATURED PRODUCT ────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-stone-400">
              Pharmaceutical pipeline
            </span>
            <h2 className="font-display mt-3 text-4xl tracking-wide text-stone-800 md:text-5xl">
              In Development
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden border border-stone-100 bg-stone-50"
          >
            <div
              className="pointer-events-none absolute inset-0 bg-contain bg-right bg-no-repeat opacity-[0.05]"
              style={{ backgroundImage: `url('/assets/images/botanical-line-02.png')` }}
            />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
              {/* left */}
              <div className="flex flex-col justify-center p-10 md:p-14">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-block rounded-full border border-stone-300 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-stone-500">
                    IK-01
                  </span>
                  <span className="inline-block rounded-full border border-amber-400/60 bg-amber-50 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-amber-600">
                    Patent Pending
                  </span>
                </div>

                <h3 className="font-display mt-6 text-3xl font-bold tracking-wide text-stone-800 md:text-4xl">
                  Natural Immunomodulatory Cream
                </h3>

                <p className="font-display-serif mt-2 text-lg font-light italic text-stone-400">
                  A plant-derived topical formulation developed by Ik-Holcán.
                </p>

                <p className="mt-6 text-sm font-light leading-relaxed text-stone-500 md:text-base">
                  IK-01 is a topical cream formulated exclusively from natural
                  plant extracts, designed to modulate immune response at the
                  skin level. Developed through Ik-Holcán&apos;s research in
                  phytochemistry and traditional medicine, it represents our
                  first proprietary pharmaceutical-grade product — where ancient
                  botanical knowledge meets rigorous clinical formulation.
                </p>
              </div>

              {/* right — attributes */}
              <div className="flex flex-col justify-center gap-6 border-t border-stone-100 p-10 md:p-14 lg:border-l lg:border-t-0">
                {[
                  {
                    label: "100% Natural Origin",
                    body: "Formulated exclusively from plant-derived extracts. No synthetic active compounds.",
                  },
                  {
                    label: "Immunomodulatory Action",
                    body: "Designed to regulate and support the skin's immune response through bioactive botanical compounds.",
                  },
                  {
                    label: "Proprietary Formula",
                    body: "Patent-pending formulation — the result of years of phytochemical research and traditional medicine expertise.",
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="font-mono text-xs uppercase tracking-widest text-primary">
                        {item.label}
                      </span>
                    </div>
                    <p className="pl-4 text-sm font-light leading-relaxed text-stone-500">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED PROJECT: FUTURA BIO ──────── */}
      <section className="bg-stone-50 py-20">
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
              Cosmetics Ventures
            </h2>
          </motion.div>

          {/* Futura Bio card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
            style={{ backgroundColor: "#F5F4F4", border: "1px solid #D7D3BE" }}
          >
            <div
              className="pointer-events-none absolute inset-0 bg-contain bg-right bg-no-repeat opacity-[0.06]"
              style={{ backgroundImage: `url('/assets/images/botanical-line-03.png')` }}
            />

            <div className="relative z-10 grid grid-cols-1 gap-0 lg:grid-cols-2">
              {/* left — info */}
              <div className="flex flex-col justify-center p-10 md:p-14">
                <span
                  className="inline-block self-start rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-widest"
                  style={{ border: "1px solid #5E5B38", color: "#5E5B38" }}
                >
                  Featured Project
                </span>

                <h3
                  className="font-display mt-6 text-3xl font-bold tracking-wide md:text-4xl"
                  style={{ color: "#332C0F" }}
                >
                  FuturaBio®
                </h3>

                <p
                  className="font-display-serif mt-2 text-lg font-light italic"
                  style={{ color: "#5E5B38" }}
                >
                  Science and nature for your skin.
                </p>

                <p
                  className="mt-6 text-sm font-light leading-relaxed md:text-base"
                  style={{ color: "#47432980" }}
                >
                  FuturaBio® is an Ik-Holcán cosmetics venture developing
                  scientifically-formulated natural skincare solutions. Their
                  flagship product, Crema Equilibrio Natural, delivers deep and
                  lasting hydration for all skin types — combining botanical
                  innovation with clinical precision for visible, lasting results.
                </p>

                <a
                  href="https://futura-bio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-2 self-start px-6 py-3 font-mono text-xs uppercase tracking-widest transition-all duration-200"
                  style={{ border: "1px solid #332C0F", color: "#332C0F" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#332C0F";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#F5F4F4";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#332C0F";
                  }}
                >
                  Visit futura-bio.com
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

              {/* right — product detail */}
              <div
                className="flex flex-col justify-center gap-8 p-10 md:p-14"
                style={{ borderTop: "1px solid #D7D3BE" }}
              >
                {[
                  {
                    label: "Crema Equilibrio Natural",
                    body: "Flagship product formulated for deep and lasting hydration across all skin types — improving softness, luminosity, and overall skin health.",
                  },
                  {
                    label: "Botanical Formulation",
                    body: "Every ingredient is chosen for its beneficial effect on skin and overall well-being — no compromises between efficacy and natural origin.",
                  },
                  {
                    label: "Science-Backed",
                    body: "Developed by scientists and innovators guided by curiosity and a commitment to creating solutions that genuinely improve people's lives.",
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#5E5B38" }} />
                      <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "#5E5B38" }}>
                        {item.label}
                      </span>
                    </div>
                    <p className="pl-4 text-sm font-light leading-relaxed" style={{ color: "#474329" }}>
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
      <section className="bg-white py-24">
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
              Let&apos;s build healthier lives.
            </h2>
            <p className="mt-6 text-base font-light leading-relaxed text-stone-500">
              Whether you are a clinician, formulator, or brand — we are always
              looking for collaborators who share our belief that nature and
              science belong together.
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
