import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const TEAM = [
  {
    name: "Jordi",
    role: { ca: "Chef Executiu", es: "Chef Ejecutivo" },
    img: "https://images.pexels.com/photos/36430160/pexels-photo-36430160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    shift: "lg:mt-0",
  },
  {
    name: "Aleix",
    role: { ca: "Cap de Cuina", es: "Jefe de Cocina" },
    img: "https://images.unsplash.com/photo-1574966740637-12c84035a4f2?crop=entropy&cs=srgb&fm=jpg&q=85",
    shift: "lg:mt-16",
  },
  {
    name: "Martí",
    role: { ca: "Sala i Servei", es: "Sala y Servicio" },
    img: "https://images.unsplash.com/photo-1574966740429-6158cb530208?crop=entropy&cs=srgb&fm=jpg&q=85",
    shift: "lg:mt-6",
  },
  {
    name: "Bernat",
    role: { ca: "Sommelier", es: "Sommelier" },
    img: "https://images.pexels.com/photos/4253298/pexels-photo-4253298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    shift: "lg:mt-24",
  },
];

export const Team = () => {
  const { t, lang } = useLanguage();

  return (
    <section
      id="equip"
      data-testid="team-section"
      className="border-b border-[#E5E2DC] bg-[#FAF8F5] px-6 py-32 lg:px-16 lg:py-48"
    >
      <div className="mx-auto max-w-[1680px]">
        <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-[#111215]/50">
          <span className="h-2 w-2 flex-shrink-0 bg-[#1D4ED8]" />
          {t.team.kicker}
        </p>
        <h2 className="mt-6 max-w-2xl font-serif text-6xl leading-[0.94] tracking-[-0.02em] text-[#111215] sm:text-7xl lg:text-8xl">
          {t.team.title}
        </h2>

        <blockquote
          className="mt-16 max-w-2xl font-serif text-3xl italic leading-snug text-[#111215]/80 lg:text-4xl"
          data-testid="team-quote"
        >
          <span className="text-[#1D4ED8]">“</span>{t.team.quote}<span className="text-[#1D4ED8]">”</span>
        </blockquote>

        <div className="mt-28 grid grid-cols-2 gap-x-6 gap-y-16 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group ${member.shift}`}
              data-testid={`team-member-${member.name.toLowerCase()}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <p className="mt-5 font-serif text-xl text-[#111215]">{member.name}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#111215]/50">
                {member.role[lang]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
