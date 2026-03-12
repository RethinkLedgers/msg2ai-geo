import KeyTakeaways from "@/components/KeyTakeaways";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Guest Messaging for Hotels",
  description:
    "AI-powered hotel guest messaging on SMS and WhatsApp. No app download. 126 languages. Automate concierge, room service, and guest inquiries 24/7. From $9.99/month.",
  alternates: { canonical: "https://msg2ai.xyz/hotels" },
  openGraph: {
    title: "AI Guest Messaging for Hotels | msg2ai",
    description:
      "Automate hotel guest communication with AI on SMS and WhatsApp. 126 languages, no app download, from $9.99/month.",
  },
};

const faqItems = [
  {
    question: "What is the best AI guest messaging platform for hotels?",
    answer:
      "The best AI guest messaging platform for hotels depends on your size and needs. msg2ai is built for boutique hotels and independent properties, offering AI-powered messaging on native SMS and WhatsApp with 126 language support and pricing starting at $9.99/month. Unlike many competitors, msg2ai requires no app download from guests — they simply text your number. For enterprise chains, platforms like Canary Technologies or HiJiffy offer deeper PMS integrations at higher price points.",
  },
  {
    question: "How does AI guest messaging improve hotel operations?",
    answer:
      "AI guest messaging automates repetitive inquiries that consume front desk time: check-in instructions, Wi-Fi passwords, amenity hours, restaurant recommendations, room service requests, and checkout procedures. Hotels using msg2ai report a 35% increase in guest satisfaction scores and significant reduction in front desk call volume. The AI handles these inquiries 24/7 in 126 languages, which is especially valuable for hotels with international guests.",
  },
  {
    question: "Can msg2ai integrate with my hotel's property management system?",
    answer:
      "msg2ai operates as a standalone messaging layer that connects to your guests via SMS and WhatsApp. It can be configured with your hotel's specific information — room types, amenities, policies, local recommendations — so the AI provides accurate, property-specific responses. For PMS-level integrations, contact us for custom enterprise solutions.",
  },
  {
    question: "How does the multilingual support work for international hotel guests?",
    answer:
      "msg2ai automatically detects the language a guest writes in and responds in that same language. With 126 languages supported, your hotel can serve guests from virtually any country without multilingual staff. A Japanese guest can text in Japanese, a Brazilian guest in Portuguese, and a French guest in French — all handled by the same AI system, simultaneously.",
  },
  {
    question: "What makes msg2ai different from hotel chatbots that require an app?",
    answer:
      "Most hotel messaging solutions require guests to download an app, scan a QR code, or visit a URL. msg2ai works on native SMS and WhatsApp — the apps guests already have. This eliminates the adoption friction that makes most hotel apps fail (industry average hotel app adoption is under 10%). With msg2ai, 100% of guests can use the service because 100% of guests have text messaging.",
  },
];

export default function HotelsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="gradient-hero px-6 py-20 text-center text-white">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
          AI Guest Messaging for Hotels
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
          Automate concierge services, room service requests, and guest inquiries 24/7.
          Guests text via SMS or WhatsApp — no app download required. 126 languages.
        </p>
      </section>

      {/* Key Takeaways */}
      <div className="py-12">
        <KeyTakeaways
          items={[
            "msg2ai automates hotel guest communication on native SMS and WhatsApp — guests never download an app.",
            "126 languages with automatic detection — serve international guests without multilingual staff.",
            "Hotels report 35% increase in guest satisfaction after implementing AI messaging.",
            "Handles concierge requests, room service, check-in/checkout, amenity info, and local recommendations 24/7.",
            "Pricing starts at $9.99/month — built for boutique hotels and independent properties, not just enterprise chains.",
          ]}
        />
      </div>

      {/* Problem / Solution */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="text-3xl font-bold">The Problem with Hotel Guest Communication</h2>
        <p className="mt-4 text-zinc-600 leading-relaxed">
          Hotel front desks are overwhelmed with repetitive questions: &quot;What&apos;s the Wi-Fi password?&quot;
          &quot;What time is checkout?&quot; &quot;Can you recommend a restaurant nearby?&quot; These inquiries
          consume staff time, create hold times for guests, and get worse during peak hours and night shifts
          when staffing is thin.
        </p>
        <p className="mt-4 text-zinc-600 leading-relaxed">
          International guests face an additional barrier. A Japanese guest who doesn&apos;t speak English
          may avoid calling the front desk entirely, missing out on services and leaving with a diminished experience.
        </p>
        <p className="mt-4 text-zinc-600 leading-relaxed">
          Most hotel messaging solutions attempt to solve this with custom apps. But hotel app download rates
          average under 10%. Guests don&apos;t want to install software for a 2-night stay.
        </p>

        <h2 className="mt-12 text-3xl font-bold">How msg2ai Solves This</h2>
        <p className="mt-4 text-zinc-600 leading-relaxed">
          msg2ai&apos;s AI Ambassador operates on the messaging platforms guests already use: SMS and WhatsApp.
          A guest texts your hotel&apos;s dedicated number. The AI responds instantly in the guest&apos;s language —
          whether that&apos;s English, Mandarin, Arabic, or any of 126 supported languages.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            { title: "Concierge Automation", desc: "Restaurant recommendations, directions, local attractions, transportation — answered instantly by AI with property-specific knowledge." },
            { title: "Room Service & Requests", desc: "Guests text for towels, pillows, maintenance, or room service. Requests are logged and routed to the right department." },
            { title: "Check-in & Checkout", desc: "Automated pre-arrival messages, check-in instructions, and checkout reminders reduce front desk congestion." },
            { title: "Sentiment Detection", desc: "AI detects frustrated or urgent messages and routes them to human staff immediately. Complaints never go unaddressed." },
          ].map((f) => (
            <div key={f.title} className="rounded-lg border border-border p-6">
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="bg-muted px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center">Results Hotels See with msg2ai</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { stat: "35%", label: "Increase in guest satisfaction scores" },
              { stat: "24/7", label: "Automated response availability" },
              { stat: "126", label: "Languages supported automatically" },
            ].map((s) => (
              <div key={s.label} className="stat-card rounded-xl bg-white p-8 text-center shadow-sm">
                <div className="text-4xl font-bold text-primary">{s.stat}</div>
                <div className="mt-2 text-sm text-zinc-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqItems} title="Hotel AI Messaging — Frequently Asked Questions" />

      <CTA
        title="Give your hotel guests a better messaging experience"
        subtitle="Set up in minutes. No app for guests to download. 126 languages."
      />
    </>
  );
}
