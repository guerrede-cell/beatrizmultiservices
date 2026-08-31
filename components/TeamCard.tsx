import Image from "next/image";

export default function TeamCard({
  image,
  name,
  role,
  bio,
}: {
  image: string;
  name: string;
  role: string;
  bio: string;
}) {
  return (
    <div className="overflow-hidden rounded border border-cream-dark bg-white transition-all duration-350 hover:-translate-y-[6px] hover:shadow-[0_24px_48px_rgba(11,18,53,0.14)]">
      <div className="relative h-[340px] w-full">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="px-7 py-[26px]">
        <h3 className="mb-1 text-[24px] text-navy">{name}</h3>
        <div className="mb-3 text-[12px] uppercase tracking-[1.5px] text-gold">{role}</div>
        <p className="text-[14px] leading-[1.6] text-[#666]">{bio}</p>
      </div>
    </div>
  );
}
