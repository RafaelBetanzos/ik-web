import { motion } from "framer-motion";

interface HeroProps {
  imgUrl: string;
  title: string;
  body: string;
  textColor: string;
  borderColor: string;
  seeMorePath: string;
}

export default function Hero(props: HeroProps) {
  return (
    <div className="lg:h-hero container relative mx-auto h-auto">
      <motion.div
        style={{
          backgroundImage: `url("${props.imgUrl}")`,
        }}
        initial={{ backgroundSize: "150%", opacity: 0.2 }}
        whileInView={{ backgroundSize: "100%", opacity: 1 }}
        transition={{ duration: 15 }}
        className="absolute mt-16 h-full w-full bg-cover bg-center bg-no-repeat"
      ></motion.div>
      <motion.div
        className="lg:absolute"
        initial={{ opacity: 0, x: "-20%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1
          className={`font-display mt-8 inline-block w-full ${props.textColor} bg-stone-800/60 p-8 text-6xl shadow-2xl backdrop-blur-sm sm:ml-8 sm:w-auto`}
        >
          {props.title}
        </h1>
      </motion.div>
      <motion.div
        className={`bottom-0 right-0  w-full rounded-sm border-l-2 ${props.borderColor} bg-stone-100 bg-opacity-80 p-12 shadow-xl backdrop-blur-sm backdrop-brightness-150 sm:p-16 lg:absolute lg:w-2/3`}
        initial={{ opacity: 0, y: "50%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-md leading-relaxed text-stone-700 sm:text-lg">
          {props.body}
        </p>
        <div className="text-right">
          <a
            href={props.seeMorePath}
            className="mt-4 flex items-center justify-end gap-4 text-2xl opacity-70"
          >
            <span className="mt-2">See more</span>
            <span aria-hidden="true" className="align-middle text-6xl">
              {"->"}
            </span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
