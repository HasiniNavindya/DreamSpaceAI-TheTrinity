import Link from "next/link";

export default function LoadingFooter() {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container py-24 md:py-30">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-4 md:px-16">
        <div>
          <p className="font-display text-xl font-bold text-primary">DreamSpace AI</p>
          <p className="mt-4 max-w-sm text-base leading-6 text-on-surface-variant">
            Elevating interiors through the precision of artificial intelligence and the
            soul of curated design.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-medium uppercase tracking-wider text-primary">Explore</h4>
          <div className="mt-4 flex flex-col gap-4">
            <Link href="/#gallery" className="text-base text-on-surface-variant hover:text-primary">
              Gallery
            </Link>
            <Link href="/styles" className="text-base text-on-surface-variant hover:text-primary">
              Styles
            </Link>
            <Link href="#pricing" className="text-base text-on-surface-variant hover:text-primary">
              Pricing
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium uppercase tracking-wider text-primary">Legal</h4>
          <div className="mt-4 flex flex-col gap-4">
            <Link href="#privacy" className="text-base text-on-surface-variant hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#terms" className="text-base text-on-surface-variant hover:text-primary">
              Terms of Service
            </Link>
            <Link href="#contact" className="text-base text-on-surface-variant hover:text-primary">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium uppercase tracking-wider text-primary">Social</h4>
          <div className="mt-4 flex flex-col gap-4">
            <Link href="https://instagram.com" className="text-base text-on-surface-variant hover:text-primary">
              Instagram
            </Link>
            <Link href="https://pinterest.com" className="text-base text-on-surface-variant hover:text-primary">
              Pinterest
            </Link>
            <p className="mt-4 text-base text-on-surface-variant">
              &copy; 2024 DreamSpace AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
