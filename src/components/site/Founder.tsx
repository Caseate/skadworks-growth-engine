import { Code2, Gauge, UserRound } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { PrimaryButton, Section } from "./booking";

const badges = [
  { icon: UserRound, label: "Founder-Led" },
  { icon: Gauge, label: "Performance-Minded" },
  { icon: Code2, label: "Lean by Design" },
];

export function Founder() {
  const { founder } = siteConfig;
  return (
    <Section
      id="about"
      className="bg-surface/40"
      eyebrow="Why Skadworks"
      title="Zero agency bloat. Just the work that moves the needle."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
          <div className="aspect-[4/5] w-full">
            <div className="grid-bg absolute inset-0" aria-hidden />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
              <span className="flex size-20 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-2xl font-semibold text-primary">
                {founder.name[0]}
              </span>
              <p className="text-xs text-muted-foreground">Founder photo placeholder</p>
            </div>
          </div>
          <div className="border-t border-border p-5">
            <p className="font-semibold">{founder.name}</p>
            <p className="text-sm text-muted-foreground">
              {founder.role} · {founder.location}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-lg leading-relaxed sm:text-xl">
            When you work with Skadworks, you work directly with the strategist. No account managers
            relaying notes. No bloated status meetings. No vanity-metric decks.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            I'm {founder.name} — a performance marketer who also builds the landing pages and tracking
            most agencies outsource. That means the creative, the ads and the page they land on are
            designed by the same person, with the same goal: revenue you can measure.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {badges.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm"
              >
                <Icon className="size-4 text-primary" /> {label}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <PrimaryButton size="lg">Talk Directly With {founder.name}</PrimaryButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
