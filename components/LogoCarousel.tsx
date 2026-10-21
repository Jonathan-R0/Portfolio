"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState, type PointerEvent, type KeyboardEvent } from "react";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import { TooltipCard } from "@/components/ui/tooltip-card";
import { localizeHref, useI18n } from "@/lib/i18n";

const logos = [
  { name: "Creative Coefficient", file: "multicolor-emblem", width: 200, height: 192, compact: true },
  { name: "NEC", file: "nec", width: 600, height: 160 },
  { name: "Grunlot", file: "green-arrow", width: 84, height: 111, compact: true },
  { name: "Neighborhood Pal", file: "neighborhood-pal", width: 445, height: 240 },
  { name: "Nexup", file: "nexup", width: 600, height: 189 },
  { name: "FIUBA · Universidad de Buenos Aires", file: "fiuba", width: 600, height: 170 },
  { name: "Auting", file: "auting", width: 600, height: 130 },
];

export default function LogoCarousel() {
  const { locale, messages: { logos: copy } } = useI18n();
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef<{ pointerId: number; startX: number; startTime: number; animation: Animation; duration: number; distance: number } | null>(null);
  const [dragging, setDragging] = useState(false);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const tooltipId = useId();
  const [tooltip, setTooltip] = useState<{ index: number; anchor: DOMRect } | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const suppressClick = useRef(false);
  const pointerStart = useRef(0);

  function keepTooltip() { if (closeTimer.current) clearTimeout(closeTimer.current); }
  function closeTooltip() { keepTooltip(); closeTimer.current = setTimeout(() => setTooltip(null), 160); }
  function showTooltip(index: number, element: HTMLElement) {
    if (drag.current) return;
    keepTooltip();
    setTooltip({ index, anchor: element.getBoundingClientRect() });
  }
  useEffect(() => {
    const dismiss = () => setTooltip(null);
    const onScroll = () => {
      const focused = document.activeElement;
      if (focused instanceof HTMLElement && focused.matches('.logo-trigger')) {
        setTooltip((current) => current ? { ...current, anchor: focused.getBoundingClientRect() } : null);
      } else dismiss();
    };
    const escape = (event: globalThis.KeyboardEvent) => { if (event.key === "Escape") dismiss(); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", dismiss);
    window.addEventListener("keydown", escape);
    const outside = (event: globalThis.PointerEvent) => {
      if (!(event.target as Element).closest('.logo-trigger, .tooltip-card')) dismiss();
    };
    document.addEventListener("pointerdown", outside);
    return () => {
      keepTooltip();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", dismiss);
      window.removeEventListener("keydown", escape);
      document.removeEventListener("pointerdown", outside);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    if (section.current) observer.observe(section.current);
    const onVisibilityChange = () => setPageVisible(!document.hidden);
    onVisibilityChange();
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  function getMotion() {
    const animation = track.current?.getAnimations()[0];
    const duration = Number(animation?.effect?.getTiming().duration);
    const distance = (track.current?.getBoundingClientRect().width ?? 0) / 2;
    if (!animation || !duration || !distance) return null;
    return { animation, duration, distance };
  }

  function startDrag(event: PointerEvent<HTMLDivElement>) {
    if (!event.isPrimary || event.button !== 0) return;
    pointerStart.current = event.clientX;
    suppressClick.current = false;
    const motion = getMotion();
    if (!motion) return;
    drag.current = { ...motion, pointerId: event.pointerId, startX: event.clientX, startTime: Number(motion.animation.currentTime ?? 0) };
    // Capture on the actual trigger so a tap still clicks it; pointer events bubble to the viewport.
    (event.target as Element).setPointerCapture(event.pointerId);
    setDragging(true);
  }

  function moveDrag(event: PointerEvent<HTMLDivElement>) {
    const current = drag.current;
    if (!current || current.pointerId !== event.pointerId) return;
    if (Math.abs(event.clientX - pointerStart.current) > 5) {
      suppressClick.current = true;
      keepTooltip();
      setTooltip(null);
    }
    const time = current.startTime - (event.clientX - current.startX) * current.duration / current.distance;
    current.animation.currentTime = ((time % current.duration) + current.duration) % current.duration;
  }

  function endDrag(event: PointerEvent<HTMLDivElement>) {
    if (drag.current?.pointerId !== event.pointerId) return;
    drag.current = null;
    setDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  }

  function browseWithKeyboard(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    const motion = getMotion();
    if (!motion) return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const time = Number(motion.animation.currentTime ?? 0) + direction * 200 * motion.duration / motion.distance;
    motion.animation.currentTime = ((time % motion.duration) + motion.duration) % motion.duration;
  }

  return (
    <section ref={section} className="logo-carousel page-width" aria-label={copy.gallery}>
      <div
        className="logo-viewport"
        data-dragging={dragging}
        role="group"
        aria-label={copy.browse}
        tabIndex={0}
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onLostPointerCapture={endDrag}
        onKeyDown={browseWithKeyboard}
      >
        <div ref={track} className="logo-track" data-running={inView && pageVisible && !paused && !dragging && !tooltip}>
          {[false, true].map((duplicate) => (
            <ul className="logo-group" key={String(duplicate)} aria-label={duplicate ? undefined : copy.list} aria-hidden={duplicate ? true : undefined}>
              {logos.map((logo, index) => (
                <li className="logo-item" key={logo.file}>
                  <button type="button" className="logo-trigger" tabIndex={duplicate ? -1 : 0}
                    aria-label={copy.details.replace("{name}", logo.name)} aria-describedby={tooltip?.index === index ? tooltipId : undefined}
                    onMouseEnter={(event) => {
                      if (document.activeElement?.matches('.logo-trigger:focus-visible') && document.activeElement !== event.currentTarget) return;
                      showTooltip(index, event.currentTarget);
                    }} onMouseLeave={() => { if (!document.activeElement?.matches('.logo-trigger:focus-visible')) closeTooltip(); }}
                    onFocus={(event) => {
                      const motion = getMotion();
                      if (motion && !duplicate && event.currentTarget.matches(':focus-visible')) {
                        motion.animation.currentTime = index / logos.length * motion.duration;
                        const viewport = event.currentTarget.closest('.logo-viewport');
                        if (viewport) viewport.scrollLeft = 0;
                      }
                      showTooltip(index, event.currentTarget);
                    }} onBlur={closeTooltip}
                    onClick={(event) => { if (!suppressClick.current) showTooltip(index, event.currentTarget); }}>
                  <Image
                    src={`/logos/${logo.file}.png`}
                    alt={duplicate ? "" : logo.name}
                    width={logo.width}
                    height={logo.height}
                    className={logo.compact ? "carousel-logo carousel-logo-compact" : "carousel-logo"}
                    unoptimized
                    loading="lazy"
                    draggable={false}
                  />
                  </button>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      {tooltip ? <TooltipCard id={tooltipId} title={logos[tooltip.index].name} context={copy.entries[tooltip.index].context}
        description={copy.entries[tooltip.index].description} anchor={tooltip.anchor} onEnter={keepTooltip} onLeave={closeTooltip} /> : null}
      <div className="logo-carousel-actions">
        <Link className="text-link" href={localizeHref("/projects", locale)}>{copy.explore} <ArrowUpRight size={17} aria-hidden="true" /></Link>
        <button className="logo-motion-control" type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? copy.resume : copy.pause}>
          {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
          <span>{paused ? copy.playLabel : copy.pauseLabel}</span>
        </button>
      </div>
      <div className="logo-context">
        <p>{copy.hint}</p>
      </div>
    </section>
  );
}
