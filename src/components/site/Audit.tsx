import { CheckCircle2 } from "lucide-react";
import { BookingEmbed, Section } from "./booking";

const checklist = [
  "Creative quality & hook strength",
  "Content consistency across channels",
  "Ad account & campaign structure",
  "Creative fatigue & refresh cadence",
  "Messaging, angles & offers",
  "Landing page conversion path",
  "Tracking, pixels & attribution",
  "CAC / ROAS improvement opportunities",
];

export function Audit() {
  return (
    <Section id="audit">
      <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-surface shadow-glow">
        <div
          className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full bg-primary/20 blur-[120px]"
          aria-hidden
        />
        <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-14">
          <div>
            <p className="eyebrow">Free audit</p>
            <h2 className="heading-tight mt-4 text-3xl sm:text-4xl lg:text-5xl">
              Your ads might not be the problem.{" "}
              <span className="text-primary">Your creative might be.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              In 30 minutes we walk through the eight places acquisition systems usually leak — and
              you leave with a clear list of what to fix first, whether or not we work together.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {checklist.map((item, i) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>
                    <span className="mr-1.5 text-xs text-muted-foreground">0{i + 1}</span>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:pl-4">
            <BookingEmbed className="bg-background" />
          </div>
        </div>
      </div>
    </Section>
  );
}
