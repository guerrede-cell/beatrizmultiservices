import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export type Testimonial = { quote: string; name: string; source: string };

export default function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <section className="bg-cream-dark px-[7%] py-[90px]">
      <SectionHeading eyebrow="Kind words" title="What clients say" />
      <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((t, i) => (
          <Reveal key={t.name + i} delay={i * 70}>
            <div className="h-full rounded bg-white p-[30px_26px] transition-all duration-350 hover:-translate-y-[6px] hover:shadow-[0_24px_48px_rgba(11,18,53,0.14)]">
              <div className="mb-[14px] text-[13px] tracking-[2px] text-gold">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="mb-[18px] text-[14.5px] italic leading-[1.7] text-[#444]">&ldquo;{t.quote}&rdquo;</p>
              <div className="text-[13px] font-medium text-navy">{t.name}</div>
              <div className="text-[11px] text-[#999]">{t.source}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
