import { useState } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { useLenis } from "@/hooks/useLenis";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Philosophy } from "@/components/Philosophy";
import { MenuSection } from "@/components/MenuSection";
import { MarketProduct } from "@/components/MarketProduct";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { BookingDrawer, FloatingReserveButton } from "@/components/BookingDrawer";

function AppContent() {
  useLenis();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [vinsSignal, setVinsSignal] = useState(0);

  return (
    <div className="min-h-screen bg-[#FAF8F5] font-sans text-[#111215]">
      <Header onReserve={() => setDrawerOpen(true)} onNavVins={() => setVinsSignal((v) => v + 1)} />
      <Hero onReserve={() => setDrawerOpen(true)} />
      <Marquee />
      <Philosophy />
      <MenuSection jumpToVins={vinsSignal} />
      <MarketProduct />
      <Location />
      <Footer />
      <FloatingReserveButton onClick={() => setDrawerOpen(true)} />
      <BookingDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
