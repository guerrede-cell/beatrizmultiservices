import { ButtonPrimary } from "./Button";

export default function CtaBand({
  title,
  description,
  ctaLabel = "Schedule a meeting",
}: {
  title: string;
  description: string;
  ctaLabel?: string;
}) {
  return (
    <section className="bg-navy px-[7%] py-20 text-center">
      <h2 className="mb-4 text-[36px] text-white">{title}</h2>
      <p className="mb-[30px] text-[15px] text-[#C7CAE0]">{description}</p>
      <ButtonPrimary href="/contact">{ctaLabel}</ButtonPrimary>
    </section>
  );
}
