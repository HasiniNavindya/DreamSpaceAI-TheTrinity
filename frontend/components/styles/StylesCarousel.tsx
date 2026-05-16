"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

export type StyleCard = {
  name: string;
  image: string;
  showArrow?: boolean;
};

type StylesCarouselProps = {
  styles: StyleCard[];
};

const AUTO_SCROLL_MS = 4000;

export default function StylesCarousel({ styles }: StylesCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  const getScrollStep = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return 344;
    const card = container.querySelector("article");
    const gap = 24;
    return card ? card.clientWidth + gap : 344;
  }, []);

  const scroll = useCallback(
    (direction: "left" | "right") => {
      const container = scrollRef.current;
      if (!container) return;

      pausedRef.current = true;
      const step = getScrollStep();
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (direction === "right" && container.scrollLeft >= maxScroll - 4) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else if (direction === "left" && container.scrollLeft <= 4) {
        container.scrollTo({ left: maxScroll, behavior: "smooth" });
      } else {
        container.scrollBy({
          left: direction === "left" ? -step : step,
          behavior: "smooth",
        });
      }

      window.setTimeout(() => {
        pausedRef.current = false;
      }, AUTO_SCROLL_MS);
    },
    [getScrollStep],
  );

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || styles.length === 0) return;

    const pause = () => {
      pausedRef.current = true;
    };
    const resume = () => {
      pausedRef.current = false;
    };

    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", resume);
    container.addEventListener("focusin", pause);
    container.addEventListener("focusout", resume);

    const intervalId = window.setInterval(() => {
      if (pausedRef.current) return;

      const step = getScrollStep();
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll - 4) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: step, behavior: "smooth" });
      }
    }, AUTO_SCROLL_MS);

    return () => {
      window.clearInterval(intervalId);
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", resume);
      container.removeEventListener("focusin", pause);
      container.removeEventListener("focusout", resume);
    };
  }, [styles.length, getScrollStep]);

  return (
    <div className="group relative">
      <div className="absolute inset-y-0 -left-8 z-10 hidden items-center lg:flex">
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Scroll styles left"
          className="rounded-full bg-surface-container-lowest p-3 text-primary shadow-lg transition-all duration-300 hover:bg-primary hover:text-on-primary"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
      </div>

      <div className="absolute inset-y-0 -right-8 z-10 hidden items-center lg:flex">
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Scroll styles right"
          className="rounded-full bg-surface-container-lowest p-3 text-primary shadow-lg transition-all duration-300 hover:bg-primary hover:text-on-primary"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

      <div
        ref={scrollRef}
        tabIndex={0}
        aria-label="Interior style carousel"
        className="hide-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-12 pt-4"
      >
        {styles.map((style) => (
          <article
            key={style.name}
            className="w-[280px] shrink-0 snap-start md:w-[320px]"
          >
            <div className="ambient-card-shadow rounded-[2rem] border border-outline-variant/20 bg-surface-container-lowest p-3">
              <div className="image-zoom-container relative aspect-3/4 overflow-hidden rounded-[1.5rem] border-2 border-white shadow-sm">
                <Image
                  src={style.image}
                  alt={`${style.name} interior style`}
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
              <div className="mt-4 flex items-center justify-between px-2 pb-2">
                <span className="text-sm font-medium uppercase tracking-widest text-on-surface-variant">
                  {style.name}
                </span>
                <span
                  className={`material-symbols-outlined scale-75 text-primary transition-opacity ${
                    style.showArrow ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  arrow_outward
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
