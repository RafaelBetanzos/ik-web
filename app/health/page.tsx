"use client";
import Image from "next/image";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ContactForm from "../components/contact";
import {
  BuildingOfficeIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Hero from "../components/hero";

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
            {/* <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            /> */}
            <div
              className="relative -z-10 h-full w-full bg-center brightness-[.60]"
              style={{
                backgroundImage: `url("assets/images/health.jpg")`,
                backgroundSize: "cover",
              }}
            />
          </div>
          <div className="mx-auto max-w-6xl py-20 sm:py-[35vh] lg:py-[60vh]">
            <div className="hidden sm:mb-8 sm:flex sm:justify-start">
              {/* <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Anunciando x.{" "}
                <a href="#" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Leer más <span aria-hidden="true">&rarr;</span>
                </a>
              </div> */}
            </div>
            <div className="text-left">
              <motion.h1
                className="font-display text-xl font-bold tracking-widest text-stone-200 opacity-70 sm:text-4xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                Health
              </motion.h1>
              <motion.p
                className="font-display mt-36 text-4xl leading-tight text-amber-200 sm:mt-12 md:text-5xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 5 }}
                viewport={{ once: true }}
              >
                Cosmetics by Ik-Holcán: Where Nature Enhances Beauty
              </motion.p>
              {/* <div className="mt-10 flex items-center justify-start gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl p-4 py-12 text-center ">
        <p className="font-display-serif mb-8 px-2 text-center text-lg font-medium text-stone-500 md:text-2xl">
          {"At Ik-Holcán, our cosmetics are meticulously designed to celebrate the harmonious synergy between nature and beauty. Guided by the expertise of our team, we harness the finest elements of herbalism to craft cosmetics that not only enhance your external radiance but also nurture your inner well-being. We believe that nature's bountiful offerings hold the key to unlocking your natural beauty, and our high-quality, purpose-driven ingredients are carefully chosen to care for your health. Immerse yourself in the transformative power of our natural cosmetics, and experience a radiant, luminous glow that embodies the essence of Ik-Holcán's commitment to nature-inspired beauty."
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
            Pharmaceutical Innovations by Ik-Holcán: Nature's Gift for Healing
          </h2>

          <p className="px-4 text-justify text-sm font-light text-stone-600 md:text-lg">
            At Ik-Holcán, we lead the way in groundbreaking pharmaceutical
            innovations that spring from the heart of nature itself. Driven by a
            passion for cutting-edge research, our team embarks on a scientific
            quest to develop natural drugs for the treatment of human and animal
            diseases. Rooted in the ancient wisdom of herbalism, we firmly
            believe in the potential of traditional remedies to transform modern
            healthcare. Each breakthrough discovery propels us forward in our
            mission to unlock nature's therapeutic secrets, proving the
            effectiveness of herbal medicine through rigorous scientific study.
            With Ik-Holcán's pharmaceutical advancements, we envision a world
            where humanity embraces nature's gifts for healing, ushering in a
            new era of well-being and health.
          </p>

          <h2 className="mt-4 text-center text-2xl">
            Herbalism at Ik-Holcán: Honoring Nature's Timeless Wisdom
          </h2>
          <p className="px-4 text-justify text-sm font-light text-stone-600 md:text-lg">
            At Ik-Holcán, herbalism is the heart and soul of our commitment to
            holistic well-being. We deeply value the wisdom passed down through
            generations, understanding that traditional herbal remedies hold a
            profound connection to nature's healing powers. Our team of experts
            passionately explores the intricacies of herbal medicine, studying
            its effectiveness and uncovering the reasons behind its healing
            properties. We believe that herbalism is a treasure trove of
            knowledge, offering natural and sustainable solutions for a
            healthier world. With every step, we strive to preserve and promote
            the time-honored practices of herbalism, ensuring that the marvels
            of nature's bounty continue to enrich the lives of generations to
            come.
          </p>

          <h2 className="mt-4 text-center text-2xl">Natural Cosmetics</h2>
          <p className="px-4 text-justify text-sm font-light text-stone-600 md:text-lg">
            At Ik-Holcán, we take pride in creating natural cosmetics that are
            expertly crafted to harness the power of herbal medicine, offering
            you the best of nature's goodness for a healthier and more radiant
            you. Our cosmetics are meticulously formulated by our team of
            experts, who carefully select high-quality, purpose-driven raw
            materials. These ingredients are chosen not only for their
            beneficial effects on your skin but also with a deep commitment to
            caring for your overall health and well-being. With Ik-Holcán's
            natural cosmetics, you can feel confident that you are pampering
            yourself with products that nurture both your beauty and your
            health.
          </p>

          <h2 className="mt-4 text-center text-2xl">Natural Pharmacy</h2>
          <p className="px-4 text-justify text-sm font-light text-stone-600 md:text-lg">
            Our dedication to cutting-edge research sets us apart as pioneers in
            the development of natural drugs for the treatment of both human and
            animal diseases. At Ik-Holcán, we firmly believe in the potential of
            herbal medicine, and we are on a scientific quest to prove its
            effectiveness and unlock its secrets. Our team of researchers and
            scientists work tirelessly to uncover the therapeutic properties of
            herbal remedies and explore how they can serve as safe and effective
            alternatives to conventional pharmaceuticals. With every
            breakthrough discovery, we aim to empower individuals and their
            beloved pets with nature-inspired solutions that promote well-being
            and healing.
          </p>
        </motion.div>
      </div>

      <div className="relative overflow-hidden border-y-4 border-amber-800  bg-gradient-to-r from-yellow-800 to-amber-950">
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
              At Ik-Holcán, we are more than just a company; we are champions of
              sustainability and advocates of the transformative power of
              nature. Our products are carefully crafted to honor the Earth and
              your well-being, empowering you to embrace a lifestyle that is in
              perfect harmony with the environment. Join us on this journey
              towards a greener and healthier future. Together, we can make a
              difference, one conscious choice at a time.
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
