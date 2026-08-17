import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const lineVariants = {
  hidden: { y: "110%" },
  visible: (i) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const Hero = ({ onReserve }) => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      id="hero"
      ref={ref}
      data-testid="hero-section"
      className="relative flex min-h-[100vh] items-center overflow-hidden bg-[#FAF8F5] pt-24"
    >
      <img
        src="/brand/isotype.png"
        alt=""
        className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] opacity-[0.05] lg:h-[680px] lg:w-[680px]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-4 lg:px-10">
        <div className="flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-[#1D4ED8]"
            data-testid="hero-kicker"
          >
            {t.hero.kicker}
          </motion.p>

          <h1 className="font-serif text-[13vw] leading-[0.98] tracking-tight text-[#111215] sm:text-6xl lg:text-[5.2vw]">
            {t.hero.lines.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  custom={i}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  className="block"
                  data-testid={`hero-line-${i}`}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-8 max-w-md text-base text-[#111215]/70 lg:text-lg"
            data-testid="hero-subtitle"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.7 }}
            className="mt-10 flex items-center gap-6"
          >
            <button
              data-testid="hero-reserve-button"
              onClick={onReserve}
              className="rounded-full bg-[#1D4ED8] px-8 py-4 font-sans text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              {t.hero.cta}
            </button>
            <button
              data-testid="hero-scroll-hint"
              onClick={() => document.getElementById("filosofia")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#111215]/60 hover:text-[#1D4ED8]"
            >
              {t.hero.scroll}
              <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
                <ArrowDown className="h-3.5 w-3.5" />
              </motion.span>
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative aspect-[4/5] w-full overflow-hidden border border-[#E5E2DC]"
          data-testid="hero-dish-frame"
        >
          <motion.img
            src="https://static.prod-images.emergentagent.com/jobs/a5fc37c4-a0d0-48b6-893e-aba5ac21f818/images/208185c59e9198cf65bc3ef7727bb7feff32999d9e8ffc003a37c3cc38343317.jpeg"
            alt="Plat signatura Casa Güell"
            style={{ y: imgY, scale: imgScale }}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-4 left-4 rounded-full bg-[#FAF8F5]/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[#111215]">
            Fricandó amb Moixernons
          </div>
        </motion.div>
      </div>
    </section>
  );
};
