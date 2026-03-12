import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-3 text-lg font-bold text-foreground">msg2ai</h3>
            <p className="text-sm text-zinc-600">
              AI-powered guest messaging for hotels, vacation rentals, and events.
              126 languages. No app download required.
            </p>
            <p className="mt-2 text-sm text-zinc-500">Charlotte, NC</p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Solutions</h4>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li><Link href="/hotels" className="hover:text-primary">Hotels</Link></li>
              <li><Link href="/vacation-rentals" className="hover:text-primary">Vacation Rentals</Link></li>
              <li><Link href="/events" className="hover:text-primary">Events &amp; Conferences</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li><Link href="/blog/no-app-required-guest-messaging" className="hover:text-primary">Blog</Link></li>
              <li><Link href="/pricing" className="hover:text-primary">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Connect</h4>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li><a href="https://www.facebook.com/people/Msg2ai/61565193947221/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Facebook</a></li>
              <li><a href="https://msg2ai.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-primary">msg2ai.xyz</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-zinc-500">
          &copy; {new Date().getFullYear()} msg2ai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
