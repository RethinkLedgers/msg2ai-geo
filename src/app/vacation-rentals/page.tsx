import KeyTakeaways from "@/components/KeyTakeaways";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Messaging for Vacation Rentals & Airbnb Hosts",
  description:
    "Automate guest messaging for vacation rentals via WhatsApp and SMS. No app download. 126 languages. Reduce manual inquiries by 50%. From $9.99/month.",
  alternates: { canonical: "https://msg2ai.xyz/vacation-rentals" },
  openGraph: {
    title: "AI Guest Messaging for Vacation Rentals | msg2ai",
    description:
      "Automate check-in, local tips, and guest inquiries on WhatsApp & SMS. No app download. 126 languages.",
  },
};

const faqItems = [
  {
    question: "How can I automate WhatsApp for vacation rentals without an app download?",
    answer:
      "msg2ai connects to guests through native WhatsApp and SMS — the apps they already have. There is no app to download, no URL to visit, no account to create. You configure your property details (check-in instructions, house rules, local recommendations), and msg2ai's AI handles guest messages automatically. This is particularly valuable for vacation rentals where guests are often in unfamiliar locations and need quick answers.",
  },
  {
    question: "What guest messages can AI handle for vacation rentals?",
    answer:
      "msg2ai automates the most common vacation rental inquiries: check-in and lockbox instructions, Wi-Fi credentials, parking information, house rules, local restaurant and activity recommendations, checkout procedures, and maintenance requests. Hosts using msg2ai report a 50% reduction in manual guest inquiries.",
  },
  {
    question: "Does msg2ai work with Airbnb, VRBO, and Booking.com?",
    answer:
      "msg2ai operates as a standalone messaging layer via SMS and WhatsApp, independent of booking platforms. You share your msg2ai number with guests after booking confirmation. This means it works regardless of where the guest booked — Airbnb, VRBO, Booking.com, direct bookings, or any other channel.",
  },
  {
    question: "How does msg2ai help property managers with multiple vacation rentals?",
    answer:
      "Property managers can configure msg2ai with property-specific information for each listing. When a guest texts, the AI responds with details specific to their property — the correct lockbox code, the right parking spot, the nearest grocery store to that location. This eliminates the need for property managers to personally handle messages across multiple units.",
  },
  {
    question: "What languages does msg2ai support for international vacation rental guests?",
    answer:
      "msg2ai supports 126 languages with automatic detection. When an international guest messages in Spanish, German, or Japanese, the AI responds in their language automatically. For vacation rentals in tourist destinations that serve guests from many countries, this eliminates the language barrier entirely without requiring multilingual staff or translation services.",
  },
];

export default function VacationRentalsPage() {
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

      <section className="gradient-hero px-6 py-20 text-center text-white">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
          AI Guest Messaging for Vacation Rentals
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
          Automate check-in instructions, local recommendations, and guest inquiries via
          WhatsApp and SMS. No app download. 126 languages. From $9.99/month.
        </p>
      </section>

      <div className="py-12">
        <KeyTakeaways
          items={[
            "Automate WhatsApp and SMS guest messaging for vacation rentals — no app download required.",
            "Reduce manual guest inquiries by 50% with AI-powered responses for check-in, house rules, and local tips.",
            "Works with any booking platform: Airbnb, VRBO, Booking.com, or direct bookings.",
            "126 languages with auto-detection — ideal for tourist destinations serving international guests.",
            "Property managers can configure AI responses per property for multi-unit operations.",
          ]}
        />
      </div>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="text-3xl font-bold">Why Vacation Rental Guests Need Better Messaging</h2>
        <p className="mt-4 text-zinc-600 leading-relaxed">
          Vacation rental guests have more questions than hotel guests. They need lockbox codes, parking
          instructions, appliance guides, trash day schedules, local restaurant recommendations, and emergency
          contact information. Unlike hotels, there&apos;s no front desk to walk up to.
        </p>
        <p className="mt-4 text-zinc-600 leading-relaxed">
          Most hosts handle this with a PDF welcome guide or a series of pre-scheduled messages. But guests
          don&apos;t read 10-page PDFs, and pre-scheduled messages don&apos;t answer the question a guest has
          at 11 PM about how to work the smart TV.
        </p>

        <h2 className="mt-12 text-3xl font-bold">How msg2ai Works for Vacation Rentals</h2>
        <p className="mt-4 text-zinc-600 leading-relaxed">
          You configure msg2ai with your property details once. Guests receive your msg2ai number at booking
          confirmation. When they text — &quot;How do I get in?&quot; &quot;Where&apos;s the nearest grocery store?&quot;
          &quot;The hot tub isn&apos;t working&quot; — the AI responds instantly with accurate, property-specific answers.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            { title: "Check-in Automation", desc: "Lockbox codes, door codes, key locations, and step-by-step arrival instructions delivered automatically when guests ask." },
            { title: "Local Recommendations", desc: "AI provides personalized restaurant, activity, and attraction recommendations based on your curated property guide." },
            { title: "House Rules & How-Tos", desc: "Appliance instructions, Wi-Fi passwords, trash schedules, quiet hours — answered instantly without host intervention." },
            { title: "Maintenance Alerts", desc: "Guest reports an issue? AI acknowledges, logs the problem, and routes urgent items to you or your maintenance team." },
          ].map((f) => (
            <div key={f.title} className="rounded-lg border border-border p-6">
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold">Results for Vacation Rental Hosts</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { stat: "50%", label: "Reduction in manual guest inquiries" },
              { stat: "24/7", label: "Automated responses — even at 3 AM" },
              { stat: "$9.99", label: "Starting price per month" },
            ].map((s) => (
              <div key={s.label} className="stat-card rounded-xl bg-white p-8 text-center shadow-sm">
                <div className="text-4xl font-bold text-primary">{s.stat}</div>
                <div className="mt-2 text-sm text-zinc-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqItems} title="Vacation Rental AI Messaging — FAQ" />

      <CTA
        title="Stop answering the same guest questions manually"
        subtitle="Let AI handle check-in instructions, local tips, and house rules on WhatsApp & SMS."
      />
    </>
  );
}
