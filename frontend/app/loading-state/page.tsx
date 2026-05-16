import type { Metadata } from "next";
import ImageUploadForm from "@/components/upload/ImageUploadForm";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { getNavLinks } from "@/components/site/navLinks";

export const metadata: Metadata = {
  title: "DreamSpace AI | Upload Your Room",
  description:
    "Upload a photo of your room to start your AI-powered interior transformation with DreamSpace AI.",
};

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f2] text-on-surface">
      <SiteHeader links={getNavLinks("/loading-state")} />

      <main className="flex min-h-screen flex-col items-center px-6 pb-24 pt-28 md:px-16">
        <div className="mb-10 max-w-2xl text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary-container">
            <span className="material-symbols-outlined text-[32px] text-primary">add_a_photo</span>
          </div>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-on-surface md:text-5xl">
            Upload Your Room
          </h1>
          <p className="mt-3 text-lg leading-7 text-secondary">
            Add a photo of your space to begin the transformation.
          </p>
        </div>

        <ImageUploadForm />
      </main>

      <SiteFooter />
    </div>
  );
}
