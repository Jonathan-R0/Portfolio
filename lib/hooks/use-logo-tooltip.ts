"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface LogoTooltip {
  index: number;
  anchor: DOMRect;
}

export function useLogoTooltip() {
  const [tooltip, setTooltip] = useState<LogoTooltip | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isOpen = tooltip !== null;

  const keepTooltip = useCallback(() => {
    if (closeTimer.current !== null) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const dismissTooltip = useCallback(() => {
    keepTooltip();
    setTooltip(null);
  }, [keepTooltip]);

  function closeTooltip() {
    if (!isOpen) return;
    keepTooltip();
    closeTimer.current = setTimeout(dismissTooltip, 160);
  }

  function showTooltip(index: number, element: HTMLElement) {
    keepTooltip();
    setTooltip({ index, anchor: element.getBoundingClientRect() });
  }

  useEffect(() => {
    if (!isOpen) return;

    function onScroll() {
      const focused = document.activeElement;
      if (focused instanceof HTMLElement && focused.matches(".logo-trigger")) {
        const anchor = focused.getBoundingClientRect();
        setTooltip((current) => (current ? { ...current, anchor } : null));
      } else {
        dismissTooltip();
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") dismissTooltip();
    }

    function onPointerDown(event: PointerEvent) {
      if (
        !(event.target instanceof Element) ||
        !event.target.closest(".logo-trigger, .tooltip-card")
      ) {
        dismissTooltip();
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", dismissTooltip);
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      keepTooltip();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", dismissTooltip);
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen, dismissTooltip, keepTooltip]);

  return { tooltip, showTooltip, closeTooltip, keepTooltip, dismissTooltip };
}
