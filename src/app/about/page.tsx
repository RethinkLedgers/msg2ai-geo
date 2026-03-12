import CTA from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About msg2ai",
  description:
    "msg2ai is a Charlotte, NC-based AI guest messaging platform founded in 2024. Built for hotels, vacation rentals, and events. 126 languages. No app download required.",
  alternates: { canonical: "https://msg2ai.xyz/about" },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "msg2ai",
    url: "https://msg2ai.xyz",
    foundingDate: "2024-04",
    founder: { "@type": "Person", name: "Bart Cant" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Charlotte",
      addressRegion: "NC",
      addressCountry: "US",
    },
    description:
      "AI-powered guest messaging platform for hotels, vacation rentals, and events.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="px-6 py-20 text-center">
        <h1 className="text-4xl font-bold">About msg2ai</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">
          AI guest messaging for hospitality — built in Charlotte, NC.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <div className="prose max-w-none text-zinc-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground">Our Story</h2>
          <p className="mt-4">
            msg2ai was founded in April 2024 by Bart Cant, a Belgium-born entrepreneur based in Charlotte, NC.
            The idea came from a frustrating hotel concierge experience in Las Vegas — the kind of moment
            where a simple question took too long to answer because the front desk was overwhelmed.
          </p>
          <p className="mt-4">
            The insight was straightforward: guests shouldn&apos;t need to download an app, visit a website,
            or wait in line to get answers. They should be able to text a number and get an instant,
            intelligent response in their own language.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-foreground">What We Built</h2>
          <p className="mt-4">
            msg2ai&apos;s AI Ambassador is an AI-powered messaging platform that operates on native SMS and
            WhatsApp. Guests text a number. The AI responds instantly in any of 126 languages. No app
            download. No login. No friction.
          </p>
          <p className="mt-4">
            We serve three verticals: <strong>hotels</strong> (concierge automation, room service, guest inquiries),
            <strong> vacation rentals</strong> (check-in instructions, local recommendations, maintenance),
            and <strong>events</strong> (attendee communication, schedule updates, venue navigation).
          </p>

          <h2 className="mt-10 text-2xl font-bold text-foreground">Traction</h2>
          <p className="mt-4">
            msg2ai launched its first pilot at Charlotte&apos;s Seed The South Capital Summit in April 2024
            and has since expanded across North Carolina and internationally. Notable deployments include
            the Venture135 Conference and a resort in Greece. The company was accepted into Charlotte&apos;s
            GBeta accelerator program.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-foreground">Our Vision</h2>
          <p className="mt-4">
            We want to be the Twilio of AI text messaging — the infrastructure layer that makes intelligent,
            multilingual messaging accessible to every hospitality operator, regardless of size or budget.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
