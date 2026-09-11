import { useState } from "react";
import { Play } from "lucide-react";
import { Section } from "./booking";
import { cn } from "@/lib/utils";

const filters = ["All", "Short-form", "UGC", "Reels", "Ad Creative", "Product", "Brand Story", "Performance Creative"];

type Tile = { tag: string; ratio: string; hue: number };

const tiles: Tile[] = [
  { tag: "Short-form", ratio: "aspect-[9/16]", hue: 128 },
  { tag: "Ad Creative", ratio: "aspect-square", hue: 200 },
  { tag: "UGC", ratio: "aspect-[4/5]", hue: 90 },
  { tag: "Brand Story", ratio: "aspect-[16/10]", hue: 260 },
  { tag: "Reels", ratio: "aspect-[9/16]", hue: 150 },
  { tag: "Product", ratio: "aspect-square", hue: 40 },
  { tag: "Performance Creative", ratio: "aspect-[4/5]", hue: 128 },
  { tag: "Ad Creative", ratio: "aspect-[16/10]", hue: 300 },
  { tag: "UGC", ratio: "aspect-[9/16]", hue: 180 },
];

export function Work() {
  const [active, setActive] = useState("All");
  const visible = tiles.filter((t) => active === "All" || t.tag === active);

  return (
    <Section
      id="work"
      eyebrow="Work"
      title="Creative built to stop the scroll."
      lead="Selected creative will be added here as projects go live. Every card below is a labelled placeholder — no borrowed or fabricated work."
    >
      <div className="-mx-5 mb-8 overflow-x-auto px-5 sm:mx-0 sm:px-0 [scrollbar-width:none]" role="tablist" aria-label="Filter work">
        <div className="flex min-w-max gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={active === f}
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-medium transition-colors",
                active === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
        {visible.map((t, i) => (
          <article
            key={`${t.tag}-${i}`}
            className={cn(
              "group relative break-inside-avoid overflow-hidden rounded-2xl border border-border bg-surface",
              t.ratio,
            )}
          >
            <div
              className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
              style={{
                background: `radial-gradient(120% 90% at 30% 20%, oklch(0.35 0.08 ${t.hue} / 0.6), transparent 60%), linear-gradient(180deg, oklch(0.2 0 0), oklch(0.15 0 0))`,
              }}
              aria-hidden
            />
            <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <span className="w-fit rounded-full border border-border bg-background/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] backdrop-blur">
                {t.tag}
              </span>
              <div className="flex items-end justify-between gap-2">
                <p className="text-xs leading-snug text-muted-foreground">
                  Your next winning creative could live here.
                </p>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-background/60 text-foreground backdrop-blur transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                  <Play className="size-3.5" />
                </span>
              </div>
            </div>
            <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/10" aria-hidden />
          </article>
        ))}
      </div>
    </Section>
  );
}
