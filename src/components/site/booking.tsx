import { createContext, useContext, useState, type ReactNode } from "react";
import { ArrowRight, CalendarDays, Check, Clock, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { siteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

const BookingContext = createContext<{ open: () => void }>({ open: () => {} });

export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <BookingContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-surface p-6 shadow-glow outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:p-8">
            <Dialog.Close className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground">
              <X className="size-4" />
              <span className="sr-only">Close</span>
            </Dialog.Close>
            <p className="eyebrow">Free audit</p>
            <Dialog.Title className="heading-tight mt-3 text-2xl sm:text-3xl">
              Book your 30-minute Creative &amp; Paid Ad Audit
            </Dialog.Title>
            <Dialog.Description className="mt-3 text-sm text-muted-foreground">
              A diagnostic session with {siteConfig.founder.name}. We look at your creative, your ad
              account and your funnel — and tell you exactly where the leak is. No pitch, no obligation.
            </Dialog.Description>
            <div className="mt-6">
              <BookingEmbed />
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </BookingContext.Provider>
  );
}

export function BookingEmbed({ className }: { className?: string }) {
  if (siteConfig.bookingUrl) {
    return (
      <iframe
        title="Book your free audit"
        src={siteConfig.bookingUrl}
        className={cn("h-[560px] w-full rounded-xl border border-border bg-background", className)}
      />
    );
  }
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const slots = ["10:00", "11:30", "14:00", "16:30"];
  return (
    <div className={cn("rounded-xl border border-dashed border-border bg-background/60 p-5", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium">
          <CalendarDays className="size-4 text-primary" /> Pick a slot
        </div>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="size-3" /> 30 min · IST
        </span>
      </div>
      <div className="mt-4 grid grid-cols-5 gap-2" aria-hidden>
        {days.map((d, i) => (
          <div
            key={d}
            className={cn(
              "rounded-lg border border-border py-2 text-center text-xs",
              i === 1 ? "border-primary/50 bg-primary/10 text-primary" : "text-muted-foreground",
            )}
          >
            {d}
          </div>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-4 gap-2" aria-hidden>
        {slots.map((s, i) => (
          <div
            key={s}
            className={cn(
              "rounded-lg border border-border py-2 text-center text-xs text-muted-foreground",
              i === 2 && "border-primary/50 text-foreground",
            )}
          >
            {s}
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Calendar placeholder — add your booking link in <code className="text-foreground">siteConfig.ts</code> to
        embed live availability.
      </p>
      <a
        href={`mailto:${siteConfig.contact.email}?subject=Free%20Creative%20%26%20Paid%20Ad%20Audit`}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01]"
      >
        Request a slot by email <ArrowRight className="size-4" />
      </a>
      <ul className="mt-4 grid gap-1.5 text-xs text-muted-foreground sm:grid-cols-3">
        {["No obligation", "Founder-led session", "Actionable next steps"].map((t) => (
          <li key={t} className="flex items-center gap-1.5">
            <Check className="size-3 text-primary" /> {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PrimaryButton({
  children,
  className,
  size = "md",
}: {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const { open } = useBooking();
  return (
    <button
      type="button"
      onClick={open}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full bg-primary font-semibold text-primary-foreground shadow-glow transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-5 py-2.5 text-sm",
        size === "lg" && "px-7 py-3.5 text-base",
        className,
      )}
    >
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}

export function GhostLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary",
        className,
      )}
    >
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

export function Section({
  id,
  children,
  className,
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  id?: string;
  children?: ReactNode;
  className?: string;
  eyebrow?: string;
  title?: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-28", className)}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {(eyebrow || title) && (
          <header className={cn("mb-12 max-w-3xl sm:mb-16", align === "center" && "mx-auto text-center")}>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 className="heading-tight mt-4 text-3xl sm:text-4xl lg:text-5xl">{title}</h2>}
            {lead && <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{lead}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
