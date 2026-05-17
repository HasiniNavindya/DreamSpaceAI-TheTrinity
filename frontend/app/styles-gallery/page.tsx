import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import { getNavLinks } from "@/components/site/navLinks";
import StylesGalleryGrid from "@/components/styles-gallery/StylesGalleryGrid";
import SiteFooter from "@/components/site/SiteFooter";

export const metadata: Metadata = {
  title: "Explore Interior Styles | DreamSpace AI",
  description:
    "Browse interior design styles and choose one to transform your space with DreamSpace AI.",
};

export default function StylesGalleryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader links={getNavLinks("")} />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pt-32 md:px-16">
        <StylesGalleryGrid />
      </main>
      <SiteFooter />
    </div>
  );
}
