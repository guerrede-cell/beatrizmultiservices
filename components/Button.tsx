import Link from "next/link";

export function ButtonPrimary({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-sm bg-navy px-[30px] py-[15px] text-[14px] tracking-[0.5px] text-cream transition-all duration-250 hover:-translate-y-[3px] hover:bg-gold hover:text-navy hover:shadow-[0_14px_28px_rgba(11,18,53,0.18)]"
    >
      {children}
    </Link>
  );
}

export function ButtonGhost({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-sm border border-navy px-[30px] py-[15px] text-[14px] tracking-[0.5px] text-navy transition-all duration-250 hover:-translate-y-[3px]"
    >
      {children}
    </Link>
  );
}
