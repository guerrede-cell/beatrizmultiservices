import Link from "next/link";
import Image from "next/image";
import { services, siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cream-dark px-[7%] pb-[26px] pt-[50px] text-[#6B6E7A] md:pt-[50px]">
      <div className="flex flex-col gap-[34px] border-b border-navy/10 pb-9 md:mb-[22px] md:flex-row md:items-start md:justify-between md:gap-0">
        <Image
          src="/images/logo-navy.png"
          alt="Beatriz Multi Service"
          width={358}
          height={500}
          className="h-[90px] w-auto md:h-[70px]"
        />

        <div className="flex w-full flex-col gap-7 md:w-auto md:flex-row md:gap-[60px]">
          <div>
            <h4 className="mb-[14px] text-[13px] tracking-[1px] text-navy">Services</h4>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="block py-1 text-[13px] transition-[color,padding] duration-200 hover:pl-[3px] hover:text-gold"
              >
                {s.name}
              </Link>
            ))}
          </div>
          <div>
            <h4 className="mb-[14px] text-[13px] tracking-[1px] text-navy">Company</h4>
            <Link href="/about" className="block py-1 text-[13px] hover:pl-[3px] hover:text-gold transition-[color,padding] duration-200">
              About
            </Link>
            <Link href="/contact" className="block py-1 text-[13px] hover:pl-[3px] hover:text-gold transition-[color,padding] duration-200">
              Contact
            </Link>
            <Link href="/contact" className="block py-1 text-[13px] hover:pl-[3px] hover:text-gold transition-[color,padding] duration-200">
              Book now
            </Link>
          </div>
          <div>
            <h4 className="mb-[14px] text-[13px] tracking-[1px] text-navy">Contact</h4>
            <a href={`tel:${siteConfig.phone}`} className="block py-1 text-[13px] hover:pl-[3px] hover:text-gold transition-[color,padding] duration-200">
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={siteConfig.social.facebook}
              className="block py-1 text-[13px] hover:pl-[3px] hover:text-gold transition-[color,padding] duration-200"
            >
              Facebook &middot; Instagram &middot; LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-[18px] text-[12px] text-[#8B8E9A] md:flex-row md:items-center md:justify-between md:gap-0 md:pt-0">
        <span>&copy; {year} Beatriz Multi Service</span>
        <span>Designed by DenDigital.co</span>
      </div>
    </footer>
  );
}
