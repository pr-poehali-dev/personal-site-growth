const metrics = [
  { value: "+35%", label: "GMV YoY", sub: "рост за счёт новых пользователей, частоты и чека" },
  { value: "+38%", label: "Заказов YoY", sub: "при одновременном росте AOV на +8,5%" },
  { value: "35M+", label: "Подписчиков", sub: "с 1,5 млн в 2020, вклад команды ~50%" },
  { value: "−30%", label: "CAC ежегодно", sub: "через оптимизацию атрибуции и каналов" },
  { value: "+150%", label: "Trial 2023 vs 2020", sub: "+30% в 2025 vs 2024" },
  { value: "25%", label: "Доля партнёрки", sub: "в общем привлечении, создан с нуля" },
  { value: "+21%", label: "MAU YoY", sub: "с сохранением окупаемости на цели" },
  { value: "×1,5", label: "Рост выручки", sub: "за счёт апсейла на более дорогие тарифы" },
];

export default function MetricsSection() {
  return (
    <section id="metrics" className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-3">Цифры</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">Результаты, которые имеют значение</h2>
          <p className="text-white/70 max-w-lg">
            Реальные показатели из проектов нашей команды — от подписочных сервисов до крупного e-commerce.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <div key={i} className="bg-white/8 rounded-xl p-5 md:p-6 border border-white/10 hover:bg-white/12 transition-colors">
              <p className="font-display font-bold text-3xl md:text-4xl text-white mb-1">{m.value}</p>
              <p className="text-sm font-semibold text-white/90 mb-1.5">{m.label}</p>
              <p className="text-xs text-white/55 leading-snug">{m.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
