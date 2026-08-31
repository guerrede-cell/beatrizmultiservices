import { siteConfig, services, ServiceKey } from "./site-config";

// Shared LocalBusiness / ProfessionalService node. Referenced by @id from
// service pages so search engines connect each service back to the same
// business entity instead of treating them as unrelated.
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    areaServed: "Harrisburg, PA",
    priceRange: "$$",
    knowsLanguage: ["en", "es"],
    founder: {
      "@type": "Person",
      name: "Beatriz Garcia",
    },
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram, siteConfig.social.linkedin],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          url: `${siteConfig.url}/services/${s.slug}`,
        },
      })),
    },
  };
}

// Per-service Service schema, linked back to the LocalBusiness via @id.
export function serviceSchema(key: ServiceKey) {
  const svc = services.find((s) => s.key === key);
  if (!svc) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: svc.name,
    name: svc.name,
    description: svc.shortDescription,
    url: `${siteConfig.url}/services/${svc.slug}`,
    provider: { "@id": `${siteConfig.url}/#business` },
    areaServed: "Harrisburg, PA",
    availableLanguage: ["English", "Spanish"],
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// FAQPage schema — pass the same Q/A pairs rendered on the page so the
// visible content and structured data always match (required by Google).
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
