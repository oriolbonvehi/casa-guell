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
      className="border-b border-[#E5E2DC] bg-[#FAF8F5] px-6 py-24 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.55fr_0.45fr] lg:gap-10">
          <div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="font-mono text-xs uppercase tracking-[0.25em] text-[#1D4ED8]"
            >
              {t.philosophy.kicker}
            </motion.p>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-4 max-w-lg font-serif text-4xl leading-[1.05] text-[#111215] sm:text-5xl lg:text-6xl"
              data-testid="philosophy-title"
            >
              {t.philosophy.title}
            </motion.h2>

            <div className="mt-16 space-y-0">
              {t.philosophy.chapters.map((ch, i) => (
                <motion.div
                  key={ch.n}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: i * 0.1 }}
                  className="grid grid-cols-[auto_1fr] gap-6 border-t border-[#E5E2DC] py-8 first:border-t"
                  data-testid={`manifesto-chapter-${ch.n}`}
                >
                  <span className="font-mono text-sm text-[#1D4ED8]">{ch.n}</span>
                  <div>
                    <h3 className="font-serif text-2xl text-[#111215]">{ch.title}</h3>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-[#111215]/70">{ch.text}</p>
                  </div>
                </motion.div>
              ))}
              <div className="border-t border-[#E5E2DC]" />
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6">
              {t.philosophy.metrics.map((m, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: i * 0.08 }}
                  data-testid={`metric-badge-${i}`}
                >
                  <p className="font-mono text-3xl text-[#1D4ED8] lg:text-4xl">{m.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-[#111215]/60">{m.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative h-full lg:sticky lg:top-28"
          >
            <div className="relative aspect-[4/5] overflow-hidden border border-[#E5E2DC]">
              <img
                src="https://images.unsplash.com/photo-1574966740793-953ad374e8fe?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Chef Jordi a la cuina"
                className="h-full w-full object-cover grayscale transition-[filter] duration-700 hover:grayscale-0"
                data-testid="chef-jordi-image"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#111215]/85 to-transparent p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-[#FAF8F5]/90">
                  {t.philosophy.chefName}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
