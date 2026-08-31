import type { Metadata } from "next";
import Image from "next/image";
import TeamCard from "@/components/TeamCard";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Beatriz Garcia and Yizalie Lopez of Beatriz Multi Service — bilingual, personal service for notary, immigration, tax, wedding officiant, interpreter, and mutual divorce needs in Harrisburg, PA.",
  alternates: { canonical: "/about" },
};

const galleryPhotos = [
  { src: "/images/wedding-gallery-01.jpg", alt: "Beatriz officiating a ceremony" },
  { src: "/images/wedding-gallery-02.jpg", alt: "Covered bridge ceremony" },
  { src: "/images/wedding-gallery-03.jpg", alt: "Bride and groom at the mantel" },
  { src: "/images/wedding-gallery-04.jpg", alt: "Couple at a wedding reception" },
];

export default function AboutPage() {
  return (
    <>
      <section className="px-[7%] pb-0 pt-[90px] text-center">
        <div className="mb-[18px] flex justify-center text-[12px] tracking-[3px] uppercase text-gold">Our Story</div>
        <h1 className="mb-4 text-[42px] leading-[1.1] text-navy md:text-[52px]">
          Built on trust,
          <br />
          one relationship at a time.
        </h1>
        <p className="mx-auto mb-[50px] max-w-[560px] text-[16px] leading-[1.7] text-[#5a5d6a]">
          Beatriz Multi Service started with a simple belief: every client deserves honest guidance, clear
          communication, and someone who genuinely cares about getting it right.
        </p>
        <Reveal className="mx-auto max-w-[1000px] overflow-hidden rounded shadow-[0_30px_60px_rgba(11,18,53,0.15)]">
          <div className="relative h-[420px] md:h-[520px]">
            <Image src="/images/about-hero.jpg" alt="Beatriz Garcia" fill className="object-cover object-[center_15%]" priority />
          </div>
        </Reveal>
      </section>

      <section className="grid grid-cols-1 items-center gap-[60px] px-[7%] py-[100px] md:grid-cols-2">
        <Reveal className="overflow-hidden rounded">
          <div className="relative h-[400px] md:h-[560px]">
            <Image src="/images/about-story.jpg" alt="Beatriz Garcia portrait" fill className="object-cover object-[center_15%]" />
          </div>
        </Reveal>
        <Reveal>
          <div className="mb-[18px] text-[12px] tracking-[3px] uppercase text-gold">How it started</div>
          <h2 className="mb-5 text-[36px] text-navy">From one client to a full-service practice.</h2>
          <p className="mb-4 text-[15.5px] leading-[1.85] text-[#4B4E5A]">
            Beatriz Garcia founded Beatriz Multi Service with a mission to make essential life services &mdash;
            notary work, immigration paperwork, taxes &mdash; feel personal instead of transactional.
          </p>
          <p className="mb-4 text-[15.5px] leading-[1.85] text-[#4B4E5A]">
            What began as one-on-one notary appointments grew into a full range of services as clients kept
            asking for more: help with tax season, guidance through immigration documents, someone to
            officiate their wedding, an interpreter they could trust.
          </p>
          <p className="mb-4 text-[15.5px] leading-[1.85] text-[#4B4E5A]">
            Today, Beatriz is joined by her partner, Yizalie Lopez, and together they&apos;ve built a practice
            rooted in the same values it started with &mdash; honesty, reliability, and real relationships.
          </p>
          <div className="mt-2 font-serif text-[22px] italic text-gold">&mdash; Beatriz Garcia, Owner</div>
        </Reveal>
      </section>

      <section className="bg-cream-dark px-[7%] py-[90px]">
        <div className="mx-auto mb-14 max-w-[600px] text-center">
          <div className="mb-[18px] flex justify-center text-[12px] tracking-[3px] uppercase text-gold">What we stand for</div>
          <h2 className="text-[38px] text-navy">Our values</h2>
        </div>
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-[30px] md:grid-cols-3">
          {[
            { mark: "\u2726", title: "Honesty", desc: "Clear, upfront communication about your options, your paperwork, and your costs — no surprises." },
            { mark: "\u270E", title: "Reliability", desc: "Punctual, professional, and prepared for every appointment — because your time matters." },
            { mark: "\u2665", title: "Personal Care", desc: "We treat every client like a relationship, not a transaction — bilingual, warm, and here for you." },
          ].map((v, i) => (
            <Reveal key={v.title} delay={i * 80} className="text-center">
              <div className="mb-[14px] font-serif text-[40px] text-gold">{v.mark}</div>
              <h3 className="mb-[10px] text-[20px] text-navy">{v.title}</h3>
              <p className="text-[14px] leading-[1.7] text-[#666]">{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 items-center md:grid-cols-2">
        <div className="relative h-[340px] md:h-full md:min-h-[460px]">
          <Image src="/images/about-working.jpg" alt="Beatriz at work" fill className="object-cover object-[center_25%]" />
        </div>
        <Reveal className="bg-navy px-[7%] py-[70px] text-white">
          <div className="mb-[18px] text-[12px] tracking-[3px] uppercase text-gold-light">How we work</div>
          <h2 className="mb-[18px] text-[32px] text-white">Professional, prepared, and personal.</h2>
          <p className="mb-4 max-w-[440px] text-[15px] leading-[1.8] text-[#C7CAE0]">
            Every appointment starts with listening. Whether it&apos;s a notarized document, a tax return, or
            planning your ceremony, we take the time to understand exactly what you need.
          </p>
          <p className="mb-4 max-w-[440px] text-[15px] leading-[1.8] text-[#C7CAE0]">
            Bilingual service in English and Spanish, flexible scheduling, and honest answers &mdash; every time.
          </p>
        </Reveal>
      </section>

      <section className="px-[7%] py-[90px]">
        <div className="mx-auto mb-14 max-w-[600px] text-center">
          <div className="mb-[18px] flex justify-center text-[12px] tracking-[3px] uppercase text-gold">Real moments</div>
          <h2 className="text-[38px] text-navy">Ceremonies we&apos;ve officiated</h2>
        </div>
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-[18px] md:grid-cols-4">
          {galleryPhotos.map((p, i) => (
            <Reveal key={p.src} delay={i * 80} className="aspect-[3/4] overflow-hidden rounded">
              <div className="relative h-full w-full transition-transform duration-500 hover:scale-[1.06]">
                <Image src={p.src} alt={p.alt} fill className="object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

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

      <CtaBand title="Ready to get started?" description="Book a consultation and let's find the right solution for you." />
    </>
  );
}
