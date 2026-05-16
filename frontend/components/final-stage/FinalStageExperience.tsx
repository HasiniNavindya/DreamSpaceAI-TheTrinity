"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { getResultPreview, getRoomPreview } from "@/lib/transformationStorage";

const STATUS_STEPS = [
  { until: 18, label: "Analyzing your room layout" },
  { until: 38, label: "Applying your selected style" },
  { until: 58, label: "Placing moodboard accents" },
  { until: 78, label: "Simulating lighting & textures" },
  { until: 94, label: "Polishing the final render" },
  { until: 100, label: "Your dream space is ready" },
];

const TRANSFORMATION_MS = 14_000;

export default function FinalStageExperience() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [roomPreview, setRoomPreview] = useState<string | null>(null);
  const [resultPreview, setResultPreview] = useState<string | null>(null);

  const isComplete = progress >= 100;

  const statusLabel = useMemo(() => {
    const step = STATUS_STEPS.find((s) => progress <= s.until);
    return step?.label ?? STATUS_STEPS[STATUS_STEPS.length - 1].label;
  }, [progress]);

  useEffect(() => {
    setRoomPreview(getRoomPreview());
    setResultPreview(getResultPreview() ?? "/landingImg1.svg");
  }, []);

  useEffect(() => {
    const start = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const ratio = Math.min((now - start) / TRANSFORMATION_MS, 1);
      const eased = 1 - (1 - ratio) ** 2.2;
      setProgress(Math.round(eased * 100));
      if (ratio < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

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

  return (
    <section className="final-stage-bg relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center overflow-hidden px-6 py-16">
      <span className="final-stage-orb final-stage-orb-a" aria-hidden />
      <span className="final-stage-orb final-stage-orb-b" aria-hidden />
      <span className="final-stage-orb final-stage-orb-c" aria-hidden />
      <span className="final-stage-shimmer" aria-hidden />

      <article className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">
        <figure className="relative mb-8">
          <figcaption className="sr-only">Transformation preview</figcaption>
          <span
            className={`relative flex h-28 w-28 items-center justify-center rounded-[2rem] bg-gradient-to-br from-primary/20 via-primary-fixed/40 to-secondary-container shadow-[0_20px_60px_rgba(149,68,38,0.18)] backdrop-blur-sm transition-all duration-700 ${
              isComplete ? "scale-100" : "scale-105 animate-[gentle-float_4s_ease-in-out_infinite]"
            }`}
          >
            {roomPreview && !isComplete ? (
              <span className="absolute inset-2 overflow-hidden rounded-[1.4rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={roomPreview}
                  alt="Room being transformed"
                  className="h-full w-full object-cover opacity-70 blur-[2px]"
                />
                <span className="final-stage-preview-overlay absolute inset-0" />
              </span>
            ) : null}

            {isComplete && resultPreview ? (
              <span className="absolute inset-2 overflow-hidden rounded-[1.4rem]">
                <Image
                  src={resultPreview}
                  alt="Transformed room"
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </span>
            ) : (
              <span
                className={`material-symbols-outlined text-6xl text-primary transition-opacity duration-500 ${
                  roomPreview && !isComplete ? "opacity-30" : "opacity-100"
                }`}
              >
                home_work
              </span>
            )}

            <span className="absolute -bottom-1 -right-1 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7f5f2] bg-primary text-white shadow-lg">
              <span className="material-symbols-outlined text-xl">
                {isComplete ? "check" : "photo_camera"}
              </span>
            </span>
          </span>
        </figure>

        <h1 className="font-display text-4xl font-semibold tracking-tight text-on-surface md:text-5xl">
          {isComplete ? "Your Dream Space Awaits" : "Crafting Your Dream Space"}
        </h1>
        <p className="mt-3 max-w-md text-lg leading-7 text-secondary">
          {isComplete
            ? "Your AI transformation is complete. Download your redesigned room below."
            : "Our AI is redesigning your room — sit back while the magic happens."}
        </p>

        <section className="mt-10 w-full max-w-lg" aria-label="Transformation progress">
          <div className="mb-3 flex items-center justify-between text-sm font-medium">
            <span className="text-on-surface-variant">{statusLabel}</span>
            <span className="tabular-nums text-primary">{progress}%</span>
          </div>
          <div
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            className="h-3 overflow-hidden rounded-full bg-secondary-container/80 backdrop-blur-sm"
          >
            <span
              className="final-stage-progress-fill block h-full rounded-full transition-[width] duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </section>

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

        {!isComplete && (
          <p className="mt-6 text-sm text-on-surface-variant/80">
            This usually takes under a minute. Please keep this tab open.
          </p>
        )}

        <div className="mt-12 flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {["/landingImg1.svg", "/landingImg2.svg", "/landingImg1.svg"].map((src, i) => (
              <span
                key={`${src}-${i}`}
                className="relative block h-9 w-9 overflow-hidden rounded-full border-2 border-[#f7f5f2] shadow-sm"
              >
                <Image src={src} alt="" fill className="object-cover" sizes="36px" />
              </span>
            ))}
          </div>
          <p className="text-sm font-medium text-secondary">Join 10k+ designers</p>
        </div>

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
  );
}
