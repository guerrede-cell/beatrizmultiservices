import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export type Feature = { title: string; description: string };

export default function FeatureGrid({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: Feature[];
}) {
  return (
    <section className="bg-cream-dark px-[7%] py-[90px]">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-[26px] sm:grid-cols-2 md:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 60}>
            <div className="h-full rounded border border-cream-dark bg-white p-[32px_26px] transition-all duration-350 hover:-translate-y-[6px] hover:border-gold hover:shadow-[0_20px_40px_rgba(11,18,53,0.10)]">
              <h3 className="mb-[10px] text-[18px] text-navy">{item.title}</h3>
              <p className="text-[14px] leading-[1.7] text-[#666]">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
