"use client";

import Image from "next/image";
import type { MoodboardItem } from "@/lib/moodboardItems";

type MoodboardPinProps = {
  item: MoodboardItem;
  isSaved: boolean;
  onToggle: () => void;
};

export default function MoodboardPin({ item, isSaved, onToggle }: MoodboardPinProps) {
  return (
    <article className="pinterest-pin group w-full">
      <div
        className={`relative overflow-hidden rounded-2xl bg-[#efefef] transition-[box-shadow,transform] duration-200 ${
          isSaved ? "ring-2 ring-primary ring-offset-2 ring-offset-white" : ""
        } group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)]`}
      >
        <button
          type="button"
          onClick={onToggle}
          className="relative block w-full cursor-zoom-in text-left"
          aria-pressed={isSaved}
          aria-label={isSaved ? `Remove ${item.label} from moodboard` : `Save ${item.label} to moodboard`}
        >
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: item.aspectRatio }}
          >
            <Image
              src={item.image}
              alt={item.label}
              fill
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            />
          </div>

          <div
            className={`pointer-events-none absolute inset-0 bg-black/25 transition-opacity duration-200 ${
              isSaved ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
          />

          <span
            className={`pointer-events-none absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold shadow-md transition-all duration-200 ${
              isSaved
                ? "bg-primary text-white opacity-100"
                : "bg-primary text-white opacity-0 group-hover:opacity-100"
            }`}
          >
            {isSaved ? (
              <>
                <span className="material-symbols-outlined text-[18px]">check</span>
                Saved
              </>
            ) : (
              "Save"
            )}
          </span>
        </button>
      </div>

      <button
        type="button"
        onClick={onToggle}
        className="mt-2 line-clamp-2 w-full rounded-lg px-1 py-1 text-left text-sm font-semibold leading-snug text-[#111] hover:bg-black/[0.06]"
      >
        {item.label}
      </button>
    </article>
  );
}
