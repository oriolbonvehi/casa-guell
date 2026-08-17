import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const NAV_KEYS = [
  { key: "cuina", id: "filosofia" },
  { key: "carta", id: "carta" },
  { key: "vins", id: "vins" },
  { key: "equip", id: "equip" },
  { key: "ubicacio", id: "ubicacio" },
];

export const Header = ({ onReserve, onNavVins }) => {
  const { t, lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);
    if (id === "vins") onNavVins?.();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-testid="site-header"
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#E5E2DC] bg-[#FAF8F5]/90 backdrop-blur-md"
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-10">
        <button
          data-testid="logo-home-button"
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-3"
        >
          <img src="/brand/isotype.png" alt="Casa Güell" className="h-11 w-11 flex-shrink-0" />
          <div className="flex flex-col items-start justify-center leading-none">
            <p className="font-serif text-2xl tracking-tight">
              <span className="text-[#1D4ED8]">Casa</span>
              <span className="text-[#111215]">Güell</span>
            </p>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#111215]/55">
              {t.locationTag}
            </span>
          </div>
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_KEYS.map((n) => (
            <button
              key={n.key}
              data-testid={`nav-link-${n.key}`}
              onClick={() => scrollTo(n.id)}
              className="relative font-sans text-sm tracking-wide text-[#111215]/80 transition-colors hover:text-[#1D4ED8] after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-[#1D4ED8] after:transition-all hover:after:w-full"
            >
              {t.nav[n.key]}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            data-testid="language-toggle"
            onClick={toggleLang}
            className="hidden items-center gap-1.5 rounded-full border border-[#E5E2DC] px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-[#111215]/80 transition-colors hover:border-[#1D4ED8] hover:text-[#1D4ED8] sm:flex"
          >
            <Globe className="h-3.5 w-3.5" strokeWidth={1.75} />
            <span className={lang === "ca" ? "text-[#1D4ED8]" : ""}>CA</span>
            <span className="text-[#111215]/30">/</span>
            <span className={lang === "es" ? "text-[#1D4ED8]" : ""}>ES</span>
          </button>

          <button
            data-testid="header-reserve-button"
            onClick={onReserve}
            className="hidden rounded-full bg-[#1D4ED8] px-5 py-2.5 font-sans text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98] md:inline-flex"
          >
            {t.reserveBtn}
          </button>

          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center border border-[#E5E2DC] lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[#E5E2DC] bg-[#FAF8F5] lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_KEYS.map((n) => (
                <button
                  key={n.key}
                  data-testid={`mobile-nav-link-${n.key}`}
                  onClick={() => scrollTo(n.id)}
                  className="py-3 text-left font-serif text-xl text-[#111215] border-b border-[#E5E2DC] last:border-none"
                >
                  {t.nav[n.key]}
                </button>
              ))}
              <button
                data-testid="mobile-language-toggle"
                onClick={toggleLang}
                className="mt-4 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#111215]/70"
              >
                <Globe className="h-3.5 w-3.5" />
                <span className={lang === "ca" ? "text-[#1D4ED8]" : ""}>CA</span>
                <span>/</span>
                <span className={lang === "es" ? "text-[#1D4ED8]" : ""}>ES</span>
              </button>
              <button
                data-testid="mobile-reserve-button"
                onClick={() => {
                  setOpen(false);
                  onReserve();
                }}
                className="mt-4 rounded-full bg-[#1D4ED8] px-5 py-3 text-center font-sans text-sm font-medium text-white"
              >
                {t.reserveBtn}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
