import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const GALLERY = [
  "/dishes/mercat2.webp",
  "/dishes/mercat3.webp",
  "https://images.unsplash.com/photo-1689590735625-760f8b2fa77a?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
];

export const MarketProduct = () => {
  const { t } = useLanguage();
  const m = t.market;

  return (
    <section
      id="mercat"
      data-testid="market-section"
      className="border-b border-[#E5E2DC] bg-[#FAF8F5] px-6 py-32 lg:px-16 lg:py-48"
    >
      <div className="mx-auto max-w-[1680px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Text column */}
          <div className="lg:col-span-5">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-[#111215]/50"
            >
              <span className="h-2 w-2 flex-shrink-0 bg-[#1D4ED8]" />
              {m.kicker}
            </motion.p>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-6 font-serif text-6xl leading-[0.94] tracking-[-0.02em] text-[#111215] sm:text-7xl lg:text-8xl"
              data-testid="market-title"
            >
              {m.title}
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-8 max-w-md text-sm leading-relaxed text-[#111215]/60 lg:text-base"
            >
              {m.text}
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#1D4ED8] px-6 py-3"
              data-testid="market-note"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white">{m.note}</span>
            </motion.div>
          </div>

          {/* Main image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7"
          >
            <div className="aspect-[4/5] overflow-hidden sm:aspect-[16/11]">
              <img
                src="/dishes/mercat.webp"
                alt="Peix i marisc del dia a Casa Güell"
                className="h-full w-full object-cover"
                data-testid="market-main-image"
              />
            </div>
          </motion.div>
        </div>

        {/* Gallery strip */}
        <div className="mt-10 grid grid-cols-3 gap-3 lg:mt-14 lg:gap-6">
          {GALLERY.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`overflow-hidden ${i === 1 ? "mt-0 lg:mt-10" : ""}`}
              data-testid={`market-gallery-${i}`}
            >
              <div className="aspect-square">
                <img
                  src={src}
                  alt="Producte de mercat"
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition-[filter] duration-700 hover:grayscale-0"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
