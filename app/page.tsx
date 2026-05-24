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

function StatCounter({ to }: { to: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  return (
    <motion.span
      onViewportEnter={() => {
        if (started) return;
        setStarted(true);
        let n = 0;
        const step = Math.ceil(to / 40);
        const t = setInterval(() => {
          n += step;
          if (n >= to) { setCount(to); clearInterval(t); }
          else setCount(n);
        }, 28);
      }}
      viewport={{ once: true }}
    >
      {count}
    </motion.span>
  );
}

const infoCards = [
  {
    number: "01",
    label: "Our Belief",
    headline: "The wonders of nature are boundless.",
    body: "Where conventional medicine reaches its limits, nature's wisdom begins. Traditional and herbal medicine deserves rigorous scientific study — to understand not just that it works, but why.",
    botanical: "/assets/images/botanical-line-01.png",
    stats: null as null | { value: number; label: string }[],
  },
  {
    number: "02",
    label: "Our Vision",
    headline: "Leading the revolution in plant-based medicine.",
    body: "A future where data-driven science and ancient wisdom become one — and plant-derived drugs are embraced as a cornerstone of healthcare.",
    botanical: "/assets/images/botanical-line-02.png",
    stats: null as null | { value: number; label: string }[],
  },
  {
    number: "03",
    label: "Our Mission",
    headline: "Plant-based products that enrich lives.",
    body: "Through rigorous science, ethical practice, and a deep commitment to sustainability — we demonstrate that nature-inspired solutions work.",
    botanical: "/assets/images/botanical-line-04.png",
    stats: null as null | { value: number; label: string }[],
  },
  {
    number: "04",
    label: "Who We Are",
    headline: "A multidisciplinary team. One purpose.",
    body: "United by the desire to combine diverse knowledge and propose meaningful solutions — balancing environmental care, animal health, and human well-being.",
    botanical: "/assets/images/botanical-line-05.png",
    stats: [
      { value: 2016, label: "Founded" },
      { value: 2,    label: "Countries" },
      { value: 4,    label: "Research areas" },
      { value: 2,    label: "Continents" },
    ],
  },
];

function InfoCards() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {infoCards.map((card, i) => (
          <motion.div
            key={card.number}
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{ rest: { y: 0 }, hover: { y: -4 } }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="group relative overflow-hidden border border-stone-100 bg-white p-10 md:p-12 cursor-default"
          >
            {/* botanical bg — fades in on hover */}
            <motion.div
              variants={{ rest: { opacity: 0 }, hover: { opacity: 0.07 } }}
              transition={{ duration: 0.5 }}
              className="pointer-events-none absolute inset-0 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${card.botanical}')` }}
            />

            {/* green border on hover */}
            <motion.div
              variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
              transition={{ duration: 0.3 }}
              className="pointer-events-none absolute inset-0 border border-primary"
            />

            <div className="relative z-10 flex h-full flex-col">
              {/* header row */}
              <div className="mb-8 flex items-center gap-3">
                <span className="font-mono text-xs text-stone-300">{card.number}</span>
                <div className="h-px flex-1 bg-stone-100" />
                <span className="font-mono text-xs uppercase tracking-widest text-stone-400">
                  {card.label}
                </span>
              </div>

              {/* headline */}
              <h3 className="font-display-serif mb-5 text-2xl font-medium leading-snug text-stone-800 md:text-3xl">
                {card.headline}
              </h3>

              {/* body */}
              <p className="text-sm font-light leading-relaxed text-stone-500 md:text-base">
                {card.body}
              </p>

              {/* stats — only card 04 */}
              {card.stats && (
                <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-stone-100 pt-6 sm:grid-cols-4">
                  {card.stats.map((s) => (
                    <div key={s.label} className="flex flex-col gap-1">
                      <span className="font-display text-2xl font-bold text-primary">
                        <StatCounter to={s.value} />
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-stone-500">
                        {s.label}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-stone-400">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    setScrollPos(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <main>
      <NavBar dark={scrollPos > 0} />
      <div className="h-screen bg-black">
        <div className="relative isolate h-screen px-6 lg:px-8">
          <div
            className="absolute inset-x-0 -z-10 h-screen transform-gpu overflow-hidden"
            aria-hidden="true"
          >
            <video
              className="relative -z-10 h-full w-full object-cover brightness-100 contrast-100"
              autoPlay
              muted
              loop
              src={"/assets/videos/main2.mp4"}
              poster={"/assets/videos/main2.png"}
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-8">
            <div className="mx-auto w-full max-w-6xl">
              <motion.h1
                className="font-display text-2xl font-bold tracking-widest text-stone-200 opacity-70 sm:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                IK-HOLCÁN
              </motion.h1>
              <motion.p
                className="font-display mt-6 text-7xl leading-tight text-amber-200 sm:text-8xl sm:mt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Embracing Nature&apos;s Wonders: Unveiling the Potential of
                Traditional Medicine
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      <InfoCards />

      {/* <div className="relative overflow-hidden bg-black shadow-lg">
        <motion.video
          className="absolute h-full w-full object-cover contrast-200"
          autoPlay
          muted
          loop
          src={"/assets/videos/tamarindo.mp4"}
          poster={"/assets/videos/tamarindo.png"}
          initial={{ scale: 3, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 5, delay: 0 }}
        />

        <div className="to-primary/50 relative h-full bg-gradient-to-b from-black/0 p-12 lg:p-36">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0 }}
              viewport={{ once: true }}
            >
              <h1 className="font-display mt-12 inline bg-stone-800/60 text-3xl font-thin leading-snug text-amber-100 md:text-5xl">
                La medicina y la farmacia nacen del descubrimiento de las
                bondades presentes en algunas plantas.
              </h1>
              <p className="text-md mt-12 text-justify font-light text-white opacity-80 md:text-lg xl:w-3/4">
                Al día de hoy el ser humano puede manipular la materia a niveles
                atómicos, lo que lo ha llevado a realizar importantes avances en
                el cuidado de la salud. Sin embargo, en Ik-Holcán consideramos
                que en el tratamiento de enfermedades crónicas, degenerativas y
                cáncer deben ser tomadas en cuentas las terapias que permitan a
                los pacientes vivir mejor y en algún momento, prevenir cualquier
                evento adverso a la buena salud.
              </p>
              <p className="mt-12 text-justify text-lg font-medium text-white  opacity-80">
                Es aquí donde la medicina tradicional o herbolaria, debe ser
                estudiada para lograr descubrir en qué forma es efectiva y por
                qué lo es.
              </p>
            </motion.div>
          </div>
        </div>
      </div> */}

      <section className="py-16">
        <Hero
          imgUrl="assets/images/innovation.jpg"
          title="Innovation"
          body="Welcome to the heart of innovation, where nature's ingenuity meets cutting-edge science to shape a sustainable future. At our innovation hub, we embark on a relentless quest to push the boundaries of what is possible, guided by our unwavering commitment to harnessing the potential of herbalism and biotechnology."
          textColor="text-cyan-300"
          borderColor="border-cyan-400"
          seeMorePath="/innovation"
        />
      </section>

      <section className="py-16">
        <Hero
          imgUrl="assets/images/health.jpg"
          title="Health"
          body="At Ik-Holcán, health begins in nature. We develop plant-derived pharmaceuticals and natural remedies — proving through rigorous science that traditional medicine works and why. From proprietary formulations to herbal research, our commitment is to expand what medicine can offer. Natural cosmetics are part of that vision too: products crafted from the same botanical expertise, designed to care for your skin and well-being from the outside in."
          textColor="text-amber-300"
          borderColor="border-amber-400"
          seeMorePath="/health"
        />
      </section>

      <section className="py-16">
        <Hero
          imgUrl="assets/images/animals.jpg"
          title="Animals"
          body="We extend our passion for nature-inspired solutions to the well-being of our cherished animal companions. Our commitment to animal care revolves around the belief that our furry friends deserve the same level of attention, love, and respect as we afford ourselves. With a deep understanding of the bond between humans and animals, we have dedicated ourselves to crafting innovative and natural products that cater to the health and happiness of our beloved furry companions."
          textColor="text-rose-300"
          borderColor="border-rose-400"
          seeMorePath="/animals"
        />
      </section>

      <section className="py-16">
        <Hero
          imgUrl="assets/images/agriculture.jpg"
          title="Agriculture"
          body="We embrace a vision where human and natural processes coexist in harmony, benefiting both people and the environment. Our commitment to organic agriculture drives us to design products that cater to your garden or orchard's needs while respecting the delicate balance of nature. Whether you're a seasoned gardener or a passionate horticulturist, our range of organic agricultural products is carefully crafted to enhance the health and vitality of your plants without compromising the Earth's delicate ecosystems. We believe that agriculture can and should be sustainable, economically viable, and gentle on the planet, and that's precisely what we offer through our organic solutions."
          textColor="text-lime-300"
          borderColor="border-lime-400"
          seeMorePath="/animals"
        />
      </section>

      <section className="mt-16 bg-stone-100">
        <div className="container mx-auto flex flex-col items-center justify-between p-12 lg:flex-row">
          <div>
            <h2 className="font-display text-center text-4xl tracking-wide text-gray-900 sm:text-left sm:text-6xl">
              Contact us
            </h2>
            {/* <p className="mt-2 text-center text-lg leading-8 text-gray-600 sm:text-left">
              Escríbenos y te respondemos...
            </p> */}

            <div className="mt-16 flex flex-col gap-8 text-stone-600">
              <div className="flex">
                <div className="mr-4">
                  <BuildingOfficeIcon className="w-6" />
                </div>
                <div>
                  <div>Buenos Aires, Argentina</div>
                  <div>Ensenada, Baja California, México</div>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <PhoneIcon className="w-6" />
                </div>
                <div>
                  <div>
                    <a href="tel:111">+54 9 11 6666 6666</a>
                  </div>
                  <div>
                    <a href="tel:6462498495">+646 249 8495</a>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <EnvelopeIcon className="w-6" />
                </div>
                <div>
                  <a href="mailto:contacto@ikholcan.com">
                    contacto@ikholcan.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
