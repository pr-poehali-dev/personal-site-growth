import { useState } from "react";
import Icon from "@/components/ui/icon";

const stats = [
  { value: "7×", label: "Средний рост трафика за 6 месяцев" },
  { value: "120+", label: "Успешных проектов" },
  { value: "4.8млн", label: "Суммарный охват аудитории" },
  { value: "340%", label: "Средний ROI клиентов" },
];

const services = [
  {
    num: "01",
    title: "Growth Strategy",
    desc: "Разработка стратегии роста на основе данных: анализ воронки, точки рычага, приоритизация каналов.",
  },
  {
    num: "02",
    title: "Acquisition & Retention",
    desc: "Построение систем привлечения и удержания пользователей. CAC, LTV, churn — всё под контролем.",
  },
  {
    num: "03",
    title: "Product Analytics",
    desc: "Настройка аналитики, дашбордов и A/B тестов. Решения на основе данных, а не интуиции.",
  },
  {
    num: "04",
    title: "Performance Marketing",
    desc: "Масштабирование платного трафика: Google, Meta, TikTok, Яндекс. ROAS от 4× и выше.",
  },
];

const cases = [
  {
    tag: "SaaS / B2B",
    title: "Рост ARR с $200K до $1.4M за 14 месяцев",
    metrics: ["+600% ARR", "CAC −38%", "NPS 72"],
    desc: "Полный редизайн acquisition-воронки, внедрение PLG-механик и системы onboarding.",
  },
  {
    tag: "E-commerce",
    title: "Увеличение конверсии интернет-магазина в 3.2×",
    metrics: ["CR ×3.2", "ROAS 6.1×", "+89K клиентов"],
    desc: "Сегментация аудитории, персонализация офферов и оптимизация checkout-процесса.",
  },
  {
    tag: "Мобильное приложение",
    title: "Выход на 1M DAU за 8 месяцев",
    metrics: ["1M DAU", "Retention D7 42%", "LTV ×2.4"],
    desc: "Вирусные механики, реферальная программа и работа с продуктовой петлёй роста.",
  },
];

const navLinks = ["Услуги", "Кейсы", "Достижения", "Контакты"];

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    goal: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-md bg-background/80">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <span className="font-display text-xl text-gold tracking-widest uppercase">GM</span>
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
              >
                {link}
              </a>
            ))}
            <a
              href="#контакты"
              className="text-sm bg-gold text-primary-foreground px-5 py-2 font-medium tracking-wide hover:opacity-90 transition-opacity"
            >
              Консультация
            </a>
          </div>
          <button
            className="md:hidden text-muted-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6 animate-fade-up stagger-1">
              Growth Marketing Consultant
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-light leading-tight mb-8 animate-fade-up stagger-2">
              Превращаю данные<br />
              <em className="text-gold not-italic">в рост</em>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 animate-fade-up stagger-3 max-w-md">
              Помогаю технологическим компаниям и брендам выстраивать системный рост без случайных решений.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-4">
              <a
                href="#контакты"
                className="bg-gold text-primary-foreground px-8 py-3.5 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity text-center"
              >
                Записаться на консультацию
              </a>
              <a
                href="#кейсы"
                className="border border-border text-foreground px-8 py-3.5 text-sm font-medium tracking-wide hover:border-gold hover:text-gold transition-colors text-center"
              >
                Смотреть кейсы
              </a>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="w-full aspect-square max-w-sm ml-auto relative">
              <div className="absolute inset-0 border border-border/30 rounded-sm" />
              <div className="absolute inset-4 border border-gold/20 rounded-sm" />
              <div className="absolute inset-8 border border-border/20 rounded-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-display text-8xl font-light text-gold/20">7×</p>
                  <p className="text-xs text-muted-foreground tracking-widest uppercase mt-2">Средний рост</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-gold rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="достижения" className="border-y border-border/40 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-border/40">
          {stats.map((s, i) => (
            <div key={i} className="text-center md:px-8">
              <p className="font-display text-5xl md:text-6xl font-light text-gold mb-2">{s.value}</p>
              <p className="text-xs text-muted-foreground leading-snug tracking-wide uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="услуги" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Что я делаю</p>
          <h2 className="font-display text-4xl md:text-5xl font-light line-accent pb-2">Услуги</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-border/40">
          {services.map((s) => (
            <div
              key={s.num}
              className="bg-background p-8 md:p-10 group hover:bg-card transition-colors duration-300"
            >
              <p className="font-display text-5xl font-light text-border group-hover:text-gold/30 transition-colors mb-6">
                {s.num}
              </p>
              <h3 className="text-lg font-semibold tracking-wide mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cases */}
      <section id="кейсы" className="py-24 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Результаты клиентов</p>
            <h2 className="font-display text-4xl md:text-5xl font-light line-accent pb-2">Кейсы</h2>
          </div>
          <div className="space-y-px bg-border/40">
            {cases.map((c, i) => (
              <div key={i} className="bg-background p-8 md:p-10 grid md:grid-cols-3 gap-8 group hover:bg-card/60 transition-colors duration-300">
                <div className="md:col-span-2">
                  <span className="text-xs tracking-widest text-gold uppercase">{c.tag}</span>
                  <h3 className="font-display text-2xl md:text-3xl font-light mt-3 mb-4 leading-snug">{c.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
                </div>
                <div className="flex flex-col justify-center gap-3">
                  {c.metrics.map((m) => (
                    <div key={m} className="border border-border/60 px-4 py-2.5 text-center group-hover:border-gold/40 transition-colors">
                      <span className="text-sm font-medium text-foreground">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Booking */}
      <section id="контакты" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Начнём работу</p>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-6 leading-tight">
              Запись на<br /><em className="text-gold not-italic">консультацию</em>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-sm">
              60-минутная стратегическая сессия. Разберём точки роста, узкие места и первые шаги для вашего бизнеса.
            </p>
            <div className="space-y-5">
              {[
                { icon: "Clock", text: "60 минут в формате видеозвонка" },
                { icon: "BarChart3", text: "Аудит текущей воронки роста" },
                { icon: "FileText", text: "Конкретный план действий на выходе" },
                { icon: "CalendarCheck", text: "Гибкое расписание — выберите удобное время" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Icon name={item.icon} size={16} className="text-gold flex-shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border/60 p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6">
                  <Icon name="Check" size={24} className="text-gold" />
                </div>
                <h3 className="font-display text-2xl font-light mb-3">Заявка отправлена</h3>
                <p className="text-muted-foreground text-sm">
                  Свяжусь с вами в течение 24 часов и согласуем удобное время.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-background border border-border/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-background border border-border/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors"
                    placeholder="ivan@company.com"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                    Компания
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-background border border-border/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors"
                    placeholder="Название компании"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                    Главная цель
                  </label>
                  <textarea
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    rows={3}
                    className="w-full bg-background border border-border/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Что хотите улучшить?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold text-primary-foreground py-4 text-sm font-medium tracking-widest uppercase hover:opacity-90 transition-opacity"
                >
                  Записаться на консультацию
                </button>
                <p className="text-xs text-muted-foreground/60 text-center">
                  Отвечаю в течение 24 часов
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-xl text-gold tracking-widest uppercase">GM</span>
          <p className="text-xs text-muted-foreground tracking-wide">
            © 2026 Growth Marketing Expert. Системный рост для вашего бизнеса.
          </p>
          <div className="flex items-center gap-6">
            {["Telegram", "LinkedIn"].map((s) => (
              <a key={s} href="#" className="text-xs text-muted-foreground hover:text-gold transition-colors tracking-wide">
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
