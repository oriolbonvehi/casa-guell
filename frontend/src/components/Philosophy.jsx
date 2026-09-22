import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export const Philosophy = () => {
  const { t } = useLanguage();

  return (
    <section
      id="filosofia"
      data-testid="philosophy-section"
      className="border-b border-[#E5E2DC] bg-[#FAF8F5] px-6 py-32 lg:px-16 lg:py-48"
    >
      <div className="mx-auto max-w-[1680px]">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-[#111215]/50"
        >
          <span className="h-2 w-2 flex-shrink-0 bg-[#1D4ED8]" />
          {t.philosophy.kicker}
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-6 max-w-3xl font-serif text-6xl leading-[0.94] tracking-[-0.02em] text-[#111215] sm:text-7xl lg:text-8xl"
          data-testid="philosophy-title"
        >
          {t.philosophy.title}
        </motion.h2>

        <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-7">
            {t.philosophy.chapters.map((ch, i) => (
              <motion.div
                key={ch.n}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-[auto_1fr] gap-8 border-t border-[#E5E2DC] py-12"
                data-testid={`manifesto-chapter-${ch.n}`}
              >
                <span className="font-mono text-4xl leading-none text-[#1D4ED8] lg:text-5xl">{ch.n}</span>
                <div>
                  <h3 className="font-serif text-3xl text-[#111215] lg:text-4xl">{ch.title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-[#111215]/60">{ch.text}</p>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-[#E5E2DC]" />

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-16 max-w-2xl font-serif text-3xl italic leading-tight tracking-tight text-[#111215] lg:text-4xl"
              data-testid="philosophy-tagline"
            >
              {t.philosophy.tagline}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 lg:col-start-9 lg:mt-24"
          >
            <div className="relative aspect-[4/5]">
              <img
                src="/brand/chef_jordi.webp"
                alt="Jordi, chef i propietari de Casa Güell"
                className="h-full w-full object-cover object-top grayscale transition-[filter] duration-700 hover:grayscale-0"
                data-testid="chef-jordi-image"
              />
            </div>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#111215]/50">
              {t.philosophy.chefName}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
