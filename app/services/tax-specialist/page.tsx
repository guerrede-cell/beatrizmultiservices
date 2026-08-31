import type { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/ServiceHero";
import { TaxIcon } from "@/components/ServiceIcons";
import FeatureGrid from "@/components/FeatureGrid";
import StepsGrid from "@/components/StepsGrid";
import FaqList from "@/components/FaqList";
import CtaBand from "@/components/CtaBand";
import SchemaScript from "@/components/SchemaScript";
import Reveal from "@/components/Reveal";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Tax Specialist in Harrisburg, PA",
  description:
    "Bilingual personal income tax preparation in Harrisburg, PA, including back taxes, ITIN applications, self-employed and gig income filing, and amended returns.",
  alternates: { canonical: "/services/tax-specialist" },
};

const faqs = [
  {
    question: "What documents do I need to bring?",
    answer: "Photo ID, Social Security or ITIN numbers for you and any dependents, W-2s or 1099s, and last year's return if available. A full checklist is provided when you book.",
  },
  {
    question: "I haven't filed in a few years — can you help?",
    answer: "Yes. Catching up on back taxes is one of the most common things we help clients with. We'll work through prior years one at a time.",
  },
  {
    question: "Do you offer service in Spanish?",
    answer: "Yes, all tax appointments are available in English or Spanish.",
  },
  {
    question: "Can you help if I'm self-employed or freelance?",
    answer: "Yes, we regularly help clients with 1099 and self-employment income, including deductible expenses.",
  },
];

export default function TaxPage() {
  return (
    <>
      <SchemaScript data={serviceSchema("tax-specialist")} />
      <SchemaScript
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Tax Specialist", url: `${siteConfig.url}/services/tax-specialist` },
        ])}
      />

      <ServiceHero
        eyebrow="Tax Specialist"
        title="Tax season, handled — without the stress."
        description="From a straightforward personal return to catching up on back taxes, Beatriz walks you through the process clearly, in English or Spanish, so you know exactly what you're filing and why."
        primaryCta="Book a tax appointment"
        secondaryCta="Ask a question"
        secondaryHref="/contact"
        icon={<TaxIcon />}
      />

      <FeatureGrid
        eyebrow="How we can help"
        title="Tax services we offer"
        items={[
          { title: "Personal Income Tax", description: "Accurate, complete preparation and filing of your individual state and federal tax return." },
          { title: "Back Taxes", description: "Catching up on unfiled returns from previous years, without the shame or the runaround." },
          { title: "ITIN Applications", description: "Help applying for or renewing an Individual Taxpayer Identification Number." },
          { title: "Self-Employed & Gig Income", description: "Filing support for freelancers, contractors, and small side-business income." },
          { title: "Dependents & Credits", description: "Making sure you claim every credit and deduction you're entitled to — nothing left on the table." },
          { title: "Amended Returns", description: "Correcting a previously filed return that had an error or missing information." },
        ]}
      />

      <StepsGrid
        eyebrow="How it works"
        title="Simple, transparent, no surprises"
        steps={[
          { title: "Book", description: "Schedule your appointment online or by phone — in-person or remote." },
          { title: "Bring Your Documents", description: "W-2s, 1099s, prior returns, and ID — we'll send a checklist ahead of time." },
          { title: "We Prepare Your Return", description: "We review everything with you and explain what's being filed before it's submitted." },
          { title: "File & Confirm", description: "Your return is filed and you get confirmation, plus a copy for your records." },
        ]}
      />

      <section id="details" className="grid grid-cols-1 items-center gap-[60px] px-[7%] py-[100px] md:grid-cols-2">
        <Reveal className="overflow-hidden rounded">
          <div className="relative h-[400px] md:h-[560px]">
            <Image src="/images/documents-photo.jpg" alt="Beatriz reviewing documents" fill className="object-cover" />
          </div>
        </Reveal>
        <Reveal>
          <div className="mb-[18px] text-[12px] tracking-[3px] uppercase text-gold">Why clients choose us</div>
          <h2 className="mb-5 text-[36px] text-navy">Honest guidance, every filing season.</h2>
          <p className="mb-4 text-[15.5px] leading-[1.85] text-[#4B4E5A]">
            Taxes shouldn&apos;t feel confusing or intimidating. We take the time to explain what&apos;s on
            your return and why, so you leave every appointment understanding your own finances a little
            better.
          </p>
          <p className="mb-4 text-[15.5px] leading-[1.85] text-[#4B4E5A]">
            Behind on filing? No judgment &mdash; we help clients catch up on back taxes all the time, and
            get them back on track.
          </p>
          <p className="mb-4 text-[15.5px] leading-[1.85] text-[#4B4E5A]">
            Bilingual service in English and Spanish, every step of the way.
          </p>
          <div className="mt-2 font-serif text-[22px] italic text-gold">&mdash; Beatriz Garcia, Tax Specialist</div>
        </Reveal>
      </section>

      <FaqList items={faqs} />

      <CtaBand title="Ready to file?" description="Book an appointment and let's get your taxes done right." />
    </>
  );
}
