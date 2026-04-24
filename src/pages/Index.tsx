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

      <footer className="border-t border-border bg-white py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-display font-bold text-xs leading-none">GR</span>
            </div>
            <span className="font-display font-bold text-foreground text-sm">GrowthRate</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Growth & Monetisation · Системный рост через данные и процессы
          </p>
          <div className="flex items-center gap-5">
            {["Telegram", "LinkedIn", "Email"].map((s) => (
              <a key={s} href="#contact" className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium">
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}