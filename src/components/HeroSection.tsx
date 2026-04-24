import Icon from "@/components/ui/icon";

const badges = ["Growth Strategy", "Performance Marketing", "P&L Management", "Team Building"];

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-16 px-6 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <div className="flex flex-wrap gap-2 mb-8 animate-fade-up stagger-1 opacity-0">
              {badges.map((b) => (
                <span key={b} className="text-xs font-medium bg-primary/8 text-primary px-3 py-1.5 rounded-full border border-primary/15">
                  {b}
                </span>
              ))}
            </div>

            <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-[64px] leading-[1.08] tracking-tight text-foreground mb-6 animate-fade-up stagger-2 opacity-0">
              Растим бизнес<br />
              через <span className="text-primary">данные</span><br />
              и системы
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg animate-fade-up stagger-3 opacity-0">
              Команда специалистов по росту и монетизации. Помогаем B2C-сервисам масштабировать привлечение, снижать CAC и строить устойчивый P&L.
            </p>

            <ul className="space-y-2.5 mb-10 animate-fade-up stagger-4 opacity-0">
              {[
                "GMV клиентов +35% YoY при снижении CAC",
                "Рост подписочной базы с 1,5 млн до 35+ млн пользователей",
                "CAC снижаем на 15–30% ежегодно через атрибуцию и эксперименты",
                "Партнёрская дистрибуция — 25% привлечения, создаём с нуля",
                "Международные запуски: UZ, KZ, MENA",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/75">
                  <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={10} className="text-primary" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up stagger-5 opacity-0">
              <a
                href="#contact"
                className="bg-primary text-primary-foreground px-7 py-3.5 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors text-center"
              >
                Обсудить задачи роста
              </a>
              <a
                href="#cases"
                className="border border-border text-foreground px-7 py-3.5 rounded-md text-sm font-semibold hover:border-primary/40 hover:text-primary transition-colors text-center bg-white"
              >
                Посмотреть кейсы
              </a>
            </div>
          </div>

          <div className="hidden md:block md:col-span-5">
            <div className="relative">
              {/* Stats card cluster */}
              <div className="bg-white border border-border rounded-2xl p-6 shadow-md mb-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { val: "+35%", label: "GMV YoY" },
                    { val: "35M+", label: "Подписчиков" },
                    { val: "−30%", label: "CAC ежегодно" },
                    { val: "7+", label: "лет в Growth" },
                  ].map((s) => (
                    <div key={s.label} className="bg-card rounded-xl p-4">
                      <p className="font-display font-bold text-2xl text-primary">{s.val}</p>
                      <p className="text-xs text-muted-foreground mt-0.5 font-medium">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-border rounded-xl px-5 py-4 shadow-sm flex items-center gap-3">
                <div className="w-9 h-9 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="TrendingUp" size={18} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Открыты для новых проектов</p>
                  <p className="text-xs text-muted-foreground">Full-time · Консалтинг · Аудит</p>
                </div>
                <div className="ml-auto w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
