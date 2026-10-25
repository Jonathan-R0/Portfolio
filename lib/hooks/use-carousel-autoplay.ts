"use client";

import { useEffect, type RefObject } from "react";

export function useCarouselAutoplay(
  section: RefObject<HTMLElement>,
  track: RefObject<HTMLElement>,
  blocked: boolean,
) {
  useEffect(() => {
    const sectionElement = section.current;
    const trackElement = track.current;
    if (!sectionElement || !trackElement) return;

    let inView = false;
    const updatePlayback = () => {
      trackElement.dataset.running = String(
        inView && !document.hidden && !blocked,
      );
    };

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      updatePlayback();
    });
    observer.observe(sectionElement);
    document.addEventListener("visibilitychange", updatePlayback);
    updatePlayback();

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updatePlayback);
      trackElement.dataset.running = "false";
    };
  }, [section, track, blocked]);
}
