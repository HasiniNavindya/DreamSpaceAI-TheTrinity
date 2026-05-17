"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  INTERIOR_STYLES,
  getStyleGalleryImage,
  type InteriorStyle,
} from "@/lib/interiorStyles";
import { getSelectedStyle, saveSelectedStyle } from "@/lib/transformationStorage";
import StylesGalleryFeatured from "@/components/styles-gallery/StylesGalleryFeatured";

export default function StylesGalleryGrid() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const savedStyleId = getSelectedStyle();
    if (savedStyleId) {
      setSelectedId(savedStyleId);
    }
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return INTERIOR_STYLES;
    return INTERIOR_STYLES.filter((style) => style.name.toLowerCase().includes(q));
  }, [query]);

  function goToMoodboard(withStyle: boolean) {
    saveSelectedStyle(withStyle && selectedId ? selectedId : null);
    router.push("/moodboard");
  }

  function toggleStyle(style: InteriorStyle) {
    setSelectedId((current) => {
      const next = current === style.id ? null : style.id;
      saveSelectedStyle(next);
      return next;
    });
  }

  function selectLuxuryStyle() {
    setSelectedId("luxury");
    saveSelectedStyle("luxury");

    requestAnimationFrame(() => {
      document
        .getElementById("style-card-luxury")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  return (
    <div className="flex flex-1 flex-col pb-16">
      <header className="mb-16 space-y-6 text-center">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-on-surface md:text-6xl md:leading-[72px]">
          Explore Interior Styles
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-7 text-secondary">
          Find your perfect aesthetic and transform your space with our curated collection of
          AI-powered interior designs.
        </p>
        <div className="relative mx-auto max-w-xl">
          <span className="material-symbols-outlined pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-outline">
            search
          </span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search styles (e.g., 'Modern Living Room')"
            className="w-full rounded-full border border-outline-variant bg-surface-container-low py-4 pl-14 pr-6 text-base outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-primary"
          />
        </div>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((style) => {
          const isSelected = selectedId === style.id;
          return (
            <button
              key={style.id}
              id={style.id === "luxury" ? "style-card-luxury" : undefined}
              type="button"
              onClick={() => toggleStyle(style)}
              className={`style-card group relative h-[500px] cursor-pointer overflow-hidden rounded-2xl text-left ambient-shadow transition-all duration-300 hover:scale-[1.03] hover-shadow ${
                isSelected ? "ring-4 ring-primary ring-offset-2 ring-offset-background" : ""
              }`}
            >
              <Image
                src={getStyleGalleryImage(style)}
                alt={style.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
              <div className="glass-overlay absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="mb-4 font-display text-2xl font-bold text-white drop-shadow-sm">
                  {style.name}
                </h3>
                <div className="card-inner-btn">
                  <span className="flex min-h-[52px] w-full items-center justify-center rounded-full bg-[#C86B4A] px-6 py-3 text-center text-sm font-semibold leading-none tracking-wide text-white shadow-md transition-all duration-300 group-hover:brightness-110">
                    {isSelected ? "Selected" : "Select Style"}
                  </span>
                </div>
              </div>
              {isSelected ? (
                <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-md">
                  <span className="material-symbols-outlined text-xl">check</span>
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      <StylesGalleryFeatured
        onSelectLuxury={selectLuxuryStyle}
        isLuxurySelected={selectedId === "luxury"}
      />

      <div className="mt-16 border-t border-outline-variant/40 pt-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => goToMoodboard(true)}
            className="w-full rounded-full bg-primary px-10 py-3 text-sm font-medium tracking-wide text-on-primary transition-all hover:scale-105 sm:w-auto"
          >
            Visit Moodboard
          </button>
          <button
            type="button"
            onClick={() => goToMoodboard(false)}
            className="w-full rounded-full border border-outline-variant px-10 py-3 text-sm font-medium tracking-wide text-secondary transition-colors hover:border-primary hover:text-primary sm:w-auto"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
}
