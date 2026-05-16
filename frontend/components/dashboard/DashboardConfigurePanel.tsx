"use client";

import Link from "next/link";

const ROOM_TYPES = [
  "Living Room",
  "Bedroom",
  "Kitchen",
  "Dining Area",
  "Home Office",
] as const;

type DashboardConfigurePanelProps = {
  roomType: string;
  setRoomType: (value: string) => void;
  selectedStyleName: string | null;
  moodboardCount: number;
  onGenerate: () => void;
  isLoading?: boolean;
};

export default function DashboardConfigurePanel({
  roomType,
  setRoomType,
  selectedStyleName,
  moodboardCount,
  onGenerate,
  isLoading = false,
}: DashboardConfigurePanelProps) {
  return (
    <div className="rounded-xl border border-[#efe6e1] bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">tune</span>
        <h2 className="text-lg font-medium text-[#4a3f39]">Transformation Settings</h2>
      </div>

      <div className="space-y-2">
        <label className="ml-1 text-xs uppercase tracking-wider text-[#8e7e76]">
          Room Type
        </label>
        <div className="relative">
          <select
            value={roomType}
            onChange={(event) => setRoomType(event.target.value)}
            className="w-full appearance-none rounded-full border border-[#efe6e1] bg-white px-5 py-3 font-medium text-[#4a3f39] outline-none focus:ring-2 focus:ring-primary/30"
          >
            {ROOM_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <span className="material-symbols-outlined pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#b9aca6]">
            expand_more
          </span>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <p className="ml-1 text-xs uppercase tracking-wider text-[#8e7e76]">
          Personalize your space
        </p>
        <Link
          href="/styles-gallery"
          className="flex w-full items-center justify-center gap-2 rounded-full border border-[#efe6e1] bg-[#fff7f2] px-6 py-3.5 text-sm font-semibold text-[#4a3f39] transition-all hover:border-primary/40 hover:bg-primary-fixed/30"
        >
          <span className="material-symbols-outlined text-primary">palette</span>
          Styles Gallery
        </Link>
        <Link
          href="/moodboard"
          className="flex w-full items-center justify-center gap-2 rounded-full border border-[#efe6e1] bg-[#fff7f2] px-6 py-3.5 text-sm font-semibold text-[#4a3f39] transition-all hover:border-primary/40 hover:bg-primary-fixed/30"
        >
          <span className="material-symbols-outlined text-primary">favorite</span>
          What&apos;s your Mood?
          {moodboardCount > 0 && (
            <span className="rounded-full bg-primary px-2 py-0.5 text-xs text-white">
              {moodboardCount}
            </span>
          )}
        </Link>
      </div>

      {(selectedStyleName || moodboardCount > 0) && (
        <div className="mt-6 rounded-xl bg-surface-container-low px-4 py-3 text-sm text-on-surface-variant">
          {selectedStyleName && (
            <p>
              <span className="font-medium text-on-surface">Style:</span> {selectedStyleName}
            </p>
          )}
          {moodboardCount > 0 && (
            <p className={selectedStyleName ? "mt-1" : ""}>
              <span className="font-medium text-on-surface">Moodboard:</span> {moodboardCount}{" "}
              item{moodboardCount === 1 ? "" : "s"} selected
            </p>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={onGenerate}
        disabled={isLoading}
        className="mt-8 w-full rounded-full bg-primary py-4 text-lg font-medium text-on-primary shadow-sm transition-all hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isLoading ? "Generating..." : "Generate Dream Space ✨"}
      </button>
    </div>
  );
}
