import { useLanguage } from "@/context/LanguageContext";
import { CONTACT } from "@/data/content";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer data-testid="site-footer" className="bg-[#111215] px-6 py-24 text-[#FAF8F5] lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1680px]">
        <div className="flex flex-col justify-between gap-16 border-b border-white/10 pb-16 lg:flex-row">
          <div>
            <div className="flex items-center gap-3">
              <img src="/brand/logo_white.png" alt="Casa Güell" className="h-8 w-auto" />
            </div>
            <p className="mt-8 max-w-xs font-serif text-3xl leading-[1.1] tracking-[-0.01em]">{t.footer.tagline}</p>
          </div>
          <div className="flex gap-12">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-[#FAF8F5]/40">
                {t.location.addressLabel}
              </p>
              <p className="mt-3 max-w-[180px] text-sm text-[#FAF8F5]/80">{CONTACT.address}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-[#FAF8F5]/40">
                {t.location.phoneLabel}
              </p>
              <a data-testid="footer-phone-link" href={CONTACT.phoneHref} className="mt-3 block text-sm hover:text-[#1D4ED8]">
                {CONTACT.phone}
              </a>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-[#FAF8F5]/40">
                {t.location.followLabel}
              </p>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                <a data-testid="footer-instagram-link" href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#1D4ED8]">
                  Instagram
                </a>
                <a data-testid="footer-tiktok-link" href={CONTACT.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-[#1D4ED8]">
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-2 font-mono text-xs uppercase tracking-wide text-[#FAF8F5]/40 sm:flex-row">
          <p>Casa Güell — © {new Date().getFullYear()}. {t.footer.rights}</p>
          <p>{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
};
