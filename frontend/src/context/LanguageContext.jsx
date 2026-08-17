import { createContext, useContext, useState, useMemo } from "react";
import { content } from "@/data/content";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("ca");

  const value = useMemo(
    () => ({
      lang,
      toggleLang: () => setLang((l) => (l === "ca" ? "es" : "ca")),
      t: content[lang],
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
