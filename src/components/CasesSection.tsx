import { useState } from "react";
import Icon from "@/components/ui/icon";

const cases = [
  {
    tag: "Подписочный сервис",
    title: "Рост базы с 1,5 млн до 35+ млн подписчиков",
    subtitle: "Вклад управляемых каналов ~50%",
    context: "Один из крупнейших подписочных B2C-сервисов России. Роль — Head of Acquisition, полная ответственность за привлечение с 2020 по 2025 год. Команда выросла с 2 до 37+ человек.",
    task: "Обеспечить устойчивый рост базы подписчиков при сохранении окупаемости и снижении CAC. Масштабировать привлечение без деградации качества трафика.",
    actions: [
      "Построили многоканальную систему привлечения: performance, партнёрка, офлайн, охватные кампании",
      "Реструктурировали paid-кампании, внедрили LTV-оценку для бюджетных решений",
      "Создали партнёрский канал с нуля, подключив телеком, ритейл и банки",
      "Запустили механики апсейла и улучшили воронку конверсии в платную подписку",
      "Внедрили сквозную атрибуцию и инкрементальные тесты по каналам",
      "Координировали международные запуски с локализацией стратегий",
    ],
    results: [
      "База выросла с 1,5 млн до 35+ млн подписчиков",
      "Trial +150% за 3 года (2020→2023), +30% в 2025 vs 2024",
      "CAC снижался на 15–30% ежегодно",
      "Партнёрский канал вышел на 25% от общего объёма привлечения",
      "Выручка ×1,5 за счёт апсейла на более дорогие тарифы",
    ],
  },
  {
    tag: "E-commerce / Delivery",
    title: "GMV +35% YoY при снижении CAC",
    subtitle: "Системный рост через P&L-управление и unit-экономику",
    context: "Крупный сервис с оборотом на уровне нескольких сотен млрд руб. Роль — Руководитель службы роста, ответственность за все ключевые P&L-метрики.",
    task: "Обеспечить рост GMV при контроле маркетингового бюджета, снижении CAC и повышении прозрачности планирования.",
    actions: [
      "Внедрили bottom-up верификацию KPI вместо top-down планирования",
      "Пересобрали подход к атрибуции: сквозная оценка инкрементальности по каналам",
      "Запустили портфельный подход к growth-проектам: 80+ инициатив с единым workflow",
      "Перераспределили бюджет в пользу инкрементальных каналов",
      "Оптимизировали performance-каналы через эксперименты и борьбу с фродом",
      "Выстроили CRM и геймификацию как отдельные revenue-центры",
    ],
    results: [
      "GMV +35% YoY, заказы +38% YoY",
      "MAU +21% YoY, новые пользователи +18,5% YoY",
      "CAC −3% YoY в платных каналах, −10% в performance",
      "AOV/ARPPU +8,5% YoY",
      "Точность планирования: отклонения 2–3% вместо 10–20%",
    ],
  },
  {
    tag: "Партнёрская дистрибуция",
    title: "Партнёрский канал с нуля → 25% привлечения",
    subtitle: "CAC на 20% ниже paid-каналов",
    context: "Два проекта: в подписочном сервисе и в delivery. В обоих случаях запускали партнёрский канал с нуля — стратегия, переговоры, интеграции, команда.",
    task: "Создать масштабируемый канал привлечения через партнёров (телеком, ритейл, банки), который давал бы инкрементальный трафик с окупаемостью лучше paid.",
    actions: [
      "Сформировали стратегию и бизнес-модель партнёрского канала",
      "Провели переговоры с ключевыми партнёрами, обеспечили запуск за 3 месяца",
      "Масштабировали с 1 до 30+ партнёров: телеком, провайдеры, ритейл, банки",
      "Построили команду BD и операционного сопровождения",
      "Внедрили систему оценки инкрементальности партнёрского трафика",
    ],
    results: [
      "Канал вырос с 1 до 30+ активных партнёров",
      "Доля в общем привлечении — 25%",
      "CAC партнёрского канала на 20% ниже других paid-каналов",
      "KPI перевыполнены в 1,4× от стартового прогноза",
      "Канал стал устойчивым источником инкрементального трафика",
    ],
  },
  {
    tag: "Performance-маркетинг",
    title: "CAC −10–30% YoY через атрибуцию и борьбу с фродом",
    subtitle: "Системная оптимизация без потери объёма",
    context: "Комплексная работа по оптимизации performance-каналов. Фокус на качестве трафика, точности атрибуции и инкрементальной оценке каналов.",
    task: "Снизить стоимость привлечения платящего пользователя при сохранении или росте объёма и окупаемости в пределах целевого payback.",
    actions: [
      "Внедрили сквозную атрибуцию с оценкой инкрементальности по каждому каналу",
      "Провели замеры каннибализации бренд-трафика, перераспределили бюджеты",
      "Запустили системные A/B-тесты по кампаниям, аудиториям, плейсментам",
      "Выстроили антифрод-систему с регулярным аудитом трафика",
      "Запустили новые каналы, диверсифицировали channel mix",
    ],
    results: [
      "CAC снижался на 15–30% ежегодно (подписочный сервис, 5 лет)",
      "CAC в платных каналах −10% YoY в delivery (1 год)",
      "Срок окупаемости нового пользователя сократился на ~10%",
      "LTV портфеля вырос за счёт улучшения качества трафика",
    ],
  },
  {
    tag: "Международная экспансия",
    title: "Запуск в UZ, KZ и MENA под брендом Yango Play",
    subtitle: "Локализация стратегий привлечения и монетизации",
    context: "Координация выхода подписочного сервиса на международные рынки. Локализация маркетинговых и продуктовых подходов под каждый рынок.",
    task: "Адаптировать модели привлечения и монетизации под локальные рынки с учётом специфики аудитории и конкурентной среды.",
    actions: [
      "Разработали локализованные стратегии привлечения под каждый рынок",
      "Адаптировали тарифную линейку и монетизационные механики",
      "Выстроили партнёрские интеграции с локальными телеком-операторами",
      "Скоординировали продуктовую и маркетинговую локализацию",
    ],
    results: [
      "Успешные запуски в Узбекистане, Казахстане и странах MENA",
      "Локализованные воронки под каждый рынок",
      "Партнёрские интеграции с местными телеком-операторами запущены",
      "Бренд Yango Play выведен с адаптированной стратегией",
    ],
  },
  {
    tag: "CRM и удержание",
    title: "+5,5% инкрементального GMV через retention и геймификацию",
    subtitle: "Vs глобальная контрольная группа всего сервиса",
    context: "Запуск и развитие CRM-направления и проектного офиса в рамках крупного delivery-сервиса. Отдельный тимлид и группа менеджеров проектов.",
    task: "Создать систему удержания и возврата пользователей, которая давала бы измеримый инкрементальный вклад в GMV.",
    actions: [
      "Запустили проекты на удержание и возврат с измерением vs глобальная КГ",
      "Внедрили механики геймификации как отдельное revenue-направление",
      "Стандартизировали процессы CRM: коммуникации, сегментация, промо",
      "Ввели SLA на time-to-market для коммуникаций",
    ],
    results: [
      "Проекты на удержание и возврат: +3% инкрементального GMV vs глобальная КГ",
      "Геймификация: +2,5% инкрементального GMV vs глобальная КГ",
      "Time-to-market сократился в 2 раза",
      "Количество итераций при запуске гипотез снизилось",
    ],
  },
];

export default function CasesSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="cases" className="py-24 px-6 bg-white border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Кейсы</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">Результаты для бизнеса</h2>
          <p className="text-muted-foreground max-w-lg text-sm">
            Реальные проекты с измеримым влиянием на P&L — от подписочных сервисов до крупного e-commerce.
          </p>
        </div>

        <div className="space-y-3">
          {cases.map((c, i) => (
            <div key={i} className="bg-white border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-7 py-5 flex items-center justify-between gap-6 group"
              >
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <span className="text-xs font-semibold bg-primary/8 text-primary px-3 py-1.5 rounded-full flex-shrink-0 hidden sm:block">
                    {c.tag}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-base md:text-lg text-foreground group-hover:text-primary transition-colors truncate">
                      {c.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{c.subtitle}</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-7 h-7 border border-border rounded-full flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all">
                  <Icon
                    name={open === i ? "ChevronUp" : "ChevronDown"}
                    size={14}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </div>
              </button>

              {open === i && (
                <div className="px-7 pb-7 border-t border-border bg-card/30">
                  <div className="grid md:grid-cols-2 gap-8 pt-6">
                    <div className="space-y-5">
                      <div>
                        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Контекст</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{c.context}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Задача</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{c.task}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Что сделали</p>
                        <ul className="space-y-1.5">
                          {c.actions.map((a) => (
                            <li key={a} className="flex items-start gap-2 text-sm text-foreground/70">
                              <span className="text-primary flex-shrink-0 mt-1 w-1 h-1 rounded-full bg-primary block" />
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">Результаты</p>
                      <ul className="space-y-2.5">
                        {c.results.map((r) => (
                          <li key={r} className="flex items-start gap-3 p-3 bg-white border border-border rounded-lg hover:border-primary/20 transition-colors">
                            <span className="text-green-600 flex-shrink-0 mt-0.5 text-xs font-bold">✓</span>
                            <span className="text-sm text-foreground/80 font-medium">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Approach */}
        <div className="mt-16 bg-card border border-border rounded-xl p-7 md:p-9">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-6">Наш подход к росту</p>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { num: "1", text: "Данные → решения, не интуиция" },
              { num: "2", text: "Портфель гипотез, а не одна ставка" },
              { num: "3", text: "Инкрементальность, не last-click атрибуция" },
              { num: "4", text: "Unit-экономика как общий язык" },
              { num: "5", text: "Скорость через процессы, не давление" },
            ].map((p) => (
              <div key={p.num} className="bg-white border border-border rounded-lg p-4 hover:border-primary/25 transition-colors">
                <p className="font-display font-bold text-2xl text-primary/20 mb-2">{p.num}</p>
                <p className="text-xs text-foreground/70 leading-snug font-medium">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
