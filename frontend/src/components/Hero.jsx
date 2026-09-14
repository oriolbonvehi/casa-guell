import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

// Fondo de vídeos 9:16. Se irán turnando conforme cada uno acaba.
const VIDEOS = ["/videos/v1.mp4", "/videos/v2.mp4", "/videos/v3.mp4"];

const VideoSlot = ({ start, step }) => {
  const [idx, setIdx] = useState(start % VIDEOS.length);
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (v) {
      v.currentTime = 0;
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    }
  }, [idx]);

  return (
    <video
      key={idx}
      ref={ref}
      src={VIDEOS[idx]}
      autoPlay
      muted
      playsInline
      preload="auto"
      onEnded={() => setIdx((i) => (i + step) % VIDEOS.length)}
      className="h-full w-full object-cover"
      data-testid={`hero-video-slot-${start}`}
    />
  );
};

export const Hero = ({ onReserve }) => {
  const { t } = useLanguage();

  const goToCarta = () =>
    document.getElementById("carta")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-[#0B0B0C]"
    >
      {/* Video wall — 3 columns on desktop */}
      <div className="absolute inset-0 hidden md:grid md:grid-cols-3">
        <div className="relative overflow-hidden border-r border-black/40">
          <VideoSlot start={0} step={3} />
        </div>
        <div className="relative overflow-hidden border-r border-black/40">
          <VideoSlot start={1} step={3} />
        </div>
        <div className="relative overflow-hidden">
          <VideoSlot start={2} step={3} />
        </div>
      </div>

      {/* Video wall — single column on mobile */}
      <div className="absolute inset-0 md:hidden">
        <VideoSlot start={0} step={1} />
      </div>

      {/* Legibility overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      <div className="absolute inset-0 bg-black/25" />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <motion.img
          src="/brand/logo_hero.png"
          alt="Casa Güell"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-[86vw] max-w-[720px] drop-shadow-[0_6px_30px_rgba(0,0,0,0.45)]"
          data-testid="hero-logo"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 font-serif text-xl italic tracking-tight text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.6)] sm:text-2xl lg:text-3xl"
          data-testid="hero-phrase"
        >
          {t.hero.phrase}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-11 flex flex-col items-center gap-4 sm:flex-row sm:gap-5"
        >
          <button
            data-testid="hero-reserve-button"
            onClick={onReserve}
            className="w-full rounded-full bg-[#1D4ED8] px-10 py-4 font-sans text-sm font-medium tracking-wide text-white transition-transform hover:scale-[1.04] active:scale-[0.98] sm:w-auto"
          >
            {t.hero.reserve}
          </button>
          <button
            data-testid="hero-carta-button"
            onClick={goToCarta}
            className="w-full rounded-full border border-white/70 bg-white/5 px-10 py-4 font-sans text-sm font-medium tracking-wide text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#0B0B0C] sm:w-auto"
          >
            {t.hero.carta}
          </button>
        </motion.div>
      </div>
    </section>
  );
};
