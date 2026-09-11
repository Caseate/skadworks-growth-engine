export const siteConfig = {
  name: "Skadworks",
  tagline: "Creative Performance Agency",
  positioning:
    "We create the content, build the attention, and run the paid media that turns attention into revenue.",
  founder: {
    name: "Sujeeth",
    role: "Performance Marketer & Web Developer",
    location: "India",
  },
  /** Paste a Calendly / Cal.com / Google booking URL here. Leave empty to show the placeholder. */
  bookingUrl: "",
  contact: {
    email: "hello@skadworks.com",
    whatsapp: "",
  },
  social: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
} as const;
