"use client";

import { RefObject, useEffect } from "react";

const FLIGHT_TILT_DEG = -14;
const SETTLE_MS = 450;

interface Box {
  cx: number;
  cy: number;
  width: number;
  height: number;
}

const lerp = (from: number, to: number, t: number): number =>
  from + (to - from) * t;

const easeInOutCubic = (t: number): number =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const centerBox = (rect: DOMRect, offsetY: number): Box => ({
  cx: rect.left + rect.width / 2,
  cy: rect.top + rect.height / 2 + offsetY,
  width: rect.width,
  height: rect.height,
});

// Flies the flyer from the source element (scrolling with the page)
// into the fixed slot as the page scrolls past the source.
export function useLogoFlight(
  flyerRef: RefObject<HTMLElement | null>,
  slotRef: RefObject<HTMLElement | null>,
  sourceSelector: string,
  docked: boolean,
): void {
  useEffect(() => {
    const flyer = flyerRef.current;
    const slot = slotRef.current;
    const source = document.querySelector<HTMLElement>(sourceSelector);
    if (!flyer || !slot || !source) return;

    let start = centerBox(source.getBoundingClientRect(), window.scrollY);
    let end = centerBox(slot.getBoundingClientRect(), 0);
    let frame = 0;

    const render = (): void => {
      frame = 0;
      const distance = Math.max(start.cy + start.height / 2 - end.cy, 1);
      const progress = docked
        ? 1
        : Math.min(Math.max(window.scrollY / distance, 0), 1);
      const t = easeInOutCubic(progress);
      const cx = lerp(start.cx, end.cx, t);
      const cy = lerp(start.cy - window.scrollY, end.cy, t);
      const scale = lerp(1, end.width / start.width, t);
      const tilt = FLIGHT_TILT_DEG * Math.sin(Math.PI * progress);
      flyer.style.transform = `translate3d(${cx - start.width / 2}px, ${cy - start.height / 2}px, 0) rotate(${tilt}deg) scale(${scale})`;
      flyer.classList.toggle("is-docked", progress === 1);
    };

    const measure = (): void => {
      start = centerBox(source.getBoundingClientRect(), window.scrollY);
      end = centerBox(slot.getBoundingClientRect(), 0);
      flyer.style.width = `${start.width}px`;
      render();
    };

    const onScroll = (): void => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    const wasReady = flyer.classList.contains("is-ready");
    if (wasReady) flyer.classList.add("is-settling");
    const settleTimer = window.setTimeout(
      () => flyer.classList.remove("is-settling"),
      SETTLE_MS,
    );

    measure();
    flyer.classList.add("is-ready");

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(document.body);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(settleTimer);
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [flyerRef, slotRef, sourceSelector, docked]);
}
