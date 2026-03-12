interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ items, title = "Frequently Asked Questions" }: { items: FAQItem[]; title?: string }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold">{title}</h2>
      <dl className="space-y-6">
        {items.map((item, i) => (
          <div key={i} className="rounded-lg border border-border p-6">
            <dt className="text-lg font-semibold text-foreground">{item.question}</dt>
            <dd className="mt-2 text-zinc-600">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
