import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

// This route expects RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL
// to be set in .env.local (locally) and in Vercel's Environment Variables
// (in production). See .env.example for details on getting a Resend key.
//
// Swap this out for SendGrid, Postmark, etc. if preferred — only the fetch
// call below needs to change.

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, service, message } = body as Record<string, string>;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.email;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "website@beatrizmultiservices.com";

    if (!apiKey) {
      // No email provider configured yet — log it so nothing is silently
      // lost during local development, and tell the caller clearly.
      console.warn("[contact form] RESEND_API_KEY is not set. Submission was not emailed:", body);
      return NextResponse.json(
        { error: "Contact form email is not configured yet. Please call or email us directly." },
        { status: 503 }
      );
    }

    const emailBody = `
New contact form submission from beatrizmultiservices.com

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "Not provided"}
Service needed: ${service || "Not specified"}

Message:
${message}
    `.trim();

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Beatriz Multi Service Website <${fromEmail}>`,
        to: [toEmail],
        reply_to: email,
        subject: `New inquiry: ${service || "General"} — ${firstName} ${lastName}`,
        text: emailBody,
      }),
    });

    if (!resendRes.ok) {
      const errBody = await resendRes.text();
      console.error("[contact form] Resend API error:", errBody);
      return NextResponse.json({ error: "Failed to send message. Please try again or call us directly." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact form] Unexpected error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
