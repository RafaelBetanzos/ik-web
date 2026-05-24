"use client";
import Image from "next/image";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ── Values data ──────────────────────────────── */
const values = [
  {
    icon: "/assets/images/honestidad.svg",
    label: "Honesty",
    body: "We uphold the highest standards of integrity and transparency in all our endeavors, fostering trust among our stakeholders.",
    botanical: "/assets/images/botanical-line-01.png",
  },
  {
    icon: "/assets/images/responsabilidad.svg",
    label: "Responsibility",
    body: "We take ownership of our actions and decisions, ensuring accountability for the impact of our work on individuals and the environment.",
    botanical: "/assets/images/botanical-line-02.png",
  },
  {
    icon: "/assets/images/etica.svg",
    label: "Ethics",
    body: "Our conduct is grounded in ethical principles, promoting fair and principled practices throughout our operations.",
    botanical: "/assets/images/botanical-line-03.png",
  },
  {
    icon: "/assets/images/integridad.svg",
    label: "Integrity",
    body: "We adhere to strong moral principles, safeguarding the authenticity and reliability of our research and communications.",
    botanical: "/assets/images/botanical-line-04.png",
  },
  {
    icon: "/assets/images/solidaridad.svg",
    label: "Solidarity",
    body: "Collaboration is at the heart of our approach, fostering partnerships that leverage collective expertise for greater impact.",
    botanical: "/assets/images/botanical-line-05.png",
  },
];

/* ── History timeline ─────────────────────────── */
const timeline = [
  {
    year: "2016",
    title: "The Agrobox",
    body: "A passion for cultivation and sustainable living led to the creation of the Agrobox — an innovative agronomic box designed for indoor crop cultivation. The foundation of everything to come.",
  },
  {
    year: "2017",
    title: "Natural Anti-Inflammatory",
    body: "Discovering the significance of secondary metabolites, we designed a natural anti-inflammatory ointment that garnered positive feedback and proved beneficial to many.",
  },
  {
    year: "2019",
    title: "Master's Research",
    body: "A master's degree deepened our understanding of metabolites and their functions — fueling the determination to identify novel natural compounds for eco-friendly pharmaceuticals.",
  },
  {
    year: "2022",
    title: "PhD & Computational Discovery",
    body: "Currently pursuing a PhD in computer-aided drug discovery, refining expertise in the quest for groundbreaking therapeutic solutions backed by bioinformatics.",
  },
  {
    year: "Today",
    title: "Global Partnerships",
    body: "Research agreements with prestigious institutions — including CIAD in Mexico and the Argentinean Association of Bioinformatics and Computational Biology — enhancing the exchange of knowledge.",
  },
];

/* ── Sustainability pillars ───────────────────── */
const pillars = [
  {
    number: "01",
    label: "Nature-Inspired",
    headline: "Rooted in the planet's wisdom.",
    body: "Every product undergoes rigorous assessment to align with our sustainability principles — from sourcing organic raw materials to eco-friendly production methods that minimize ecological footprint.",
    botanical: "/assets/images/botanical-line-01.png",
  },
  {
    number: "02",
    label: "Science-Driven",
    headline: "Rigorous research, responsible outcomes.",
    body: "We actively invest in research that promotes sustainable agriculture, conservation, and environmental protection — integrating scientific advancements with traditional knowledge.",
    botanical: "/assets/images/botanical-line-03.png",
  },
  {
    number: "03",
    label: "Ethical Partnerships",
    headline: "Collective effort, positive change.",
    body: "Our collaborations extend beyond scientific exploration — we seek alliances with organizations that share our commitment to sustainability and ethical practices.",
    botanical: "/assets/images/botanical-line-05.png",
  },
];

/* ── Team categories ──────────────────────────── */
const teamTags = [
  "Expert Scientists",
  "Bioinformaticians",
  "Herbalists",
  "Traditional Knowledge Experts",
  "Ethics & Sustainability Specialists",
  "Passionate Communicators",
  "Collaborators & Partners",
];

/* ── ValueCard ────────────────────────────────── */
function ValueCard({ v, i }: { v: typeof values[0]; i: number }) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{ rest: { y: 0 }, hover: { y: -4 } }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden border border-stone-100 bg-white p-8 cursor-default"
      style={{ animationDelay: `${i * 0.1}s` }}
    >
      <motion.div
        variants={{ rest: { opacity: 0 }, hover: { opacity: 0.07 } }}
        transition={{ duration: 0.5 }}
        className="pointer-events-none absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${v.botanical}')` }}
      />
      <motion.div
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute inset-0 border border-primary"
      />
      <div className="relative z-10">
        <Image
          src={v.icon}
          width={48}
          height={48}
          alt={v.label}
          className="mb-5 opacity-60"
        />
        <h3 className="font-display-serif mb-3 text-xl font-medium text-stone-800">
          {v.label}
        </h3>
        <p className="text-sm font-light leading-relaxed text-stone-500">
          {v.body}
        </p>
      </div>
    </motion.div>
  );
}

/* ── PillarCard ───────────────────────────────── */
function PillarCard({ p, i }: { p: typeof pillars[0]; i: number }) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{ rest: { y: 0 }, hover: { y: -4 } }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden border border-stone-100 bg-white p-8 cursor-default"
    >
      <motion.div
        variants={{ rest: { opacity: 0 }, hover: { opacity: 0.07 } }}
        transition={{ duration: 0.5 }}
        className="pointer-events-none absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${p.botanical}')` }}
      />
      <motion.div
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute inset-0 border border-primary"
      />
      <div className="relative z-10">
        <div className="mb-6 flex items-center gap-3">
          <span className="font-mono text-xs text-stone-300">{p.number}</span>
          <div className="h-px flex-1 bg-stone-100" />
          <span className="font-mono text-xs uppercase tracking-widest text-stone-400">{p.label}</span>
        </div>
        <h3 className="font-display-serif mb-4 text-xl font-medium leading-snug text-stone-800 md:text-2xl">
          {p.headline}
        </h3>
        <p className="text-sm font-light leading-relaxed text-stone-500">
          {p.body}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Page ─────────────────────────────────────── */
export default function About() {
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
          style={{ backgroundImage: `url("/assets/images/about.jpg")` }}
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
              Who We Are
            </motion.h1>
            <motion.p
              className="mt-4 max-w-xl text-4xl font-light leading-snug text-stone-300 sm:text-5xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              A multidisciplinary team united by the belief that nature and
              science must converge.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ── MISSION STATEMENT ─────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.p
            className="font-mono text-xs uppercase tracking-[0.3em] text-stone-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our purpose
          </motion.p>
          <motion.p
            className="font-display-serif mt-6 text-2xl font-medium leading-snug text-stone-700 md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            To provide humanity with plant-based products and services that
            enhance quality of life — by harnessing cutting-edge science to
            substantiate the power of traditional medicine.
          </motion.p>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────── */}
      <section className="bg-stone-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-stone-400">
              What drives us
            </span>
            <h2 className="font-display mt-3 text-4xl tracking-wide text-stone-800 md:text-5xl">
              Our Values
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-px bg-stone-100 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {values.map((v, i) => (
              <ValueCard key={v.label} v={v} i={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-stone-400">
              The people
            </span>
            <h2 className="font-display mt-3 text-4xl tracking-wide text-stone-800 md:text-5xl">
              Our Team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            {/* Rafael card */}
            <motion.div
              className="flex flex-col items-start gap-6 sm:flex-row"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-sm shadow-lg">
                <Image
                  src="/assets/images/equipo/rafa.png"
                  fill
                  alt="Rafael Betanzos"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-primary">
                  Founder & Lead Researcher
                </span>
                <h3 className="font-display-serif mt-1 text-2xl font-medium text-stone-800">
                  Rafael Betanzos
                </h3>
                <div className="mt-2 h-px w-8 bg-primary" />
                <p className="mt-3 text-sm font-light leading-relaxed text-stone-500">
                  MSc. Life Sciences (Biomedicine & Bionanotechnology). Expert
                  in bioinformatics and computer-aided drug discovery. Currently
                  pursuing a PhD at the intersection of traditional medicine and
                  computational biology.
                </p>
              </div>
            </motion.div>

            {/* Team disciplines */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="mb-6 text-sm font-light leading-relaxed text-stone-500">
                Ik-Holcán&apos;s team is a diverse group of experts united by a
                shared vision. We combine scientific rigor with traditional
                wisdom, technical expertise with ethical commitment.
              </p>
              <div className="flex flex-wrap gap-2">
                {teamTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-stone-200 bg-stone-50 px-4 py-1.5 text-xs font-light tracking-wide text-stone-600 transition-colors hover:border-primary hover:text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HISTORY TIMELINE ──────────────────── */}
      <section className="bg-stone-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-stone-400">
              Since 2016
            </span>
            <h2 className="font-display mt-3 text-4xl tracking-wide text-stone-800 md:text-5xl">
              Our History
            </h2>
          </motion.div>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[2.75rem] top-0 h-full w-px bg-stone-200 sm:left-[4.5rem]" />

            <div className="flex flex-col gap-0">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  className="relative flex gap-6 pb-12 sm:gap-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {/* year badge */}
                  <div className="relative z-10 flex w-20 shrink-0 flex-col items-center sm:w-32">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary bg-white">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <span className="mt-2 font-mono text-xs font-semibold text-primary">
                      {item.year}
                    </span>
                  </div>

                  {/* content */}
                  <div className="pb-2 pt-1">
                    <h3 className="font-display-serif text-lg font-medium text-stone-800 md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-stone-500">
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SUSTAINABILITY ────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-stone-400">
              Our commitment
            </span>
            <h2 className="font-display mt-3 text-4xl tracking-wide text-stone-800 md:text-5xl">
              Sustainability
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-px bg-stone-100 md:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {pillars.map((p, i) => (
              <PillarCard key={p.number} p={p} i={i} />
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
