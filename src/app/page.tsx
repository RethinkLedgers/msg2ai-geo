import Link from "next/link";
import KeyTakeaways from "@/components/KeyTakeaways";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "msg2ai — AI Guest Messaging for Hotels, Vacation Rentals & Events",
  description:
    "AI-powered guest messaging on native SMS and WhatsApp. No app download required. 126 languages. Built for hotels, vacation rentals, and events. From $9.99/month.",
  alternates: { canonical: "https://msg2ai.xyz" },
};

const stats = [
  { value: "98%", label: "WhatsApp open rate" },
  { value: "126", label: "Languages supported" },
  { value: "35%", label: "Guest satisfaction increase" },
  { value: "$9.99", label: "Starting price/month" },
];

const verticals = [
  {
    title: "Hotels",
    description:
      "Automate concierge services, room service requests, and guest inquiries 24/7. International guests communicate in their native language.",
    href: "/hotels",
    stat: "35% increase in guest satisfaction",
  },
  {
    title: "Vacation Rentals",
    description:
      "Automate check-in instructions, local recommendations, and maintenance requests. Reduce manual inquiries by 50%.",
    href: "/vacation-rentals",
    stat: "50% reduction in manual inquiries",
  },
  {
    title: "Events & Conferences",
    description:
      "Real-time attendee communication for schedules, venue navigation, and networking. 90% engagement rates.",
    href: "/events",
    stat: "90% attendee engagement rate",
  },
];

const faqItems = [
  {
    question: "What is AI-powered guest messaging?",
    answer:
      "AI-powered guest messaging uses artificial intelligence to automatically respond to guest inquiries via SMS and WhatsApp. msg2ai's AI Ambassador handles questions about check-in, amenities, local recommendations, and more in 126 languages — 24 hours a day, 7 days a week. No app download is required for guests.",
  },
  {
    question: "Do guests need to download an app?",
    answer:
      "No. msg2ai works on native SMS and WhatsApp — the messaging apps guests already have on their phones. There is no app to download, no URL to visit, no login to create. Guests simply send a text message and the AI responds instantly.",
  },
  {
    question: "How many languages does msg2ai support?",
    answer:
      "msg2ai supports 126 languages with automatic detection. When a guest sends a message in French, Japanese, or Arabic, the AI responds in that language automatically. This is particularly valuable for hotels and vacation rentals with international guests.",
  },
  {
    question: "How does msg2ai compare to other guest messaging platforms?",
    answer:
      "msg2ai differentiates on three points: (1) no app download required — guests use native SMS or WhatsApp, (2) 126 language support with automatic detection, and (3) pricing starting at $9.99/month, making it accessible for boutique hotels and small operators. Most competitors require app downloads, support fewer languages, or start at $50+/month.",
  },
  {
    question: "What does msg2ai cost?",
    answer:
      "msg2ai offers three plans: Starter at $9.99/month (250 messages), Professional at $24.99/month (1,000 messages), and Expert with custom pricing for high-volume operators (5,000+ messages). All plans include AI-powered responses, broadcast messaging, and analytics.",
  },
  {
    question: "Is msg2ai compliant with messaging regulations?",
    answer:
      "Yes. msg2ai is compliant with TCPA, GDPR, and WhatsApp Business API policies. All messaging is opt-in, and guest data is handled with enterprise-grade security. Sentiment analysis routes sensitive conversations to human staff automatically.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero px-6 py-20 text-center text-white">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
          AI Guest Messaging for Hotels, Vacation Rentals &amp; Events
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
          Guests text you on SMS or WhatsApp. AI responds instantly in 126 languages.
          No app download required. Starting at $9.99/month.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-white px-8 py-3 font-semibold text-primary hover:bg-zinc-100"
          >
            Get a Free Demo
          </Link>
          <Link
            href="/pricing"
            className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white/10"
          >
            View Pricing
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="stat-card rounded-xl border border-border p-6 text-center">
              <div className="text-3xl font-bold text-primary">{s.value}</div>
              <div className="mt-1 text-sm text-zinc-600">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Takeaways */}
      <KeyTakeaways
        items={[
          "msg2ai is an AI guest messaging platform that works on native SMS and WhatsApp — no app download required for guests.",
          "Supports 126 languages with automatic detection, ideal for international hospitality.",
          "Built for three verticals: hotels, vacation rentals, and events/conferences.",
          "Pricing starts at $9.99/month, making it accessible for boutique hotels and small operators.",
          "Includes sentiment analysis to auto-route frustrated guests to human staff.",
        ]}
      />

      {/* Verticals */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-10 text-center text-3xl font-bold">Built for Hospitality</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {verticals.map((v) => (
            <Link
              key={v.title}
              href={v.href}
              className="stat-card rounded-xl border border-border p-8 hover:border-primary/30"
            >
              <h3 className="text-xl font-bold text-foreground">{v.title}</h3>
              <p className="mt-3 text-sm text-zinc-600">{v.description}</p>
              <p className="mt-4 text-sm font-semibold text-accent">{v.stat}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">How msg2ai Works</h2>
          <p className="mt-4 text-zinc-600">Three steps. No app downloads. No technical setup for guests.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl gap-8 md:grid-cols-3">
          {[
            { step: "1", title: "Guest sends a text", desc: "A guest texts your dedicated number via SMS or sends a WhatsApp message. No app, no login, no URL." },
            { step: "2", title: "AI responds instantly", desc: "msg2ai's AI Ambassador answers in the guest's language — check-in info, amenities, local tips, or any custom topic you configure." },
            { step: "3", title: "You stay in control", desc: "Sentiment analysis flags frustrated guests for human handoff. Analytics dashboard shows every conversation and trend." },
          ].map((s) => (
            <div key={s.step} className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                {s.step}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqItems} />

      {/* CTA */}
      <CTA />
    </>
  );
}
