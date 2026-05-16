"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import MoodboardPin from "@/components/moodboard/MoodboardPin";
import {
  MOODBOARD_CATEGORIES,
  MOODBOARD_ITEMS,
  type MoodboardCategory,
} from "@/lib/moodboardItems";
import {
  getMoodboardSelections,
  getSelectedStyle,
  saveMoodboardSelections,
} from "@/lib/transformationStorage";
import { INTERIOR_STYLES } from "@/lib/interiorStyles";

export default function MoodboardGrid() {
  const router = useRouter();
  const [category, setCategory] = useState<MoodboardCategory>("all");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [styleName, setStyleName] = useState<string | null>(null);

  useEffect(() => {
    const styleId = getSelectedStyle();
    if (styleId) {
      const style = INTERIOR_STYLES.find((s) => s.id === styleId);
      setStyleName(style?.name ?? null);
    }
    setSelectedIds(getMoodboardSelections());
  }, []);

  const filtered = useMemo(() => {
    if (category === "all") return MOODBOARD_ITEMS;
    return MOODBOARD_ITEMS.filter((item) => item.category === category);
  }, [category]);

  function toggleItem(id: string) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }

  function goToDashboard(save: boolean) {
    saveMoodboardSelections(save ? selectedIds : []);
    router.push("/dashboard");
  }

  const savedCount = selectedIds.length;

  return (
    <>
      <div className="sticky top-20 z-30 -mx-4 border-b border-[#e9e9e9] bg-white/95 px-4 pb-3 pt-2 backdrop-blur-md md:-mx-8 md:px-8">
        <div className="mx-auto flex max-w-[2000px] flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h1 className="text-xl font-bold text-[#111] md:text-2xl">AI Moodboard</h1>
              <p className="text-sm text-[#767676]">
                {styleName
                  ? `Ideas for your ${styleName} transformation`
                  : "Save pins to customize your transformation"}
              </p>
            </div>
            {savedCount > 0 && (
              <span className="rounded-full bg-[#f1f1f1] px-3 py-1 text-sm font-semibold text-[#111]">
                {savedCount} saved
              </span>
            )}
          </div>

          <div className="hide-scrollbar flex gap-2 overflow-x-auto pb-1">
            {MOODBOARD_CATEGORIES.map((cat) => {
              const active = category === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setCategory(cat.id)}
                  className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-[#111] text-white"
                      : "bg-[#efefef] text-[#111] hover:bg-[#e2e2e2]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-[2000px] pb-32 pt-4">
        <div className="pinterest-masonry">
          {filtered.map((item) => (
            <MoodboardPin
              key={item.id}
              item={item}
              isSaved={selectedIds.includes(item.id)}
              onToggle={() => toggleItem(item.id)}
            />
          ))}
        </div>
      </section>

      <div className="pointer-events-none fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-[#e9e9e9] bg-white p-2 shadow-[0_4px_24px_rgba(0,0,0,0.12)]">
          <button
            type="button"
            onClick={() => goToDashboard(false)}
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-[#111] transition-colors hover:bg-[#efefef]"
          >
            Skip
          </button>
          <button
            type="button"
            onClick={() => goToDashboard(true)}
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {savedCount > 0 ? `Continue (${savedCount})` : "Back to Dashboard"}
          </button>
        </div>
      </div>
    </>
  );
}
