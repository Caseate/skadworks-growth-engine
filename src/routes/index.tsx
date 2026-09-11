import { createFileRoute } from "@tanstack/react-router";
import { BookingProvider } from "@/components/site/booking";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Services } from "@/components/site/Services";
import { Model } from "@/components/site/Model";
import { Work } from "@/components/site/Work";
import { Performance } from "@/components/site/Performance";
import { Process } from "@/components/site/Process";
import { Founder } from "@/components/site/Founder";
import { Audit } from "@/components/site/Audit";
import { Fit } from "@/components/site/Fit";
import { FAQ, faqs } from "@/components/site/FAQ";
import { FinalCTA, Footer } from "@/components/site/FinalCTA";

const title = "Skadworks — Creative Performance Agency";
const description =
  "Short-form content, organic social and Meta & Google ads combined into one customer acquisition system. Book a free 30-minute creative & paid ad audit.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Skadworks",
            description,
            founder: { "@type": "Person", name: "Sujeeth", jobTitle: "Performance Marketer & Web Developer" },
            areaServed: "IN",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <BookingProvider>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Model />
        <Work />
        <Performance />
        <Process />
        <Founder />
        <Audit />
        <Fit />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </BookingProvider>
  );
}
