"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";

export default function ScrollToTop() {
  const { messages } = useI18n();
  const marker = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    if (marker.current) observer.observe(marker.current);
    return () => observer.disconnect();
  }, []);

  function scrollToTop() {
    document.getElementById("main-content")?.focus({ preventScroll: true });
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  return (
    <>
      <span ref={marker} className="scroll-top-marker" aria-hidden="true" />
      {visible ? (
        <button type="button" className="scroll-to-top" onClick={scrollToTop} aria-label={messages.scrollToTop.label} title={messages.scrollToTop.label}>
          <ArrowUp size={20} aria-hidden="true" />
        </button>
      ) : null}
    </>
  );
}
