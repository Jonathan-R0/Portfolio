import assert from "node:assert/strict";
import test from "node:test";
import { loadTypeScript } from "./helpers/load-typescript.mjs";

const { wrapAnimationTime, getCarouselMotion, seekCarousel } =
  await loadTypeScript(new URL("../lib/carousel-motion.ts", import.meta.url));

function trackWithAnimation(duration = 80000, width = 3000) {
  const animation = {
    currentTime: 0,
    effect: { getTiming: () => ({ duration }) },
  };
  return {
    animation,
    getAnimations: () => [animation],
    getBoundingClientRect: () => ({ width }),
  };
}

test("Carousel motion wraps seamlessly in both directions", () => {
  assert.equal(wrapAnimationTime(25, 100), 25);
  assert.equal(wrapAnimationTime(100, 100), 0);
  assert.equal(wrapAnimationTime(225, 100), 25);
  assert.equal(wrapAnimationTime(-25, 100), 75);
  assert.equal(wrapAnimationTime(-225, 100), 75);
});

test("Carousel motion uses one half of the duplicated track", () => {
  const track = trackWithAnimation();
  const motion = getCarouselMotion(track);
  assert.equal(motion.animation, track.animation);
  assert.equal(motion.distance, 1500);
  assert.equal(motion.duration, 80000);
});

test("Missing, disabled and invalid animations cannot start a gesture", () => {
  assert.equal(getCarouselMotion(null), null);
  assert.equal(
    getCarouselMotion({
      getAnimations: () => [],
      getBoundingClientRect: () => ({ width: 100 }),
    }),
    null,
  );
  for (const duration of [0, -1, Infinity, "auto"]) {
    assert.equal(getCarouselMotion(trackWithAnimation(duration)), null);
  }
  assert.equal(getCarouselMotion(trackWithAnimation(80000, 0)), null);
});

test("Seeking updates the animation without introducing a second transform", () => {
  const track = trackWithAnimation(100, 200);
  seekCarousel(getCarouselMotion(track), -10);
  assert.equal(track.animation.currentTime, 90);
  seekCarousel(getCarouselMotion(track), 110);
  assert.equal(track.animation.currentTime, 10);
});
