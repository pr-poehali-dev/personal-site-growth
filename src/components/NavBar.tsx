import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const links = [
  { label: "О себе", href: "#about" },
  { label: "Опыт", href: "#experience" },
  { label: "Кейсы", href: "#cases" },
  { label: "Услуги", href: "#services" },
  { label: "Контакт", href: "#contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "border-b border-border/40 backdrop-blur-md bg-background/85" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-display text-lg text-gold tracking-[0.2em] uppercase hover:opacity-80 transition-opacity">
          HoG
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-xs bg-gold text-primary-foreground px-5 py-2.5 tracking-widest uppercase font-medium hover:opacity-90 transition-opacity"
          >
            Hire me
          </a>
        </div>

        <button
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={20} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md px-6 py-5 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-xs bg-gold text-primary-foreground px-5 py-3 tracking-widest uppercase font-medium hover:opacity-90 transition-opacity text-center"
            onClick={() => setMenuOpen(false)}
          >
            Hire me
          </a>
        </div>
      )}
    </nav>
  );
}
