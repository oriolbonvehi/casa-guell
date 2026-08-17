import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { menuItems } from "@/data/menuData";
import { wineGroups } from "@/data/wineData";
import { AllergenBadge } from "@/components/AllergenBadge";

const FOOD_TABS = ["picar", "guisats", "peix", "postres"];

export const MenuSection = ({ jumpToVins }) => {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState("picar");

  useEffect(() => {
    if (jumpToVins) setActiveTab("vins");
  }, [jumpToVins]);
  const [hoverItem, setHoverItem] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [wineTab, setWineTab] = useState("blancs");

  const isWine = activeTab === "vins";
  const items = menuItems.filter((m) => m.category === activeTab);

  return (
    <section
      id="carta"
      data-testid="menu-section"
      className={`px-6 py-24 transition-colors duration-500 lg:px-10 lg:py-32 ${
        isWine ? "bg-[#14161B]" : "bg-[#FAF8F5]"
      }`}
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className={`font-mono text-xs uppercase tracking-[0.25em] text-[#1D4ED8]`}>
              {t.menu.kicker}
            </p>
            <h2
              className={`mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl ${
                isWine ? "text-[#FAF8F5]" : "text-[#111215]"
              }`}
              data-testid="menu-title"
            >
              {t.menu.title}
            </h2>
            <p className={`mt-4 max-w-md text-base ${isWine ? "text-[#FAF8F5]/60" : "text-[#111215]/60"}`}>
              {t.menu.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-2" data-testid="menu-filter-tabs">
            {FOOD_TABS.map((k) => (
              <button
                key={k}
                data-testid={`menu-tab-${k}`}
                onClick={() => setActiveTab(k)}
                className={`rounded-full border px-4 py-2 font-sans text-sm transition-colors ${
                  activeTab === k
                    ? "border-[#1D4ED8] bg-[#1D4ED8] text-white"
                    : isWine
                    ? "border-white/15 text-white/70 hover:border-[#1D4ED8] hover:text-[#1D4ED8]"
                    : "border-[#E5E2DC] text-[#111215]/70 hover:border-[#1D4ED8] hover:text-[#1D4ED8]"
                }`}
              >
                {t.menu.tabs[k]}
              </button>
            ))}
            <button
              id="vins"
              data-testid="menu-tab-vins"
              onClick={() => setActiveTab("vins")}
              className={`rounded-full border px-4 py-2 font-sans text-sm transition-colors ${
                activeTab === "vins"
                  ? "border-[#1D4ED8] bg-[#1D4ED8] text-white"
                  : isWine
                  ? "border-white/15 text-white/70 hover:border-[#1D4ED8] hover:text-[#1D4ED8]"
                  : "border-[#E5E2DC] text-[#111215]/70 hover:border-[#1D4ED8] hover:text-[#1D4ED8]"
              }`}
            >
              {t.menu.tabs.vins}
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!isWine ? (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="mt-14 border-t border-[#E5E2DC]"
              data-testid="menu-items-list"
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  data-testid={`menu-item-${item.id}`}
                  onMouseMove={(e) =>
                    item.signature && (setMousePos({ x: e.clientX, y: e.clientY }), setHoverItem(item.id))
                  }
                  onMouseLeave={() => item.signature && setHoverItem(null)}
                  className="group flex flex-col gap-2 border-b border-[#E5E2DC] py-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-xl text-[#111215] sm:text-2xl">{item.name[lang]}</h3>
                      {item.signature && (
                        <span className="rounded-full bg-[#1D4ED8]/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#1D4ED8]">
                          {t.menu.hoverHint}
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 max-w-lg text-sm text-[#111215]/60">{item.desc[lang]}</p>
                    <div className="mt-3 flex gap-1.5">
                      {item.allergens.map((a) => (
                        <AllergenBadge key={a} code={a} />
                      ))}
                    </div>
                  </div>
                  <p className="font-mono text-lg text-[#1D4ED8] sm:text-right">{item.price} €</p>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="vins"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="mt-14"
              data-testid="wine-list-panel"
            >
              <div className="flex flex-wrap gap-2 border-b border-white/10 pb-8">
                {wineGroups.map((g) => (
                  <button
                    key={g.key}
                    data-testid={`wine-group-tab-${g.key}`}
                    onClick={() => setWineTab(g.key)}
                    className={`rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-wide transition-colors ${
                      wineTab === g.key
                        ? "border-[#1D4ED8] bg-[#1D4ED8] text-white"
                        : "border-white/15 text-white/60 hover:border-[#1D4ED8] hover:text-[#1D4ED8]"
                    }`}
                  >
                    {t.wine.groups[g.key]}
                  </button>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-1 gap-x-10 lg:grid-cols-2" data-testid="wine-items-list">
                {wineGroups
                  .find((g) => g.key === wineTab)
                  ?.wines.map((w, i) => (
                    <div
                      key={i}
                      data-testid={`wine-item-${wineTab}-${i}`}
                      className="flex items-start justify-between gap-6 border-b border-white/10 py-5"
                    >
                      <div>
                        <p className="font-serif text-lg text-[#FAF8F5]">{w.name}</p>
                        <p className="mt-1 text-xs text-[#FAF8F5]/50">
                          {w.region} · {w.grape}
                        </p>
                      </div>
                      <p className="whitespace-nowrap font-mono text-sm text-[#1D4ED8]">{w.price} €</p>
                    </div>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {hoverItem && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.2 }}
            style={{ left: mousePos.x + 24, top: mousePos.y - 130 }}
            className="pointer-events-none fixed z-[60] hidden h-44 w-44 overflow-hidden border-2 border-[#FAF8F5] shadow-2xl lg:block"
            data-testid="menu-hover-photo-card"
          >
            <img
              src={items.find((i) => i.id === hoverItem)?.image}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
