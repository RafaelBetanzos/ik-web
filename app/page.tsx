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
          <div className="mx-auto max-w-6xl py-20 sm:py-[35vh] lg:py-[60vh]">
            <div className="text-left">
              <motion.h1
                className="font-display text-xl font-bold tracking-widest text-stone-200 opacity-70 sm:text-4xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                IK-HOLCÁN
              </motion.h1>
              <motion.p
                className="font-display mt-36 text-5xl leading-tight text-amber-200 sm:mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 5 }}
                viewport={{ once: true }}
              >
                Embracing Nature&apos;s Wonders: Unveiling the Potential of
                Traditional Medicine
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl py-12 text-center">
        <p className="font-display-serif mb-4 px-2 text-xl font-medium text-stone-600 md:text-4xl">
          {"The wonders of nature are boundless, and through observation, we uncover a myriad of benefits within our reach."
            .split("")
            .map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index / 100 }}
                viewport={{ once: true }}
              >
                {char}
              </motion.span>
            ))}
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p className="my-12 px-4 text-sm font-light text-stone-600 md:text-xl">
            As of today, humanity has mastered the manipulation of matter at
            atomic levels, leading to significant advancements in healthcare.
            However, at Ik-Holcán, we believe that when it comes to treating
            chronic, degenerative, and cancerous diseases, therapies that enable
            patients to live better and, eventually, prevent adverse health
            events should be considered. This is where traditional or herbal
            medicine becomes essential, deserving rigorous study to unveil its
            effectiveness and the reasons behind it.
          </p>
        </motion.div>
      </div>

      <div className="min-h48 relative overflow-hidden border-y border-stone-800 bg-stone-950">
        <div
          style={{
            backgroundImage: `url("assets/images/air.svg")`,
            backgroundSize: "auto 100%",
          }}
          className="absolute h-full w-full opacity-[.03] invert"
        ></div>
        <div className="relative z-10 flex items-center justify-center p-12 text-center text-white">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="mx-auto text-2xl font-light text-slate-100">
              Our vision is to be the leading force in revolutionizing
              plant-based medicine through innovative scientific research and
              knowledge dissemination.
            </p>
            <p className="mx-auto mt-4 text-xl font-light text-slate-100">
              Ik-Holcán envisions a future where the extraordinary potential of
              herbal remedies is fully realized, backed by data-driven insights
              from computational drug discovery and shared through global
              partnerships and public outreach. Our vision is a world where
              plant-derived drugs are embraced as a cornerstone of healthcare,
              promoting enhanced well-being and environmental sustainability for
              all.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl py-12 text-center">
        <p className="px-4 text-justify text-sm font-light text-stone-600 md:text-lg">
          Ik-Holcán is an organization formed by a group of individuals with
          diverse skills, united by the desire to grow and combine their
          knowledge to propose meaningful solutions to humanity. We strive to
          harmonize our solutions with the values of society, maintaining a
          delicate balance between environmental care, animal health, and human
          well-being.
        </p>

        <p className="mt-12 px-4 text-justify text-sm font-light text-stone-600 md:text-lg">
          Our team, with its multidisciplinary abilities, is committed to
          exploring the potential of traditional medicine in improving the
          quality of life for individuals while safeguarding the health of our
          planet and all its inhabitants.
        </p>

        <p className="mt-12 px-4 text-justify text-sm font-light text-stone-600 md:text-lg">
          At Ik-Holcán, we embrace the boundless potential of nature and the
          wisdom of traditional medicine, dedicating ourselves to crafting
          solutions that resonate with the needs of humanity and the
          environment. Together, we envision a future where nature and science
          converge, empowering us to lead healthier, more fulfilling lives in
          harmony with the world around us.
        </p>
      </div>

      <div className="relative overflow-hidden border-y border-stone-800 bg-stone-950">
        <div
          style={{
            backgroundImage: `url("assets/images/air.svg")`,
            backgroundSize: "auto 100%",
          }}
          className="absolute h-full w-full opacity-[.02] invert"
        ></div>
        <div className="relative z-10 flex items-center justify-center p-12 text-center text-white">
          <motion.div
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="mx-auto text-2xl font-light text-slate-100">
              Our mission is to provide humanity with plant-based products and
              services that enrich lives and elevate well-being.
            </p>
            <p className="mx-auto mt-4 text-xl font-light text-slate-100">
              We are dedicated to demonstrating the effectiveness of traditional
              herbal medicine by harnessing the latest advancements in science
              and technology, including computer-aided drug discovery and
              bioinformatics. Through rigorous research, ethical practices, and
              a commitment to sustainability, we aim to unveil the full
              potential of plant-derived drugs, promoting their integration into
              mainstream healthcare. Our passion for scientific exploration and
              knowledge-sharing drives us to empower individuals and communities
              with nature-inspired solutions for a healthier, more sustainable
              future.
            </p>
          </motion.div>
        </div>
      </div>

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
          body="At Ik-Holcán, our cosmetics are meticulously designed to celebrate the harmonious synergy between nature and beauty. Guided by the expertise of our team, we harness the finest elements of herbalism to craft cosmetics that not only enhance your external radiance but also nurture your inner well-being. We believe that nature's bountiful offerings hold the key to unlocking your natural beauty, and our high-quality, purpose-driven ingredients are carefully chosen to care for your health. Immerse yourself in the transformative power of our natural cosmetics, and experience a radiant, luminous glow that embodies the essence of Ik-Holcán's commitment to nature-inspired beauty."
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
