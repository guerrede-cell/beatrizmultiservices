import type { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/ServiceHero";
import { ImmigrationIcon } from "@/components/ServiceIcons";
import FeatureGrid from "@/components/FeatureGrid";
import StepsGrid from "@/components/StepsGrid";
import FaqList from "@/components/FaqList";
import DisclaimerBand from "@/components/DisclaimerBand";
import CtaBand from "@/components/CtaBand";
import SchemaScript from "@/components/SchemaScript";
import Reveal from "@/components/Reveal";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Immigration Document Specialist in Harrisburg, PA",
  description:
    "Bilingual immigration document preparation assistance in Harrisburg, PA — family petitions, green card renewal, work permits, naturalization forms, and more. Not legal advice.",
  alternates: { canonical: "/services/immigration-document-specialist" },
};

const faqs = [
  {
    question: "Are you an immigration attorney?",
    answer:
      "No. We provide document preparation assistance only and cannot give legal advice or represent you in immigration proceedings. We can help you complete forms accurately and explain what's being asked.",
  },
  {
    question: "What should I bring to my appointment?",
    answer: "Any existing immigration documents, identification, and any letters or notices you've received. We'll provide a full checklist based on your specific form.",
  },
  {
    question: "Do you offer service in Spanish?",
    answer: "Yes, all appointments are available in English or Spanish.",
  },
  {
    question: "How long does the process take?",
    answer: "Form completion appointments typically take 30–60 minutes depending on complexity. Processing times after submission are set by immigration authorities, not by us.",
  },
];

export default function ImmigrationPage() {
  return (
    <>
      <SchemaScript data={serviceSchema("immigration-document-specialist")} />
      <SchemaScript
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Immigration Document Specialist", url: `${siteConfig.url}/services/immigration-document-specialist` },
        ])}
      />

      <ServiceHero
        eyebrow="Immigration Document Specialist"
        title="Clear guidance through complex paperwork."
        description="Immigration forms are confusing, and one mistake can cause months of delay. We help you complete the right forms, correctly, in English or Spanish — with patience and without judgment."
        primaryCta="Book a consultation"
        secondaryCta="Ask a question"
        secondaryHref="/contact"
        icon={<ImmigrationIcon />}
      />

      <FeatureGrid
        eyebrow="How we can help"
        title="Common forms we assist with"
        items={[
          { title: "Family Petitions", description: "Help completing petitions to bring family members to the U.S. or adjust their status." },
          { title: "Green Card Renewal", description: "Guidance filling out renewal and replacement forms for lawful permanent residents." },
          { title: "Work Permits", description: "Assistance completing employment authorization applications accurately and on time." },
          { title: "Naturalization", description: "Support preparing citizenship application paperwork and gathering required documents." },
          { title: "Travel Documents", description: "Help with advance parole and re-entry permit applications for travel abroad." },
          { title: "Form Translation Support", description: "Bilingual help understanding what each form is asking for, in plain English or Spanish." },
        ]}
      />

      <StepsGrid
        eyebrow="How it works"
        title="Step by step, no confusion"
        steps={[
          { title: "Consultation", description: "We talk through what you're trying to accomplish and which forms apply to your situation." },
          { title: "Gather Documents", description: "We'll give you a clear checklist of exactly what's needed before we begin." },
          { title: "Complete the Forms", description: "We fill out your paperwork accurately, double-checking every field with you." },
          { title: "Review & Submit", description: "You review everything before it's filed, so nothing goes out without your approval." },
        ]}
      />

      <DisclaimerBand>
        Beatriz Multi Service provides document preparation assistance only. We are not attorneys and cannot
        provide legal advice, represent you before immigration authorities, or tell you which immigration
        options are best for your case. For legal advice, please consult a licensed immigration attorney.
      </DisclaimerBand>

      <section id="details" className="grid grid-cols-1 items-center gap-[60px] px-[7%] py-[100px] md:grid-cols-2">
        <Reveal className="overflow-hidden rounded">
          <div className="relative h-[400px] md:h-[560px]">
            <Image src="/images/working-photo.jpg" alt="Beatriz at work" fill className="object-cover object-[center_25%]" />
          </div>
        </Reveal>
        <Reveal>
          <div className="mb-[18px] text-[12px] tracking-[3px] uppercase text-gold">Why clients choose us</div>
          <h2 className="mb-5 text-[36px] text-navy">Patient, thorough, and judgment-free.</h2>
          <p className="mb-4 text-[15.5px] leading-[1.85] text-[#4B4E5A]">
            Immigration paperwork can feel overwhelming, especially when English isn&apos;t your first
            language. We slow down, explain each form in plain terms, and make sure you understand exactly
            what you&apos;re submitting.
          </p>
          <p className="mb-4 text-[15.5px] leading-[1.85] text-[#4B4E5A]">
            Every appointment is confidential and treated with the same care and respect, regardless of your
            situation.
          </p>
          <p className="mb-4 text-[15.5px] leading-[1.85] text-[#4B4E5A]">
            Bilingual service in English and Spanish, so nothing gets lost in translation.
          </p>
          <div className="mt-2 font-serif text-[22px] italic text-gold">&mdash; Beatriz Garcia, Immigration Document Specialist</div>
        </Reveal>
      </section>

      <FaqList items={faqs} />

      <CtaBand title="Need help with immigration paperwork?" description="Book a consultation and let's get your documents in order." />
    </>
  );
}
