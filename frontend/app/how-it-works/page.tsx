import type { Metadata } from "next";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#styles", label: "Styles" },
  { href: "/how-it-works", label: "How It Works", active: true },
  { href: "/#features", label: "Features" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#about", label: "About Us" },
];

const steps = [
  {
    icon: "upload",
    title: "Upload Your Room",
    description:
      "Upload a photo of your room from any angle. Our AI handles lighting and perspective automatically.",
  },
  {
    icon: "palette",
    title: "Choose Your Style",
    description:
      "Pick your favorite interior style from our collection. From Mid-Century Modern to Japandi minimalism.",
  },
  {
    icon: "auto_awesome",
    title: "AI Transforms It",
    description:
      "Our AI redesigns your space in seconds, generating high-fidelity renders tailored to your exact floor plan.",
  },
];

export const metadata: Metadata = {
  title: "How It Works | DreamSpace AI",
  description:
    "See how DreamSpace AI transforms a room in three simple steps: upload, choose a style, and generate a redesign.",
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <nav className="fixed top-0 z-50 w-full bg-surface/80 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-16">
          <Link href="/" className="font-display text-2xl font-bold text-primary">
            DreamSpace AI
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                  link.active
                    ? "border-b-2 border-primary pb-1 font-bold text-primary"
                    : "text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/#get-started"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium tracking-wide text-on-primary transition-all duration-150 hover:scale-105 active:scale-95"
          >
            Get Started
          </Link>
        </div>
      </nav>

      <main className="bg-[#f7f5f2] pb-24 pt-32 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16">
          <section className="text-center">
            <h1 className="font-display text-5xl font-semibold tracking-tight text-primary md:text-7xl">
              How It Works
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-secondary md:text-lg md:leading-8">
              Elevate your living space in three simple steps with our intelligent
              design platform.
            </p>
          </section>

          <section className="relative mt-20">
            <div className="hidden md:block">
              <div className="absolute left-[30%] top-1/2 z-0 h-0.5 w-[10%] -translate-y-1/2 bg-[linear-gradient(to_right,#C86B4A_50%,transparent_0%)] bg-size-[12px_2px] bg-repeat-x">
                <div className="absolute -top-1.25 right-0 border-b-[6px] border-l-10 border-t-[6px] border-b-transparent border-l-primary border-t-transparent" />
              </div>
              <div className="absolute left-[63%] top-1/2 z-0 h-0.5 w-[10%] -translate-y-1/2 bg-[linear-gradient(to_right,#C86B4A_50%,transparent_0%)] bg-size-[12px_2px] bg-repeat-x">
                <div className="absolute -top-1.25 right-0 border-b-[6px] border-l-10 border-t-[6px] border-b-transparent border-l-primary border-t-transparent" />
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-3">
              {steps.map((step) => (
                <article
                  key={step.title}
                  className="rounded-[28px] bg-white/95 p-10 text-center shadow-[0_12px_32px_rgba(43,43,43,0.04)] transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-surface-container-highest">
                    <span className="material-symbols-outlined text-[48px] text-primary">
                      {step.icon}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl font-medium text-on-surface">
                    {step.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-on-surface-variant">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-20 text-center">
            <Link
              href="/#get-started"
              className="inline-flex rounded-full bg-primary px-10 py-5 text-sm font-medium tracking-wide text-on-primary shadow-lg transition-all duration-150 hover:scale-105 active:scale-95"
            >
              Start Your Transformation
            </Link>
          </section>
        </div>
      </main>

      <footer className="w-full border-t border-outline-variant bg-surface-container py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-4 md:px-16">
          <div className="flex flex-col gap-4">
            <div className="font-display text-xl font-bold text-primary">
              DreamSpace AI
            </div>
            <p className="text-base leading-6 text-on-surface-variant">
              Transforming homes with intelligent, editorial-grade interior
              design.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold tracking-wide text-primary">
              Company
            </span>
            <Link
              href="/#about"
              className="text-base text-on-surface-variant transition-colors hover:text-primary"
            >
              About Us
            </Link>
            <Link
              href="/#contact"
              className="text-base text-on-surface-variant transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold tracking-wide text-primary">
              Legal
            </span>
            <Link
              href="/privacy"
              className="text-base text-on-surface-variant transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-base text-on-surface-variant transition-colors hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold tracking-wide text-primary">
              Social
            </span>
            <Link
              href="https://instagram.com"
              className="text-base text-on-surface-variant transition-colors hover:text-primary"
            >
              Instagram
            </Link>
            <Link
              href="https://pinterest.com"
              className="text-base text-on-surface-variant transition-colors hover:text-primary"
            >
              Pinterest
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-outline-variant/30 px-6 pt-8 md:px-16">
          <p className="text-base text-on-surface-variant">
            © 2024 DreamSpace AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}