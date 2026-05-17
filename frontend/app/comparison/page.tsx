import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { getNavLinks } from "@/components/site/navLinks";

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
  title: "Comparison | DreamSpace AI",
  description:
    "Compare before and after interior redesigns with a polished DreamSpace AI showcase page.",
};

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f2] text-on-surface">
      <SiteHeader links={getNavLinks("/comparison")} />

      <main className="pt-28 md:pt-32">
        <section className="mx-auto max-w-7xl px-6 md:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex rounded-full bg-primary-fixed px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-on-primary-fixed shadow-sm">
              Comparison view
            </div>
            <h1 className="font-display text-5xl font-semibold tracking-tight text-on-surface md:text-[64px] md:leading-18">
              Compare the Transformation
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-secondary">
              See the before-and-after relationship in one polished view, designed to
              make the change feel immediate and measurable.
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

      <SiteFooter />

    </div>
  );
}
