import Image from "next/image";
import { ButtonPrimary, ButtonGhost } from "./Button";
import Reveal from "./Reveal";

export default function ServiceHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  secondaryHref = "#details",
  image,
  icon,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryHref?: string;
  image?: string;
  icon?: React.ReactNode;
}) {
  return (
    <section className="grid grid-cols-1 items-stretch bg-cream md:grid-cols-[1fr_0.9fr]">
      <Reveal className="flex flex-col justify-center px-[7%] py-[70px]">
        <div className="mb-[18px] text-[12px] tracking-[3px] uppercase text-gold">{eyebrow}</div>
        <h1 className="mb-5 text-[38px] leading-[1.15] text-navy md:text-[46px]">{title}</h1>
        <p className="mb-7 max-w-[460px] text-[16px] leading-[1.75] text-[#4B4E5A]">{description}</p>
        <div className="flex flex-wrap gap-4">
          <ButtonPrimary href="/contact">{primaryCta}</ButtonPrimary>
          <ButtonGhost href={secondaryHref}>{secondaryCta}</ButtonGhost>
        </div>
      </Reveal>
      <div className="relative min-h-[340px]">
        {image ? (
          <Image src={image} alt="" fill className="object-cover object-[center_20%]" priority />
        ) : (
          <div className="flex min-h-[420px] items-center justify-center bg-gradient-to-br from-cream-dark to-cream">
            {icon}
          </div>
        )}
      </div>
    </section>
  );
}
