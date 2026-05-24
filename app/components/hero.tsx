import { motion } from "framer-motion";

interface HeroProps {
  imgUrl: string;
  title: string;
  body: string;
  textColor: string;
  borderColor: string;
  seeMorePath: string;
}

export default function Hero({ imgUrl, title, body, textColor, borderColor, seeMorePath }: HeroProps) {
  return (
    <div className="lg:h-hero container relative mx-auto h-auto min-h-[28rem]">

      {/* Background image */}
      <motion.div
        style={{ backgroundImage: `url("${imgUrl}")` }}
        initial={{ backgroundSize: "120%", opacity: 0 }}
        whileInView={{ backgroundSize: "100%", opacity: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0 mt-12 bg-cover bg-center bg-no-repeat brightness-[0.65]"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 mt-12 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" />

      {/* Title pill */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: "-15%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1
          className={`font-serif mt-8 inline-block ${textColor} bg-forest/75 backdrop-blur-sm px-8 py-5 text-5xl lg:text-6xl font-light tracking-wide sm:ml-8`}
        >
          {title}
        </h1>
      </motion.div>

      {/* Info card */}
      <motion.div
        className={`bottom-0 right-0 w-full lg:absolute lg:w-[58%] bg-cream/95 backdrop-blur-sm border-l-2 ${borderColor} shadow-2xl`}
        initial={{ opacity: 0, y: "40%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="p-8 sm:p-12">
          <p className="font-sans text-sm leading-[1.9] text-stone-600 md:text-base">
            {body}
          </p>
          <div className="mt-6 flex items-center justify-end gap-3">
            <div className="w-8 h-px bg-stone-400" />
            <a
              href={seeMorePath}
              className={`font-mono text-xs tracking-[0.2em] uppercase ${textColor.replace("text-", "text-")} hover:opacity-100 transition-opacity`}
              style={{ color: "inherit" }}
            >
              <span className="text-stone-500 hover:text-stone-800 transition-colors">
                Explore →
              </span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
