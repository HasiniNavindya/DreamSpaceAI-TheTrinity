"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { INTERIOR_STYLES } from "@/lib/interiorStyles";
import {
  getMoodboardSelections,
  getRoomPreview,
  getRoomType,
  getSelectedStyle,
  saveRoomType,
  saveTransformationConfig,
  saveTransformationPreviews,
} from "@/lib/transformationStorage";
import DashboardConfigurePanel from "./DashboardConfigurePanel";
import ResultCard from "./ResultCard";

export default function DashboardShell() {
  const router = useRouter();
  const [roomPreview, setRoomPreview] = useState<string | null>(null);
  const [roomType, setRoomType] = useState("Living Room");
  const [selectedStyleName, setSelectedStyleName] = useState<string | null>(null);
  const [moodboardCount, setMoodboardCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

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

  async function generate() {
    if (!roomPreview) return;

    const styleId = getSelectedStyle();
    if (!styleId) {
      toast.error("Please select a style from the Styles Gallery first.");
      return;
    }

    const style = INTERIOR_STYLES.find((s) => s.id === styleId);
    const styleLabel = style?.name ?? styleId;
    const moodboardItemIds = getMoodboardSelections();

    saveTransformationConfig({
      roomType,
      styleId,
      moodboardItemIds,
    });

    setIsLoading(true);

    try {
      const res = await fetch("/api/generate-room", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image_url: roomPreview,
          style: styleLabel,
          room_type: roomType,
        }),
      });

      const result = await res.json();

      if (result.success) {
        const resultUrl = result.data.generatedImage;
        saveTransformationPreviews(roomPreview, resultUrl);
        toast.success("Design generated successfully!");
        router.push("/final-stage");
      } else {
        toast.error(result.error || "Failed to generate design");
      }
    } catch (error) {
      console.error("Generation Error:", error);
      toast.error("Something went wrong during generation.");
    } finally {
      setIsLoading(false);
    }
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
            isLoading={isLoading}
          />
        </div>

        <div className="lg:col-span-7">
          <ResultCard
            imageSrc={roomPreview}
            styleLabel={selectedStyleName}
            roomType={roomType}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
