"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { MoodboardItem } from "@/lib/moodboardItems";

type MoodboardSavedDialogProps = {
  open: boolean;
  items: MoodboardItem[];
  onClose: () => void;
  onRemove: (id: string) => void;
};

export default function MoodboardSavedDialog({
  open,
  items,
  onClose,
  onRemove,
}: MoodboardSavedDialogProps) {
  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="moodboard-saved-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close dialog"
      />

      <div className="relative z-10 flex max-h-[min(90vh,720px)] w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-white shadow-[0_24px_64px_rgba(0,0,0,0.18)]">
        <div className="flex items-center justify-between border-b border-[#e9e9e9] px-6 py-4">
          <div>
            <h2 id="moodboard-saved-title" className="text-lg font-bold text-[#111]">
              Your selections
            </h2>
            <p className="text-sm text-[#767676]">
              {items.length} item{items.length === 1 ? "" : "s"} saved to your moodboard
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#767676] transition-colors hover:bg-[#efefef]"
            aria-label="Close"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="py-8 text-center text-sm text-[#767676]">
              No items selected yet. Browse the moodboard and tap Save on pins you like.
            </p>
          ) : (
            <ul className="space-y-3">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-4 rounded-xl border border-[#e9e9e9] bg-[#fafafa] p-3"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-[#efefef]">
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-[#111]">{item.label}</p>
                    <p className="mt-0.5 text-xs capitalize text-[#767676]">{item.category}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemove(item.id)}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#767676] transition-colors hover:bg-[#fee8e4] hover:text-primary"
                    aria-label={`Remove ${item.label}`}
                  >
                    <span className="material-symbols-outlined text-xl">close</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-[#e9e9e9] px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-full bg-primary py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.01] active:scale-[0.99]"
          >
            Select more
          </button>
        </div>
      </div>
    </div>
  );
}
