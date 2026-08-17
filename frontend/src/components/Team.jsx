import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const TEAM = [
  {
    name: "Jordi",
    role: { ca: "Chef Executiu", es: "Chef Ejecutivo" },
    img: "https://images.pexels.com/photos/36430160/pexels-photo-36430160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Aleix",
    role: { ca: "Cap de Cuina", es: "Jefe de Cocina" },
    img: "https://images.unsplash.com/photo-1574966740637-12c84035a4f2?crop=entropy&cs=srgb&fm=jpg&q=85",
  },
  {
    name: "Martí",
    role: { ca: "Sala i Servei", es: "Sala y Servicio" },
    img: "https://images.unsplash.com/photo-1574966740429-6158cb530208?crop=entropy&cs=srgb&fm=jpg&q=85",
  },
  {
    name: "Bernat",
    role: { ca: "Sommelier", es: "Sommelier" },
    img: "https://images.pexels.com/photos/4253298/pexels-photo-4253298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export const Team = () => {
  const { t, lang } = useLanguage();

  return (
    <section
      id="equip"
      data-testid="team-section"
      className="border-b border-[#E5E2DC] bg-[#FAF8F5] px-6 py-24 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px]">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#1D4ED8]">{t.team.kicker}</p>
        <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-[#111215] sm:text-5xl lg:text-6xl">
          {t.team.title}
        </h2>

        <blockquote
          className="mt-10 max-w-2xl border-l-2 border-[#1D4ED8] pl-6 font-serif text-2xl italic leading-snug text-[#111215]/80 lg:text-3xl"
          data-testid="team-quote"
        >
          “{t.team.quote}”
        </blockquote>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative aspect-[3/4] overflow-hidden border border-[#E5E2DC]"
              data-testid={`team-member-${member.name.toLowerCase()}`}
            >
              <img
                src={member.img}
                alt={member.name}
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#111215]/90 to-transparent p-4">
                <p className="font-serif text-lg text-[#FAF8F5]">{member.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#FAF8F5]/70">
                  {member.role[lang]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
