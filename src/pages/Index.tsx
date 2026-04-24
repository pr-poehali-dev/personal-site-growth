import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import MetricsSection from "@/components/MetricsSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import CasesSection from "@/components/CasesSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <HeroSection />
      <WhatIDoSection />
      <MetricsSection />
      <AboutSection />
      <ExperienceSection />
      <CasesSection />
      <ServicesSection />
      <ContactSection />

      <footer className="border-t border-border/40 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="font-display text-lg text-gold tracking-[0.2em] uppercase">HoG</span>
          <p className="text-xs text-muted-foreground tracking-wide">
            Head of Growth & Monetisation · Системный рост через данные
          </p>
          <div className="flex items-center gap-5">
            {["Telegram", "LinkedIn", "Email"].map((s) => (
              <a key={s} href="#contact" className="text-xs text-muted-foreground hover:text-gold transition-colors tracking-wide">
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
