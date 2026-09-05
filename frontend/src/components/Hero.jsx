import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const lineVariants = {
  hidden: { y: "112%" },
  visible: (i) => ({
    y: "0%",
    transition: { duration: 1.1, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const Hero = ({ onReserve }) => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      id="hero"
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-[100vh] overflow-hidden bg-[#FAF8F5] pb-24 pt-36 lg:pb-32 lg:pt-44"
    >
      <img
        src="/brand/isotype.png"
        alt=""
        className="pointer-events-none absolute -right-32 -top-32 h-[560px] w-[560px] opacity-[0.04] lg:h-[760px] lg:w-[760px]"
      />

      <div className="relative z-10 mx-auto max-w-[1680px] px-6 lg:px-16">
        <div className="max-w-full md:max-w-[64%] lg:max-w-[52%]">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-[#111215]/50"
            data-testid="hero-kicker"
          >
            <span className="h-2 w-2 flex-shrink-0 bg-[#1D4ED8]" />
            {t.hero.kicker}
          </motion.p>

          <h1 className="font-serif text-[15vw] leading-[0.92] tracking-[-0.03em] text-[#111215] md:text-[8.5vw] lg:text-[6.4vw]">
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
            transition={{ delay: 1, duration: 0.7 }}
            className="mt-10 max-w-sm text-sm leading-relaxed text-[#111215]/60 lg:text-base"
            data-testid="hero-subtitle"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="mt-14 flex items-center gap-8"
          >
            <button
              data-testid="hero-reserve-button"
              onClick={onReserve}
              className="rounded-full bg-[#1D4ED8] px-9 py-4 font-sans text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              {t.hero.cta}
            </button>
            <button
              data-testid="hero-scroll-hint"
              onClick={() => document.getElementById("filosofia")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-[#111215]/45 hover:text-[#1D4ED8]"
            >
              {t.hero.scroll}
              <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
                <ArrowDown className="h-3.5 w-3.5" />
              </motion.span>
            </button>
          </motion.div>
        </div>

        <div className="mt-20 md:hidden" data-testid="hero-dish-frame-mobile">
          <img
            src="https://static.prod-images.emergentagent.com/jobs/a5fc37c4-a0d0-48b6-893e-aba5ac21f818/images/208185c59e9198cf65bc3ef7727bb7feff32999d9e8ffc003a37c3cc38343317.jpeg"
            alt="Plat signatura Casa Güell"
            className="w-full object-cover"
          />
          <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-[#111215]/50">
            Fricandó amb Moixernons
          </p>
        </div>
      </div>

      <div
        className="absolute right-0 top-[16vh] hidden h-[68vh] w-[40vw] md:block lg:w-[36vw]"
        data-testid="hero-dish-frame"
      >
        <motion.img
          src="https://static.prod-images.emergentagent.com/jobs/a5fc37c4-a0d0-48b6-893e-aba5ac21f818/images/208185c59e9198cf65bc3ef7727bb7feff32999d9e8ffc003a37c3cc38343317.jpeg"
          alt="Plat signatura Casa Güell"
          style={{ y: imgY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-full w-full object-cover"
        />
        <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-[#111215]/50">
          Fricandó amb Moixernons
        </p>
      </div>
    </section>
  );
};
