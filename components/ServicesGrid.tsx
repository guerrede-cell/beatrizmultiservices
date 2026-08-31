import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { services } from "@/lib/site-config";

const icons: Record<string, string> = {
  "wedding-officiant": "\u2726",
  notary: "\u270E",
  "immigration-document-specialist": "\u2709",
  "tax-specialist": "$",
  "interpreter-services": "\u21C4",
  "mutual-divorces": "\u25C8",
};

export default function ServicesGrid() {
  return (
    <section className="px-[7%] py-[90px]">
      <SectionHeading eyebrow="What we offer" title="Multi Services" />
      <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={i * 70}>
            <Link
              href={`/services/${s.slug}`}
              className="block h-full rounded border border-cream-dark bg-white p-[38px_26px] text-center transition-all duration-350 hover:-translate-y-[6px] hover:border-gold hover:shadow-[0_20px_40px_rgba(11,18,53,0.10)]"
            >
              <div className="mx-auto mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-cream-dark text-[22px] text-gold">
                {icons[s.slug]}
              </div>
              <h3 className="mb-[10px] text-[21px] text-navy">{s.name}</h3>
              <p className="mb-4 text-[14px] leading-[1.6] text-[#666]">{s.shortDescription}</p>
              <div className="text-[12px] uppercase tracking-[1px] text-gold">Learn more &rarr;</div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
