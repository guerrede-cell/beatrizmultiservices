import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { faqSchema } from "@/lib/schema";

export type FaqItem = { question: string; answer: string };

export default function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <section className="bg-cream-dark px-[7%] py-[90px]">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(items)) }}
      />
      <SectionHeading eyebrow="FAQ" title="Common questions" />
      <div className="mx-auto max-w-[760px]">
        {items.map((item, i) => (
          <Reveal key={item.question} delay={i * 60}>
            <div className="mb-[14px] rounded border border-cream-dark bg-white px-7 py-6 transition-all duration-350 hover:-translate-y-[6px] hover:shadow-[0_20px_40px_rgba(11,18,53,0.10)] hover:border-gold">
              <h3 className="mb-2 text-[16px] text-navy">{item.question}</h3>
              <p className="text-[14px] leading-[1.7] text-[#666]">{item.answer}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
