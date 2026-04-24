const principles = [
  {
    title: "Data-driven решения",
    desc: "Каждая гипотеза проходит через данные: сбор, оценку, A/B-тест, измерение инкрементальности. Интуиция — стартовая точка, данные — финальный арбитр.",
  },
  {
    title: "Портфельный подход к росту",
    desc: "Одновременно веду 80+ growth-инициатив в единой системе: гипотеза → оценка → эксперимент → еженедельный статус. Суммарный вклад исчисляется сотнями млрд руб.",
  },
  {
    title: "Unit-экономика как язык",
    desc: "CAC, LTV, payback, ARPPU, AOV — не просто отчётность, а инструмент принятия решений по каналам, продукту и бюджету.",
  },
  {
    title: "Bottom-up планирование",
    desc: "Заменяю top-down KPI на детальную верификацию снизу. Отклонения сокращаются с 15–20% до 2–3%, прозрачность и скорость реакции растут.",
  },
  {
    title: "Кросс-функциональная скорость",
    desc: "Выстраиваю SLA с продуктом, аналитикой, финансами и операционными командами. Time-to-Market сокращался в 2 раза.",
  },
  {
    title: "Команда как продукт",
    desc: "Строю команды с нуля, внедряю процессы найма, онбординга и развития. Вырастил функцию с 2 до 37+ человек за 5 лет.",
  },
];

const whoFor = [
  {
    type: "Продуктовые компании и стриминги",
    desc: "Выстрою acquisition-воронку, снижу CAC, масштабирую базу подписчиков, запущу партнёрский канал.",
  },
  {
    type: "E-commerce и маркетплейсы",
    desc: "Вырасту GMV через рост частоты, AOV и удержания, оптимизирую P&L marketing-функции.",
  },
  {
    type: "Фаундеры и сооснователи",
    desc: "Помогу выстроить growth-систему, привлечь первые миллионы пользователей и обеспечить окупаемость.",
  },
  {
    type: "Компании перед международной экспансией",
    desc: "Локализую стратегии привлечения и монетизации под новые рынки. Опыт: UZ, KZ, MENA.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Обо мне</p>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-8 leading-tight">
              Руковожу ростом<br />как бизнесом
            </h2>
            <div className="space-y-5 text-muted-foreground text-sm leading-relaxed">
              <p>
                Более 7 лет я управляю привлечением, монетизацией и удержанием пользователей в крупных B2C-сервисах. Специализация — growth на стыке маркетинга, продукта и аналитики.
              </p>
              <p>
                Прошёл путь от performance-маркетолога до Head of Acquisition с командой 37+ человек и бюджетом в несколько млрд рублей. За это время построил партнёрский канал с нуля, вывел сервис на международные рынки и помог вырастить базу с 1,5 млн до 35+ млн подписчиков.
              </p>
              <p>
                Работаю на стыке стратегии и операционки: ставлю цели через P&L, проверяю гипотезы экспериментами, строю процессы для скорости и прозрачности.
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-8">Как я работаю</p>
            <div className="grid md:grid-cols-2 gap-px bg-border/30">
              {principles.map((p) => (
                <div key={p.title} className="bg-background p-6 group hover:bg-card transition-colors duration-300">
                  <h3 className="text-sm font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Who for */}
        <div className="mt-24">
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-10">Для кого я</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/30">
            {whoFor.map((w) => (
              <div key={w.type} className="bg-background p-7 group hover:bg-card transition-colors duration-300">
                <div className="w-6 h-px bg-gold mb-4" />
                <h3 className="text-sm font-semibold text-foreground mb-3">{w.type}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
