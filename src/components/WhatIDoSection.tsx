import Icon from "@/components/ui/icon";

const directions = [
  {
    icon: "BarChart3",
    title: "Growth-стратегия и P&L",
    desc: "Формируем growth-стратегию с опорой на P&L: GMV, MAU, New Users, CAC, LTV, AOV. Внедряем bottom-up планирование — отклонения сокращаются с 15–20% до 2–3%.",
  },
  {
    icon: "MousePointerClick",
    title: "Performance-маркетинг",
    desc: "Выстраиваем performance-каналы: сквозная атрибуция, оценка инкрементальности, борьба с фродом, A/B-тесты. Снижаем CAC на 10–30% без потери объёма.",
  },
  {
    icon: "CreditCard",
    title: "Монетизация и подписки",
    desc: "Оптимизируем воронку подписки, тарифную линейку и механики апсейла. Реализовали рост выручки ×1,5 через переход пользователей на более дорогие тарифы.",
  },
  {
    icon: "Handshake",
    title: "Партнёрская дистрибуция",
    desc: "Создаём каналы с нуля: телеком, ритейл, банки, провайдеры. CAC партнёрского канала на 20% ниже платных — при объёме до 25% всего привлечения.",
  },
  {
    icon: "RefreshCw",
    title: "Удержание и CRM",
    desc: "Запускаем retention-программы, CRM-коммуникации и геймификацию. Суммарный инкрементальный эффект +5,5% к GMV сервиса vs глобальная контрольная группа.",
  },
  {
    icon: "Users",
    title: "Команды и процессы",
    desc: "Строим growth-команды с нуля: от 2 до 37+ человек. Внедряем портфельный подход к экспериментам и прозрачную отчётность для C-level.",
  },
];

export default function WhatIDoSection() {
  return (
    <section id="what" className="py-24 px-6 bg-card/50 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Направления</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">Что мы делаем</h2>
          <p className="text-muted-foreground max-w-lg">
            Полный цикл работы с ростом — от стратегии до операционного управления командой и каналами.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {directions.map((d) => (
            <div
              key={d.title}
              className="bg-white border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-primary/8 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <Icon name={d.icon} size={20} className="text-primary" />
              </div>
              <h3 className="font-display font-bold text-base text-foreground mb-2">{d.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
