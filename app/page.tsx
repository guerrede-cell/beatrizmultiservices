import type { Metadata } from "next";
import Image from "next/image";
import { ButtonPrimary, ButtonGhost } from "@/components/Button";
import ServicesGrid from "@/components/ServicesGrid";
import TeamCard from "@/components/TeamCard";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Notary, Immigration, Tax & Wedding Officiant in Harrisburg, PA",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    url: siteConfig.url,
    title: `${siteConfig.name} | Harrisburg, PA`,
    description: siteConfig.description,
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="grid grid-cols-1 items-stretch bg-cream md:grid-cols-[1.05fr_0.95fr]">
        <Reveal className="flex flex-col justify-center px-[7%] py-[70px]">
          <div className="mb-[18px] text-[12px] tracking-[3px] uppercase text-gold">Harrisburg, PA</div>
          <h1 className="mb-[22px] text-[42px] leading-[1.1] text-navy md:text-[54px]">
            Honest, trustworthy
            <br />
            multi-services &mdash;
            <br />
            for every milestone.
          </h1>
          <p className="mb-8 max-w-[440px] text-[16px] leading-[1.7] text-[#4B4E5A]">
            Wedding officiant, notary, immigration document support, and tax preparation.
            Bilingual, personal, and here to help every step of the way.
          </p>
          <div className="flex flex-wrap gap-4">
            <ButtonPrimary href="/contact">Book a consultation</ButtonPrimary>
            <ButtonGhost href="#services">View services</ButtonGhost>
          </div>
        </Reveal>
        <div className="relative min-h-[380px]">
          <Image src="/images/home-hero.jpg" alt="Beatriz Garcia" fill className="object-cover" priority />
          <div className="absolute bottom-7 left-[-28px] hidden max-w-[220px] bg-navy px-[26px] py-[18px] text-cream shadow-[0_12px_30px_rgba(11,18,53,0.25)] md:block">
            <div className="mb-[6px] text-[14px] tracking-[2px] text-gold">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="font-serif text-[15px] italic leading-[1.5]">&ldquo;Thank you for making our day!&rdquo;</p>
            <span className="mt-2 block text-[11px] tracking-[0.5px] text-gold-light">&mdash; Nanci B.</span>
          </div>
        </div>
      </section>

      <div id="services">
        <ServicesGrid />
      </div>

      {/* About strip */}
      <section className="grid grid-cols-1 items-center bg-navy text-cream md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative h-[320px] md:h-full">
          <Image src="/images/about-working.jpg" alt="Beatriz Garcia working" fill className="object-cover" />
        </div>
        <Reveal className="px-[7%] py-20">
          <div className="mb-[22px] text-[12px] tracking-[3px] uppercase text-gold-light">My philosophy</div>
          <h2 className="mb-[22px] text-[36px] text-white">Built on communication, trust, and reliability.</h2>
          <p className="mb-4 max-w-[480px] text-[15.5px] leading-[1.8] text-[#C7CAE0]">
            I love to provide the best quality in all services by building real relationships with every
            client &mdash; not just transactions.
          </p>
          <p className="mb-4 max-w-[480px] text-[15.5px] leading-[1.8] text-[#C7CAE0]">
            Whether it&apos;s your wedding day, a notarized document, or navigating immigration paperwork,
            I&apos;m here to make it feel personal.
          </p>
          <ButtonGhost href="/about">Read our story</ButtonGhost>
        </Reveal>
      </section>

      {/* Team */}
      <section className="px-[7%] py-[90px]">
        <div className="mx-auto mb-14 max-w-[600px] text-center">
          <div className="mb-[18px] flex justify-center text-[12px] tracking-[3px] uppercase text-gold">Meet the team</div>
          <h2 className="text-[38px] text-navy">Who you&apos;ll work with</h2>
        </div>
        <div className="mx-auto grid max-w-[820px] grid-cols-1 gap-8 md:grid-cols-2">
          <Reveal>
            <TeamCard
              image="/images/beatriz-portrait.jpg"
              name="Beatriz Garcia"
              role="Owner"
              bio="Bilingual and dedicated to honest, affordable service for every client who walks through the door. Beatriz handles it all — notary, wedding officiant, immigration document specialist, tax specialist, interpreter services, and mutual divorces."
            />
          </Reveal>
          <Reveal delay={100}>
            <TeamCard
              image="/images/yizalie-portrait.jpg"
              name="Yizalie Lopez"
              role="Partner"
              bio="Brings warmth and presence to every ceremony, helping couples feel at ease on their big day."
            />
          </Reveal>
        </div>
      </section>

      <Testimonials
        items={[
          {
            quote: "Beatriz did an excellent job. Keeping up with communication, being professional and punctual.",
            name: "Sergio C.",
            source: "Hired on Thumbtack",
          },
          {
            quote: "Gave us advice to communicate and to live our lives as fun as possible. Thanks again for everything.",
            name: "Greg J.",
            source: "Hired on Thumbtack",
          },
          {
            quote: "She was absolutely amazing! Thank you for performing our ceremony for our special day.",
            name: "Danielle E.",
            source: "Hired on Thumbtack",
          },
        ]}
      />

      <CtaBand
        title="Book a consultation"
        description="30-minute phone call with Beatriz Garcia — let's find the right solution for you."
      />
    </>
  );
}
