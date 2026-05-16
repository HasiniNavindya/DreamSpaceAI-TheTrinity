
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import { getNavLinks } from "@/components/site/navLinks";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home", active: true },
  { href: "/comparison", label: "Comparison" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "#features", label: "Features" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About Us" },
];


const features = [
  {
    icon: "bolt",
    title: "Instant Rendering",
    description:
      "Upload a photo and watch AI generate a realistic redesign in under 30 seconds.",
  },
  {
    icon: "palette",
    title: "Curated Styles",
    description:
      "Choose from Japandi, Mid-Century, contemporary, and more styles tailored to your taste.",
  },
  {
    icon: "architecture",
    title: "Structural Smart",
    description:
      "Our AI understands walls, openings, and layout so every transform stays structurally believable.",
  },
];

export const metadata: Metadata = {
  title: "DreamSpace AI | Visualize Your Dream Space",
  description:
    "Visualize your dream space with AI-powered room transformations, style previews, and fast photorealistic redesigns.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f5f2] text-on-surface">

      <SiteHeader links={getNavLinks("/")} />

      <header className="fixed top-0 z-50 w-full border-b border-[#e9ddd4] bg-surface/85 backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-16">
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
            href="/comparison"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium tracking-wide text-on-primary transition-all duration-150 hover:scale-105 active:scale-95"
          >
            Get Started
          </Link>
        </nav>
      </header>


      <main className="pt-28 md:pt-32">
        <section className="mx-auto max-w-7xl px-6 md:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex rounded-full bg-primary-fixed px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-on-primary-fixed shadow-sm">
              Transformation showcase
            </div>
            <h1 className="font-display text-5xl font-semibold tracking-tight text-on-surface md:text-[64px] md:leading-18">
              Visualize Your Dream Space
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-secondary">
              Experience the power of AI-driven interior design. Upload your room and
              see it transformed from minimal to maximal, modern to serene, in
              seconds.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[28px] bg-white shadow-[0_20px_48px_rgba(43,43,43,0.08)] ring-1 ring-black/5">
            <div className="flex items-center justify-between border-b border-[#eee3db] bg-[#fbf7f3] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">Before</span>
              <span className="rounded-full bg-primary px-3 py-1 text-white">After</span>
            </div>

            <div className="relative aspect-16/8.5 bg-[#ece3db]">
              <Image
                src="/landingImg2.png"
                alt="Original interior room"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 80vw"
              />

              <div className="absolute inset-y-0 left-1/2 z-20 w-px bg-primary/80 shadow-[0_0_0_1px_rgba(255,255,255,0.8)]">
                <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-primary text-white shadow-lg">
                  <span className="material-symbols-outlined text-[18px]">drag_indicator</span>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 z-10 w-1/2 overflow-hidden border-l border-white/70">
                <Image
                  src="/landingImg1.png"
                  alt="AI transformed interior room"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 50vw, 40vw"
                />
              </div>

              <div className="absolute left-4 top-4 z-30 rounded-full bg-black/70 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                Before
              </div>
              <div className="absolute right-4 top-4 z-30 rounded-full bg-primary/90 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                After
              </div>

              <div className="absolute bottom-3 left-1/2 z-30 -translate-x-1/2 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-secondary shadow-md backdrop-blur">
                Drag the slider to compare the transformation
              </div>
            </div>
          </div>

          <section id="features" className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-3xl bg-[#fffdfb] p-8 shadow-[0_12px_32px_rgba(43,43,43,0.04)] transition-transform duration-300 hover:scale-[1.01]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed text-primary">
                  <span className="material-symbols-outlined text-[22px]">{feature.icon}</span>
                </div>
                <h2 className="font-display text-2xl font-medium text-primary md:text-[32px]">
                  {feature.title}
                </h2>
                <p className="mt-3 text-base leading-6 text-on-surface-variant">
                  {feature.description}
                </p>
              </article>
            ))}
          </section>
        </section>
      </main>

      <footer className="mt-24 border-t border-outline-variant bg-surface-container py-20 md:mt-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-4 md:px-16">
          <div>
            <div className="font-display text-xl font-bold text-primary">DreamSpace AI</div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-on-surface-variant">
              Revolutionizing interior design through fast, elegant, AI-powered room transformations.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wide text-on-surface">Company</h3>
            <div className="flex flex-col gap-3 text-sm text-on-surface-variant">
              <Link href="#about" className="transition-colors hover:text-primary">About Us</Link>
              <Link href="#gallery" className="transition-colors hover:text-primary">Gallery</Link>
              <Link href="#features" className="transition-colors hover:text-primary">Features</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wide text-on-surface">Support</h3>
            <div className="flex flex-col gap-3 text-sm text-on-surface-variant">
              <Link href="#privacy" className="transition-colors hover:text-primary">Privacy Policy</Link>
              <Link href="#terms" className="transition-colors hover:text-primary">Terms of Service</Link>
              <Link href="#contact" className="transition-colors hover:text-primary">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wide text-on-surface">Social</h3>
            <div className="flex flex-col gap-3 text-sm text-on-surface-variant">
              <Link href="https://instagram.com" className="transition-colors hover:text-primary">Instagram</Link>
              <Link href="https://pinterest.com" className="transition-colors hover:text-primary">Pinterest</Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl px-6 md:px-16">

          <p className="text-sm text-on-surface-variant">┬⌐ 2024 DreamSpace AI. All rights reserved.</p>

          <p className="text-sm text-on-surface-variant">© 2024 DreamSpace AI. All rights reserved.</p>

        </div>
      </footer>
    </div>
  );
}
