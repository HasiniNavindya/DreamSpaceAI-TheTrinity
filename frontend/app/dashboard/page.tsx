import type { Metadata } from "next";
import DashboardShell from "@/components/dashboard/DashboardShell";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { getNavLinks } from "@/components/site/navLinks";

export const metadata: Metadata = {
  title: "Dashboard | DreamSpace AI",
  description:
    "Configure your room transformation settings and generate your AI-redesigned space.",
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f2] text-on-surface">
      <SiteHeader links={getNavLinks("")} ctaHref="/loading-state" />

      <main className="px-6 pb-24 pt-28 md:px-16">
        <DashboardShell />
      </main>

      <SiteFooter />
    </div>
  );
}
