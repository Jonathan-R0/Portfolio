"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollPastMarker() {
  const marker = useRef<HTMLSpanElement>(null);
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const element = marker.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setPassed(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { marker, passed };
}
