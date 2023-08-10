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
              className="relative -z-10 h-full w-full bg-center brightness-[.90]"
              style={{
                backgroundImage: `url("assets/images/about.jpg")`,
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
                Who we are
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

      <div className="container mx-auto max-w-6xl py-12 text-center">
        <p className="font-display-serif mb-4 px-2 text-xl font-medium text-stone-600 md:text-4xl">
          {"At Ik-Holcán, we are driven by a singular mission - to provide humanity with plant-based products and services that enhance people's quality of life. Our goal is to demonstrate the efficacy of traditional herbal medicine by harnessing the power of cutting-edge scientific advancements. We firmly believe in the potential of plant-derived drugs, and to substantiate this belief, we employ state-of-the-art tools, ranging from computational biology and laboratory analysis to clinical trials."
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
          className="flex flex-col gap-4"
        >
          <h2 className="mt-4 text-center text-2xl">
            Our Passion: Advancing Drug Discovery Through Computer-Aided
            Techniques
          </h2>

          <p className="px-4 text-justify text-sm font-light text-stone-600 md:text-lg">
            Ik-Holcán is dedicated to pioneering drug discovery through
            computational approaches. By combining traditional herbal knowledge
            with modern bioinformatics, our team of expert scientists strives to
            unlock the therapeutic potential of plant-based compounds. Through
            the convergence of data-driven insights and centuries-old wisdom, we
            aim to revolutionize the field of natural medicine.
          </p>

          <h2 className="mt-4 text-center text-2xl">
            Our Core Values: Integrity, Humanity, and Environmental Stewardship
          </h2>
          <p className="px-4 text-justify text-sm font-light text-stone-600 md:text-lg">
            Honesty, respect, responsibility, humanism, humanitarianism,
            professional ethics, integrity, and solidarity are the bedrock of
            Ik-Holcán's values. As we explore the boundaries of plant-based
            medicine, we remain committed to ethical practices and a profound
            sense of responsibility towards the well-being of individuals and
            communities alike.
          </p>

          <h2 className="mt-4 text-center text-2xl">
            Celebrating Milestones: Blending Science and Entrepreneurship
          </h2>
          <p className="px-4 text-justify text-sm font-light text-stone-600 md:text-lg">
            Ik-Holcán's journey has been punctuated by numerous milestones. Our
            ventures have garnered prestigious awards in entrepreneurship, and
            our contributions to the field of bioinformatics have earned
            recognition through publications and presentations at esteemed
            conferences on bioinformatics and climate change.
          </p>

          <h2 className="mt-4 text-center text-2xl">
            Promoting Scientific Awareness: Embracing Patents and Knowledge
            Sharing
          </h2>
          <p className="px-4 text-justify text-sm font-light text-stone-600 md:text-lg">
            As fervent advocates of scientific dissemination, we actively engage
            in patenting our discoveries. By securing intellectual property
            rights, we strive to foster an environment of knowledge-sharing,
            encouraging collaboration for the greater good of society.
          </p>

          <h2 className="mt-4 text-center text-2xl">
            Sustainability and Environmental Harmony
          </h2>
          <p className="px-4 text-justify text-sm font-light text-stone-600 md:text-lg">
            Ik-Holcán is committed to sustainability. Our dedication to
            environmental stewardship drives us to adopt eco-friendly processes
            and seek innovative solutions to minimize the ecological impact of
            our endeavors. We firmly believe that it is possible to enhance
            lives while reducing our ecological footprint through
            knowledge-driven initiatives.
          </p>

          <h2 className="mt-4 text-center text-2xl">
            Empowering a Better Future: A Multidisciplinary Pursuit
          </h2>
          <p className="px-4 text-justify text-sm font-light text-stone-600 md:text-lg">
            We strongly believe that progress thrives in a multidisciplinary
            environment. At Ik-Holcán, our team of scientific experts
            collaborates across diverse fields, nurturing a culture of
            cross-disciplinary exploration. By promoting an integrated approach
            to research, we envision a future where improved well-being and
            reduced environmental impact coexist harmoniously.
          </p>
        </motion.div>
      </div>

      <section className="relative isolate mx-auto mb-24 mt-24 flex flex-col justify-center overflow-hidden pb-24 text-center shadow-xl">
        <div className="absolute inset-y-0 -z-10 h-full w-[100%] bg-[radial-gradient(circle_at_center_left,_var(--tw-gradient-stops))] from-stone-50 via-stone-100 to-stone-300"></div>

        <div className="container mx-auto px-4">
          <h1 className="font-display my-24 text-6xl tracking-wide text-stone-800">
            Our values
          </h1>

          <div className="mb-24 flex flex-wrap justify-center gap-24 text-center">
            <div className="flex w-96 flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  className="sepia-[.35]"
                  src="assets/images/honestidad.svg"
                  width={150}
                  height={150}
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h1 className="font-display-serif mb-4 mt-4 text-4xl tracking-wide">
                  Honesty
                </h1>
                <p className="text-md text-center leading-tight text-stone-500">
                  We uphold the highest standards of integrity and transparency
                  in all our endeavors, fostering trust among our stakeholders.
                </p>
              </motion.div>
            </div>
            <div className="flex w-96 flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Image
                  className="sepia-[.35]"
                  src="assets/images/responsabilidad.svg"
                  width={150}
                  height={150}
                  alt=""
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h1 className="font-display-serif mb-4 mt-4 text-4xl tracking-wide">
                  Responsibility
                </h1>
                <p className="text-md text-center leading-tight text-stone-500">
                  We take ownership of our actions and decisions, ensuring
                  accountability for the impact of our work on individuals and
                  the environment.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-24 text-center">
            <div className="flex w-96 flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  className="sepia-[.35]"
                  src="assets/images/etica.svg"
                  width={150}
                  height={150}
                  alt=""
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h1 className="font-display-serif mb-4 mt-4 text-4xl tracking-wide">
                  Ethics
                </h1>
                <p className="text-md text-center leading-tight text-stone-500">
                  We are driven by a deep commitment to contribute positively to
                  society, striving to improve lives through our plant-based
                  products and services. Our conduct is grounded in ethical
                  principles, promoting fair and principled practices throughout
                  our operations.
                </p>
              </motion.div>
            </div>
            <div className="flex w-96 flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Image
                  className="sepia-[.35]"
                  src="assets/images/integridad.svg"
                  width={150}
                  height={150}
                  alt=""
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h1 className="font-display-serif mb-4 mt-4 text-4xl tracking-wide">
                  Integrity
                </h1>
                <p className="text-md text-center leading-tight text-stone-500">
                  We adhere to strong moral principles, safeguarding the
                  authenticity and reliability of our research and
                  communications.
                </p>
              </motion.div>
            </div>
            <div className="flex w-96 flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Image
                  className="sepia-[.35]"
                  src="assets/images/solidaridad.svg"
                  width={150}
                  height={150}
                  alt=""
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h1 className="font-display-serif mb-4 mt-4 text-4xl tracking-wide">
                  Solidarity
                </h1>
                <p className="text-md text-center leading-tight text-stone-500">
                  Collaboration is at the heart of our approach, fostering
                  partnerships that leverage collective expertise for greater
                  impact.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-12">
        <div className="container mx-auto">
          <h1 className="font-display mb-12 text-center text-6xl tracking-wide">
            Our Team
          </h1>
          <div className="flex flex-col gap-4">
            <p className="mb-4 text-xl">
              Ik-Holcán&apos;s team is a diverse and passionate group of experts
              who bring together a wide range of skills and knowledge. Comprised
              of scientists, researchers, bioinformaticians, herbalists, and
              professionals from various disciplines, the team is united by a
              shared vision to advance plant-based medicine through cutting-edge
              science and ethical practices.
            </p>

            <h4 className="font-bold">Expert Scientists</h4>
            <p>
              At the core of Ik-Holcán&apos;s team are dedicated and
              accomplished scientists with expertise in biotechnology,
              bioinformatics, computational biology, and drug discovery. They
              are driven by an insatiable curiosity to unlock the potential of
              plant-derived compounds and leverage the latest technological
              tools for their research.
            </p>

            <h4 className="font-bold">
              Herbalists and Traditional Knowledge Experts
            </h4>
            <p>
              Working in harmony with the scientific team are herbalists and
              traditional knowledge experts who contribute invaluable wisdom and
              understanding of centuries-old herbal remedies. Their insights
              help bridge the gap between traditional healing practices and
              modern research.
            </p>

            <h4 className="font-bold">
              Ethics and Sustainability Professionals
            </h4>
            <p>
              Ensuring that every step aligns with Ik-Holcán&apos;s values, the
              team includes professionals well-versed in ethics, sustainability,
              and responsible practices. They ensure that the company&apos;s
              contributions are not only effective but also aligned with a
              profound sense of responsibility towards society and the
              environment.
            </p>

            <h4 className="font-bold">Collaborators and Partners</h4>
            <p>
              Ik-Holcán&apos;s team also includes a network of collaborators and
              partners, including academic institutions, research organizations,
              and industry experts. These collaborations foster a
              multidisciplinary approach to research and enhance the collective
              impact of their efforts.
            </p>

            <h4 className="font-bold">Passionate Communicators</h4>
            <p>
              To disseminate their findings and knowledge, the team includes
              skilled communicators who are adept at translating complex
              scientific concepts into accessible language. They engage in
              public outreach, publish research papers, and share patents to
              promote awareness and understanding of plant-based medicine.
            </p>

            <h4 className="font-bold">Inclusivity and Diversity Advocates</h4>
            <p>
              Embracing the values of respect and solidarity, the team is
              committed to promoting inclusivity and diversity within the
              organization and beyond. They recognize the value of diverse
              perspectives in driving innovation and addressing global
              challenges.
            </p>

            <p>
              As a cohesive unit, Ik-Holcán&apos;s team embodies the
              company&apos;s mission and values, working collaboratively to
              explore the vast potential of plant-based medicine, improve the
              quality of life for individuals, and contribute to a more
              sustainable future.
            </p>
          </div>

          {/* <div className="mt-12 flex flex-wrap justify-center gap-10">
            <div className="flex flex-col items-center">
              <div
                style={{
                  backgroundImage: `url("assets/images/equipo/rafa.png")`,
                  backgroundSize: "auto 100%",
                  backgroundPosition: "center",
                }}
                className="h-64 w-64 rounded-xl object-cover shadow-xl"
              ></div>

              <h1 className="font-display-serif my-4 text-4xl">
                Rafael Betanzos
              </h1>
              <div className="text-xs text-stone-600">
                <p>
                  Msc. Ciencias de la vida (Biomedicina y bionanotecnología).{" "}
                </p>
                <p>Área de experiencia: Bioinformática y diseño de fármacos.</p>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <section className="p-12">
        <div className="container mx-auto">
          <h1 className="font-display mb-12 text-center text-4xl tracking-wide md:text-6xl">
            Supervisory Board
          </h1>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">Independent Directors</h4>
            <p>
              Supervisory boards often include independent directors who are not
              involved in the day-to-day operations of the company. These
              directors bring diverse expertise and experience from various
              industries and can offer impartial advice and oversight.
            </p>

            <h4 className="font-bold">Industry Experts</h4>
            <p>
              Having individuals with extensive knowledge and experience in the
              biotechnology, pharmaceuticals, or related industries can be
              highly beneficial. Their expertise can help guide strategic
              decisions and ensure that the company remains competitive and
              aligned with industry trends.
            </p>

            <h4 className="font-bold">Scientists and Researchers</h4>
            <p>
              Given Ik-Holcán&apos;s focus on biotechnology and plant-based
              medicine, including scientists and researchers with expertise in
              these fields can provide invaluable insights into the
              company&apos;s research and development efforts.
            </p>

            <h4 className="font-bold">Ethics and Sustainability Specialists</h4>
            <p>
              Considering Ik-Holcán&apos;s commitment to ethical practices and
              sustainability, including experts in these areas on the
              supervisory board can ensure that the company&apos;s actions align
              with its values.
            </p>

            <h4 className="font-bold">Finance and Legal Professionals</h4>
            <p>
              It&apos;s essential to have individuals with financial and legal
              acumen on the supervisory board to oversee financial reporting,
              compliance, and risk management.
            </p>
          </div>
        </div>
      </section>

      <section className="p-12">
        <div className="container mx-auto">
          <h1 className="font-display mb-12 text-center text-6xl tracking-wide">
            History
          </h1>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">
              The History of Ik-Holcán: Blending Nature and Science for a
              Sustainable Future
            </h4>
            <p>
              Ik-Holcán&apos;s story began in 2016, shaped by a deep connection
              to nature and a desire to explore the potential of herbal
              remedies. Growing up in a household where natural remedies were
              embraced, the founder, driven by curiosity and a sense of
              responsibility, embarked on a journey that would transform into a
              remarkable biotechnological venture.
            </p>
            <p>
              In 2016, the founder&apos;s passion for cultivation and
              sustainable living led to the creation of the Agrobox, an
              innovative agronomic box designed for indoor crop cultivation.
              This early project laid the foundation for what was to come.
            </p>
            <p>
              As the founder delved into the world of biotechnology during their
              engineering studies, a groundbreaking realization occurred.
              Discovering the significance of secondary metabolites, they
              recognized the untapped potential of natural compounds for
              therapeutic applications in humans, animals, and agriculture while
              safeguarding the environment. From 2017 to 2019, fueled by this
              newfound insight, the founder designed a natural anti-inflammatory
              ointment that garnered positive feedback and proved beneficial to
              many.
            </p>
            <p>
              Their journey of discovery continued as they pursued a
              master&apos;s degree, deepening their understanding of metabolites
              and their functions. This period fueled their determination to
              identify novel natural compounds that could serve as the basis for
              eco-friendly pharmaceuticals.
            </p>
            <p>
              With an unwavering commitment to knowledge expansion, the founder
              is currently pursuing a Ph.D. in computer-aided drug discovery,
              refining their expertise in the quest for groundbreaking
              therapeutic solutions.
            </p>
            <p>
              Throughout the journey, the founder&apos;s vision of a sustainable
              and impactful enterprise persisted. Ik-Holcán&apos;s mission
              revolves around seeking compounds that benefit humanity and the
              environment, focusing on medicines and agricultural products. A
              profound desire to minimize environmental impact led to a
              conscious choice of sourcing organic raw materials and
              implementing waste reduction measures.
            </p>
            <p>
              Collaboration became a cornerstone of Ik-Holcán&apos;s growth. The
              company formed research agreements with prestigious institutions,
              such as the CIAD in Mexico and the Argentinean Association of
              Bioinformatics and Computational Biology, enhancing the exchange
              of knowledge and expertise.
            </p>
            <p>
              As the sole founder, the visionary leader envisions Ik-Holcán
              transcending borders and becoming a global enterprise. By merging
              nature-inspired remedies with cutting-edge science, Ik-Holcán
              aspires to address global health and environmental challenges
              while cultivating a sustainable future for all.
            </p>
            <p>
              Ik-Holcán&apos;s journey exemplifies the power of combining
              traditional wisdom with modern advancements, fostering a company
              that embraces nature&apos;s potential, scientific rigor, and a
              profound sense of responsibility for the well-being of people and
              the planet. The future holds the promise of a flourishing global
              enterprise that reshapes healthcare, agriculture, and
              environmental stewardship for generations to come.
            </p>
          </div>
        </div>
      </section>

      <section className="p-12">
        <div className="container mx-auto">
          <h1 className="font-display mb-4 text-center text-4xl tracking-wide md:text-6xl">
            Sustainability
          </h1>
          <h1 className="font-display mb-12 text-center text-4xl tracking-wide">
            Our approach
          </h1>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">
              Sustainability Approach: Embracing Nature, Empowering Change
            </h4>

            <ul className="flex list-decimal flex-col gap-2">
              <li>
                Nature-Inspired Solutions: Our journey began with a profound
                appreciation for nature&apos;s wisdom. We seek to harness the
                power of plant-based remedies and sustainable agricultural
                practices, guided by the belief that nature provides us with
                invaluable resources for healing and nourishment.
              </li>
              <li>
                Eco-Friendly Products: Every product we develop undergoes
                rigorous assessment to ensure it aligns with our sustainability
                principles. From sourcing organic and ethically cultivated raw
                materials to employing eco-friendly production methods, we
                prioritize minimizing our ecological footprint.
              </li>
              <li>
                Waste Reduction: Conscious waste management is a key pillar of
                our sustainability efforts. We implement innovative measures to
                reduce waste generation, striving for a circular approach that
                maximizes resource efficiency and minimizes environmental
                impact.
              </li>
              <li>
                Green Energy: We actively seek renewable energy sources to power
                our facilities and operations. Embracing solar, wind, and other
                green energy options, we reduce our reliance on non-renewable
                resources and lower our carbon emissions.
              </li>
              <li>
                Biodiversity Conservation: We are staunch advocates for
                biodiversity preservation. As we explore the vast potential of
                herbal remedies, we support sustainable harvesting practices and
                engage in projects that protect endangered plant species and
                their ecosystems.
              </li>
              <li>
                Ethical Partnerships: Our collaborations and partnerships extend
                beyond scientific exploration. We seek alliances with
                organizations and suppliers that share our commitment to
                sustainability and ethical practices, fostering a collective
                effort towards positive change.
              </li>
              <li>
                Scientific Research for Sustainability: We actively invest in
                research initiatives that promote sustainable agriculture,
                conservation, and environmental protection. By integrating
                scientific advancements with traditional knowledge, we drive
                innovation that benefits both people and the planet.
              </li>
              <li>
                Public Awareness: We consider education and public awareness
                essential in creating a more sustainable world. Through public
                outreach and educational programs, we empower individuals with
                knowledge about sustainable living and the impact of their
                choices.
              </li>
              <li>
                Continuous Improvement: Sustainability is a journey, and we
                understand the need for continuous improvement. We regularly
                assess and refine our practices, seeking innovative solutions
                that further enhance our environmental and social contributions.
              </li>
              <li>
                Advocacy for Global Impact: Beyond our immediate sphere of
                influence, we strive to be agents of change on a global scale.
                By advocating for sustainable practices in the biotechnology and
                pharmaceutical industries, we aim to inspire collective action
                towards a more sustainable future.
              </li>
            </ul>
            <p>
              Our sustainability approach at Ik-Holcán is a testament to our
              dedication to preserving the beauty and richness of nature while
              advancing biotechnological solutions for the benefit of all. We
              envision a world where sustainability is not just a commitment but
              a way of life, and we work tirelessly to turn that vision into a
              tangible reality. Together, we can create a harmonious coexistence
              between humanity and the environment, empowering positive change
              for generations to come.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
