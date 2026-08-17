import { Wheat, Milk, Egg, Fish, Nut, Shell, FlaskConical, Droplet } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ICONS = {
  F: Nut,
  G: Wheat,
  H: Egg,
  L: Milk,
  M: Shell,
  MZ: Droplet,
  P: Fish,
  S: FlaskConical,
};

export const AllergenBadge = ({ code }) => {
  const { t } = useLanguage();
  const Icon = ICONS[code] || Nut;
  const label = t.menu.allergens[code] || code;

  return (
    <span
      data-testid={`allergen-badge-${code.toLowerCase()}`}
      title={label}
      className="group relative inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#E5E2DC] bg-[#FAF8F5] text-[#111215]/60 transition-colors hover:border-[#1D4ED8] hover:text-[#1D4ED8]"
    >
      <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-sm bg-[#111215] px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-[#FAF8F5] opacity-0 transition-opacity group-hover:opacity-100">
        {label}
      </span>
    </span>
  );
};
