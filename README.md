# Skadworks Growth Studio

Build a premium, conversion-focused homepage for Skadworks, a modern Creative Performance Agency founded by Sujeeth (Performance Marketer & Web Developer based in India).

Key Brand & Strategic Positioning:
- Category: Creative Performance Agency
- Positioning: "We create the content, build the attention, and run the paid media that turns attention into revenue."
- Core concept: "Content is the fuel. Paid Ads are the engine." Skadworks bridges content creators who can't connect to revenue and performance agencies using weak creative.
- Primary CTA: "Book Your Free Audit" (leads to 30-minute diagnostic session placeholder / modal / configurable calendar link).
- Secondary CTA: "See How We Work".
- DO NOT invent fake testimonials, fake client logos, fake revenue figures, fake ROAS stats, or awards. Use clearly labeled, elegant placeholders where real proof can be slotted in.

Design Direction & Palette:
- Premium, dark, editorial, performance-marketing aesthetic (high-end growth studio / tech company feel).
- Background: #080808 (near-black), Surface: #111111, Secondary Surface: #161616.
- Text: #F5F5F5 primary, #A1A1AA secondary.
- Border: rgba(255, 255, 255, 0.10).
- Accent: A single sophisticated electric/lime green accent (e.g., #22c55e or #84cc16 / neon-lime tone) used consistently.
- Clean typography (Inter/Geist/sans-serif), tight heading letter-spacing, strong whitespace, subtle glows and borders, rounded modern card surfaces.

Sections to Implement:
1. Header / Navbar: Sticky transparent dark navigation with blur on scroll, SKADWORKS wordmark, links (Services, Work, Process, About, FAQ), mobile drawer, and "Book Free Audit →" primary button.
2. Hero Section:
   - Eyebrow: "CREATIVE PERFORMANCE AGENCY"
   - Headline: "Content gets attention. Performance turns it into revenue."
   - Subhead: "Skadworks combines short-form content, organic social and paid advertising to build a customer acquisition system designed to generate attention, leads and sales — not just impressions."
   - CTAs: "Book Your Free Audit →" and "See How We Work ↓"
   - Trust badge: "30-minute Creative & Paid Ad Account Audit • No obligation"
   - Hero visual: Sophisticated interactive/animated flow showing CONTENT → ATTENTION → ADS → CONVERSIONS → REVENUE with metric indicator cards (Creative, Distribution, Conversion, Revenue).
3. Problem / Positioning Section:
   - Eyebrow: "THE PROBLEM"
   - Headline: "Most agencies own one piece of the growth problem."
   - Contrast cards: Content agencies create videos / Social media agencies create posts / Ad agencies buy traffic vs "We connect the pieces" (Content creates attention, Social builds trust, Paid Media scales what works). "One creative performance system. One accountable growth partner."
4. Three-Pillar Services Grid:
   - 01: Short-Form Content & UGC Assets
   - 02: Organic Social Management
   - 03: Paid Advertising Management (Meta & Google)
   - With numbers, icons, deliverables, outcomes, and CTA links.
5. Core Differentiator Section:
   - "THE SKADWORKS MODEL": "Content is the fuel. Paid Ads are the engine."
   - Horizontal system diagram: IDEAS → CREATIVE → ORGANIC SIGNAL → PAID DISTRIBUTION → LANDING PAGE → CONVERSION → DATA → BETTER CREATIVE.
   - 3 pillars: Create, Test, Scale. CTA: "Build Your Creative Performance System →".
6. Creative Portfolio / Work Section (#work):
   - "Creative built to stop the scroll." Filterable/masonry grid for short-form, UGC, Reels, Ad Creative, Product, Brand Story, Performance Creative. Clean, elegant placeholder cards ("Your next winning creative could live here") with hover zoom and overlay effects.
7. Performance Section:
   - Eyebrow: "CREATIVE × PERFORMANCE"
   - Headline: "Views are useful. Revenue is the scoreboard."
   - Explanatory metric cards without fake stats: Attention (Hook/Retention), Engagement (CTR), Acquisition (CAC/CPL), Revenue (ROAS).
8. Process Section:
   - "A tighter system. Fewer moving parts. Better feedback loops."
   - 4 steps: 01 Diagnose, 02 Build, 03 Test, 04 Scale with connecting indicators.
9. "Zero Agency Bloat" Founder Section:
   - Eyebrow: "WHY SKADWORKS"
   - Headline: "Zero agency bloat. Just the work that moves the needle."
   - Founder profile for Sujeeth (Performance Marketer & Web Developer), authentic copy about working directly with the strategist, no bloated meetings or vanity metrics. 3 badges: Founder-Led, Performance-Minded, Lean by Design. CTA: "Talk Directly With Sujeeth →".
10. Audit Lead Magnet Section:
    - High-contrast card: "Your ads might not be the problem. Your creative might be."
    - 8-point audit checklist (Creative quality, content consistency, ad structure, creative fatigue, messaging/offers, landing page conversion, tracking, CAC/ROAS opportunities).
    - Booking calendar interface/placeholder with configurable link.
11. Qualification Section ("IS THIS A FIT?"):
    - Side-by-side: "Good fit" vs "Not ideal" to build authority and filter prospects.
12. Accessible FAQ Accordion:
    - Complete accordion answering all 10 key agency questions (what Skadworks does, Meta/Google ads, UGC content creation, Instagram management, ROAS guarantees, ad spend guidance, timeline, service packaging, client fit, getting started).
13. Final CTA:
    - "Stop creating content that sits there. Build a system that turns attention into customers."
14. Footer:
    - SKADWORKS branding, tagline, nav links, social placeholders (Instagram, LinkedIn), copyright 2026, privacy/terms.

Technical & UX:
- Fully responsive across desktop, tablet, and mobile.
- Centralized configuration object for booking URLs, contact links, and social links (`siteConfig.ts`).
- Interactive modal / booking sheet when clicking "Book Your Free Audit".
- Smooth scrolling to sections (#services, #work, #process, #about, #faq, #audit).
- Strict adherence to semantic HTML, accessibility, meta tags, and SEO title/description.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://skadworks-growth-engine.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/35bbfbc1-5304-4e79-877e-cbe9e12e2032).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
