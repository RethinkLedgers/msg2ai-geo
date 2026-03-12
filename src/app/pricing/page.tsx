import CTA from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "msg2ai pricing plans for AI guest messaging. Starter at $9.99/month, Professional at $24.99/month, Expert with custom pricing. All plans include AI responses, broadcast messaging, and analytics.",
  alternates: { canonical: "https://msg2ai.xyz/pricing" },
};

const plans = [
  {
    name: "Starter",
    price: "$9.99",
    period: "/month",
    messages: "250 messages",
    description: "For small properties and individual hosts getting started with AI messaging.",
    features: [
      "AI-powered guest responses",
      "SMS and WhatsApp support",
      "126 language auto-detection",
      "Broadcast messaging",
      "Chat history and analytics",
      "Sentiment analysis",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$24.99",
    period: "/month",
    messages: "1,000 messages",
    description: "For boutique hotels and property managers with moderate messaging volume.",
    features: [
      "Everything in Starter",
      "1,000 messages per month",
      "Priority support",
      "Custom AI training",
      "Multi-property support",
      "Advanced analytics",
      "Branded messaging",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Expert",
    price: "Custom",
    period: "",
    messages: "5,000+ messages",
    description: "For hotel groups, large events, and high-volume operators needing custom solutions.",
    features: [
      "Everything in Professional",
      "5,000+ messages per month",
      "Dedicated account manager",
      "Custom integrations",
      "White-label options",
      "SLA guarantees",
      "Phone support",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "msg2ai Pricing",
    description: "AI guest messaging plans starting at $9.99/month.",
    offers: plans.map((p) => ({
      "@type": "Offer",
      name: p.name,
      price: p.price === "Custom" ? undefined : p.price.replace("$", ""),
      priceCurrency: "USD",
      description: p.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="px-6 py-20 text-center">
        <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">
          AI guest messaging for hotels, vacation rentals, and events. No hidden fees.
          No long-term contracts. Start free.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-xl border p-8 ${
                plan.highlighted
                  ? "border-primary shadow-lg shadow-primary/10"
                  : "border-border"
              }`}
            >
              {plan.highlighted && (
                <span className="mb-4 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  Most Popular
                </span>
              )}
              <h2 className="text-2xl font-bold">{plan.name}</h2>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-zinc-500">{plan.period}</span>
              </div>
              <p className="mt-1 text-sm text-zinc-500">{plan.messages}</p>
              <p className="mt-4 text-sm text-zinc-600">{plan.description}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-zinc-700">
                    <span className="mt-0.5 text-accent">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className={`mt-8 block rounded-full py-3 text-center font-semibold ${
                  plan.highlighted
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "border border-border text-foreground hover:bg-muted"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <CTA
        title="Not sure which plan is right?"
        subtitle="Book a demo and we'll help you find the right fit for your property or event."
        buttonText="Schedule a Demo"
      />
    </>
  );
}
