"use client";

import { useState } from "react";
import { services } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded border border-cream-dark bg-white p-[44px_38px] text-center">
        <div className="mb-3 font-serif text-[40px] text-gold">&#10003;</div>
        <h2 className="mb-2 text-[24px] text-navy">Message sent</h2>
        <p className="text-[14px] leading-[1.7] text-[#666]">
          Thank you for reaching out — we typically respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded border border-cream-dark bg-white p-[44px_38px]">
      <h2 className="mb-6 text-[24px] text-navy">Send a Message</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-[18px] grid grid-cols-1 gap-[18px] sm:grid-cols-2">
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="firstName" className="text-[12.5px] font-medium tracking-[0.3px] text-navy">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              placeholder="Your first name"
              className="rounded-[3px] border border-cream-dark bg-cream px-[14px] py-3 text-[14px] text-ink outline-none focus:border-gold"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="lastName" className="text-[12.5px] font-medium tracking-[0.3px] text-navy">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              placeholder="Your last name"
              className="rounded-[3px] border border-cream-dark bg-cream px-[14px] py-3 text-[14px] text-ink outline-none focus:border-gold"
            />
          </div>
        </div>

        <div className="mb-[18px] grid grid-cols-1 gap-[18px] sm:grid-cols-2">
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="email" className="text-[12.5px] font-medium tracking-[0.3px] text-navy">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@email.com"
              className="rounded-[3px] border border-cream-dark bg-cream px-[14px] py-3 text-[14px] text-ink outline-none focus:border-gold"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="phone" className="text-[12.5px] font-medium tracking-[0.3px] text-navy">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(717) 000-0000"
              className="rounded-[3px] border border-cream-dark bg-cream px-[14px] py-3 text-[14px] text-ink outline-none focus:border-gold"
            />
          </div>
        </div>

        <div className="mb-[18px] flex flex-col gap-[6px]">
          <label htmlFor="service" className="text-[12.5px] font-medium tracking-[0.3px] text-navy">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            className="rounded-[3px] border border-cream-dark bg-cream px-[14px] py-3 text-[14px] text-ink outline-none focus:border-gold"
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Other / Not Sure">Other / Not Sure</option>
          </select>
        </div>

        <div className="mb-[22px] flex flex-col gap-[6px]">
          <label htmlFor="message" className="text-[12.5px] font-medium tracking-[0.3px] text-navy">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Tell us a bit about what you need..."
            className="min-h-[110px] resize-y rounded-[3px] border border-cream-dark bg-cream px-[14px] py-3 text-[14px] text-ink outline-none focus:border-gold"
          />
        </div>

        {status === "error" && (
          <p className="mb-4 text-[13.5px] text-red-700" role="alert">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-block rounded-sm bg-navy px-[30px] py-[15px] text-[14px] tracking-[0.5px] text-cream transition-all duration-250 hover:-translate-y-[3px] hover:bg-gold hover:text-navy hover:shadow-[0_14px_28px_rgba(11,18,53,0.18)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
