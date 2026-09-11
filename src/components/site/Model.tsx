import { FlaskConical, Rocket, Sparkles } from "lucide-react";
import { PrimaryButton, Section } from "./booking";

const chain = [
  "Ideas",
  "Creative",
  "Organic signal",
  "Paid distribution",
  "Landing page",
  "Conversion",
  "Data",
  "Better creative",
];

const pillars = [
  {
    icon: Sparkles,
    title: "Create",
    desc: "Research-led hooks, angles and formats produced in batches, so there's always fresh creative in the queue.",
  },
  {
    icon: FlaskConical,
    title: "Test",
    desc: "Organic posts and small paid tests surface winners fast — before serious budget touches them.",
  },
  {
    icon: Rocket,
    title: "Scale",
    desc: "Proven creative gets structured distribution across Meta & Google, with landing pages and tracking tuned to convert.",
  },
];

export function Model() {
  return (
    <Section
      id="model"
      className="bg-surface/40"
      eyebrow="The Skadworks model"
      title={
        <>
          Content is the fuel. <span className="text-primary">Paid Ads are the engine.</span>
        </>
      }
      lead="Every part of the system feeds the next one — and the data at the end makes the creative at the start better."
      align="center"
    >
      <div className="relative -mx-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:px-0 [scrollbar-width:none]">
        <ol className="flex min-w-max items-center gap-2 sm:gap-3">
          {chain.map((step, i) => (
            <li key={step} className="flex items-center gap-2 sm:gap-3">
              <span
                className={
                  i === chain.length - 1
                    ? "rounded-full border border-primary bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary"
                    : "rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em]"
                }
              >
                {step}
              </span>
              {i < chain.length - 1 && (
                <svg className="h-px w-6 overflow-visible text-primary/60 sm:w-8" aria-hidden>
                  <line
                    x1="0"
                    x2="100%"
                    y1="0"
                    y2="0"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className="animate-flow"
                  />
                </svg>
              )}
            </li>
          ))}
        </ol>
      </div>
      <p className="mt-2 text-center text-xs text-muted-foreground">
        ↻ The loop closes: performance data feeds the next creative batch.
      </p>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {pillars.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-border bg-surface p-7">
            <Icon className="size-5 text-primary" />
            <h3 className="heading-tight mt-5 text-xl">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <PrimaryButton size="lg">Build Your Creative Performance System</PrimaryButton>
      </div>
    </Section>
  );
}
