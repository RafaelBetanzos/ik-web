"use client";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Agriculture() {
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
              className="bg-left-right relative -z-10 h-full w-full brightness-[.70]"
              style={{
                backgroundImage: `url("assets/images/agriculture.jpg")`,
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
                Agriculture
              </motion.h1>
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
            of harming the environment. That&apos;s why our natural garden
            products are your perfect allies in maintaining a healthy and
            thriving garden without the use of harmful chemicals. Our
            preparations are specifically formulated to naturally control pests
            and provide nourishment to your plants, leaving them vibrant, lush,
            and free from harmful residues. With Ik-Holcán&apos;s natural garden
            products, you can create a flourishing garden that reflects your
            commitment to sustainability and environmental stewardship.
          </p>

          <h2 className="mt-4 text-center text-2xl">Field</h2>
          <p className="px-4 text-justify text-sm font-light text-stone-600 md:text-lg">
            If you are a farmer or cultivator looking to make the transition to
            organic farming, Ik-Holcán is here to support your journey towards
            sustainable agriculture. Our products are designed to help you
            achieve organic certification and optimize your crop yields while
            preserving the health of the soil and surrounding ecosystems. By
            partnering with us, you can embark on a path that aligns with
            nature&apos;s principles, ensuring the long-term viability of your
            fields and a positive impact on the world around you.
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
