import type { Metadata } from "next";
import { Features } from "@/components/landing/Features";
import { Hero } from "@/components/landing/Hero";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { getNavLinks } from "@/components/site/navLinks";

export const metadata: Metadata = {
  title: "DreamSpace AI | Redesign Your Space",
  description:
    "Upload your room image and transform it into your dream space in seconds with curated AI interior design styles.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f5f2] text-on-surface">
      <SiteHeader links={getNavLinks("/")} />

      <main className="pt-24 md:pt-28">
        <section id="get-started" className="mx-auto max-w-7xl px-6 md:px-16">
          <Hero />
        </section>

        <section id="styles">
          <Features />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
