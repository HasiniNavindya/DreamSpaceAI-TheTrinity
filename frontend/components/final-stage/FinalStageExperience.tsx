"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import ComparisonSlider from "@/components/dashboard/ComparisonSlider";
import { INTERIOR_STYLES } from "@/lib/interiorStyles";
import {
  getResultPreview,
  getRoomPreview,
  getTransformationConfig,
  saveTransformationPreviews,
} from "@/lib/transformationStorage";

const STATUS_STEPS = [
  { until: 18, label: "Analyzing your room layout" },
  { until: 38, label: "Applying your selected style" },
  { until: 58, label: "Placing moodboard accents" },
  { until: 78, label: "Simulating lighting & textures" },
  { until: 94, label: "Polishing the final render" },
  { until: 100, label: "Your dream space is ready" },
];

const DEFAULT_STYLE_LABEL = "Modern";
const PROGRESS_CAP_UNTIL_API = 92;
const MIN_TRANSFORM_MS = 10_000;
const REVEAL_MS = 1400;

type TransformPhase = "processing" | "revealing" | "complete";

export default function FinalStageExperience() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [roomPreview, setRoomPreview] = useState<string | null>(null);
  const [resultPreview, setResultPreview] = useState<string | null>(null);
  const [phase, setPhase] = useState<TransformPhase>("processing");
  const [error, setError] = useState<string | null>(null);
  const apiDoneRef = useRef(false);
  const generationStartedRef = useRef(false);
  const revealTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isComplete = phase === "complete" && Boolean(resultPreview);
  const isRevealing = phase === "revealing";
  const isProcessing = phase === "processing" && !error;

  const statusLabel = useMemo(() => {
    if (isComplete) return "Your dream space is ready";
    if (isRevealing) return "Revealing your transformation";
    const step = STATUS_STEPS.find((s) => progress <= s.until);
    return step?.label ?? STATUS_STEPS[STATUS_STEPS.length - 1].label;
  }, [progress, isComplete, isRevealing]);

  const blurPx = useMemo(() => {
    if (isComplete) return 0;
    if (isRevealing) return 4;
    return Math.min(24, 8 + progress * 0.18);
  }, [progress, isComplete, isRevealing]);

  useEffect(() => {
    return () => {
      if (revealTimerRef.current) clearTimeout(revealTimerRef.current);
    };
  }, []);

  function startReveal(generatedUrl: string, room: string) {
    setResultPreview(generatedUrl);
    saveTransformationPreviews(room, generatedUrl);
    apiDoneRef.current = true;
    setProgress(98);
    setPhase("revealing");

    revealTimerRef.current = setTimeout(() => {
      setProgress(100);
      setPhase("complete");
    }, REVEAL_MS);
  }

  useEffect(() => {
    const roomUrl = getRoomPreview();
    if (!roomUrl) {
      router.replace("/loading-state");
      return;
    }

    const sourceImage: string = roomUrl;
    setRoomPreview(sourceImage);

    const existingResult = getResultPreview();
    if (existingResult) {
      setResultPreview(existingResult);
      setProgress(100);
      setPhase("complete");
      apiDoneRef.current = true;
      return;
    }

    if (generationStartedRef.current) return;
    generationStartedRef.current = true;

    const config = getTransformationConfig();
    const styleId = config?.styleId ?? null;
    const style = styleId ? INTERIOR_STYLES.find((s) => s.id === styleId) : null;
    const styleLabel = style?.name ?? DEFAULT_STYLE_LABEL;
    const roomType = config?.roomType?.trim() || "Living Room";

    const start = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const ratio = Math.min(elapsed / MIN_TRANSFORM_MS, 1);
      const eased = 1 - (1 - ratio) ** 2.2;
      const simulated = Math.round(eased * PROGRESS_CAP_UNTIL_API);

      if (apiDoneRef.current) {
        if (phase === "processing") {
          frameId = requestAnimationFrame(tick);
        }
        return;
      }

      setProgress(simulated);
      if (ratio < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    async function runGeneration() {
      try {
        const res = await fetch("/api/generate-room", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            image_url: sourceImage,
            style: styleLabel,
            room_type: roomType,
          }),
        });

        const result = await res.json();

        if (!result.success) {
          throw new Error(result.error || "Failed to generate design");
        }

        const generatedUrl = result.data.generatedImage as string;
        startReveal(generatedUrl, sourceImage);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Something went wrong during generation.";
        setError(message);
        toast.error(message);
        cancelAnimationFrame(frameId);
      }
    }

    void runGeneration();

    return () => cancelAnimationFrame(frameId);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount
  }, [router]);

  function handleDownload() {
    if (!resultPreview || !isComplete) return;
    const anchor = document.createElement("a");
    anchor.href = resultPreview;
    anchor.download = "dreamspace-transformation.png";
    anchor.rel = "noopener";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  }

  const beforeSrc = roomPreview ?? "/landingImg2.png";
  const afterSrc = resultPreview ?? "/landingImg1.png";

  return (
    <>
      <section className="final-stage-bg relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center overflow-hidden px-6 py-16">
        <span className="final-stage-orb final-stage-orb-a" aria-hidden />
        <span className="final-stage-orb final-stage-orb-b" aria-hidden />
        <span className="final-stage-orb final-stage-orb-c" aria-hidden />

        <article className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center">
          <div className="relative mb-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-outline-variant/25 bg-[#efebe8] shadow-[0_24px_64px_rgba(43,43,43,0.12)]">
            <div className="relative aspect-[4/3] w-full">
              {roomPreview && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={roomPreview}
                  alt="Your room before transformation"
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ease-out ${
                    isComplete ? "scale-105 opacity-0" : "scale-100 opacity-100"
                  }`}
                  style={{ filter: `blur(${blurPx}px)` }}
                />
              )}

              {resultPreview && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={resultPreview}
                  alt="Transformed room"
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ease-out ${
                    isComplete || isRevealing
                      ? "scale-100 opacity-100"
                      : "scale-[1.02] opacity-0"
                  }`}
                  style={{
                    filter: isComplete ? "none" : isRevealing ? "blur(2px)" : "blur(8px)",
                  }}
                />
              )}

              {isProcessing && (
                <>
                  <span className="final-stage-shimmer pointer-events-none" aria-hidden />
                  <span className="final-stage-preview-overlay pointer-events-none absolute inset-0" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/30 px-6 backdrop-blur-[2px]">
                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent" />
                    <p className="font-display text-xl font-medium text-white drop-shadow-md md:text-2xl">
                      Designing your space...
                    </p>
                    <p className="max-w-sm text-sm text-white/90">{statusLabel}</p>
                  </div>
                </>
              )}

              {isRevealing && (
                <div className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/40 to-transparent pb-6">
                  <p className="text-sm font-medium text-white drop-shadow-md">
                    Sharpening your new room...
                  </p>
                </div>
              )}

              {error && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/50 px-6">
                  <span className="material-symbols-outlined text-5xl text-white">error</span>
                  <p className="max-w-sm text-sm text-white">{error}</p>
                  <Link
                    href="/dashboard"
                    className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-primary"
                  >
                    Back to Dashboard
                  </Link>
                </div>
              )}

              {isProcessing && roomPreview && (
                <span className="absolute left-4 top-4 rounded-full bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
                  Transforming
                </span>
              )}

              {isComplete && (
                <span className="absolute left-4 top-4 rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white shadow-md">
                  Complete
                </span>
              )}
            </div>
          </div>

          <h1 className="font-display text-4xl font-semibold tracking-tight text-on-surface md:text-5xl">
            {error
              ? "Transformation interrupted"
              : isComplete
                ? "Your Dream Space Awaits"
                : "Crafting Your Dream Space"}
          </h1>
          <p className="mt-3 max-w-md text-lg leading-7 text-secondary">
            {error
              ? "We couldn't finish your redesign. Try again from the dashboard."
              : isComplete
                ? "Your AI transformation is complete. Download your redesigned room below."
                : "Your uploaded room appears below while we transform it into your dream space."}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={handleDownload}
              disabled={!isComplete}
              className="flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-base font-semibold tracking-wide text-on-primary shadow-[0_12px_32px_rgba(149,68,38,0.35)] transition-all hover:scale-[1.03] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-45 disabled:shadow-none disabled:hover:scale-100"
            >
              <span className="material-symbols-outlined text-[22px]">download</span>
              Download Image
            </button>
            {isComplete && (
              <Link
                href="/dashboard"
                className="rounded-full border border-outline-variant px-8 py-4 text-sm font-semibold text-secondary transition-colors hover:border-primary hover:text-primary"
              >
                View in Dashboard
              </Link>
            )}
          </div>

          {isProcessing && (
            <p className="mt-6 text-sm text-on-surface-variant/80">
              This usually takes under a minute. Please keep this tab open.
            </p>
          )}

          {isComplete && (
            <button
              type="button"
              onClick={() => router.push("/loading-state")}
              className="mt-8 text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Start another transformation
            </button>
          )}
        </article>
      </section>

      {isComplete && (
        <section className="mx-auto w-full max-w-5xl px-6 pb-24 pt-4 md:px-16">
          <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-8 shadow-[0_12px_32px_rgba(43,43,43,0.04)] md:p-10">
            <h2 className="mb-8 font-display text-2xl font-medium text-on-surface md:text-3xl">
              Before / After Comparison
            </h2>
            <ComparisonSlider beforeSrc={beforeSrc} afterSrc={afterSrc} />
          </div>
        </section>
      )}
    </>
  );
}
