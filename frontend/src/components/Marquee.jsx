import { useLanguage } from "@/context/LanguageContext";

export const Marquee = () => {
  const { t } = useLanguage();
  const text = t.marquee;

  return (
    <div
      data-testid="editorial-marquee"
      className="overflow-hidden border-y border-[#E5E2DC] bg-[#111215] py-5"
    >
      <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-0">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="whitespace-nowrap font-serif text-2xl italic tracking-tight text-[#FAF8F5]/90 lg:text-4xl"
          >
            {text.repeat(3)}
          </span>
        ))}
      </div>
    </div>
  );
};
