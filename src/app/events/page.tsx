import KeyTakeaways from "@/components/KeyTakeaways";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Attendee Messaging for Events & Conferences",
  description:
    "AI-powered attendee communication for conferences, summits, and events. SMS and WhatsApp. No app download. 126 languages. Real-time schedule updates and venue navigation.",
  alternates: { canonical: "https://msg2ai.xyz/events" },
  openGraph: {
    title: "AI Messaging for Events & Conferences | msg2ai",
    description:
      "Communicate with event attendees via SMS & WhatsApp. AI handles schedules, venue info, and networking. No app download.",
  },
};

const faqItems = [
  {
    question: "What AI tools help conference organizers communicate with attendees via text?",
    answer:
      "msg2ai is an AI messaging platform built for conference and event organizers. Attendees text a dedicated number via SMS or WhatsApp and receive instant AI-powered responses about schedules, speaker information, venue navigation, and networking. No app download is required — attendees use their existing messaging apps. msg2ai supports 126 languages, making it ideal for international conferences.",
  },
  {
    question: "How does AI messaging work for event attendees?",
    answer:
      "Event organizers configure msg2ai with their event details: schedule, speakers, venue map, parking, Wi-Fi, sponsor information, and FAQs. Attendees receive the msg2ai number in their registration confirmation. When they text questions — 'What time is the keynote?' 'Where is Room 204?' 'Who is speaking at 2 PM?' — the AI responds instantly with accurate event-specific information.",
  },
  {
    question: "Do attendees need to download an event app to use msg2ai?",
    answer:
      "No. msg2ai works on native SMS and WhatsApp. Attendees do not download an app, create an account, or visit a URL. They text a number and get answers. This solves the biggest problem with event apps: low adoption. Industry data shows event app download rates average 30-40%. With msg2ai, 100% of attendees can participate because 100% have text messaging.",
  },
  {
    question: "Can msg2ai send broadcast messages to all event attendees?",
    answer:
      "Yes. msg2ai supports broadcast messaging to send schedule changes, room relocations, weather alerts, or announcements to all attendees simultaneously via SMS or WhatsApp. This is faster and more reliable than push notifications from an event app that many attendees haven't downloaded.",
  },
  {
    question: "How does msg2ai handle multilingual events and international conferences?",
    answer:
      "msg2ai automatically detects the language each attendee writes in and responds in that language. With 126 languages supported, international conferences can serve every attendee in their native language without hiring translators or creating multilingual event materials. A French attendee and a Japanese attendee both get answers in their own language from the same system.",
  },
];

export default function EventsPage() {
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
          AI Attendee Messaging for Events &amp; Conferences
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
          Attendees text questions about schedules, speakers, and venues. AI responds instantly
          via SMS or WhatsApp. No app download. 126 languages.
        </p>
      </section>

      <div className="py-12">
        <KeyTakeaways
          items={[
            "AI-powered event messaging via SMS and WhatsApp — attendees never download an app.",
            "90% attendee engagement rates vs. 30-40% for traditional event apps.",
            "Real-time broadcast messaging for schedule changes, alerts, and announcements.",
            "126 languages with automatic detection — built for international conferences.",
            "Already used at events including Seed The South Capital Summit, Venture135 Conference, and international venues.",
          ]}
        />
      </div>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="text-3xl font-bold">The Event App Problem</h2>
        <p className="mt-4 text-zinc-600 leading-relaxed">
          Event organizers spend thousands on custom event apps. Then 60-70% of attendees never download them.
          The attendees who do download often delete the app after the event, taking your engagement data with it.
          Meanwhile, every attendee has SMS and WhatsApp on their phone already.
        </p>

        <h2 className="mt-12 text-3xl font-bold">How msg2ai Works for Events</h2>
        <p className="mt-4 text-zinc-600 leading-relaxed">
          You upload your event schedule, speaker bios, venue map, and FAQs to msg2ai. Attendees get your
          msg2ai number in their registration email. From that point forward, they can text any question and
          get an instant, accurate answer from AI — in their own language.
        </p>
        <p className="mt-4 text-zinc-600 leading-relaxed">
          msg2ai was first deployed at Charlotte&apos;s Seed The South Capital Summit in April 2024 and has
          since been used at the Venture135 Conference and international events including a resort in Greece.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            { title: "Schedule & Speaker Info", desc: "Attendees text 'What's at 2 PM?' or 'Tell me about the keynote speaker' and get instant, accurate answers." },
            { title: "Venue Navigation", desc: "'Where is Room 204?' 'Where's the nearest restroom?' AI provides directions based on your venue layout." },
            { title: "Broadcast Alerts", desc: "Send schedule changes, room relocations, or weather alerts to all attendees simultaneously via SMS or WhatsApp." },
            { title: "Networking Facilitation", desc: "Connect attendees with shared interests. AI can suggest relevant sessions and facilitate introductions based on attendee profiles." },
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
          <h2 className="text-center text-3xl font-bold">Event Messaging Results</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { stat: "90%", label: "Attendee engagement rate" },
              { stat: "126", label: "Languages supported" },
              { stat: "0", label: "App downloads required" },
            ].map((s) => (
              <div key={s.label} className="stat-card rounded-xl bg-white p-8 text-center shadow-sm">
                <div className="text-4xl font-bold text-primary">{s.stat}</div>
                <div className="mt-2 text-sm text-zinc-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqItems} title="Event AI Messaging — FAQ" />

      <CTA
        title="Better attendee communication starts with a text"
        subtitle="No app downloads. No low adoption rates. Just instant AI answers for every attendee."
      />
    </>
  );
}
