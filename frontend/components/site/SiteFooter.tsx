import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-4 md:px-16">
        <div>
          <p className="font-display text-xl font-bold text-primary">DreamSpace AI</p>
          <p className="mt-6 max-w-sm text-base leading-6 text-on-surface-variant">
            Revolutionizing interior design through artificial intelligence and curated
            aesthetic experiences.
          </p>
        </div>

        <div>
          <h4 className="mb-6 text-sm font-medium uppercase tracking-wider text-primary">Explore</h4>
          <ul className="space-y-4">
            <li><Link href="/styles" className="text-base text-on-surface-variant hover:text-primary">Styles</Link></li>
            <li><Link href="/how-it-works" className="text-base text-on-surface-variant hover:text-primary">How It Works</Link></li>
            <li><Link href="/#features" className="text-base text-on-surface-variant hover:text-primary">Features</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-sm font-medium uppercase tracking-wider text-primary">Support</h4>
          <ul className="space-y-4">
            <li><Link href="#privacy" className="text-base text-on-surface-variant hover:text-primary">Privacy Policy</Link></li>
            <li><Link href="#terms" className="text-base text-on-surface-variant hover:text-primary">Terms of Service</Link></li>
            <li><Link href="#contact" className="text-base text-on-surface-variant hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-sm font-medium uppercase tracking-wider text-primary">Follow Us</h4>
          <ul className="space-y-4">
            <li><Link href="https://instagram.com" className="text-base text-on-surface-variant hover:text-primary">Instagram</Link></li>
            <li><Link href="https://pinterest.com" className="text-base text-on-surface-variant hover:text-primary">Pinterest</Link></li>
          </ul>
        </div>

        <div className="col-span-1 mt-12 border-t border-outline-variant/30 pt-12 text-center md:col-span-4">
          <p className="text-base text-on-surface-variant opacity-60">&copy; 2024 DreamSpace AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
