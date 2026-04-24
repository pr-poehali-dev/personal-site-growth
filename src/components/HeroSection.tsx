import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-16 px-6 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <p className="text-gold text-xs tracking-[0.35em] uppercase mb-8 animate-fade-up stagger-1 opacity-0">
              Head of Growth & Monetisation
            </p>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-8 animate-fade-up stagger-2 opacity-0">
              Рост бизнеса<br />
              через <em className="text-gold not-italic">данные</em><br />
              и системы
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-xl animate-fade-up stagger-3 opacity-0">
              Управляю привлечением, монетизацией и удержанием пользователей.
              Фокус на P&L, unit-экономике и масштабировании.
            </p>

            <ul className="space-y-2.5 mb-12 animate-fade-up stagger-4 opacity-0">
              {[
                "GMV +35% YoY, заказы +38%, MAU +21%",
                "Рост подписочной базы с 1,5 млн до 35+ млн — вклад ~50%",
                "CAC снижал на 15–30% ежегодно через атрибуцию и эксперименты",
                "Партнёрская дистрибуция — 25% от всего привлечения, создал с нуля",
                "Маркетинговый бюджет — несколько млрд руб, команда 37+ человек",
                "Международные запуски: UZ, KZ, MENA (Yango Play)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="text-gold mt-0.5 flex-shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-5 opacity-0">
              <a
                href="#contact"
                className="bg-gold text-primary-foreground px-8 py-4 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity text-center"
              >
                Обсудить задачи роста
              </a>
              <a
                href="#cases"
                className="border border-border text-foreground px-8 py-4 text-sm font-medium tracking-wide hover:border-gold hover:text-gold transition-colors text-center"
              >
                Посмотреть кейсы
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-3 animate-fade-up stagger-6 opacity-0">
              Открыт к предложениям о full-time роли или консультациям
            </p>
          </div>

          <div className="hidden md:flex md:col-span-4 justify-end">
            <div className="relative w-56 h-56">
              <div className="absolute inset-0 border border-border/20 rounded-full" />
              <div className="absolute inset-4 border border-gold/15 rounded-full" />
              <div className="absolute inset-8 border border-border/10 rounded-full" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-1">
                <span className="font-display text-6xl font-light text-gold/25">7+</span>
                <span className="text-[10px] text-muted-foreground tracking-widest uppercase">лет в growth</span>
              </div>
              <div className="absolute top-3 right-6 w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
              <div className="absolute bottom-6 left-3 w-1 h-1 bg-gold/50 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] tracking-widest uppercase">scroll</span>
        <Icon name="ChevronDown" size={14} />
      </div>
    </section>
  );
}
