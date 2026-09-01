"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { services, navLinks } from "@/lib/site-config";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the viewport grows back to desktop size
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 flex flex-wrap items-center justify-between bg-cream px-[7%] py-[18px] transition-shadow duration-300 ${
        scrolled ? "shadow-[0_6px_24px_rgba(11,18,53,0.08)]" : ""
      }`}
    >
      <Link href="/" className="order-1 flex items-center transition-transform duration-300 hover:scale-105">
        <Image src="/images/logo-navy.png" alt="Beatriz Multi Service" width={358} height={500} className="h-[52px] w-auto" priority />
      </Link>

      {/* Hamburger (mobile only) */}
      <button
        aria-label="Toggle menu"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((v) => !v)}
        className="order-2 ml-auto flex w-6 flex-col gap-[5px] md:hidden"
      >
        <span
          className={`block h-[2px] w-full bg-navy transition-transform duration-300 ${
            mobileOpen ? "translate-y-[7px] rotate-45" : ""
          }`}
        />
        <span className={`block h-[2px] w-full bg-navy transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
        <span
          className={`block h-[2px] w-full bg-navy transition-transform duration-300 ${
            mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
          }`}
        />
      </button>

      {/* Links */}
      <div
        className={`order-4 w-full overflow-hidden transition-[max-height] duration-400 ease-in-out md:order-2 md:w-auto md:overflow-visible ${
          mobileOpen ? "max-h-[600px]" : "max-h-0 md:max-h-none"
        } flex flex-col gap-0 md:flex md:flex-row md:items-center md:gap-[34px]`}
      >
        <Link
          href="/"
          className="relative border-b border-cream-dark py-[14px] text-[14px] tracking-[0.5px] text-ink after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-gold after:transition-[width] after:duration-300 hover:after:w-full md:border-none md:py-0"
        >
          Home
        </Link>

        {/* Services dropdown */}
        <div className="relative group">
          <button
            onClick={() => setServicesOpen((v) => !v)}
            className="flex w-full items-center justify-between gap-[5px] border-b border-cream-dark py-[14px] text-left text-[14px] tracking-[0.5px] text-ink md:w-auto md:border-none md:py-0"
          >
            Services
            <span
              className={`text-[10px] text-gold transition-transform duration-300 ${
                servicesOpen ? "rotate-180" : ""
              } md:rotate-0 md:group-hover:rotate-180`}
            >
              &#9662;
            </span>
          </button>

          <div
            className={`overflow-hidden transition-[max-height] duration-350 ease-in-out md:max-h-none md:overflow-visible md:absolute md:left-0 md:top-full md:min-w-[260px] md:pt-[14px] md:pointer-events-none md:opacity-0 md:invisible md:-translate-y-2 md:transition-[opacity,transform,visibility] md:duration-250 md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0 md:group-hover:pointer-events-auto ${
              servicesOpen ? "max-h-[400px]" : "max-h-0"
            } flex flex-col bg-cream-dark pl-[14px] md:pl-0 md:bg-transparent`}
          >
            <div className="md:rounded md:border md:border-cream-dark md:bg-white md:py-2 md:shadow-[0_20px_40px_rgba(11,18,53,0.15)]">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="block border-b border-black/5 py-3 text-[13.5px] text-ink transition-[padding] duration-200 hover:pl-2 hover:text-gold md:border-none md:px-[22px] md:py-[11px] md:hover:bg-cream md:hover:pl-[28px]"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Link
          href="/about"
          className="relative border-b border-cream-dark py-[14px] text-[14px] tracking-[0.5px] text-ink after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-gold after:transition-[width] after:duration-300 hover:after:w-full md:border-none md:py-0"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="relative py-[14px] text-[14px] tracking-[0.5px] text-ink after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-gold after:transition-[width] after:duration-300 hover:after:w-full md:py-0"
        >
          Contact
        </Link>

        {/* CTA — inline in the mobile stack */}
        <Link
          href="/contact"
          className="order-5 mt-[10px] block max-h-0 overflow-hidden rounded-sm border border-navy py-[15px] text-center text-[13px] tracking-[0.5px] text-navy opacity-0 transition-all duration-300 hover:bg-navy hover:text-cream md:hidden"
          style={mobileOpen ? { maxHeight: "100px", opacity: 1 } : undefined}
        >
          Book a consultation
        </Link>
      </div>

      {/* CTA — desktop */}
      <Link
        href="/contact"
        className="order-3 hidden rounded-sm border border-navy px-[22px] py-[10px] text-[13px] tracking-[0.5px] text-navy transition-all duration-250 hover:-translate-y-[3px] hover:bg-navy hover:text-cream hover:shadow-[0_14px_28px_rgba(11,18,53,0.18)] md:block"
      >
        Book a consultation
      </Link>
    </nav>
  );
}
