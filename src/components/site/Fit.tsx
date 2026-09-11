import { Check, Minus } from "lucide-react";
import { Section } from "./booking";

const good = [
  "Brands and founders with a product or service that already sells",
  "Ready to invest in creative and paid media together, not one or the other",
  "Want a direct line to the person running the work",
  "Care about CAC, ROAS and pipeline — not follower counts",
  "Can move fast on feedback, approvals and offers",
];

const notIdeal = [
  "Looking for the cheapest possible posting service",
  "Expecting guaranteed ROAS before any testing",
  "No budget for paid distribution at all",
  "Want a large team and weekly slide decks",
  "Pre-launch with no validated offer yet",
];

export function Fit() {
  return (
    <Section
      id="fit"
      className="bg-surface/40"
      eyebrow="Is this a fit?"
      title="We work best with a specific kind of business."
      lead="Being honest about fit saves both of us time — and keeps results high."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-primary/40 bg-surface p-7">
          <h3 className="heading-tight text-xl text-primary">Good fit</h3>
          <ul className="mt-6 space-y-3">
            {good.map((g) => (
              <li key={g} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {g}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-surface p-7">
          <h3 className="heading-tight text-xl text-muted-foreground">Not ideal</h3>
          <ul className="mt-6 space-y-3">
            {notIdeal.map((n) => (
              <li key={n} className="flex items-start gap-3 text-sm text-muted-foreground">
                <Minus className="mt-0.5 size-4 shrink-0" /> {n}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
