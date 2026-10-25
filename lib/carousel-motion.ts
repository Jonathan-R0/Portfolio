export interface CarouselMotion {
  animation: Animation;
  duration: number;
  distance: number;
}

export function wrapAnimationTime(time: number, duration: number) {
  return ((time % duration) + duration) % duration;
}

export function getCarouselMotion(
  track: HTMLElement | null,
): CarouselMotion | null {
  const animation = track?.getAnimations()[0];
  const duration = Number(animation?.effect?.getTiming().duration);
  const distance = (track?.getBoundingClientRect().width ?? 0) / 2;
  if (
    !animation ||
    !Number.isFinite(duration) ||
    duration <= 0 ||
    distance <= 0
  )
    return null;
  return { animation, duration, distance };
}

export function seekCarousel(motion: CarouselMotion, time: number) {
  motion.animation.currentTime = wrapAnimationTime(time, motion.duration);
}
