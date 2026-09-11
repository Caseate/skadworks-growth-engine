import { Instagram, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { PrimaryButton } from "./booking";
import { Wordmark } from "./Navbar";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[140px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 className="heading-tight text-3xl sm:text-4xl lg:text-5xl">
          Stop creating content that sits there.{" "}
          <span className="text-primary">Build a system that turns attention into customers.</span>
        </h2>
        <div className="mt-10 flex flex-col items-center gap-4">
          <PrimaryButton size="lg">Book Your Free Audit</PrimaryButton>
          <p className="text-xs text-muted-foreground">30 minutes · No obligation · Direct with the founder</p>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Wordmark />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {siteConfig.positioning}
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Navigate</p>
          <ul className="mt-4 space-y-2">
            {siteConfig.nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-sm transition-colors hover:text-primary">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Connect</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href={siteConfig.social.instagram}
                className="flex items-center gap-2 text-sm transition-colors hover:text-primary"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="size-4" /> Instagram
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.linkedin}
                className="flex items-center gap-2 text-sm transition-colors hover:text-primary"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="size-4" /> LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.contact.email}`} className="text-sm transition-colors hover:text-primary">
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Skadworks. All rights reserved.</p>
          <ul className="flex gap-5">
            {siteConfig.legal.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
