import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export type Step = { title: string; description: string };

export default function StepsGrid({
  eyebrow,
  title,
  steps,
}: {
  eyebrow: string;
  title: string;
  steps: Step[];
}) {
  return (
    <section className="px-[7%] py-[90px]">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-[26px] sm:grid-cols-2 md:grid-cols-4">
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 70}>
            <div className="text-center">
              <div className="mb-3 font-serif text-[32px] text-gold transition-transform duration-300 hover:scale-[1.15]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-2 text-[17px] text-navy">{step.title}</h3>
              <p className="text-[13.5px] leading-[1.6] text-[#666]">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
