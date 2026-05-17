import Link from "next/link";

export default function FinalStageFooter() {
  return (
    <footer className="border-t border-outline-variant bg-surface-container py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-3 md:px-16">
        <div>
          <p className="font-display text-xl font-bold text-primary">DreamSpace AI</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-on-surface-variant">
            Reimagining interiors with curated intelligence and effortless elegance.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold tracking-wide text-on-surface">Company</h3>
          <div className="flex flex-col gap-3 text-sm text-on-surface-variant">
            <Link href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-primary">
              Terms of Service
            </Link>
            <Link href="#" className="transition-colors hover:text-primary">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold tracking-wide text-on-surface">Social</h3>
          <div className="flex flex-col gap-3 text-sm text-on-surface-variant">
            <Link href="https://instagram.com" className="transition-colors hover:text-primary">
              Instagram
            </Link>
            <Link href="https://pinterest.com" className="transition-colors hover:text-primary">
              Pinterest
            </Link>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-7xl px-6 text-sm text-on-surface-variant md:px-16">
        © 2024 DreamSpace AI. All rights reserved.
      </p>
    </footer>
  );
}
