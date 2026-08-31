// Central place for site-wide facts. Update phone/email/address/socials here
// once and every page, the sitemap, and the structured data all stay in sync.

export const siteConfig = {
  name: "Beatriz Multi Service",
  shortName: "Beatriz Multi Service",
  legalName: "Beatriz Garcia",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.beatrizmultiservices.com",
  description:
    "Bilingual wedding officiant, notary, immigration document specialist, tax specialist, interpreter, and mutual divorce document assistance in Harrisburg, PA. English and Spanish service.",
  phone: "+1-717-317-4098",
  phoneDisplay: "717-317-4098",
  email: "info@beatrizmultiservices.com",
  address: {
    city: "Harrisburg",
    region: "PA",
    country: "US",
  },
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
  ogImage: "/og-default.jpg",
};

export type ServiceKey =
  | "wedding-officiant"
  | "notary"
  | "immigration-document-specialist"
  | "tax-specialist"
  | "interpreter-services"
  | "mutual-divorces";

export const services: {
  key: ServiceKey;
  slug: string;
  name: string;
  shortDescription: string;
}[] = [
  {
    key: "wedding-officiant",
    slug: "wedding-officiant",
    name: "Wedding Officiant",
    shortDescription: "Personal, heartfelt ceremonies tailored to your story.",
  },
  {
    key: "notary",
    slug: "notary",
    name: "Notary Services",
    shortDescription: "National Notary Association certified, fast and reliable.",
  },
  {
    key: "immigration-document-specialist",
    slug: "immigration-document-specialist",
    name: "Immigration Document Specialist",
    shortDescription: "Help completing forms to enter and live in the U.S.",
  },
  {
    key: "tax-specialist",
    slug: "tax-specialist",
    name: "Tax Specialist",
    shortDescription: "Personal income tax preparation, including back taxes.",
  },
  {
    key: "interpreter-services",
    slug: "interpreter-services",
    name: "Interpreter Services",
    shortDescription: "Clear, accurate interpretation between English and Spanish.",
  },
  {
    key: "mutual-divorces",
    slug: "mutual-divorces",
    name: "Mutual Divorces",
    shortDescription: "Guidance through the mutual divorce paperwork process.",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
