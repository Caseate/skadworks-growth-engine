import { Check, X } from "lucide-react";
import { Section } from "./booking";

const silos = [
  { who: "Content agencies", what: "create videos", miss: "…but don't own the results." },
  { who: "Social media agencies", what: "create posts", miss: "…but stop at engagement." },
  { who: "Ad agencies", what: "buy traffic", miss: "…with weak creative." },
];

const connected = [
  { k: "Content", v: "creates attention" },
  { k: "Social", v: "builds trust" },
  { k: "Paid Media", v: "scales what works" },
];

export function Problem() {
  return (
    <Section
      id="problem"
      eyebrow="The problem"
      title="Most agencies own one piece of the growth problem."
      lead="Creators can make people watch, but can't connect it to revenue. Performance teams can buy clicks, but run weak creative into the ground. Growth lives in the gap between them."
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_1.15fr]">
        <ul className="grid gap-4">
          {silos.map((s) => (
            <li
              key={s.who}
              className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6"
            >
              <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground">
                <X className="size-4" />
              </span>
              <div>
                <p className="font-semibold">
                  {s.who} <span className="text-muted-foreground">{s.what}</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.miss}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="relative overflow-hidden rounded-2xl border border-primary/40 bg-surface p-7 shadow-glow sm:p-9">
          <div
            className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-primary/20 blur-3xl"
            aria-hidden
          />
          <p className="eyebrow">Skadworks</p>
          <h3 className="heading-tight mt-3 text-2xl sm:text-3xl">We connect the pieces.</h3>
          <ul className="mt-7 space-y-4">
            {connected.map((c) => (
              <li key={c.k} className="flex items-center gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-4" />
                </span>
                <p className="text-base">
                  <span className="font-semibold">{c.k}</span>{" "}
                  <span className="text-muted-foreground">{c.v}</span>
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 border-t border-border pt-6 text-sm font-medium leading-relaxed">
            One creative performance system.
            <br />
            <span className="text-primary">One accountable growth partner.</span>
          </p>
        </div>
      </div>
    </Section>
  );
}
