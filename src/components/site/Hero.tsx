import { ArrowDown, BarChart3, Clapperboard, Radio, Target, Wallet, type LucideIcon } from "lucide-react";
import { PrimaryButton } from "./booking";
import { cn } from "@/lib/utils";

const stages: { label: string; icon: LucideIcon }[] = [
  { label: "Content", icon: Clapperboard },
  { label: "Attention", icon: Radio },
  { label: "Ads", icon: Target },
  { label: "Conversions", icon: BarChart3 },
  { label: "Revenue", icon: Wallet },
];

const metrics = [
  { name: "Creative", value: "Hook rate", note: "Stop the scroll" },
  { name: "Distribution", value: "Reach × CTR", note: "Organic + paid" },
  { name: "Conversion", value: "CPL / CAC", note: "Landing → lead" },
  { name: "Revenue", value: "ROAS", note: "The scoreboard" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="eyebrow">Creative Performance Agency</p>
          <h1 className="heading-tight mt-5 text-4xl sm:text-5xl lg:text-6xl">
            Content gets attention.{" "}
            <span className="text-primary">Performance turns it into revenue.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Skadworks combines short-form content, organic social and paid advertising to build a
            customer acquisition system designed to generate attention, leads and sales — not just
            impressions.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PrimaryButton size="lg">Book Your Free Audit</PrimaryButton>
            <a
              href="#model"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:border-foreground/30 hover:bg-surface"
            >
              See How We Work
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
          <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="size-1.5 animate-pulse-dot rounded-full bg-primary" aria-hidden />
            30-minute Creative &amp; Paid Ad Account Audit • No obligation
          </p>
        </div>

        <FlowVisual />
      </div>
    </section>
  );
}

function FlowVisual() {
  return (
    <div className="relative rounded-2xl border border-border bg-surface/80 p-5 shadow-glow backdrop-blur sm:p-6">
      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        <span>Acquisition system</span>
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 animate-pulse-dot rounded-full bg-primary" /> Live loop
        </span>
      </div>

      <ol className="relative mt-6 grid grid-cols-5 gap-1">
        <svg
          className="pointer-events-none absolute inset-x-0 top-6 h-px w-full overflow-visible"
          aria-hidden
        >
          <line
            x1="10%"
            x2="90%"
            y1="0"
            y2="0"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 6"
            className="animate-flow text-primary/60"
          />
        </svg>
        {stages.map(({ label, icon: Icon }, i) => (
          <li key={label} className="relative flex flex-col items-center gap-3 text-center">
            <span
              className={cn(
                "relative z-10 flex size-12 items-center justify-center rounded-xl border bg-background",
                i === stages.length - 1
                  ? "border-primary bg-primary text-primary-foreground shadow-glow"
                  : "border-border text-foreground",
              )}
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <Icon className="size-5" />
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:text-[11px]">
              {label}
            </span>
          </li>
        ))}
      </ol>

      <div className="mt-7 grid grid-cols-2 gap-3">
        {metrics.map((m, i) => (
          <div
            key={m.name}
            className="rounded-xl border border-border bg-background/70 p-4 transition-colors hover:border-primary/40"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">{m.name}</span>
              <span className="text-[10px] text-primary">0{i + 1}</span>
            </div>
            <div className="mt-2 text-lg font-semibold tracking-tight">{m.value}</div>
            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-surface-2">
              <div
                className="h-full rounded-full bg-primary/80"
                style={{ width: `${45 + i * 15}%` }}
                aria-hidden
              />
            </div>
            <p className="mt-2 text-[11px] text-muted-foreground">{m.note}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-[11px] text-muted-foreground">
        Illustrative system view — not client data.
      </p>
    </div>
  );
}
