import { motion, AnimatePresence } from "framer-motion";
import { X, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT } from "@/data/content";

export const BookingDrawer = ({ open, onClose }) => {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-[#111215]/70"
            data-testid="booking-drawer-overlay"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-0 top-0 z-[95] flex h-full w-full flex-col bg-[#FAF8F5] sm:w-[480px]"
            data-testid="booking-drawer-panel"
          >
            <div className="flex items-center justify-between border-b border-[#E5E2DC] px-6 py-5">
              <div>
                <h3 className="font-serif text-2xl text-[#111215]">{t.booking.title}</h3>
                <p className="mt-1 text-sm text-[#111215]/60">{t.booking.subtitle}</p>
              </div>
              <button
                data-testid="booking-drawer-close"
                onClick={onClose}
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-[#E5E2DC] transition-colors hover:border-[#1D4ED8] hover:text-[#1D4ED8]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-hidden">
              <iframe
                data-testid="covermanager-iframe"
                title="CoverManager Booking"
                src={CONTACT.bookingUrl}
                className="h-full w-full border-0"
              />
            </div>

            <a
              data-testid="booking-phone-fallback"
              href={CONTACT.phoneHref}
              className="flex items-center justify-center gap-3 border-t border-[#E5E2DC] bg-[#111215] px-6 py-5 font-sans text-sm font-medium text-[#FAF8F5] transition-colors hover:bg-[#1D4ED8]"
            >
              <Phone className="h-4 w-4" />
              {t.booking.phoneFallback} {CONTACT.phone}
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export const FloatingReserveButton = ({ onClick }) => {
  const { t } = useLanguage();

  return (
    <motion.button
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      data-testid="floating-reserve-button"
      onClick={onClick}
      className="fixed bottom-6 left-1/2 z-[80] -translate-x-1/2 rounded-full bg-[#1D4ED8] px-7 py-4 font-sans text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95 sm:left-auto sm:right-8 sm:translate-x-0"
    >
      {t.reserveBtn}
    </motion.button>
  );
};
