import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import { NotaryIcon } from "@/components/ServiceIcons";
import FeatureGrid from "@/components/FeatureGrid";
import StepsGrid from "@/components/StepsGrid";
import FaqList from "@/components/FaqList";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import SchemaScript from "@/components/SchemaScript";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Notary Services in Harrisburg, PA",
  description:
    "National Notary Association certified notary services in Harrisburg, PA. Power of attorney, real estate documents, affidavits, wills, and more — bilingual, fast, and reliable.",
  alternates: { canonical: "/services/notary" },
};

const faqs = [
  {
    question: "What do I need to bring?",
    answer:
      "A valid, government-issued photo ID and your unsigned document. Do not sign the document before your appointment — it needs to be signed in front of the notary.",
  },
  {
    question: "Do you offer mobile notary services?",
    answer: "Yes, mobile appointments are available for an additional travel fee depending on location. Ask when booking.",
  },
  {
    question: "How long does an appointment take?",
    answer: "Most single-document notarizations take 15–20 minutes. Larger packets, like real estate closings, may take longer.",
  },
  {
    question: "Is service available in Spanish?",
    answer: "Yes, Beatriz provides fully bilingual notary service in English and Spanish.",
  },
];

export default function NotaryPage() {
  return (
    <>
      <SchemaScript data={serviceSchema("notary")} />
      <SchemaScript
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Notary Services", url: `${siteConfig.url}/services/notary` },
        ])}
      />

      <ServiceHero
        eyebrow="Notary Services"
        title="Fast, reliable notarization — done right the first time."
        description="National Notary Association certified. Whether it's a single signature or a full closing packet, Beatriz makes notarization simple, accurate, and stress-free — bilingual service included."
        primaryCta="Book a notary appointment"
        secondaryCta="Ask a question"
        secondaryHref="/contact"
        icon={<NotaryIcon />}
      />

      <FeatureGrid
        eyebrow="What we notarize"
        title="Common documents we handle"
        items={[
          { title: "Power of Attorney", description: "Financial, medical, and general power of attorney documents, notarized correctly and on time." },
          { title: "Real Estate Documents", description: "Deeds, mortgage documents, and closing packets for buyers, sellers, and refinances." },
          { title: "Affidavits", description: "Sworn statements and affidavits notarized quickly, with attention to every detail." },
          { title: "Wills & Trusts", description: "Estate planning documents notarized with the care and confidentiality they deserve." },
          { title: "Loan Documents", description: "Personal and business loan paperwork, notarized accurately to avoid delays." },
          { title: "Consent & Travel Letters", description: "Parental consent and minor travel letters notarized for domestic and international travel." },
        ]}
      />

      <StepsGrid
        eyebrow="How it works"
        title="Simple, start to finish"
        steps={[
          { title: "Book", description: "Schedule an appointment online or by phone — same-week availability in most cases." },
          { title: "Bring ID & Documents", description: "Valid photo ID and your unsigned documents — we'll walk you through anything unclear." },
          { title: "Sign & Notarize", description: "We verify your identity, witness your signature, and apply the official notarial seal." },
          { title: "Done", description: "You leave with a properly notarized document, ready to file or submit." },
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
          <h2 className="mb-5 text-[36px] text-navy">Accuracy, discretion, and a personal touch.</h2>
          <p className="mb-4 text-[15.5px] leading-[1.85] text-[#4B4E5A]">
            Notarization is often the last step before something important becomes official &mdash; a home
            sale, a power of attorney, a will. We treat every signature with the same care and attention.
          </p>
          <p className="mb-4 text-[15.5px] leading-[1.85] text-[#4B4E5A]">
            Bilingual service in English and Spanish means language is never a barrier to understanding
            exactly what you&apos;re signing.
          </p>
          <p className="mb-4 text-[15.5px] leading-[1.85] text-[#4B4E5A]">
            Flexible scheduling, including evenings and some mobile appointments, so getting a document
            notarized fits your life &mdash; not the other way around.
          </p>
          <div className="mt-2 font-serif text-[22px] italic text-gold">&mdash; Beatriz Garcia, Notary Public</div>
        </Reveal>
      </section>

      <FaqList items={faqs} />

      <Testimonials
        items={[
          { quote: "Beatriz did an excellent job. Keeping up with communication, being professional and punctual.", name: "Sergio C.", source: "Hired on Thumbtack" },
          { quote: "Quick, professional, and made a stressful paperwork day so much easier.", name: "Google Review", source: "Verified client" },
          { quote: "Explained everything clearly and made sure I understood what I was signing.", name: "Google Review", source: "Verified client" },
        ]}
      />

      <CtaBand title="Need something notarized?" description="Book an appointment and get it done right, the first time." />
    </>
  );
}
