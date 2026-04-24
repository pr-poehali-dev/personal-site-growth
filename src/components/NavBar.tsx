import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const links = [
  { label: "О нас", href: "#about" },
  { label: "Экспертиза", href: "#experience" },
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
      scrolled
        ? "border-b border-border bg-white/95 backdrop-blur-md shadow-sm"
        : "bg-white border-b border-border/60"
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center flex-shrink-0">
            <span className="text-white font-display font-bold text-sm leading-none">GR</span>
          </div>
          <span className="font-display font-bold text-foreground text-[15px] tracking-tight group-hover:text-primary transition-colors">
            GrowthRate
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-semibold hover:bg-primary/90 transition-colors"
          >
            Обсудить проект
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
        <div className="md:hidden border-t border-border bg-white px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium py-1"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm bg-primary text-primary-foreground px-5 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Обсудить проект
          </a>
        </div>
      )}
    </nav>
  );
}
