"use client";

import { useEffect, useRef, useState } from "react";

type LazyVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel?: string;
  aspect?: "16/10" | "4/3" | "9/16";
  muted?: boolean;
  lockMuted?: boolean;
};

export function LazyVideo({
  src,
  poster,
  className,
  ariaLabel,
  aspect = "16/10",
  muted = false,
  lockMuted = false,
}: LazyVideoProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isMuted = muted || lockMuted;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "240px 0px",
        threshold: 0.1,
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      <div
        className={
          aspect === "16/10"
            ? "aspect-[16/10]"
            : aspect === "9/16"
            ? "aspect-[9/16]"
            : "aspect-[4/3]"
        }
      >
        <video
          className="h-full w-full object-cover"
          src={isVisible ? src : undefined}
          poster={poster}
          controls={isVisible}
          muted={isMuted}
          controlsList="nodownload noplaybackrate noremoteplayback"
          preload={isVisible ? "metadata" : "none"}
          playsInline
          aria-label={ariaLabel}
          onVolumeChange={(event) => {
            if (!lockMuted) return;
            event.currentTarget.muted = true;
            event.currentTarget.volume = 0;
          }}
        />
      </div>
    </div>
  );
}
