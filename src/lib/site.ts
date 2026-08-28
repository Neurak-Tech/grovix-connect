// Central place for company details used across the site.
// Edit these values once and they update everywhere.

export const SITE = {
  name: "Grovix Ventures Pvt Ltd",
  legalName: "GROVIX VENTURES PRIVATE LIMITED",
  tagline: "AI and Automation Solutions",
  description:
    "Grovix Ventures Pvt Ltd is an Indian holding company building the future of business growth — housing Lead Foundry (performance marketing) and AiHive (AI & business automation).",
  email: "info@grovix.co.in",
  phoneDisplay: "+91 98740 33120",
  whatsappNumber: "919874033120",
  gstin: "19AANCG0898C1ZA",
  cin: "U72900WB2024PTC268441",
  hours: "Monday–Saturday, 10:00 AM – 6:30 PM IST",
  address: {
    line1: "32, Chowringhee Road, Park Street",
    line2: "Kolkata, West Bengal – 700071, India",
  },
  foundingCity: "Siliguri, West Bengal",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=32%20Chowringhee%20Road%2C%20Park%20Street%2C%20Kolkata%20700071&z=16&output=embed",
  founder: {
    name: "Aryan Lohia",
    title: "Founder & Director",
    bio: "Aryan founded Grovix Ventures after a decade advising Indian SMBs on growth systems that actually close. He now directs both arms of the group — Lead Foundry’s performance practice and AiHive’s product roadmap — with a single brief: every rupee of spend and every automated hour should show up as revenue.",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/grovix-ventures",
    instagram: "https://www.instagram.com/grovixventures",
    twitter: "https://x.com/grovixventures",
    youtube: "https://www.youtube.com/@GrovixVentures",
  },
} as const;

export const LAST_UPDATED = "28 August 2026";

export const PRIMARY_NAV = [
  { to: "/", label: "Home" },
  { to: "/lead-foundry", label: "Lead Foundry" },
  { to: "/aihive", label: "AiHive" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export const LEGAL_NAV = [
  { to: "/privacy", label: "Privacy Policy", short: "Privacy" },
  { to: "/terms", label: "Terms & Conditions", short: "Terms" },
] as const;
