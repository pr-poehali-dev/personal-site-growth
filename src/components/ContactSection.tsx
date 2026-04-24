import { useState } from "react";
import Icon from "@/components/ui/icon";

const contactOptions = [
  { icon: "Mail", label: "Email", val: "your@email.com" },
  { icon: "Send", label: "Telegram", val: "@yourusername" },
  { icon: "Linkedin", label: "LinkedIn", val: "linkedin.com/in/yourname" },
];

const topics = [
  "Предложения о роли Head of Growth / Director / VP",
  "Консалтинг по growth-стратегии, CAC/LTV, атрибуции",
  "Аудит performance-маркетинга или партнёрской дистрибуции",
  "Выступления и экспертные комментарии",
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Контакт</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-5 leading-tight">
              Обсудим ваши задачи роста?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-sm">
              Отвечаем в течение 1–2 рабочих дней. Предпочтительный формат — email или Telegram.
            </p>

            <div className="space-y-3 mb-10">
              {contactOptions.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-3 p-3.5 bg-card border border-border rounded-xl hover:border-primary/25 transition-colors"
                >
                  <div className="w-9 h-9 bg-primary/8 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={c.icon} size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground">{c.label}</p>
                    <p className="text-sm font-medium text-foreground">{c.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Что нам пишут</p>
              <ul className="space-y-2">
                {topics.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/70">
                    <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={10} className="text-primary" />
                    </div>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-7 md:p-9 shadow-sm">
            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-50 border border-green-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Icon name="CheckCheck" size={26} className="text-green-600" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">Сообщение отправлено</h3>
                <p className="text-muted-foreground text-sm">
                  Ответим в течение 1–2 рабочих дней.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display font-bold text-xl text-foreground mb-6">Написать нам</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground block mb-1.5">Имя</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground block mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground block mb-1.5">Сообщение</label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                      placeholder="Опишите задачу или предложение..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors"
                  >
                    Отправить сообщение
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    Или напишите напрямую — ответим быстрее
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
