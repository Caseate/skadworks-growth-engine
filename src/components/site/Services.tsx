import { Clapperboard, Share2, Target } from "lucide-react";
import { GhostLink, Section } from "./booking";

const services = [
  {
    n: "01",
    icon: Clapperboard,
    title: "Short-Form Content & UGC Assets",
    desc: "Scroll-stopping Reels, Shorts and UGC-style ad creative built around hooks, retention and a clear next step.",
    deliverables: ["Hook & script frameworks", "UGC / creator-style videos", "Ad creative variations", "Monthly creative batches"],
    outcome: "A steady supply of tested creative your ads and organic channels can actually run on.",
  },
  {
    n: "02",
    icon: Share2,
    title: "Organic Social Management",
    desc: "Instagram and short-form channel management that builds trust and signal — so paid has something worth scaling.",
    deliverables: ["Content calendar & posting", "Reels-first strategy", "Community & DM handling", "Organic performance reporting"],
    outcome: "A brand that looks alive and credible the moment a cold prospect clicks through.",
  },
  {
    n: "03",
    icon: Target,
    title: "Paid Advertising Management",
    desc: "Meta & Google campaigns run with a creative-first testing structure and tracking you can trust.",
    deliverables: ["Meta & Google account structure", "Creative testing framework", "Landing page & tracking QA", "Weekly optimisation & reporting"],
    outcome: "Budget flows to the creative that converts — and away from the creative that doesn't.",
  },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="Three pillars. One system."
      lead="Each service works on its own. Together they become a customer acquisition engine."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {services.map(({ n, icon: Icon, title, desc, deliverables, outcome }) => (
          <article
            key={n}
            className="group flex flex-col rounded-2xl border border-border bg-surface p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-background text-primary">
                <Icon className="size-5" />
              </span>
              <span className="text-sm font-semibold text-muted-foreground">{n}</span>
            </div>
            <h3 className="heading-tight mt-6 text-xl">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            <ul className="mt-6 space-y-2 border-t border-border pt-5">
              {deliverables.map((d) => (
                <li key={d} className="flex items-center gap-2 text-sm">
                  <span className="size-1 rounded-full bg-primary" aria-hidden /> {d}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl bg-background/70 p-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Outcome</p>
              <p className="mt-1.5 text-sm leading-relaxed">{outcome}</p>
            </div>
            <div className="mt-6 pt-2">
              <GhostLink href="#audit">Start with an audit</GhostLink>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
