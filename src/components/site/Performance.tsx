import { Eye, MousePointerClick, UserPlus, Wallet } from "lucide-react";
import { Section } from "./booking";

const metrics = [
  {
    icon: Eye,
    stage: "Attention",
    kpi: "Hook rate · Retention",
    desc: "Does the first second stop the thumb? Do people stay? Creative that fails here never gets a chance to sell.",
  },
  {
    icon: MousePointerClick,
    stage: "Engagement",
    kpi: "CTR · Saves · Shares",
    desc: "Attention that turns into action. High click-through tells the algorithm — and us — the message is landing.",
  },
  {
    icon: UserPlus,
    stage: "Acquisition",
    kpi: "CPL · CAC",
    desc: "What a lead or customer actually costs once landing page, offer and tracking are pulling in the same direction.",
  },
  {
    icon: Wallet,
    stage: "Revenue",
    kpi: "ROAS · Payback",
    desc: "The only number the business cares about. Every earlier metric exists to move this one.",
  },
];

export function Performance() {
  return (
    <Section
      id="performance"
      className="bg-surface/40"
      eyebrow="Creative × Performance"
      title="Views are useful. Revenue is the scoreboard."
      lead="We report on the full chain — from the first second of a video to the money in the account — so you always know which link is weak."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map(({ icon: Icon, stage, kpi, desc }, i) => (
          <div key={stage} className="relative rounded-2xl border border-border bg-surface p-6">
            <div className="flex items-center justify-between">
              <Icon className="size-5 text-primary" />
              <span className="text-xs text-muted-foreground">0{i + 1}</span>
            </div>
            <h3 className="heading-tight mt-5 text-lg">{stage}</h3>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-primary">{kpi}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            <div className="mt-6 rounded-lg border border-dashed border-border px-3 py-2 text-center text-[11px] text-muted-foreground">
              Real client result slot
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
