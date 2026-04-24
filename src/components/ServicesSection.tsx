import Icon from "@/components/ui/icon";

const formats = [
  {
    icon: "Briefcase",
    title: "Head / Director по росту",
    badge: "Full-time · C-level",
    desc: "Принимаем ответственность за P&L, команду и результат.",
    items: [
      "Постановка growth-стратегии с опорой на unit-экономику",
      "Управление привлечением, монетизацией и удержанием",
      "Построение или реструктуризация команды и процессов",
    ],
    expected: "Управляемый рост GMV/MAU при контроле CAC и LTV",
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
    desc: "Находим потери в performance-каналах и точки роста в партнёрской дистрибуции.",
    items: [
      "Анализ фрода, атрибуции и качества трафика",
      "Оценка потенциала партнёрского канала",
      "Рекомендации по оптимизации и запуску новых каналов",
    ],
    expected: "Снижение CAC на 10–30% без потери объёма",
  },
  {
    icon: "Users",
    title: "Построение команды growth",
    badge: "Проектно · Консалтинг",
    desc: "Помогаем выстроить функцию с нуля или реструктурировать существующую.",
    items: [
      "Дизайн оргструктуры, ролей и KPI для команды",
      "Внедрение growth-подхода, A/B-экспериментов и SLA",
      "Помощь с наймом ключевых руководителей",
    ],
    expected: "Функция, которая работает как система, а не как набор людей",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-card/50 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Услуги</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">Форматы работы</h2>
          <p className="text-muted-foreground max-w-lg text-sm">
            Работаем с компаниями, которым нужен рост с понятной unit-экономикой — от стартапов до крупных B2C-сервисов.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {formats.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-border rounded-xl p-7 hover:shadow-md hover:border-primary/20 transition-all group"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 bg-primary/8 rounded-xl flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <Icon name={f.icon} size={22} className="text-primary" />
                </div>
                <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase bg-secondary px-2.5 py-1.5 rounded-md">
                  {f.badge}
                </span>
              </div>

              <h3 className="font-display font-bold text-lg text-foreground mb-1.5">{f.title}</h3>
              <p className="text-sm text-muted-foreground mb-5">{f.desc}</p>

              <ul className="space-y-1.5 mb-5">
                {f.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                    <span className="text-primary flex-shrink-0 mt-1 w-1 h-1 rounded-full bg-primary block" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border pt-4">
                <p className="text-xs text-muted-foreground">
                  <span className="text-primary font-semibold">Результат: </span>{f.expected}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">
              Нужен рост с понятной unit-экономикой?
            </h3>
            <p className="text-white/75 text-sm max-w-lg">
              Обсудим задачи вашего бизнеса — привлечение, монетизация, снижение CAC или запуск нового канала.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-white text-primary px-8 py-3.5 rounded-md text-sm font-bold hover:bg-white/90 transition-colors whitespace-nowrap"
          >
            Написать нам
          </a>
        </div>
      </div>
    </section>
  );
}
