import Link from "next/link";

export default function CTA({
  title = "Ready to transform your guest communication?",
  subtitle = "Start messaging guests in 126 languages — no app download required.",
  buttonText = "Get a Free Demo",
  href = "/contact",
}: {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  href?: string;
}) {
  return (
    <section className="gradient-hero px-6 py-16 text-center text-white">
      <h2 className="mx-auto max-w-2xl text-3xl font-bold">{title}</h2>
      <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">{subtitle}</p>
      <Link
        href={href}
        className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-primary hover:bg-zinc-100"
      >
        {buttonText}
      </Link>
    </section>
  );
}
