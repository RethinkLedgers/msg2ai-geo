import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-primary">
          msg2ai
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/hotels" className="text-sm font-medium text-foreground hover:text-primary">
            Hotels
          </Link>
          <Link href="/vacation-rentals" className="text-sm font-medium text-foreground hover:text-primary">
            Vacation Rentals
          </Link>
          <Link href="/events" className="text-sm font-medium text-foreground hover:text-primary">
            Events
          </Link>
          <Link href="/blog/no-app-required-guest-messaging" className="text-sm font-medium text-foreground hover:text-primary">
            Blog
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-foreground hover:text-primary">
            Pricing
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-white hover:bg-primary-dark"
          >
            Get a Demo
          </Link>
        </div>
      </nav>
    </header>
  );
}
