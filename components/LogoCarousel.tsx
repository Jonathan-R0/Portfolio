"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type PointerEvent, type KeyboardEvent } from "react";
import { ArrowUpRight, ChevronDown, Pause, Play } from "lucide-react";

const logos = [
  { name: "Geometric emblem", file: "multicolor-emblem", width: 200, height: 192, compact: true },
  { name: "NEC", file: "nec", width: 600, height: 160 },
  { name: "Arrow emblem", file: "green-arrow", width: 84, height: 111, compact: true },
  { name: "Neighborhood Pal", file: "neighborhood-pal", width: 445, height: 240 },
  { name: "Nexup", file: "nexup", width: 600, height: 189 },
  { name: "FIUBA · Universidad de Buenos Aires", file: "fiuba", width: 600, height: 170 },
  { name: "Auting", file: "auting", width: 600, height: 130 },
];

export default function LogoCarousel() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef<{ pointerId: number; startX: number; startTime: number; animation: Animation; duration: number; distance: number } | null>(null);
  const [dragging, setDragging] = useState(false);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);

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
    const motion = getMotion();
    if (!motion) return;
    drag.current = { ...motion, pointerId: event.pointerId, startX: event.clientX, startTime: Number(motion.animation.currentTime ?? 0) };
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
  }

  function moveDrag(event: PointerEvent<HTMLDivElement>) {
    const current = drag.current;
    if (!current || current.pointerId !== event.pointerId) return;
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
    <section ref={section} className="logo-carousel page-width" aria-label="Logo gallery">
      <div
        className="logo-viewport"
        data-dragging={dragging}
        role="group"
        aria-label="Browse logos: drag horizontally or use the left and right arrow keys"
        tabIndex={0}
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onLostPointerCapture={endDrag}
        onKeyDown={browseWithKeyboard}
      >
        <div ref={track} className="logo-track" data-running={inView && pageVisible && !paused && !dragging}>
          {[false, true].map((duplicate) => (
            <ul className="logo-group" key={String(duplicate)} aria-label={duplicate ? undefined : "Logos"} aria-hidden={duplicate ? true : undefined}>
              {logos.map((logo) => (
                <li className="logo-item" key={logo.file}>
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
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="logo-carousel-actions">
        <Link className="text-link" href="/projects">Explore projects <ArrowUpRight size={17} aria-hidden="true" /></Link>
        <button className="logo-motion-control" type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Resume logo animation" : "Pause logo animation"}>
          {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
          <span>{paused ? "Play" : "Pause"}</span>
        </button>
      </div>
      <div className="logo-context">
        <p>Different ways of collaborating: direct projects, work through third parties, and demos.</p>
        <details>
          <summary>About these projects <ChevronDown size={14} aria-hidden="true" /></summary>
          <div className="logo-context-copy">
            <p>These logos represent different professional contexts, including projects delivered directly, work carried out through third parties, and demonstration proposals.</p>
            <p>For Auting, I developed a demo that received positive feedback, but it did not lead to a subsequent engagement.</p>
          </div>
        </details>
      </div>
    </section>
  );
}
