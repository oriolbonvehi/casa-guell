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
      className="border-b border-[#E5E2DC] bg-[#FAF8F5] px-6 py-24 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#1D4ED8]">{t.location.kicker}</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#111215] sm:text-5xl lg:text-6xl">
              {t.location.title}
            </h2>

            <div className="mt-12 space-y-8">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#1D4ED8]" strokeWidth={1.5} />
                <div>
                  <p className="text-xs uppercase tracking-wide text-[#111215]/50">{t.location.addressLabel}</p>
                  <p className="mt-1 text-lg text-[#111215]">{t.location.address}</p>
                  <a
                    data-testid="google-maps-link"
                    href={CONTACT.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block border-b border-[#1D4ED8] font-mono text-xs uppercase tracking-wide text-[#1D4ED8]"
                  >
                    {t.location.mapLink} →
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-[#1D4ED8]" strokeWidth={1.5} />
                <div className="w-full">
                  <p className="text-xs uppercase tracking-wide text-[#111215]/50">{t.location.hoursLabel}</p>
                  <div className="mt-2 space-y-1.5" data-testid="opening-hours-grid">
                    {t.location.hours.map((h, i) => (
                      <div key={i} className="flex justify-between border-b border-[#E5E2DC] py-1.5 text-sm">
                        <span className="text-[#111215]/70">{h.days}</span>
                        <span className="font-mono text-[#111215]">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-[#1D4ED8]" strokeWidth={1.5} />
                <div>
                  <p className="text-xs uppercase tracking-wide text-[#111215]/50">{t.location.phoneLabel}</p>
                  <a
                    data-testid="phone-link"
                    href={CONTACT.phoneHref}
                    className="mt-1 block text-lg text-[#111215] hover:text-[#1D4ED8]"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Instagram className="mt-1 h-5 w-5 flex-shrink-0 text-[#1D4ED8]" strokeWidth={1.5} />
                <div>
                  <p className="text-xs uppercase tracking-wide text-[#111215]/50">{t.location.followLabel}</p>
                  <div className="mt-1 flex gap-4">
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
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[420px] overflow-hidden border border-[#E5E2DC] lg:min-h-full"
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
