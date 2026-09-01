import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema } from "@/lib/schema";
import SchemaScript from "@/components/SchemaScript";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Beatriz Multi Service in Harrisburg, PA. Call, email, or book a consultation for notary, immigration, tax, wedding officiant, interpreter, or mutual divorce services.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <SchemaScript
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Contact", url: `${siteConfig.url}/contact` },
        ])}
      />

      <section className="px-[7%] pb-0 pt-[90px] text-center">
        <div className="mb-[18px] flex justify-center text-[12px] tracking-[3px] uppercase text-gold">Get In Touch</div>
        <h1 className="mb-4 text-[48px] text-navy">Let&apos;s talk.</h1>
        <p className="mx-auto max-w-[560px] text-[16px] leading-[1.7] text-[#5a5d6a]">
          Have a question or ready to book a service? Send a message below or schedule a consultation
          directly &mdash; bilingual service available, se habla espa&ntilde;ol.
        </p>
      </section>

      <section className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-[50px] px-[7%] py-[20px] pb-[90px] md:grid-cols-[1fr_1.2fr]">
        <div className="rounded-md bg-navy p-[44px_38px] text-white">
          <h2 className="mb-[10px] text-[26px]">Contact Info</h2>
          <p className="mb-8 text-[14.5px] leading-[1.7] text-[#C7CAE0]">
            Reach out however&apos;s easiest for you. We typically respond within one business day.
          </p>

          <InfoRow icon="&#9742;" label="Phone">
            <a href={`tel:${siteConfig.phone}`} className="text-[#C7CAE0] hover:text-gold-light">
              {siteConfig.phoneDisplay}
            </a>
          </InfoRow>
          <InfoRow icon="&#9993;" label="Email">
            <a href={`mailto:${siteConfig.email}`} className="text-[#C7CAE0] hover:text-gold-light">
              {siteConfig.email}
            </a>
          </InfoRow>
          <InfoRow icon="&#128205;" label="Location">
            <span className="text-[#C7CAE0]">
              {siteConfig.address.city}, {siteConfig.address.region}
            </span>
          </InfoRow>
          <InfoRow icon="&#128337;" label="Hours">
            <span className="text-[#C7CAE0]">
              Mon&ndash;Fri, 9am&ndash;6pm
              <br />
              Evenings &amp; weekends by appointment
            </span>
          </InfoRow>

          <div className="mt-[30px] flex gap-[14px] border-t border-white/10 pt-[26px]">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-[13px] text-[#C7CAE0] hover:border-gold-light hover:text-gold-light"
            >
              f
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-[13px] text-[#C7CAE0] hover:border-gold-light hover:text-gold-light"
            >
              ig
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-[13px] text-[#C7CAE0] hover:border-gold-light hover:text-gold-light"
            >
              in
            </a>
          </div>
        </div>

        <ContactForm />
      </section>

      <section className="bg-cream-dark px-[7%] py-20 text-center">
        <div className="mb-[18px] flex justify-center text-[12px] tracking-[3px] uppercase text-gold">Prefer to book directly?</div>
        <h2 className="mb-[14px] text-[34px] text-navy">Schedule a Consultation</h2>
        <p className="mx-auto mb-[30px] max-w-[500px] text-[15px] leading-[1.7] text-[#5a5d6a]">
          Pick a time that works for you &mdash; 30-minute consultations available online or by phone.
        </p>
        {/*
          TODO: Replace this block with the real Calendly embed once the link is ready:
          <div className="calendly-inline-widget" data-url="https://calendly.com/your-link" style={{ minWidth: 320, height: 700 }} />
          <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
        */}
        <div className="mx-auto max-w-[700px] rounded-md border border-dashed border-gold bg-white p-[60px_30px] text-[14px] text-[#8a8d99]">
          [ Calendly booking widget embeds here ]
        </div>
      </section>
    </>
  );
}

function InfoRow({ icon, label, children }: { icon: string; label: string; children: React.ReactNode }) {
  return (
    <div className="mb-[26px] flex items-start gap-4">
      <div
        className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-full bg-gold-light/20 text-[16px] text-gold-light"
        dangerouslySetInnerHTML={{ __html: icon }}
      />
      <div>
        <h4 className="mb-1 text-[14px] font-medium text-white">{label}</h4>
        <div className="text-[14px] leading-[1.6]">{children}</div>
      </div>
    </div>
  );
}
