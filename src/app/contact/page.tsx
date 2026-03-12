import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Demo",
  description:
    "Get a free demo of msg2ai's AI guest messaging platform. Contact us about AI messaging for hotels, vacation rentals, and events.",
  alternates: { canonical: "https://msg2ai.xyz/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="px-6 py-20 text-center">
        <h1 className="text-4xl font-bold">Get a Free Demo</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">
          See how msg2ai can automate guest messaging for your hotel, vacation rental, or event.
        </p>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-20">
        <form className="space-y-6 rounded-xl border border-border p-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 w-full rounded-lg border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 w-full rounded-lg border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label htmlFor="business" className="block text-sm font-medium text-foreground">
              Business Type
            </label>
            <select
              id="business"
              name="business"
              className="mt-1 w-full rounded-lg border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="">Select your business type</option>
              <option value="hotel">Hotel</option>
              <option value="vacation-rental">Vacation Rental</option>
              <option value="event">Event / Conference</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground">
              Tell us about your needs
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 w-full rounded-lg border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Number of properties, current guest communication challenges, etc."
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-primary py-3 font-semibold text-white hover:bg-primary-dark"
          >
            Request Demo
          </button>
          <p className="text-center text-xs text-zinc-500">
            No commitment. We&apos;ll show you how msg2ai works for your specific use case.
          </p>
        </form>
      </section>
    </>
  );
}
