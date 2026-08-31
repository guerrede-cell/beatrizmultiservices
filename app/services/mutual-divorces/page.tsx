import type { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/ServiceHero";
import { DivorceIcon } from "@/components/ServiceIcons";
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
  title: "Mutual Divorce Document Assistance in Harrisburg, PA",
  description:
    "Private, bilingual document preparation assistance for uncontested mutual divorces in Harrisburg, PA. Not legal advice — for licensed attorney referrals, see our disclaimer.",
  alternates: { canonical: "/services/mutual-divorces" },
};

const faqs = [
  {
    question: "What qualifies as a \"mutual\" divorce?",
    answer:
      "Both spouses agree the marriage should end and agree on the major terms — property, support, and any parenting arrangements. If there's disagreement on these points, this service may not be the right fit, and we'll let you know.",
  },
  {
    question: "Are you a divorce attorney?",
    answer: "No. We provide document preparation only and cannot give legal advice or represent you in court. For legal advice, please consult a family law attorney.",
  },
  { question: "Is this confidential?", answer: "Yes, completely. Every appointment is private and treated with discretion." },
  { question: "Is service available in Spanish?", answer: "Yes, all appointments are available in English or Spanish." },
];

export default function DivorcePage() {
  return (
    <>
      <SchemaScript data={serviceSchema("mutual-divorces")} />
      <SchemaScript
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Mutual Divorces", url: `${siteConfig.url}/services/mutual-divorces` },
        ])}
      />

      <ServiceHero
        eyebrow="Mutual Divorces"
        title="Support through an uncontested divorce, at your own pace."
        description="When both spouses agree the marriage is over, we help you prepare the paperwork clearly and correctly — with patience, privacy, and no judgment, in English or Spanish."
        primaryCta="Book a consultation"
        secondaryCta="Ask a question"
        secondaryHref="/contact"
        icon={<DivorceIcon />}
      />

      <FeatureGrid
        eyebrow="What is a mutual divorce?"
        title="How we can help"
        items={[
          { title: "Uncontested Filing", description: "For couples who both agree to the divorce and its terms, we help prepare the required paperwork." },
          { title: "Document Preparation", description: "Accurate completion of the forms needed to file, so nothing is missing or incorrect." },
          { title: "Settlement Agreements", description: "Help documenting agreed-upon terms around property, support, or parenting arrangements." },
          { title: "Filing Guidance", description: "Clear explanation of where and how to file your completed paperwork with the court." },
          { title: "Bilingual Support", description: "Every step explained clearly in English or Spanish, so nothing feels confusing or rushed." },
          { title: "Complete Privacy", description: "A confidential, judgment-free space to handle a difficult and personal process." },
        ]}
      />

      <StepsGrid
        eyebrow="How it works"
        title="A clear, unhurried process"
        steps={[
          { title: "Consultation", description: "A private conversation to understand your situation and confirm this path fits." },
          { title: "Gather Information", description: "We'll go over exactly what information and documents are needed to prepare your paperwork." },
          { title: "Prepare Documents", description: "We complete the required forms, reviewing every detail with you before anything is finalized." },
          { title: "File", description: "You leave with your completed paperwork and clear guidance on next steps for filing." },
        ]}
      />

      <DisclaimerBand>
        Beatriz Multi Service provides document preparation assistance only. We are not attorneys and cannot
        provide legal advice or represent you in court. Mutual divorce document assistance is intended for
        couples who fully agree on the terms of their divorce. If your situation is contested or involves
        disputes, please consult a licensed family law attorney.
      </DisclaimerBand>

      <section id="details" className="grid grid-cols-1 items-center gap-[60px] px-[7%] py-[100px] md:grid-cols-2">
        <Reveal className="overflow-hidden rounded">
          <div className="relative h-[400px] md:h-[560px]">
            <Image src="/images/documents-photo.jpg" alt="Beatriz reviewing documents" fill className="object-cover" />
          </div>
        </Reveal>
        <Reveal>
          <div className="mb-[18px] text-[12px] tracking-[3px] uppercase text-gold">Why clients choose us</div>
          <h2 className="mb-5 text-[36px] text-navy">A hard process, handled with care.</h2>
          <p className="mb-4 text-[15.5px] leading-[1.85] text-[#4B4E5A]">
            Going through a divorce is never easy, even when both people agree it&apos;s the right decision.
            We approach every appointment with patience, discretion, and zero judgment.
          </p>
          <p className="mb-4 text-[15.5px] leading-[1.85] text-[#4B4E5A]">
            Our role is simple: make sure your paperwork is accurate and complete, so this part of the
            process is one less thing to worry about.
          </p>
          <p className="mb-4 text-[15.5px] leading-[1.85] text-[#4B4E5A]">
            Available in English and Spanish, at whatever pace feels right for you.
          </p>
          <div className="mt-2 font-serif text-[22px] italic text-gold">&mdash; Beatriz Garcia</div>
        </Reveal>
      </section>

      <FaqList items={faqs} />

      <CtaBand title="Ready to take the next step?" description="Book a private consultation whenever you're ready." ctaLabel="Schedule a meeting" />
    </>
  );
}
