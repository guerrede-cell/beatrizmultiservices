import type { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/ServiceHero";
import { InterpreterIcon } from "@/components/ServiceIcons";
import FeatureGrid from "@/components/FeatureGrid";
import StepsGrid from "@/components/StepsGrid";
import FaqList from "@/components/FaqList";
import CtaBand from "@/components/CtaBand";
import SchemaScript from "@/components/SchemaScript";
import Reveal from "@/components/Reveal";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Interpreter Services in Harrisburg, PA",
  description:
    "English–Spanish interpreter services in Harrisburg, PA for medical, legal, school, and business appointments. In-person or remote, fully confidential.",
  alternates: { canonical: "/services/interpreter-services" },
};

const faqs = [
  { question: "What languages do you interpret?", answer: "English and Spanish. Let us know your specific need when booking." },
  { question: "How far in advance should I book?", answer: "We recommend booking as early as possible, especially for medical or legal appointments, to guarantee availability." },
  { question: "Can you interpret over the phone or video call?", answer: "Yes, remote interpretation is available for appointments that don't require someone in the room." },
  { question: "Is everything kept confidential?", answer: "Yes, every appointment — medical, legal, or personal — is treated with complete confidentiality." },
];

export default function InterpreterPage() {
  return (
    <>
      <SchemaScript data={serviceSchema("interpreter-services")} />
      <SchemaScript
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Interpreter Services", url: `${siteConfig.url}/services/interpreter-services` },
        ])}
      />

      <ServiceHero
        eyebrow="Interpreter Services"
        title="Clear communication, when it matters most."
        description="Accurate, reliable interpretation between English and Spanish for medical, legal, business, and personal appointments — so nothing gets lost, and no one feels left out of the conversation."
        primaryCta="Book an interpreter"
        secondaryCta="Ask a question"
        secondaryHref="/contact"
        icon={<InterpreterIcon />}
      />

      <FeatureGrid
        eyebrow="Where we help"
        title="Settings we interpret for"
        items={[
          { title: "Medical Appointments", description: "Doctor visits, specialist appointments, and hospital communication, interpreted clearly." },
          { title: "Legal & Government", description: "Court dates, DMV visits, and government office appointments — accurate, in the moment." },
          { title: "School & Parent Meetings", description: "Parent-teacher conferences and school administration meetings, made easy to follow." },
          { title: "Business Meetings", description: "Real estate closings, contract signings, and small business conversations." },
          { title: "Phone & Video Calls", description: "Remote interpretation for calls where an in-person interpreter isn't needed." },
          { title: "Personal Appointments", description: "Any appointment where having someone you trust in the room makes all the difference." },
        ]}
      />

      <StepsGrid
        eyebrow="How it works"
        title="Book ahead, show up ready"
        steps={[
          { title: "Book", description: "Tell us the date, time, and type of appointment you need an interpreter for." },
          { title: "Share Details", description: "A quick heads-up on the topic helps us prepare and interpret accurately." },
          { title: "We Show Up", description: "In person or by phone/video, on time and ready to help you communicate clearly." },
          { title: "Follow-Up", description: "If anything needs clarifying afterward, we're a call away." },
        ]}
      />

      <section id="details" className="grid grid-cols-1 items-center gap-[60px] px-[7%] py-[100px] md:grid-cols-2">
        <Reveal className="overflow-hidden rounded">
          <div className="relative h-[400px] md:h-[560px]">
            <Image src="/images/working-photo.jpg" alt="Beatriz at work" fill className="object-cover object-[center_25%]" />
          </div>
        </Reveal>
        <Reveal>
          <div className="mb-[18px] text-[12px] tracking-[3px] uppercase text-gold">Why clients choose us</div>
          <h2 className="mb-5 text-[36px] text-navy">More than translation &mdash; real understanding.</h2>
          <p className="mb-4 text-[15.5px] leading-[1.85] text-[#4B4E5A]">
            A good interpreter does more than repeat words in another language. We make sure tone, intent,
            and important details come through clearly, so you&apos;re never guessing at what&apos;s being
            said.
          </p>
          <p className="mb-4 text-[15.5px] leading-[1.85] text-[#4B4E5A]">
            Whether it&apos;s a doctor&apos;s appointment, a legal matter, or a conversation with your
            child&apos;s school, having someone you trust in the room changes everything.
          </p>
          <p className="mb-4 text-[15.5px] leading-[1.85] text-[#4B4E5A]">
            Available for English&ndash;Spanish interpretation, in person or remotely.
          </p>
          <div className="mt-2 font-serif text-[22px] italic text-gold">&mdash; Beatriz Garcia, Interpreter</div>
        </Reveal>
      </section>

      <FaqList items={faqs} />

      <CtaBand title="Need an interpreter?" description="Book ahead so we can be there when it matters." />
    </>
  );
}
