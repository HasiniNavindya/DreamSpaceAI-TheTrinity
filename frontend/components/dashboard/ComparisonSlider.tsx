"use client";

import { useRef, useState, useEffect } from "react";

export default function ComparisonSlider({ beforeSrc, afterSrc }: { beforeSrc: string; afterSrc: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [percent, setPercent] = useState(50);

  useEffect(() => {
    function handleMove(e: PointerEvent) {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const p = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setPercent(p);
    }

    function stop() {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", stop);
    }

    function start(e: PointerEvent) {
      handleMove(e);
      window.addEventListener("pointermove", handleMove);
      window.addEventListener("pointerup", stop);
    }

    const handle = containerRef.current?.querySelector(".ds-handle");
    handle?.addEventListener("pointerdown", start as any);
    return () => {
      handle?.removeEventListener("pointerdown", start as any);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden rounded-lg" style={{ minHeight: 320 }}>
      <img src={beforeSrc} alt="before" className="absolute inset-0 h-full w-full object-cover" />

      <div className="absolute inset-0 overflow-hidden" style={{ width: `${percent}%` }}>
        <img src={afterSrc} alt="after" className="h-full w-full object-cover" />
      </div>

      <div style={{ left: `${percent}%` }} className="ds-handle absolute top-0 -translate-x-1/2 h-full w-0 pointer-events-auto">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center">
          <span className="material-symbols-outlined text-primary">drag_indicator</span>
        </div>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-secondary shadow-md backdrop-blur">
        Drag the slider to compare
      </div>
    </div>
  );
}
