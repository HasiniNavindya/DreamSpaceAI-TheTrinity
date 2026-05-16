"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { saveTransformationPreviews } from "@/lib/transformationStorage";
import Sidebar from "./Sidebar";
import UploadPanel from "./UploadPanel";
import ResultCard from "./ResultCard";
import ComparisonSlider from "./ComparisonSlider";
import { toast } from "react-hot-toast";

export default function DashboardShell() {
  const router = useRouter();
  const [beforeSrc, setBeforeSrc] = useState<string | null>(null);
  const [afterSrc, setAfterSrc] = useState<string | null>(null);
  const [roomType, setRoomType] = useState("Living Room");
  const [style, setStyle] = useState("Modern Luxury");

  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<any>(null);

  useEffect(() => {
    fetchRecommendations();
  }, [style]);

  async function fetchRecommendations() {
    try {
      const res = await fetch(`/api/recommendations?style=${encodeURIComponent(style)}`);
      const result = await res.json();
      if (result.success) {
        setRecommendations(result.data);
      }
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  }

  function handleUpload(file: File) {
    const url = URL.createObjectURL(file);
    setBeforeSrc(url);
    setAfterSrc(null);
  }

  async function generate() {
    if (!beforeSrc) {
      toast.error("Please upload an image first!");
      return;
    }

    setIsLoading(true);
    setAfterSrc(null);

    try {
      const res = await fetch("/api/generate-room", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image_url: beforeSrc,
          style: style,
          room_type: roomType,
        }),
      });

      const result = await res.json();

      if (result.success) {
        const resultUrl = result.data.generatedImage;
        setAfterSrc(resultUrl);
        saveTransformationPreviews(beforeSrc, resultUrl);
        toast.success("Design generated successfully!");
        
        // Short delay before redirecting to show the result card updated
        setTimeout(() => {
          router.push("/final-stage");
        }, 1500);
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
    <div className="min-h-screen bg-[#f3f0ee] py-8">
      <div className="mx-auto w-full max-w-[1200px] rounded-2xl bg-white shadow-lg border-4 border-[#d7d3cf] overflow-hidden flex">
        <Sidebar />

        <main className="flex-1 overflow-y-auto custom-scrollbar px-10 py-10 bg-white">
          <header className="flex justify-between items-center mb-8">
            <div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface">Redesign Your Room</h1>
              <p className="font-body-lg text-secondary opacity-80">Transform your living space with advanced AI intelligence.</p>
            </div>
            <div className="flex items-center gap-4 bg-surface-container-lowest p-2 pr-6 rounded-full shadow-ambient">
              <img alt="User Avatar" className="w-10 h-10 rounded-full object-cover" src="/avatar-placeholder.svg" />
              <div>
                <p className="font-label-md text-sm text-on-surface leading-none">Arjun</p>
                <p className="font-label-md text-[10px] text-secondary opacity-60 uppercase">Free Member</p>
              </div>
            </div>
          </header>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5 space-y-6">
              <UploadPanel 
                onUpload={handleUpload} 
                roomType={roomType} 
                setRoomType={setRoomType} 
                styleChoice={style} 
                setStyleChoice={setStyle} 
                onGenerate={generate} 
                isLoading={isLoading}
              />
            </div>

            <div className="col-span-12 lg:col-span-7 space-y-6">
              <ResultCard afterSrc={afterSrc} isLoading={isLoading} />
            </div>

            <div className="col-span-12 mt-6">
              <section className="bg-surface-container-lowest rounded-lg p-10 shadow-ambient border border-outline-variant/30">
                <h2 className="font-headline-md text-2xl text-on-surface mb-8">Before / After Comparison</h2>
                <div>
                  <ComparisonSlider beforeSrc={beforeSrc ?? "/landingImg2.svg"} afterSrc={afterSrc ?? "/landingImg1.svg"} />
                </div>
              </section>
            </div>

            <div className="col-span-12 mt-8">
              <section className="pb-section-gap">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-headline-md text-2xl text-on-surface">Design Recommendations</h2>
                  <button className="text-primary font-label-md text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    View Full Report <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
                  {recommendations ? (
                    recommendations.tips.map((tip: string, i: number) => (
                      <div key={i} className="bg-surface-container-lowest p-6 rounded-lg shadow-ambient border border-outline-variant/20 hover:scale-[1.02] transition-transform cursor-pointer">
                        <div className="w-full h-32 bg-primary/5 rounded-lg mb-4 flex items-center justify-center text-primary/40">
                          <span className="material-symbols-outlined text-4xl">lightbulb</span>
                        </div>
                        <h3 className="font-label-md text-on-surface mb-1">Tip {i + 1}</h3>
                        <p className="font-body-md text-secondary text-sm">{tip}</p>
                      </div>
                    ))
                  ) : (
                    [1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-surface-container-lowest p-6 rounded-lg shadow-ambient border border-outline-variant/20 hover:scale-[1.02] transition-transform cursor-pointer">
                        <img alt={`Suggestion ${i}`} className="w-full h-32 object-cover rounded-lg mb-4" src={`https://picsum.photos/seed/ds${i}/800/600`} />
                        <h3 className="font-label-md text-on-surface mb-1">Suggestion {i}</h3>
                        <p className="font-body-md text-secondary text-sm">Brief design hint to improve the visual balance.</p>
                      </div>
                    ))
                  )}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>

      <button className="fixed bottom-10 right-10 w-16 h-16 bg-primary text-on-primary rounded-full shadow-floating flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined text-3xl">chat</span>
      </button>
    </div>
  );
}
