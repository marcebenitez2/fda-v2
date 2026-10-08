"use client";

import { RefObject, useEffect } from "react";
import { isInViewport } from "./in-viewport";

const COUNT_UP_MS = 1400;
// If JavaScript arrives this soon after navigation, the real number has
// barely been seen, so a visible counter can still count up from zero.
const EARLY_LOAD_MS = 1000;

export function formatCount(
  value: number,
  suffix: string,
  decimals: number,
): string {
  const number =
    decimals > 0
      ? value.toFixed(decimals).replace(".", ",")
      : Math.round(value).toString();
  return number + suffix;
}

// The real value is rendered in the HTML so it never shows 0 without
// JavaScript. Off-screen counters count up once they scroll into view;
// visible ones only animate when JavaScript loaded early, so the number
// never jumps backwards after someone has already read it.
export function useCountUp(
  ref: RefObject<HTMLElement | null>,
  target: number,
  suffix: string,
  decimals: number,
): void {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const visible = isInViewport(el);
    if (visible && performance.now() > EARLY_LOAD_MS) return;

    let frame = 0;
    el.textContent = formatCount(0, suffix, decimals);

    const countUp = (): void => {
      const start = performance.now();
      const tick = (now: number): void => {
        const progress = Math.min(1, (now - start) / COUNT_UP_MS);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = formatCount(target * eased, suffix, decimals);
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          countUp();
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      el.textContent = formatCount(target, suffix, decimals);
    };
  }, [ref, target, suffix, decimals]);
}
