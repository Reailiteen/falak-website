import { MEDIA, CHAOS_SECTION } from "@/lib/landing/content";

const NOTIF_CARDS = [
  { title: "Meeting", subtitle: "Tomorrow 9:00 AM", icon: "📅", delay: "0s" },
  { title: "Shopping list", subtitle: "5 items pending", icon: "📝", delay: "0.7s" },
  { title: "Reminder", subtitle: "Send the report", icon: "⏰", delay: "1.4s" },
];

export function CompetitiveAdvantage() {
  return (
    <section id="channels" className="section-padding memo-channel-zone">
      <div className="container-shell">
        <h2 className="section-heading text-center text-white">{CHAOS_SECTION.heading}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-white/80">{CHAOS_SECTION.subheading}</p>

        <div className="mx-auto mt-6 max-w-3xl space-y-4">
          {CHAOS_SECTION.paragraphs.map((p, i) => (
            <p key={i} className="text-center text-[15px] leading-7 text-white/85">{p}</p>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {NOTIF_CARDS.map((card) => (
            <div key={card.title} className="memo-notif-mock text-white mascot-float" style={{ animationDelay: card.delay }}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{card.icon}</span>
                <div>
                  <p className="text-sm font-semibold">{card.title}</p>
                  <p className="text-xs text-white/70">{card.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {CHAOS_SECTION.cards.map((card) => (
            <article
              key={card.title}
              className="memo-chaos-card flex items-end"
              style={{
                backgroundImage: `linear-gradient(180deg,rgba(9,22,44,0.25),rgba(9,22,44,0.72)),url(${card.bg})`,
              }}
            >
              <h3 className="text-xl font-semibold text-white md:text-2xl">{card.title}</h3>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 flex justify-center">
          <div className="memo-notif-mock flex items-center gap-3 text-white">
            <img src={MEDIA.notifIcon1} alt="" className="h-8 w-8 object-contain" loading="lazy" />
            <div>
              <p className="text-sm font-semibold">Remember to send the report...</p>
              <p className="text-xs text-white/60">Memorae &middot; just now</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
