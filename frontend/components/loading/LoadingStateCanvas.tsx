"use client";

import { useEffect, useState } from "react";

type ProgressStep = {
  icon: string;
  label: string;
  target: number;
};

const STEPS: ProgressStep[] = [
  { icon: "architecture", label: "Analyzing Geometry", target: 85 },
  { icon: "palette", label: "Applying Textures", target: 40 },
  { icon: "lightbulb", label: "Simulating Light", target: 15 },
];

export default function LoadingStateCanvas() {
  const [progress, setProgress] = useState([0, 0, 0]);

  useEffect(() => {
    const durationMs = 12000;
    const start = performance.now();

    const frame = (now: number) => {
      const elapsed = now - start;
      const ratio = Math.min(elapsed / durationMs, 1);

      setProgress(
        STEPS.map((step, index) => {
          const stagger = index * 0.12;
          const local = Math.max(0, Math.min(1, (ratio - stagger) / (1 - stagger)));
          return Math.round(step.target * local);
        }),
      );

      if (ratio < 1) {
        requestAnimationFrame(frame);
      }
    };

    const id = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="flex w-full max-w-4xl flex-col items-center">
      <div className="pulse-icon mb-6 rounded-full bg-secondary-container p-6">
        <span className="material-symbols-outlined material-symbols-filled text-[48px] text-primary">
          auto_fix_high
        </span>
      </div>

      <div className="mb-12 text-center">
        <h1 className="mb-4 font-display text-4xl font-semibold tracking-tight text-on-surface md:text-[64px] md:leading-[72px] md:tracking-[-0.02em]">
          Creating Your Dream Space...
        </h1>
        <p className="text-lg leading-7 text-secondary">Our AI is working its magic ✨</p>
      </div>

      <div className="aspect-video w-full overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-4 shadow-[0_12px_32px_rgba(43,43,43,0.04)]">
        <div className="h-full w-full rounded-xl shimmer-effect" />
      </div>

      <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
        {STEPS.map((step, index) => (
          <article
            key={step.label}
            className="rounded-2xl border border-outline-variant/20 bg-surface-container-low p-6"
          >
            <div className="mb-2 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">{step.icon}</span>
              <span className="text-sm font-medium tracking-wide text-on-surface">
                {step.label}
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary-container">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
                style={{ width: `${progress[index]}%` }}
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
