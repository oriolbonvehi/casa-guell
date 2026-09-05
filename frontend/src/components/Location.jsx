import { motion } from "framer-motion";
import { MapPin, Phone, Instagram, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT } from "@/data/content";

export const Location = () => {
  const { t } = useLanguage();

  return (
    <section
      id="ubicacio"
      data-testid="location-section"
      className="border-b border-[#E5E2DC] bg-[#FAF8F5] px-6 py-32 lg:px-16 lg:py-48"
    >
      <div className="mx-auto max-w-[1680px]">
        <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-[#111215]/50">
          <span className="h-2 w-2 flex-shrink-0 bg-[#1D4ED8]" />
          {t.location.kicker}
        </p>
        <h2 className="mt-6 max-w-2xl font-serif text-6xl leading-[0.94] tracking-[-0.02em] text-[#111215] sm:text-7xl lg:text-8xl">
          {t.location.title}
        </h2>

        <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="space-y-10">
              <div className="flex gap-5">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-[#111215]/40" strokeWidth={1.5} />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#111215]/40">{t.location.addressLabel}</p>
                  <p className="mt-2 text-lg text-[#111215]">{t.location.address}</p>
                  <a
                    data-testid="google-maps-link"
                    href={CONTACT.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block font-mono text-xs uppercase tracking-wide text-[#1D4ED8]"
                  >
                    {t.location.mapLink} →
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <Clock className="mt-1 h-4 w-4 flex-shrink-0 text-[#111215]/40" strokeWidth={1.5} />
                <div className="w-full">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#111215]/40">{t.location.hoursLabel}</p>
                  <div className="mt-3 space-y-2" data-testid="opening-hours-grid">
                    {t.location.hours.map((h, i) => (
                      <div key={i} className="flex justify-between border-t border-[#E5E2DC] py-2 text-sm first:border-t-0">
                        <span className="text-[#111215]/70">{h.days}</span>
                        <span className="font-mono text-[#111215]">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-5">
                <Phone className="mt-1 h-4 w-4 flex-shrink-0 text-[#111215]/40" strokeWidth={1.5} />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#111215]/40">{t.location.phoneLabel}</p>
                  <a
                    data-testid="phone-link"
                    href={CONTACT.phoneHref}
                    className="mt-2 block text-lg text-[#111215] hover:text-[#1D4ED8]"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <Instagram className="mt-1 h-4 w-4 flex-shrink-0 text-[#111215]/40" strokeWidth={1.5} />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#111215]/40">{t.location.followLabel}</p>
                  <div className="mt-2 flex gap-5">
                    <a
                      data-testid="instagram-link"
                      href={CONTACT.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-[#111215] hover:text-[#1D4ED8]"
                    >
                      Instagram
                    </a>
                    <a
                      data-testid="tiktok-link"
                      href={CONTACT.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-[#111215] hover:text-[#1D4ED8]"
                    >
                      TikTok
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[440px] lg:col-span-6 lg:col-start-7 lg:mt-16 lg:min-h-full"
          >
            <iframe
              data-testid="location-map-embed"
              title="Casa Güell Map"
              className="absolute inset-0 h-full w-full grayscale contrast-125"
              loading="lazy"
              src="https://www.google.com/maps?q=Carrer+de+Castella+1+Barcelona&output=embed"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
