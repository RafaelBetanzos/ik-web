"use client";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Innovation() {
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
            <div
              className="relative -z-10 h-full w-full bg-center brightness-[.80]"
              style={{
                backgroundImage: `url("assets/images/innovation.jpg")`,
                backgroundSize: "cover",
              }}
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
                Innovation
              </motion.h1>
              <motion.p
                className="font-display mt-36 text-4xl leading-tight text-amber-200 sm:mt-12 md:text-5xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 5 }}
                viewport={{ once: true }}
              >
                Pioneering a Sustainable Future with Nature&apos;s Ingenuity
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl p-4 py-12 text-center ">
        <p className="font-display-serif mb-8 px-2 text-center text-lg font-medium text-stone-500 md:text-2xl">
          {"Welcome to the heart of innovation, where nature's ingenuity meets cutting-edge science to shape a sustainable future. At our innovation hub, we embark on a relentless quest to push the boundaries of what is possible, guided by our unwavering commitment to harnessing the potential of herbalism and biotechnology."
            .split("")
            .map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index / 1000 }}
                viewport={{ once: true }}
              >
                {char}
              </motion.span>
            ))}
        </p>
      </div>
      <div className="relative overflow-hidden border-y-4 border-cyan-600  bg-gradient-to-r from-cyan-700 to-gray-700">
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
            <h2 className="mb-4 text-center text-2xl">
              Join the Innovation Journey
            </h2>
            <p className="px-4 text-justify text-lg font-light text-stone-100 md:text-lg">
              As you explore our innovation page, we invite you to witness the
              transformative power of nature and human ingenuity. Together, let
              us embark on a journey of discovery, innovation, and positive
              impact. At Ik-Holcán, innovation isn&apos;t just a destination;
              it&apos;s a perpetual voyage towards a brighter, healthier, and
              more sustainable tomorrow.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl p-4 py-12 text-center ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <h2 className="mt-4 text-center text-2xl">
            Unveiling Nature&apos;s Secrets
          </h2>

          <p className="px-4 text-justify text-sm font-light text-stone-600 md:text-lg">
            Our journey begins with a profound respect for nature&apos;s
            mysteries. With every experiment and discovery, we peel back the
            layers of the natural world, unveiling its hidden treasures. Through
            rigorous research and exploration, we delve into the intricate realm
            of herbal medicine, seeking to understand its timeless wisdom and
            the secrets it holds for advancing human and animal health.
          </p>

          <h2 className="mt-4 text-center text-2xl">
            Blending Tradition with Technology
          </h2>
          <p className="px-4 text-justify text-sm font-light text-stone-600 md:text-lg">
            At Ik-Holcán, we believe that traditional wisdom and scientific
            progress are not mutually exclusive but rather, they intertwine
            harmoniously. Our team of multidisciplinary experts, with diverse
            skills and knowledge, collaborates seamlessly to combine ancient
            herbal practices with state-of-the-art biotechnological
            advancements. This dynamic fusion empowers us to create innovative
            products and therapies that stand at the forefront of the health and
            wellness industry.
          </p>

          <h2 className="mt-4 text-center text-2xl">
            A Journey of Breakthroughs
          </h2>
          <p className="px-4 text-justify text-sm font-light text-stone-600 md:text-lg">
            Our innovation page is a chronicle of continuous breakthroughs. From
            pioneering herbal-based pharmaceuticals to transformative natural
            cosmetics, each achievement embodies the culmination of relentless
            research and unwavering dedication. Our relentless pursuit of
            excellence drives us to explore novel frontiers, striving to unlock
            nature&apos;s potential for the betterment of humanity and the
            planet.
          </p>

          <h2 className="mt-4 text-center text-2xl">
            Sustainability as Our Guiding Star
          </h2>
          <p className="px-4 text-justify text-sm font-light text-stone-600 md:text-lg">
            Sustainability is at the core of everything we do. As we explore the
            vast potential of herbalism and biotechnology, we remain steadfast
            in our commitment to environmental stewardship. Our innovations
            prioritize eco-friendly practices, with a deep respect for
            biodiversity, responsible sourcing of raw materials, and minimal
            environmental impact. At Ik-Holcán, sustainability isn&apos;t just a
            buzzword; it&apos;s the guiding star that illuminates our path to a
            greener and healthier world.
          </p>

          <h2 className="mt-4 text-center text-2xl">
            Inspiring a Global Movement
          </h2>
          <p className="px-4 text-justify text-sm font-light text-stone-600 md:text-lg">
            Beyond our own innovations, we aspire to ignite a global movement
            for nature-inspired solutions. Through public outreach, educational
            initiatives, and collaboration with like-minded organizations, we
            seek to raise awareness about the power of nature in transforming
            lives. We envision a world where traditional knowledge and modern
            science converge, nurturing a sustainable future that benefits all
            of humanity.
          </p>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
