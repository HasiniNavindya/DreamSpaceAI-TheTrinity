"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { INTERIOR_STYLES } from "@/lib/interiorStyles";
import {
  clearResultPreview,
  getMoodboardSelections,
  getRoomPreview,
  getRoomType,
  getSelectedStyle,
  saveRoomType,
  saveTransformationConfig,
} from "@/lib/transformationStorage";
import DashboardConfigurePanel, {
  ROOM_TYPES,
} from "./DashboardConfigurePanel";
import ResultCard from "./ResultCard";

export default function DashboardShell() {
  const router = useRouter();
  const [roomPreview, setRoomPreview] = useState<string | null>(null);
  const [roomType, setRoomType] = useState("Living Room");
  const [selectedStyleName, setSelectedStyleName] = useState<string | null>(null);
  const [moodboardCount, setMoodboardCount] = useState(0);
  const [isStarting, setIsStarting] = useState(false);

  function refreshSelections() {
    const preview = getRoomPreview();
    if (!preview) {
      router.replace("/loading-state");
      return;
    }
    setRoomPreview(preview);
    setRoomType(getRoomType());

    const styleId = getSelectedStyle();
    if (styleId) {
      const style = INTERIOR_STYLES.find((s) => s.id === styleId);
      setSelectedStyleName(style?.name ?? null);
    } else {
      setSelectedStyleName(null);
    }

    setMoodboardCount(getMoodboardSelections().length);
  }

  useEffect(() => {
    refreshSelections();
    window.addEventListener("focus", refreshSelections);
    return () => window.removeEventListener("focus", refreshSelections);
  }, [router]);

  function handleRoomTypeChange(value: string) {
    setRoomType(value);
    saveRoomType(value);
  }

  function generate() {
    if (!roomPreview) {
      toast.error("Please upload a room photo first.");
      return;
    }

    const trimmedRoomType = roomType.trim();
    if (!trimmedRoomType || !ROOM_TYPES.includes(trimmedRoomType as (typeof ROOM_TYPES)[number])) {
      toast.error("Please select a room type.");
      return;
    }

    const styleId = getSelectedStyle();
    const moodboardItemIds = getMoodboardSelections();

    saveTransformationConfig({
      roomType: trimmedRoomType,
      styleId,
      moodboardItemIds,
    });

    clearResultPreview();
    setIsStarting(true);
    router.push("/final-stage");
  }

  return (
    <div className="mx-auto w-full max-w-6xl">
      <header className="mb-10">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-on-surface md:text-5xl">
          Redesign Your Room
        </h1>
        <p className="mt-2 text-lg text-secondary opacity-90">
          Configure your transformation settings before generating your dream space.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <DashboardConfigurePanel
            roomType={roomType}
            setRoomType={handleRoomTypeChange}
            selectedStyleName={selectedStyleName}
            moodboardCount={moodboardCount}
            onGenerate={generate}
            isLoading={isStarting}
          />
        </div>

        <div className="lg:col-span-7">
          <ResultCard
            imageSrc={roomPreview}
            styleLabel={selectedStyleName}
            roomType={roomType}
          />
        </div>
      </div>
    </div>
  );
}
