import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import { getNavLinks } from "@/components/site/navLinks";
import MoodboardGrid from "@/components/moodboard/MoodboardGrid";

export const metadata: Metadata = {
  title: "AI Moodboard | DreamSpace AI",
  description:
    "Curate furniture, lighting, decor, and color inspirations for your interior transformation.",
};

export default function MoodboardPage() {
  return (
    <div className="min-h-screen bg-white text-[#111]">
      <SiteHeader links={getNavLinks("")} />
      <main className="mx-auto w-full max-w-[2000px] px-4 pb-8 pt-24 md:px-8">
        <MoodboardGrid />
      </main>
    </div>
  );
}
