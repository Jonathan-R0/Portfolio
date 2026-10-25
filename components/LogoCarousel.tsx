"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useId,
  useRef,
  useState,
  type PointerEvent,
  type KeyboardEvent,
} from "react";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import { TooltipCard } from "@/components/ui/tooltip-card";
import { localizeHref, useI18n } from "@/lib/i18n";
import { useLogoTooltip } from "@/lib/hooks/use-logo-tooltip";
import { useCarouselAutoplay } from "@/lib/hooks/use-carousel-autoplay";
import {
  getCarouselMotion,
  seekCarousel,
  type CarouselMotion,
} from "@/lib/carousel-motion";

interface CarouselDrag extends CarouselMotion {
  pointerId: number;
  startX: number;
  startTime: number;
  captureTarget: Element;
}

const logos = [
  {
    name: "Creative Coefficient",
    file: "multicolor-emblem",
    width: 200,
    height: 192,
    compact: true,
  },
  { name: "NEC", file: "nec", width: 600, height: 160 },
  {
    name: "Grunlot",
    file: "green-arrow",
    width: 84,
    height: 111,
    compact: true,
  },
  {
    name: "Neighborhood Pal",
    file: "neighborhood-pal",
    width: 445,
    height: 240,
  },
  { name: "Nexup", file: "nexup", width: 600, height: 189 },
  {
    name: "FIUBA · Universidad de Buenos Aires",
    file: "fiuba",
    width: 600,
    height: 170,
  },
  { name: "Auting", file: "auting", width: 600, height: 130 },
];

export default function LogoCarousel() {
  const {
    locale,
    messages: { logos: copy },
  } = useI18n();
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef<CarouselDrag | null>(null);
  const [dragging, setDragging] = useState(false);
  const [paused, setPaused] = useState(false);
  const tooltipId = useId();
  const { tooltip, showTooltip, closeTooltip, keepTooltip, dismissTooltip } =
    useLogoTooltip();
  const suppressClick = useRef(false);
  useCarouselAutoplay(section, track, paused || dragging || tooltip !== null);

  function startDrag(event: PointerEvent<HTMLDivElement>) {
    if (!event.isPrimary || event.button !== 0) return;
    suppressClick.current = false;
    const motion = getCarouselMotion(track.current);
    if (!motion) return;
    const captureTarget =
      event.target instanceof Element ? event.target : event.currentTarget;
    drag.current = {
      ...motion,
      pointerId: event.pointerId,
      startX: event.clientX,
      startTime: Number(motion.animation.currentTime ?? 0),
      captureTarget,
    };
    // Capture on the actual trigger so a tap still clicks it; pointer events bubble to the viewport.
    captureTarget.setPointerCapture(event.pointerId);
    setDragging(true);
  }

  function moveDrag(event: PointerEvent<HTMLDivElement>) {
    const current = drag.current;
    if (!current || current.pointerId !== event.pointerId) return;
    if (
      !suppressClick.current &&
      Math.abs(event.clientX - current.startX) > 5
    ) {
      suppressClick.current = true;
      dismissTooltip();
    }
    const time =
      current.startTime -
      ((event.clientX - current.startX) * current.duration) / current.distance;
    seekCarousel(current, time);
  }

  function endDrag(event: PointerEvent<HTMLDivElement>) {
    const current = drag.current;
    if (!current || current.pointerId !== event.pointerId) return;
    drag.current = null;
    setDragging(false);
    if (current.captureTarget.hasPointerCapture(event.pointerId)) {
      current.captureTarget.releasePointerCapture(event.pointerId);
    }
  }

  function browseWithKeyboard(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    const motion = getCarouselMotion(track.current);
    if (!motion) return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const time =
      Number(motion.animation.currentTime ?? 0) +
      (direction * 200 * motion.duration) / motion.distance;
    seekCarousel(motion, time);
  }

  return (
    <section
      ref={section}
      className="logo-carousel page-width"
      aria-label={copy.gallery}
    >
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
        <div ref={track} className="logo-track">
          {[false, true].map((duplicate) => (
            <ul
              className="logo-group"
              key={String(duplicate)}
              aria-label={duplicate ? undefined : copy.list}
              aria-hidden={duplicate ? true : undefined}
            >
              {logos.map((logo, index) => (
                <li className="logo-item" key={logo.file}>
                  <button
                    type="button"
                    className="logo-trigger"
                    tabIndex={duplicate ? -1 : 0}
                    aria-label={copy.details.replace("{name}", logo.name)}
                    aria-describedby={
                      tooltip?.index === index ? tooltipId : undefined
                    }
                    onMouseEnter={(event) => {
                      if (drag.current) return;
                      if (
                        document.activeElement?.matches(
                          ".logo-trigger:focus-visible",
                        ) &&
                        document.activeElement !== event.currentTarget
                      )
                        return;
                      showTooltip(index, event.currentTarget);
                    }}
                    onMouseLeave={() => {
                      if (
                        !document.activeElement?.matches(
                          ".logo-trigger:focus-visible",
                        )
                      )
                        closeTooltip();
                    }}
                    onFocus={(event) => {
                      const motion = getCarouselMotion(track.current);
                      if (
                        motion &&
                        !duplicate &&
                        event.currentTarget.matches(":focus-visible")
                      ) {
                        motion.animation.currentTime =
                          (index / logos.length) * motion.duration;
                        const viewport =
                          event.currentTarget.closest(".logo-viewport");
                        if (viewport) viewport.scrollLeft = 0;
                      }
                      showTooltip(index, event.currentTarget);
                    }}
                    onBlur={closeTooltip}
                    onClick={(event) => {
                      if (!suppressClick.current)
                        showTooltip(index, event.currentTarget);
                    }}
                  >
                    <Image
                      src={`/logos/${logo.file}.png`}
                      alt={duplicate ? "" : logo.name}
                      width={logo.width}
                      height={logo.height}
                      className={
                        logo.compact
                          ? "carousel-logo carousel-logo-compact"
                          : "carousel-logo"
                      }
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
      {tooltip ? (
        <TooltipCard
          id={tooltipId}
          title={logos[tooltip.index].name}
          context={copy.entries[tooltip.index].context}
          description={copy.entries[tooltip.index].description}
          anchor={tooltip.anchor}
          onEnter={keepTooltip}
          onLeave={closeTooltip}
        />
      ) : null}
      <div className="logo-carousel-actions">
        <Link
          prefetch={false}
          className="text-link"
          href={localizeHref("/projects", locale)}
        >
          {copy.explore} <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
        <button
          className="logo-motion-control"
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? copy.resume : copy.pause}
        >
          {paused ? (
            <Play size={14} aria-hidden="true" />
          ) : (
            <Pause size={14} aria-hidden="true" />
          )}
          <span>{paused ? copy.playLabel : copy.pauseLabel}</span>
        </button>
      </div>
      <div className="logo-context">
        <p>{copy.hint}</p>
      </div>
    </section>
  );
}
