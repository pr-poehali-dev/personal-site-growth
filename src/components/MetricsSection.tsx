const metrics = [
  { value: "+35%", label: "GMV YoY", sub: "рост за счёт новых пользователей, частоты и чека" },
  { value: "+38%", label: "Заказы YoY", sub: "при росте AOV +8,5%" },
  { value: "35млн+", label: "Подписчиков", sub: "с 1,5 млн в 2020, вклад ~50%" },
  { value: "−15–30%", label: "CAC ежегодно", sub: "через оптимизацию атрибуции и каналов" },
  { value: "+150%", label: "Trial 2023 vs 2020", sub: "+30% в 2025 vs 2024" },
  { value: "25%", label: "Привлечение", sub: "через партнёрский канал, создан с нуля" },
  { value: "+21%", label: "MAU YoY", sub: "с сохранением окупаемости на цели" },
  { value: "×1,5", label: "Рост выручки", sub: "за счёт апсейла на более дорогие тарифы" },
];

export default function MetricsSection() {
  return (
    <section id="metrics" className="py-24 px-6 bg-card/20 border-y border-border/40">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Цифры и влияние</p>
          <h2 className="font-display text-4xl md:text-5xl font-light">Результаты, которые имеют значение</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/30">
          {metrics.map((m, i) => (
            <div key={i} className="bg-background p-6 md:p-8 group hover:bg-card transition-colors duration-300">
              <p className="font-display text-4xl md:text-5xl font-light text-gold mb-1">{m.value}</p>
              <p className="text-sm font-semibold text-foreground mb-2">{m.label}</p>
              <p className="text-xs text-muted-foreground leading-snug">{m.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
