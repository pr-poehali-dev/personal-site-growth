const formats = [
  {
    icon: "Briefcase",
    title: "Head / Director по росту",
    badge: "Full-time · C-level",
    desc: "Принимаю ответственность за P&L, команду и результат.",
    items: [
      "Постановка growth-стратегии с опорой на unit-экономику",
      "Управление привлечением, монетизацией и удержанием",
      "Построение или реструктуризация команды и процессов",
    ],
    expected: "Управляемый рост GMV/MAU/Subscribers при контроле CAC и LTV",
  },
  {
    icon: "LineChart",
    title: "Консультация по growth-стратегии",
    badge: "Проектно · Консалтинг",
    desc: "Разбираем конкретную проблему роста: воронка, CAC, каналы, монетизация.",
    items: [
      "Аудит текущей unit-экономики и channel mix",
      "Оценка инкрементальности каналов и атрибуции",
      "Рекомендации по бюджетированию и перераспределению",
    ],
    expected: "Чёткий приоритизированный план действий с обоснованием",
  },
  {
    icon: "Target",
    title: "Аудит performance и партнёрки",
    badge: "Проектно · 2–4 недели",
    desc: "Нахожу потери в performance-каналах и точки роста в партнёрской дистрибуции.",
    items: [
      "Анализ фрода, атрибуции и качества трафика по каналам",
      "Оценка потенциала партнёрского канала и бизнес-модели",
      "Рекомендации по оптимизации и запуску новых каналов",
    ],
    expected: "Снижение CAC на 10–30% без потери объёма",
  },
  {
    icon: "Users",
    title: "Построение команды growth/marketing",
    badge: "Проектно · Консалтинг",
    desc: "Помогаю выстроить функцию с нуля или реструктурировать существующую.",
    items: [
      "Дизайн оргструктуры, ролей и KPI для команды",
      "Внедрение growth-подхода, A/B-экспериментов и SLA",
      "Помощь с наймом и онбордингом ключевых руководителей",
    ],
    expected: "Функция, которая работает как система, а не как набор людей",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Форматы работы</p>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-4">Чем могу быть полезен</h2>
          <p className="text-muted-foreground text-base max-w-xl">
            Работаю с компаниями, которым нужен рост с понятной unit-экономикой — от стартапов до enterprise.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-px bg-border/30">
          {formats.map((f) => (
            <div key={f.title} className="bg-background p-8 md:p-10 group hover:bg-card transition-colors duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="w-10 h-10 border border-border/60 flex items-center justify-center group-hover:border-gold/40 transition-colors">
                  <span className="text-gold text-xs">→</span>
                </div>
                <span className="text-[10px] tracking-widest text-muted-foreground uppercase border border-border/40 px-2 py-1">
                  {f.badge}
                </span>
              </div>

              <h3 className="font-display text-xl md:text-2xl font-light mb-2 text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{f.desc}</p>

              <ul className="space-y-2 mb-6">
                {f.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                    <span className="text-gold flex-shrink-0 mt-0.5 text-xs">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border/40 pt-5">
                <p className="text-xs text-muted-foreground">
                  <span className="text-gold">Ожидаемый результат:</span> {f.expected}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border border-border/40 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-light mb-2">Нужен рост с понятной unit-экономикой?</h3>
            <p className="text-muted-foreground text-sm max-w-lg">
              Обсудим задачи вашего бизнеса — привлечение, монетизация, снижение CAC или запуск нового канала.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-gold text-primary-foreground px-8 py-3.5 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Написать мне
          </a>
        </div>
      </div>
    </section>
  );
}
