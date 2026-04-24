import { useState } from "react";
import Icon from "@/components/ui/icon";

const formats = [
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
    <section id="contact" className="py-24 px-6 border-t border-border/40 bg-card/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Контакт</p>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-6 leading-tight">
              Обсудим ваши<br />
              <em className="text-gold not-italic">задачи роста?</em>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-sm">
              Отвечаю на предложения и запросы в течение 1–2 рабочих дней. Предпочтительный формат — email или Telegram.
            </p>

            <div className="space-y-3 mb-10">
              {[
                { icon: "Mail", label: "Email", val: "your@email.com" },
                { icon: "Send", label: "Telegram", val: "@yourusername" },
                { icon: "Linkedin", label: "LinkedIn", val: "linkedin.com/in/yourname" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3 text-sm">
                  <Icon name={c.icon} size={15} className="text-gold flex-shrink-0" />
                  <span className="text-muted-foreground w-16">{c.label}</span>
                  <span className="text-foreground/60">{c.val}</span>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Что уместно</p>
              <ul className="space-y-2.5">
                {formats.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/70">
                    <span className="text-gold mt-0.5 flex-shrink-0 text-xs">›</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-card border border-border/50 p-8 md:p-10">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 border border-gold/30 bg-gold/5 flex items-center justify-center mx-auto mb-6">
                  <Icon name="CheckCheck" size={22} className="text-gold" />
                </div>
                <h3 className="font-display text-2xl font-light mb-3">Сообщение отправлено</h3>
                <p className="text-muted-foreground text-sm">
                  Отвечу в течение 1–2 рабочих дней.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-[10px] tracking-widest uppercase text-muted-foreground block mb-2">Имя</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-background border border-border/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold transition-colors"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-widest uppercase text-muted-foreground block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-background border border-border/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-widest uppercase text-muted-foreground block mb-2">Сообщение</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full bg-background border border-border/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Опишите задачу или предложение..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold text-primary-foreground py-4 text-sm font-medium tracking-widest uppercase hover:opacity-90 transition-opacity"
                >
                  Отправить
                </button>
                <p className="text-xs text-muted-foreground/50 text-center">
                  Или напишите напрямую — отвечу быстрее
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
