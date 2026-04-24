import Icon from "@/components/ui/icon";

const principles = [
  {
    icon: "Database",
    title: "Data-driven решения",
    desc: "Каждая гипотеза проходит через данные: сбор, оценку, A/B-тест, измерение инкрементальности.",
  },
  {
    icon: "Layers",
    title: "Портфельный подход",
    desc: "Одновременно ведём 80+ growth-инициатив в единой системе с еженедельным статусом и кросс-функциональными владельцами.",
  },
  {
    icon: "Calculator",
    title: "Unit-экономика",
    desc: "CAC, LTV, payback, ARPPU, AOV — не просто отчётность, а инструмент принятия решений по каналам и бюджету.",
  },
  {
    icon: "GitBranch",
    title: "Bottom-up планирование",
    desc: "Заменяем top-down KPI на детальную верификацию снизу. Отклонения сокращаются с 15–20% до 2–3%.",
  },
  {
    icon: "Zap",
    title: "Скорость через процессы",
    desc: "Выстраиваем SLA с продуктом, аналитикой и финансами. Time-to-Market сокращается в 2 раза.",
  },
  {
    icon: "Shield",
    title: "Прозрачность для C-level",
    desc: "Создаём дашборды и регулярные обзоры: performance, LTV, payback, channel mix, CAC — всё в одном месте.",
  },
];

const whoFor = [
  {
    icon: "Smartphone",
    type: "Подписочные сервисы",
    desc: "Выстроим acquisition-воронку, снизим CAC, масштабируем базу подписчиков, запустим партнёрский канал.",
  },
  {
    icon: "ShoppingCart",
    type: "E-commerce и маркетплейсы",
    desc: "Вырастим GMV через рост частоты, AOV и удержания, оптимизируем P&L marketing-функции.",
  },
  {
    icon: "Rocket",
    type: "Стартапы на масштабировании",
    desc: "Поможем выстроить growth-систему, привлечь первые миллионы пользователей с окупаемостью.",
  },
  {
    icon: "Globe",
    type: "Международная экспансия",
    desc: "Локализуем стратегии привлечения и монетизации. Опыт: UZ, KZ, MENA (Yango Play).",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-white border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">О нас</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Управляем ростом<br />как бизнесом
            </h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                Более 7 лет работаем с привлечением, монетизацией и удержанием пользователей в крупных B2C-сервисах. Специализация — growth на стыке маркетинга, продукта и аналитики.
              </p>
              <p>
                Прошли путь от performance-маркетинга до управления командой 37+ человек с бюджетом в несколько млрд рублей. За это время построили партнёрский канал с нуля, вывели сервисы на международные рынки и помогли вырастить базу с 1,5 млн до 35+ млн подписчиков.
              </p>
              <p>
                Работаем на стыке стратегии и операционки: ставим цели через P&L, проверяем гипотезы экспериментами, строим процессы для скорости и прозрачности.
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">Как мы работаем</p>
            <div className="grid md:grid-cols-2 gap-4">
              {principles.map((p) => (
                <div
                  key={p.title}
                  className="bg-card border border-border rounded-xl p-5 hover:border-primary/25 hover:shadow-sm transition-all group"
                >
                  <div className="w-8 h-8 bg-primary/8 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-colors">
                    <Icon name={p.icon} size={16} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-sm text-foreground mb-1.5">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Who for */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-8">Для кого</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {whoFor.map((w) => (
              <div
                key={w.type}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/25 hover:shadow-sm transition-all group"
              >
                <div className="w-10 h-10 bg-primary/8 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <Icon name={w.icon} size={20} className="text-primary" />
                </div>
                <h3 className="font-display font-bold text-sm text-foreground mb-2">{w.type}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
