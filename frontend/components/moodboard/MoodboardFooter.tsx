import Link from "next/link";

export default function MoodboardFooter() {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-4 md:px-16">
        <div className="flex flex-col gap-4">
          <p className="font-display text-2xl font-bold text-primary">DreamSpace AI</p>
          <p className="text-base leading-6 text-on-surface-variant">
            Elevating interiors through the precision of artificial intelligence and
            timeless design principles.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-medium tracking-wide text-primary">Legal</h4>
          <Link href="#" className="text-on-surface-variant hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="#" className="text-on-surface-variant hover:text-primary">
            Terms of Service
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-medium tracking-wide text-primary">Social</h4>
          <Link href="#" className="text-on-surface-variant hover:text-primary">
            Instagram
          </Link>
          <Link href="#" className="text-on-surface-variant hover:text-primary">
            Pinterest
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-medium tracking-wide text-primary">Support</h4>
          <Link href="#" className="text-on-surface-variant hover:text-primary">
            Contact
          </Link>
          <p className="mt-4 text-base text-on-surface-variant">
            © 2024 DreamSpace AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
