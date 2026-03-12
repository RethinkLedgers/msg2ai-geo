export default function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <section className="mx-auto max-w-3xl rounded-xl border border-accent/30 bg-accent/5 px-8 py-8">
      <h2 className="mb-4 text-xl font-bold text-foreground">Key Takeaways</h2>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-zinc-700">
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
              {i + 1}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
