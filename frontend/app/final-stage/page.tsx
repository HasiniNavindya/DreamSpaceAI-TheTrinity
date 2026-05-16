import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import { getNavLinks } from "@/components/site/navLinks";
import FinalStageExperience from "@/components/final-stage/FinalStageExperience";
import FinalStageFooter from "@/components/final-stage/FinalStageFooter";

export const metadata: Metadata = {
  title: "Your Dream Space Awaits | DreamSpace AI",
  description:
    "Your AI interior transformation is in progress. Download your redesigned room when complete.",
};

export default function FinalStagePage() {
  return (
    <div className="min-h-screen bg-[#f7f5f2] text-on-surface">
      <SiteHeader
        links={getNavLinks("")}
        ctaHref="/loading-state"
        ctaLabel="Get Started Again"
      />
      <FinalStageExperience />
      <FinalStageFooter />
    </div>
  );
}
