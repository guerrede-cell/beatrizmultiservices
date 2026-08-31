export default function SectionHeading({
  eyebrow,
  title,
  center = true,
}: {
  eyebrow: string;
  title: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-14 max-w-[600px] ${center ? "mx-auto text-center" : ""}`}>
      <div className={`mb-[18px] flex text-[12px] tracking-[3px] uppercase text-gold ${center ? "justify-center" : ""}`}>
        {eyebrow}
      </div>
      <h2 className="text-[36px] text-navy">{title}</h2>
    </div>
  );
}
