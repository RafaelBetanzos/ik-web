"use client";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ContactForm from "./components/contact";
import {
  BuildingOfficeIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Hero from "./components/hero";

export default function Home() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <NavBar dark={scrollPos > 80} />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative h-screen overflow-hidden bg-forest">
        {/* Video */}
        <video
          className="absolute inset-0 h-full w-full object-cover brightness-50"
          autoPlay muted loop playsInline
          src="/assets/videos/main2.mp4"
          poster="/assets/videos/main2.png"
        />

        {/* Botanical watermark — bottom right */}
        <div
          className="absolute bottom-0 right-0 h-[75vh] w-[38vw] bg-no-repeat bg-contain bg-right-bottom opacity-[0.13] pointer-events-none"
          style={{ backgroundImage: "url('/assets/images/botanical-line-03.png')" }}
        />

        {/* Top-left thin vertical label */}
        <div className="absolute top-1/2 left-6 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
          <div className="w-px h-16 bg-cream/20" />
          <span
            className="font-mono text-[10px] tracking-[0.3em] text-cream/30 uppercase"
            style={{ writingMode: "vertical-rl" }}
          >
            Bioinformatics · Herbalism
          </span>
          <div className="w-px h-16 bg-cream/20" />
        </div>

        {/* Main content — bottom aligned */}
        <div className="absolute inset-0 flex flex-col justify-end pb-16 px-8 lg:px-24">
          <div className="max-w-6xl">
            <motion.p
              className="font-mono text-[11px] tracking-[0.35em] text-gold/80 uppercase mb-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Traditional Wisdom · Modern Science
            </motion.p>

            <motion.h1
              className="font-serif font-light text-cream leading-[0.88] tracking-[0.06em]"
              style={{ fontSize: "clamp(4.5rem, 13vw, 12rem)" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              IK·HOLCÁN
            </motion.h1>

            <motion.p
              className="font-sans text-sm tracking-[0.2em] text-cream/45 uppercase mt-5 max-w-md leading-loose"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.1 }}
            >
              Embracing nature&apos;s wonders — unveiling the potential of traditional medicine
            </motion.p>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 right-10 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <motion.div
            className="w-px h-14 bg-gradient-to-b from-cream/50 to-transparent"
            animate={{ scaleY: [1, 0.2, 1], originY: 0 }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="font-mono text-[9px] tracking-[0.3em] text-cream/30 uppercase">
            scroll
          </span>
        </motion.div>
      </section>

      {/* ── MANIFESTO ─────────────────────────────────────── */}
      <section className="relative bg-forest overflow-hidden py-32 lg:py-40">
        {/* Botanical watermark */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage: "url('/assets/images/botanical-line-01.png')",
            backgroundSize: "60%",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-[10px] tracking-[0.35em] text-gold/60 uppercase">
              Our belief
            </span>
            <p className="font-serif italic font-light leading-relaxed text-cream/85 mt-6"
               style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}>
              &ldquo;The wonders of nature are boundless, and through
              observation we uncover a myriad of benefits within our reach.&rdquo;
            </p>
            <div className="w-10 h-px bg-gold mx-auto mt-10 mb-10" />
            <p className="font-sans text-cream/50 text-sm md:text-base leading-[1.95] max-w-2xl mx-auto">
              Humanity has mastered the manipulation of matter at atomic levels, leading to
              significant advancements in healthcare. Yet at Ik-Holcán, we believe that
              therapies enabling patients to live better — including traditional and herbal
              medicine — deserve rigorous scientific study to unveil their effectiveness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────── */}
      <section className="relative bg-cream overflow-hidden py-24 lg:py-32">
        {/* Botanical left watermark */}
        <div
          className="absolute top-0 left-0 h-full w-1/3 bg-no-repeat bg-contain bg-left-top opacity-[0.07] pointer-events-none"
          style={{ backgroundImage: "url('/assets/images/botanical-line-02.png')" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <span className="font-mono text-[10px] tracking-[0.35em] text-gold uppercase">
                About us
              </span>
              <h2
                className="font-serif font-light text-forest mt-3 mb-5 leading-[1.05]"
                style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)" }}
              >
                Where Nature<br />
                <em>Meets Science</em>
              </h2>
              <div className="w-8 h-px bg-gold mb-7" />
              <p className="font-sans text-stone-500 leading-[1.9] text-sm md:text-base">
                Ik-Holcán is an organization formed by individuals with diverse skills,
                united by the desire to combine knowledge and propose meaningful solutions
                to humanity. We harmonize our work with the values of society, maintaining
                a delicate balance between environmental care, animal health, and human well-being.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <p className="font-sans text-stone-500 leading-[1.9] text-sm md:text-base">
                Our team, with its multidisciplinary abilities, is committed to exploring
                the potential of traditional medicine in improving quality of life while
                safeguarding the health of our planet and all its inhabitants.
              </p>
              <p className="font-sans text-stone-500 leading-[1.9] text-sm md:text-base">
                We embrace the boundless potential of nature and the wisdom of traditional
                medicine, dedicating ourselves to crafting solutions that resonate with the
                needs of humanity and the environment. Together, we envision a future where
                nature and science converge.
              </p>
              <div className="flex items-center gap-4 mt-2">
                <div className="w-8 h-px bg-gold" />
                <span className="font-mono text-[10px] tracking-[0.25em] text-gold/70 uppercase">
                  Est. 2016 · México &amp; Argentina
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VISION ────────────────────────────────────────── */}
      <section className="relative bg-forest overflow-hidden py-24 lg:py-32">
        <div
          className="absolute right-0 top-0 h-full w-1/2 bg-no-repeat bg-contain bg-right-top opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: "url('/assets/images/botanical-line-04.png')" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[auto,1fr] gap-8 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="lg:pt-2"
            >
              <span className="font-mono text-[10px] tracking-[0.35em] text-gold/50 uppercase block mb-2">
                01
              </span>
              <h2
                className="font-serif font-light text-cream/[0.08] leading-none select-none"
                style={{ fontSize: "clamp(5rem, 10vw, 9rem)" }}
              >
                Vision
              </h2>
              <div className="w-8 h-px bg-gold mt-5" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:pt-10"
            >
              <p
                className="font-serif italic font-light text-cream/80 leading-[1.5] mb-7"
                style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.1rem)" }}
              >
                To be the leading force in revolutionizing plant-based medicine
                through innovative scientific research and knowledge dissemination.
              </p>
              <p className="font-sans text-cream/45 text-sm md:text-base leading-[1.95]">
                Ik-Holcán envisions a future where the extraordinary potential of herbal
                remedies is fully realized — backed by data-driven insights from
                computational drug discovery and shared through global partnerships
                and public outreach. A world where plant-derived drugs are embraced as
                a cornerstone of healthcare, promoting enhanced well-being and
                environmental sustainability for all.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MISSION ───────────────────────────────────────── */}
      <section className="relative bg-cream overflow-hidden py-24 lg:py-32">
        <div
          className="absolute left-0 bottom-0 h-full w-1/3 bg-no-repeat bg-contain bg-left-bottom opacity-[0.07] pointer-events-none"
          style={{ backgroundImage: "url('/assets/images/botanical-line-05.png')" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-8 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="lg:pt-10"
            >
              <p
                className="font-serif italic font-light text-forest/75 leading-[1.5] mb-7"
                style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.1rem)" }}
              >
                To provide humanity with plant-based products and services
                that enrich lives and elevate well-being.
              </p>
              <p className="font-sans text-stone-500 text-sm md:text-base leading-[1.95]">
                We are dedicated to demonstrating the effectiveness of traditional herbal
                medicine by harnessing the latest advancements in science and technology —
                including computer-aided drug discovery and bioinformatics. Through rigorous
                research, ethical practices, and a commitment to sustainability, we aim to
                unveil the full potential of plant-derived drugs and promote their integration
                into mainstream healthcare.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:pt-2 lg:text-right"
            >
              <span className="font-mono text-[10px] tracking-[0.35em] text-gold/60 uppercase block mb-2">
                02
              </span>
              <h2
                className="font-serif font-light text-forest/[0.08] leading-none select-none"
                style={{ fontSize: "clamp(5rem, 10vw, 9rem)" }}
              >
                Mission
              </h2>
              <div className="w-8 h-px bg-gold mt-5 lg:ml-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PILLARS label ─────────────────────────────────── */}
      <div className="bg-forest py-10 px-8">
        <div className="max-w-6xl mx-auto flex items-center gap-6">
          <div className="w-8 h-px bg-gold/50" />
          <span className="font-mono text-[10px] tracking-[0.35em] text-gold/50 uppercase">
            Our pillars
          </span>
          <div className="flex-1 h-px bg-gold/10" />
        </div>
      </div>

      {/* ── PILLAR SECTIONS ───────────────────────────────── */}
      <div className="bg-forest">
        <div className="py-12">
          <Hero
            imgUrl="/assets/images/innovation.jpg"
            title="Innovation"
            body="Welcome to the heart of innovation, where nature's ingenuity meets cutting-edge science to shape a sustainable future. At our innovation hub, we embark on a relentless quest to push the boundaries of what is possible, guided by our unwavering commitment to harnessing the potential of herbalism and biotechnology."
            textColor="text-gold"
            borderColor="border-gold"
            seeMorePath="/innovation"
          />
        </div>
        <div className="py-12">
          <Hero
            imgUrl="/assets/images/health.jpg"
            title="Health"
            body="Our cosmetics are meticulously designed to celebrate the harmonious synergy between nature and beauty. We harness the finest elements of herbalism to craft cosmetics that enhance your radiance while nurturing your inner well-being with high-quality, purpose-driven ingredients."
            textColor="text-amber-300"
            borderColor="border-amber-400"
            seeMorePath="/health"
          />
        </div>
        <div className="py-12">
          <Hero
            imgUrl="/assets/images/animals.jpg"
            title="Animals"
            body="We extend our passion for nature-inspired solutions to the well-being of our cherished animal companions. Our commitment revolves around crafting innovative and natural products that cater to the health and happiness of animals — because they deserve the same love and respect."
            textColor="text-rose-300"
            borderColor="border-rose-400"
            seeMorePath="/animals"
          />
        </div>
        <div className="py-12 pb-20">
          <Hero
            imgUrl="/assets/images/agriculture.jpg"
            title="Agriculture"
            body="We embrace a vision where human and natural processes coexist in harmony. Our commitment to organic agriculture drives us to design products that cater to your garden's needs while respecting the delicate balance of nature and the Earth's ecosystems."
            textColor="text-lime-300"
            borderColor="border-lime-400"
            seeMorePath="/agriculture"
          />
        </div>
      </div>

      {/* ── CONTACT ───────────────────────────────────────── */}
      <section className="relative bg-forest overflow-hidden py-24 lg:py-32">
        <div
          className="absolute right-0 bottom-0 h-2/3 w-1/3 bg-no-repeat bg-contain bg-right-bottom opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: "url('/assets/images/botanical-line-02.png')" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <span className="font-mono text-[10px] tracking-[0.35em] text-gold/60 uppercase">
                Get in touch
              </span>
              <h2
                className="font-serif font-light text-cream mt-3 mb-6 leading-tight"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
              >
                Contact<br /><em>Us</em>
              </h2>
              <div className="w-8 h-px bg-gold mb-10" />

              <div className="flex flex-col gap-7 text-cream/55">
                <div className="flex gap-4 items-start">
                  <BuildingOfficeIcon className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <div className="font-sans text-sm leading-relaxed">
                    <div>Buenos Aires, Argentina</div>
                    <div>Ensenada, Baja California, México</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <PhoneIcon className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <div className="font-sans text-sm leading-relaxed">
                    <div><a href="tel:+5491166666666" className="hover:text-cream transition-colors">+54 9 11 6666 6666</a></div>
                    <div><a href="tel:6462498495" className="hover:text-cream transition-colors">+646 249 8495</a></div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <EnvelopeIcon className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <a
                    href="mailto:contacto@ikholcan.com"
                    className="font-sans text-sm hover:text-cream transition-colors"
                  >
                    contacto@ikholcan.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
