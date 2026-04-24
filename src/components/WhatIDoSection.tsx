const directions = [
  {
    num: "01",
    title: "Growth-стратегия и P&L",
    desc: "Формирую growth-стратегию с опорой на P&L: GMV, MAU, New Users, CAC, LTV, AOV, Frequency. Внедряю bottom-up планирование — отклонения сокращаются с 15–20% до 2–3%.",
  },
  {
    num: "02",
    title: "Привлечение пользователей",
    desc: "Выстраиваю performance-маркетинг: сквозная атрибуция, оценка инкрементальности, борьба с фродом, A/B-тесты. Снижаю CAC в платных каналах на 10–30% ежегодно без потери объёма.",
  },
  {
    num: "03",
    title: "Монетизация и подписки",
    desc: "Оптимизирую воронку подписки, тарифную линейку, механики апсейла. Реализовал рост выручки ×1,5 за счёт перехода пользователей на более дорогие тарифы.",
  },
  {
    num: "04",
    title: "Партнёрская дистрибуция",
    desc: "Создаю каналы с нуля: телеком, ритейл, банки, провайдеры. CAC партнёрского канала на 20% ниже платных каналов, доля в привлечении — до 25%.",
  },
  {
    num: "05",
    title: "Удержание, CRM и геймификация",
    desc: "Запускаю retention-программы, CRM-коммуникации и механики геймификации. Суммарный инкрементальный эффект +5,5% к GMV всего сервиса vs глобальная контрольная группа.",
  },
  {
    num: "06",
    title: "Команды и процессы",
    desc: "Строю growth-команды с нуля: от 2 до 37+ человек. Внедряю портфельный подход к экспериментам, SLA между командами и прозрачную отчётность для C-level.",
  },
];

export default function WhatIDoSection() {
  return (
    <section id="what" className="py-24 px-6 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Направления</p>
          <h2 className="font-display text-4xl md:text-5xl font-light">Что я делаю</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30">
          {directions.map((d) => (
            <div
              key={d.num}
              className="bg-background p-8 group hover:bg-card transition-colors duration-300 cursor-default"
            >
              <p className="font-display text-4xl font-light text-border group-hover:text-gold/25 transition-colors mb-5">
                {d.num}
              </p>
              <h3 className="text-sm font-semibold tracking-wide mb-3 text-foreground">{d.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
