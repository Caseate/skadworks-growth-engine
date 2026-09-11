import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Section } from "./booking";

export const faqs = [
  {
    q: "What exactly does Skadworks do?",
    a: "Skadworks is a creative performance agency. We produce short-form content and UGC-style creative, manage organic social, and run paid advertising on Meta and Google — as one connected system built to generate leads and sales, not just views.",
  },
  {
    q: "Do you run Meta and Google Ads?",
    a: "Yes. We manage Meta (Facebook & Instagram) and Google Ads accounts end-to-end: structure, creative testing, landing page and tracking QA, and ongoing optimisation. Paid media is the engine that scales the creative we produce.",
  },
  {
    q: "Do you create the UGC and short-form content yourselves?",
    a: "Yes. We handle research, hooks, scripting and production of short-form and UGC-style assets. Depending on the project we shoot in-house, work with your team, or coordinate creators — always with a performance brief behind every video.",
  },
  {
    q: "Can you manage our Instagram account?",
    a: "Yes. Organic social management covers strategy, Reels-first content calendars, posting, community management and reporting. Organic builds the trust and signal that makes paid campaigns convert better.",
  },
  {
    q: "Do you guarantee ROAS or results?",
    a: "No — and you should be cautious of anyone who does. What we guarantee is a structured testing process, transparent reporting on the full chain from hook rate to revenue, and fast decisions based on real data.",
  },
  {
    q: "How much should we spend on ads?",
    a: "It depends on your margins, offer and goals. In the audit we work out a realistic testing budget and what it needs to prove before scaling. We'd rather start smaller with strong creative than large with weak creative.",
  },
  {
    q: "How long until we see results?",
    a: "Setup and first creative batches typically take two to three weeks. Early signal on hooks and angles usually appears within the first few weeks of testing; scaling decisions come once the data supports them. Timelines vary by market and offer.",
  },
  {
    q: "Can we hire you for just one service?",
    a: "Yes. Content, organic social and paid media are each available on their own. That said, the results compound when they run together — which is why the full system is what we recommend for most clients.",
  },
  {
    q: "Who is Skadworks a good fit for?",
    a: "Founders and brands with a validated product or service, a real budget for creative plus distribution, and a desire to work directly with the strategist doing the work. See the fit section above for the details.",
  },
  {
    q: "How do we get started?",
    a: "Book the free 30-minute audit. We review your creative, accounts and funnel, and give you a prioritised list of what to fix. If it makes sense to work together, we'll propose a scope from there.",
  },
];

export function FAQ() {
  return (
    <Section id="faq" eyebrow="FAQ" title="Questions we get asked most." align="center">
      <Accordion type="single" collapsible className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface px-6">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`item-${i}`} className="border-border last:border-b-0">
            <AccordionTrigger className="py-5 text-base font-medium hover:no-underline [&>svg]:text-primary">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
