import Link from "next/link";

export default function StylesGalleryFooter() {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-4 md:px-16">
        <div className="space-y-4">
          <p className="font-display text-2xl font-bold text-primary">DreamSpace AI</p>
          <p className="max-w-xs text-base leading-6 text-on-surface-variant">
            Revolutionizing the way you envision and design your living spaces through
            artificial intelligence.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-medium uppercase tracking-widest text-primary">
            Platform
          </h4>
          <Link href="#" className="text-base text-on-surface-variant hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="#" className="text-base text-on-surface-variant hover:text-primary">
            Terms of Service
          </Link>
          <Link href="#" className="text-base text-on-surface-variant hover:text-primary">
            Contact
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-medium uppercase tracking-widest text-primary">
            Social
          </h4>
          <Link href="#" className="text-base text-on-surface-variant hover:text-primary">
            Instagram
          </Link>
          <Link href="#" className="text-base text-on-surface-variant hover:text-primary">
            Pinterest
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-medium uppercase tracking-widest text-primary">
            Newsletter
          </h4>
          <p className="text-base text-on-surface-variant">
            Subscribe for weekly style inspiration.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-full border border-outline-variant bg-surface-container-low px-4 py-2 text-base outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              type="button"
              className="rounded-full bg-primary p-2 text-white transition-transform hover:scale-105"
              aria-label="Subscribe"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl border-t border-outline-variant/30 px-6 pt-8 text-base text-on-surface-variant md:px-16">
        © 2024 DreamSpace AI. All rights reserved.
      </div>
    </footer>
  );
}
