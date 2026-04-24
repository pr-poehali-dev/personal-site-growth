const roles = [
  {
    period: "1 год 1 месяц",
    title: "Руководитель службы роста и эффективности",
    desc: "Комплексная ответственность за P&L крупного e-commerce/delivery сервиса. Управление маркетинговым бюджетом в несколько млрд руб, командой из 15 человек (4 тимлида), четырьмя направлениями: performance, CRM, проектный офис, партнёрская дистрибуция.",
    responsibilities: [
      "P&L-ответственность: GMV/GTV, MAU, New Users, Retention, ARPPU/AOV, Orders, Frequency, LTV, CAC",
      "Управление маркетинговым бюджетом в несколько млрд руб",
      "Руководство командой: 4 тимлида, 15 сотрудников в 4 направлениях",
      "Кросс-функциональная координация с продуктом, аналитикой, коммерцией, BI",
      "Внедрение портфельного подхода к growth-проектам (80+ инициатив)",
      "Bottom-up верификация KPI в планировании P&L",
    ],
    results: [
      "GMV +35% YoY, заказы +38% YoY, MAU +21% YoY",
      "Новые пользователи +18,5% YoY при сохранении окупаемости",
      "CAC −3% YoY через инкрементальную атрибуцию",
      "Точность планирования: отклонения 2–3% вместо 10–20%",
      "Партнёрский канал: запущен с нуля, KPI перевыполнены в 1,4×",
      "CRM + геймификация: +5,5% инкрементального GMV vs глобальная КГ",
    ],
  },
  {
    period: "5 лет 1 месяц",
    title: "Head of Acquisition and Monetisation",
    desc: "Полная ответственность за привлечение и монетизацию в одном из крупнейших подписочных B2C-сервисов России. Рост команды с 2 до 37+ человек, международные запуски, построение партнёрского канала, внедрение growth-культуры.",
    responsibilities: [
      "KPI: New Users/Trial, Paid Subscriptions, CAC/CPA, LTV, ARPPU/ARPU, Retention, Churn",
      "Управление командой: 6+ тимлидов, 37+ сотрудников (performance, партнёрка, BD, проектный офис, регионы)",
      "Поиск и масштабирование новых источников роста выручки и подписчиков",
      "Формирование и контроль P&L, бюджетирование маркетинговых расходов",
      "Координация выхода на международные рынки (UZ, KZ, TM, MENA — Yango Play)",
      "Внедрение сквозной аналитики, LTV-оценки и A/B-культуры в команде",
    ],
    results: [
      "Вклад ~50% в рост базы с 1,5 млн подписчиков (2020) до 35+ млн (2025)",
      "CAC снижался на 15–30% ежегодно через оптимизацию каналов и атрибуцию",
      "Trial +150% в 2023 vs 2020, +30% в 2025 vs 2024",
      "Партнёрский канал — 25% от общего привлечения (телеком, ритейл, банки)",
      "Механики апсейла: рост выручки ×1,5",
      "Построил команду с 2 до 37+ человек, внедрил процессы найма и онбординга",
    ],
  },
  {
    period: "1 год 8 месяцев",
    title: "Руководитель performance-маркетинга",
    desc: "Управление digital-каналами привлечения пользователей, стратегическое планирование и оптимизация performance-кампаний. Выстраивание процессов внутри команды.",
    responsibilities: [
      "Управление digital-каналами привлечения: Google, Meta, programmatic, OEM",
      "Стратегическое и оперативное планирование привлечения",
      "Прогнозирование эффективности и контроль выполнения планов",
      "Подготовка ТЗ для аналитики и продукта, контроль исполнения",
      "Реализация смежных проектов по оптимизации привлечения",
      "Отчётность и анализ эффективности кампаний",
    ],
    results: [
      "Выстроены процессы внутри performance-команды",
      "Снижение CPA по ключевым каналам через системную оптимизацию",
      "Запуск новых digital-каналов привлечения",
      "Внедрение регулярной отчётности и прогнозирования",
    ],
  },
];

const skills = [
  "Growth-стратегия и P&L",
  "Unit-экономика (CAC / LTV / Payback)",
  "Performance-маркетинг",
  "Партнёрская дистрибуция",
  "Сквозная атрибуция и инкрементальность",
  "CRM и retention",
  "Подписочные модели и монетизация",
  "A/B-тестирование и эксперименты",
  "Управление командами (37+ человек)",
  "International go-to-market",
  "Бюджетирование (несколько млрд руб)",
  "Дашборды и отчётность для C-level",
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Карьера</p>
          <h2 className="font-display text-4xl md:text-5xl font-light">Опыт</h2>
        </div>

        <div className="space-y-1 bg-border/30">
          {roles.map((role, i) => (
            <div key={i} className="bg-background p-8 md:p-10">
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-3">
                  <span className="text-xs text-muted-foreground tracking-widest uppercase">{role.period}</span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-display text-2xl md:text-3xl font-light mb-4 text-foreground">
                    {role.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-2xl">{role.desc}</p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Зона ответственности</p>
                      <ul className="space-y-2">
                        {role.responsibilities.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-sm text-foreground/70">
                            <span className="text-gold mt-0.5 flex-shrink-0 text-xs">›</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Ключевые результаты</p>
                      <ul className="space-y-2">
                        {role.results.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-sm text-foreground/70">
                            <span className="text-gold mt-0.5 flex-shrink-0 text-xs">✓</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mt-16">
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-8">Ключевые навыки</p>
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s}
                className="border border-border/60 px-4 py-2 text-xs text-foreground/70 hover:border-gold/50 hover:text-gold transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
