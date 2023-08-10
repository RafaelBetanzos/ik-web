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
              className="bg-left-right relative -z-10 h-full w-full brightness-[.70]"
              style={{
                backgroundImage: `url("assets/images/agriculture.jpg")`,
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
                Agriculture
              </motion.h1>
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
          {"We embrace a vision where human and natural processes coexist in harmony, benefiting both people and the environment. Our commitment to organic agriculture drives us to design products that cater to your garden or orchard's needs while respecting the delicate balance of nature. Whether you're a seasoned gardener or a passionate horticulturist, our range of organic agricultural products is carefully crafted to enhance the health and vitality of your plants without compromising the Earth's delicate ecosystems. We believe that agriculture can and should be sustainable, economically viable, and gentle on the planet, and that's precisely what we offer through our organic solutions."
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
          <h2 className="mt-4 text-center text-2xl">Garden</h2>

          <p className="px-4 text-justify text-sm font-light text-stone-600 md:text-lg">
            Your garden is a sanctuary of beauty and tranquility, and at
            Ik-Holcán, we believe that nurturing it should not come at the cost
            of harming the environment. That's why our natural garden products
            are your perfect allies in maintaining a healthy and thriving garden
            without the use of harmful chemicals. Our preparations are
            specifically formulated to naturally control pests and provide
            nourishment to your plants, leaving them vibrant, lush, and free
            from harmful residues. With Ik-Holcán's natural garden products, you
            can create a flourishing garden that reflects your commitment to
            sustainability and environmental stewardship.
          </p>

          <h2 className="mt-4 text-center text-2xl">Field</h2>
          <p className="px-4 text-justify text-sm font-light text-stone-600 md:text-lg">
            If you are a farmer or cultivator looking to make the transition to
            organic farming, Ik-Holcán is here to support your journey towards
            sustainable agriculture. Our products are designed to help you
            achieve organic certification and optimize your crop yields while
            preserving the health of the soil and surrounding ecosystems. By
            partnering with us, you can embark on a path that aligns with
            nature's principles, ensuring the long-term viability of your fields
            and a positive impact on the world around you.
          </p>

          <h2 className="mt-4 text-center text-2xl">Indoor</h2>
          <p className="px-4 text-justify text-sm font-light text-stone-600 md:text-lg">
            Your home is your sanctuary, and at Ik-Holcán, we believe that it
            should be free from harmful chemicals. Our natural indoor products
            provide you with safe and effective alternatives for pest control
            and plant care, ensuring a healthy living environment for you and
            your loved ones. With our indoor preparations, you can create a
            nurturing and toxin-free space where your plants thrive, and you can
            enjoy the beauty of nature indoors.
          </p>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
