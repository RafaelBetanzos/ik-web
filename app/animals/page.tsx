"use client";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Animals() {
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
                backgroundImage: `url("assets/images/animals.jpg")`,
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
                Animals
              </motion.h1>
              <motion.p
                className="font-display mt-36 text-4xl leading-tight text-amber-200 sm:mt-12 md:text-5xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 5 }}
                viewport={{ once: true }}
              >
                Nurturing Health and Happiness for Our Beloved Companions
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl p-4 py-12 text-center ">
        <p className="font-display-serif mb-8 px-2 text-center text-lg font-medium text-stone-500 md:text-2xl">
          {"We extend our passion for nature-inspired solutions to the well-being of our cherished animal companions. Our commitment to animal care revolves around the belief that our furry friends deserve the same level of attention, love, and respect as we afford ourselves. With a deep understanding of the bond between humans and animals, we have dedicated ourselves to crafting innovative and natural products that cater to the health and happiness of our beloved furry companions."
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <h2 className="mt-4 text-center text-2xl">
            Compassionate Solutions for Animal Health
          </h2>

          <p className="px-4 text-justify text-sm font-light text-stone-600 md:text-lg">
            We recognize that animals play an integral role in our lives,
            offering unwavering companionship and unconditional love. At
            Ik-Holcán, we strive to reciprocate that love through compassionate
            solutions for animal health. Our natural remedies and pharmaceutical
            innovations are designed to cater to the unique needs of animals,
            providing safe, effective, and gentle care that nurtures their
            overall well-being.
          </p>

          <h2 className="mt-4 text-center text-2xl">
            Holistic Approach to Animal Wellness
          </h2>
          <p className="px-4 text-justify text-sm font-light text-stone-600 md:text-lg">
            Animal care at Ik-Holcán is not merely about treating specific
            ailments; it encompasses a holistic approach to animal wellness. We
            focus on prevention, promoting good health through natural
            nutrition, and fostering a balanced lifestyle. Our dedicated team of
            experts collaborates to understand the intricacies of animal
            physiology, ensuring that our products support their vitality and
            longevity.
          </p>

          <h2 className="mt-4 text-center text-2xl">Natural Cosmetics</h2>
          <p className="px-4 text-justify text-sm font-light text-stone-600 md:text-lg">
            In our pursuit of animal care excellence, we turn to nature&apos;s
            healing touch. Drawing inspiration from herbalism and biotechnology,
            we unlock the therapeutic potential of natural ingredients to
            address a wide range of animal health concerns. From soothing
            ointments to nutritional supplements, every product we create
            embodies the essence of nature&apos;s gentle yet powerful care.
          </p>

          <h2 className="mt-4 text-center text-2xl">
            Empowering Animal Guardianship
          </h2>
          <p className="px-4 text-justify text-sm font-light text-stone-600 md:text-lg">
            At Ik-Holcán, we believe that responsible animal guardianship goes
            hand in hand with nurturing a sustainable relationship with the
            environment. Our eco-friendly practices and responsible sourcing of
            ingredients reflect our commitment to minimizing our ecological
            footprint. Through public outreach and educational initiatives, we
            aim to empower pet parents and animal caregivers with knowledge that
            enriches the lives of their furry companions while preserving the
            natural world.
          </p>

          <h2 className="mt-4 text-center text-2xl">A Bond Beyond Words</h2>
          <p className="px-4 text-justify text-sm font-light text-stone-600 md:text-lg">
            Our animal care offerings are a tribute to the deep and unspoken
            bond between humans and animals. We understand the joy and comfort
            that animals bring to our lives, and it is with this understanding
            that we approach every aspect of animal care at Ik-Holcán. As we
            innovate and develop new products, we hold dear the belief that a
            happy, healthy pet is a testament to the strength of that
            irreplaceable bond.
          </p>
        </motion.div>
      </div>

      <div className="relative overflow-hidden border-y-4 border-blue-800  bg-gradient-to-r from-indigo-800 to-violet-950">
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
            <p className="px-4 text-justify text-lg font-light text-stone-100 md:text-lg">
              Join us on a journey that celebrates the beauty of this
              unbreakable bond between humans and animals. At Ik-Holcán, we are
              committed to creating a brighter future for our animal friends,
              one that is filled with love, compassion, and the very best that
              nature has to offer. Let us walk hand in paw, caring for our
              beloved companions in a way that honors their trust and the
              enduring connection between species. Together, we shape a world
              where animals thrive, and their well-being is at the heart of our
              shared journey.
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
