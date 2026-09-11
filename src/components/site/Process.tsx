import { Section } from "./booking";

const steps = [
  {
    n: "01",
    title: "Diagnose",
    desc: "Audit your creative, accounts, funnel and tracking. Find the leak before spending a rupee more.",
    time: "Week 1",
  },
  {
    n: "02",
    title: "Build",
    desc: "Set up the creative pipeline, account structure, landing pages and measurement the system needs.",
    time: "Weeks 2–3",
  },
  {
    n: "03",
    title: "Test",
    desc: "Launch creative in structured batches. Kill losers early, double down on hooks and angles that work.",
    time: "Weeks 3–6",
  },
  {
    n: "04",
    title: "Scale",
    desc: "Increase spend behind proven creative while the loop keeps feeding fresh winners.",
    time: "Ongoing",
  },
];

export function Process() {
  return (
    <Section
      id="process"
      eyebrow="Process"
      title="A tighter system. Fewer moving parts. Better feedback loops."
    >
      <ol className="relative grid gap-6 md:grid-cols-4">
        <div
          className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 md:block"
          aria-hidden
        />
        {steps.map((s) => (
          <li key={s.n} className="relative">
            <div className="flex size-12 items-center justify-center rounded-full border border-primary/50 bg-background text-sm font-semibold text-primary shadow-glow">
              {s.n}
            </div>
            <h3 className="heading-tight mt-6 text-xl">{s.title}</h3>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">{s.time}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
