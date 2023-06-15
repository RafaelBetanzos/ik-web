"use client";
import Image from "next/image";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    setScrollPos(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onPageLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  if (loading) {
    return (
      <main>
        <div className="background-animate flex h-screen w-full items-center justify-center bg-stone-700 bg-gradient-to-r from-stone-800 via-stone-800 to-stone-800">
          <img
            src="/assets/images/logo.svg"
            alt=""
            className="w-60 animate-pulse invert"
          />
        </div>
      </main>
    );
  }

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
            <video
              className="relative -z-10 h-full w-full object-cover brightness-[.80]"
              autoPlay
              muted
              loop
              src={"/assets/videos/main.mp4"}
            />
          </div>
          <div className="mx-auto max-w-6xl py-[35vh] lg:py-[60vh]">
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
              <h1 className="font-display text-xl font-bold tracking-widest text-stone-200 opacity-70 sm:text-4xl">
                IK-HOLCÁN
              </h1>
              <p className="font-display mt-12 text-7xl leading-tight text-amber-200">
                Hagamos algo grande juntos
              </p>
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
          La naturaleza es impresionante y observarla nos permite identificar un
          sin fin de beneficios que se encuentran a nuestro alcance.
        </p>

        <p className="px-4 text-sm font-light text-stone-600 md:text-lg">
          Ik-Holcán es una empresa constituida por un grupo de amigos con
          habilidades multidisciplinarias, unidos por la necesidad de crecer y
          combinar sus conocimientos para proponer soluciones útiles a los
          demás, soluciones que conjuguen con los valores de nuestra sociedad,
          procurando mantener un equilibrio del cuidado ambiental, la salud
          animal y la humana.
        </p>
      </div>

      <div className="relative overflow-hidden border-y-4 border-green-900  bg-gradient-to-r from-lime-900 to-lime-900">
        <div
          style={{
            backgroundImage: `url("assets/images/air.svg")`,
            backgroundSize: "auto 100%",
          }}
          className="absolute h-full w-full opacity-[.02] invert"
        ></div>
        <div className="relative z-10 flex items-center justify-center p-12 text-center text-white">
          <div className="">
            <h1 className="font-display mb-4 text-4xl uppercase tracking-widest text-amber-100">
              Misión
            </h1>
            <p className="mx-auto max-w-5xl text-stone-200">
              Procurar salud y bienestar, mediante el uso de productos
              naturales, seguros y eficaces, otorgando oportunidades de
              desarrollo a nuestros colaboradores, impactando positivamente a la
              comunidad y al medio ambiente.
            </p>
          </div>
        </div>
      </div>

      <div className="relative shadow-lg">
        <video
          className="absolute h-full w-full object-cover contrast-200"
          autoPlay
          muted
          loop
          src={"/assets/videos/tamarindo.mp4"}
        />
        <div className="relative h-full bg-gradient-to-b from-black/0 to-amber-900/50 p-12 lg:p-36">
          <div className="container mx-auto">
            <h1 className="font-display mt-12 inline bg-stone-800/60 text-3xl font-thin leading-snug text-amber-100 md:text-5xl">
              La medicina y la farmacia nacen del descubrimiento de las bondades
              presentes en algunas plantas.
            </h1>
            <p className="text-md mt-12 text-justify font-light text-white opacity-80 md:text-lg xl:w-3/4">
              Al día de hoy el ser humano puede manipular la materia a niveles
              atómicos, lo que lo ha llevado a realizar importantes avances en
              el cuidado de la salud. Sin embargo, en Ik-Holcán consideramos que
              en el tratamiento de enfermedades crónicas, degenerativas y cáncer
              deben ser tomadas en cuentas las terapias que permitan a los
              pacientes vivir mejor y en algún momento, prevenir cualquier
              evento adverso a la buena salud.
            </p>
            <p className="mt-12 text-justify text-lg font-medium text-white  opacity-80">
              Es aquí donde la medicina tradicional o herbolaria, debe ser
              estudiada para lograr descubrir en qué forma es efectiva y por qué
              lo es.
            </p>
          </div>
        </div>
      </div>

      <div className="min-h48 relative overflow-hidden border-y-4 border-green-950 bg-gradient-to-r from-lime-900 to-amber-950">
        <div
          style={{
            backgroundImage: `url("assets/images/air.svg")`,
            backgroundSize: "auto 100%",
          }}
          className="absolute h-full w-full opacity-[.03] invert"
        ></div>
        <div className="relative z-10 flex items-center justify-center p-12 text-center text-white">
          <div className="">
            <h1 className="font-display mb-4 text-4xl uppercase tracking-widest text-amber-100">
              Visión
            </h1>
            <p className="mx-auto max-w-5xl text-stone-200">
              Ser la empresa farmacéutica líder en la investigación y producción
              de fármacos naturales, validados por la cadena de trabajo del
              descubrimiento de fármacos tradicional, desde la teoría hasta las
              pruebas clínicas.
            </p>
          </div>
        </div>
      </div>

      <section className="relative isolate mx-auto flex flex-col justify-center overflow-hidden pb-24 text-center shadow-xl">
        {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-teal-400 to-yellow-200"></div>
        <div className="absolute inset-y-0 left-1/4 -z-10 mr-16 w-[100%] origin-bottom-left skew-x-[-30deg] bg-white bg-gradient-to-r from-amber-200 to-yellow-400 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div> */}
        <div className="origin-top-center absolute inset-y-0 left-1/4 -z-10 w-[10%] skew-x-[-30deg] bg-white bg-gradient-to-r from-blue-200 to-cyan-200 opacity-20 shadow-xl shadow-indigo-600/10  ring-indigo-50 blur-xl"></div>
        <div className="origin-top-center absolute inset-y-0 right-1/4 -z-10 w-[10%] skew-x-[30deg] bg-white bg-gradient-to-r from-blue-200 to-cyan-200 opacity-20 shadow-xl shadow-indigo-600/10 ring-indigo-50 blur-xl"></div>

        {/* <div className="absolute inset-y-0 right-1/4 -z-10 mr-16 w-[100%] origin-bottom-left skew-x-[30deg] bg-white bg-gradient-to-r from-blue-200 to-cyan-200 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div> */}

        <div className="absolute inset-y-0 -z-10 h-full w-[100%] bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-green-400 via-teal-400 to-yellow-200 opacity-20"></div>

        <div className="container mx-auto px-4">
          <h1 className="font-display my-24 text-6xl tracking-wide">
            Nuestros valores
          </h1>

          <div className="mb-24 flex flex-wrap justify-center gap-24 text-center">
            <div className="flex w-96 flex-col items-center">
              <Image
                className="sepia-[.35]"
                src="assets/images/honestidad.svg"
                width={150}
                height={150}
                alt=""
              />
              <h1 className="font-display-serif mb-4 mt-4 text-4xl tracking-wide">
                Honestidad
              </h1>
              <p className="text-justify text-sm text-stone-700">
                Siempre nos conducimos con honestidad hacia nuestros clientes,
                compañeros y amigos. La honestidad es un valor fundamental de
                nuestra empresa, la cual nos permite garantizar la calidad y
                seguridad en la elaboración de nuestros productos.
              </p>
            </div>
            <div className="flex w-96 flex-col items-center">
              <Image
                className="sepia-[.35]"
                src="assets/images/responsabilidad.svg"
                width={150}
                height={150}
                alt=""
              />
              <h1 className="font-display-serif mb-4 mt-4 text-4xl tracking-wide">
                Responsabilidad
              </h1>
              <p className="text-justify text-sm text-stone-600">
                Somos una empresa con gran sentido de responsabilidad hacia
                nuestros clientes. Siempre nos conducimos en el marco de la
                legalidad, los procedimientos de elaboración de nuestros
                productos son realizados por personal profesional, de gran
                calidad humana y conocimiento científico, la salud es un bien
                invaluable y nosotros la tratamos como tal.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-24 text-center">
            <div className="flex w-96 flex-col items-center">
              <Image
                className="sepia-[.35]"
                src="assets/images/etica.svg"
                width={150}
                height={150}
                alt=""
              />
              <h1 className="font-display-serif mb-4 mt-4 text-4xl tracking-wide">
                Ética
              </h1>
              <p className="text-justify text-sm text-stone-600">
                Como empresa nos desempeñamos aplicando todas las nomas,
                principios y valores que nos llevan al desarrollo favorable de
                nuestros productos y servicios, bajo el compromiso de mejorar la
                calidad de vida de quienes los consumen.
              </p>
            </div>
            <div className="flex w-96 flex-col items-center">
              <Image
                className="sepia-[.35]"
                src="assets/images/integridad.svg"
                width={150}
                height={150}
                alt=""
              />
              <h1 className="font-display-serif mb-4 mt-4 text-4xl tracking-wide">
                Integridad
              </h1>
              <p className="text-justify text-sm text-stone-600">
                En Ik-Holcán es fundamental la integridad profesional y personal
                ya que nos permite mantener vinculados los principios éticos de
                la honestidad, el respeto y la transparencia en lo que
                promocionamos.
              </p>
            </div>
            <div className="flex w-96 flex-col items-center">
              <Image
                className="sepia-[.35]"
                src="assets/images/solidaridad.svg"
                width={150}
                height={150}
                alt=""
              />
              <h1 className="font-display-serif mb-4 mt-4 text-4xl tracking-wide">
                Solidaridad
              </h1>
              <p className="text-justify text-sm text-stone-600">
                Nuestra mayor satisfacción es ser un grupo de colaboradores que
                además son amigos que buscan un fin en común, profesionales que
                utilizan su conocimiento en beneficio de nuestra sociedad y
                entienden que sólo lo lograrán si trabajan juntos y se apoyan
                unos a otros.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-24">
        <div className="container mx-auto">
          <h1 className="font-display mb-24 text-center text-6xl tracking-wide">
            Equipo
          </h1>

          <div className="flex flex-wrap justify-center gap-10">
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
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
