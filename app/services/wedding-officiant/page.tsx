import type { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/ServiceHero";
import FeatureGrid from "@/components/FeatureGrid";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import TeamCard from "@/components/TeamCard";
import CtaBand from "@/components/CtaBand";
import SchemaScript from "@/components/SchemaScript";
import Reveal from "@/components/Reveal";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Wedding Officiant in Harrisburg, PA",
  description:
    "Bilingual wedding officiant services in Harrisburg, PA. Personal, custom ceremonies for every kind of couple — intimate signings to full celebrations, in English or Spanish.",
  alternates: { canonical: "/services/wedding-officiant" },
};

const gallery = [
  { src: "/images/wedding-gallery-08.jpg", alt: "Covered bridge ceremony", tall: true },
  { src: "/images/wedding-gallery-03.jpg", alt: "Ceremony at the arch" },
  { src: "/images/wedding-gallery-04.jpg", alt: "Newlywed couple" },
  { src: "/images/wedding-gallery-05.jpg", alt: "Wedding party", tall: true },
  { src: "/images/wedding-gallery-06.jpg", alt: "Newlyweds showing rings" },
  { src: "/images/wedding-gallery-07.jpg", alt: "Couple at reception" },
  { src: "/images/wedding-gallery-02.jpg", alt: "Officiating a ceremony", tall: true },
  { src: "/images/wedding-gallery-09.jpg", alt: "Beatriz Garcia at a ceremony" },
  { src: "/images/wedding-gallery-10.jpg", alt: "Newlyweds with marriage certificate", tall: true },
  { src: "/images/wedding-gallery-11.jpg", alt: "Beatriz officiating a ceremony" },
  { src: "/images/wedding-gallery-12.jpg", alt: "Couple signing marriage certificate" },
];

export default function WeddingOfficiantPage() {
  return (
    <>
      <SchemaScript data={serviceSchema("wedding-officiant")} />
      <SchemaScript
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Wedding Officiant", url: `${siteConfig.url}/services/wedding-officiant` },
        ])}
      />

      <ServiceHero
        eyebrow="Wedding Officiant"
        title={
          <>
            Ceremonies that feel like <em className="font-serif italic text-gold not-italic">you.</em>
          </>
        }
        description="From intimate courthouse-style ceremonies to full celebrations with family and friends, Beatriz and Yizalie bring warmth, presence, and heart to every 'I do' — bilingual, personal, and judgment-free for every kind of love story."
        primaryCta="Book a consultation"
        secondaryCta="See ceremony packages"
        secondaryHref="#included"
        image="/images/wedding-hero.jpg"
      />

      <div id="included">
        <FeatureGrid
          eyebrow="What's included"
          title="Every ceremony, start to finish"
          items={[
            { title: "Consultation", description: "We get to know you as a couple and talk through your vision for the day." },
            { title: "Custom Ceremony", description: "A script written around your story — traditional, personal, or somewhere in between." },
            { title: "Marriage License", description: "We handle the paperwork and filing, so it's one less thing on your plate." },
            { title: "Day-Of Presence", description: "Calm, prepared, and fully present — so you can just enjoy the moment." },
          ]}
        />
      </div>

      <section className="grid grid-cols-1 items-center gap-[60px] px-[7%] py-[100px] md:grid-cols-2">
        <Reveal className="overflow-hidden rounded">
          <div className="relative h-[400px] md:h-[560px]">
            <Image src="/images/wedding-gallery-01.jpg" alt="Beatriz officiating a ceremony" fill className="object-cover" />
          </div>
        </Reveal>
        <Reveal>
          <div className="mb-[18px] text-[12px] tracking-[3px] uppercase text-gold">Every love story is different</div>
          <h2 className="mb-5 text-[36px] text-navy">All couples, all ceremonies, all welcome.</h2>
          <p className="mb-4 text-[15.5px] leading-[1.85] text-[#4B4E5A]">
            Whether it&apos;s a small courthouse-style signing, a backyard ceremony, or a full celebration
            surrounded by family, we tailor every ceremony to fit who you are as a couple.
          </p>
          <p className="mb-4 text-[15.5px] leading-[1.85] text-[#4B4E5A]">
            Bilingual ceremonies available in English and Spanish, so language is never a barrier to having
            the day feel personal.
          </p>
          <p className="mb-4 text-[15.5px] leading-[1.85] text-[#4B4E5A]">Every couple is welcome here &mdash; however your love looks.</p>
          <div className="mt-2 font-serif text-[22px] italic text-gold">&mdash; Beatriz Garcia &amp; Yizalie Lopez</div>
        </Reveal>
      </section>

      <section className="px-[7%] py-[90px]">
        <div className="mx-auto mb-14 max-w-[600px] text-center">
          <div className="mb-[18px] flex justify-center text-[12px] tracking-[3px] uppercase text-gold">Real ceremonies</div>
          <h2 className="text-[38px] text-navy">Moments we&apos;ve been part of</h2>
        </div>
        <Gallery photos={gallery} />
      </section>

      <Testimonials
        items={[
          { quote: "She was absolutely amazing! Thank you for performing our ceremony for our special day.", name: "Danielle E.", source: "Hired on Thumbtack" },
          { quote: "Gave us advice to communicate and to live our lives as fun as possible. Thanks again for everything.", name: "Greg J.", source: "Hired on Thumbtack" },
          { quote: "Professional, warm, and made us feel completely at ease on our wedding day.", name: "Nanci B.", source: "Google Review" },
        ]}
      />

      <section className="px-[7%] py-[90px]">
        <div className="mx-auto mb-14 max-w-[600px] text-center">
          <div className="mb-[18px] flex justify-center text-[12px] tracking-[3px] uppercase text-gold">Meet your officiants</div>
          <h2 className="text-[38px] text-navy">Who will marry you</h2>
        </div>
        <div className="mx-auto grid max-w-[820px] grid-cols-1 gap-8 md:grid-cols-2">
          <Reveal>
            <TeamCard
              image="/images/beatriz-portrait.jpg"
              name="Beatriz Garcia"
              role="Owner · Officiant"
              bio="Bilingual and dedicated to making every ceremony feel personal, warm, and true to you."
            />
          </Reveal>
          <Reveal delay={100}>
            <TeamCard
              image="/images/yizalie-portrait.jpg"
              name="Yizalie Lopez"
              role="Partner · Officiant"
              bio="Brings warmth and presence to every ceremony, helping couples feel at ease on their big day."
            />
          </Reveal>
        </div>
      </section>

      <CtaBand title='Ready to say "I do"?' description="Book a consultation and let's start planning your ceremony." />
    </>
  );
}
