"use client";

import { RefObject, useEffect } from "react";

const FLIGHT_MS = 650;
const FLIGHT_TILT_DEG = -14;
const FLIGHT_EASING = "cubic-bezier(0.65, 0, 0.35, 1)";

interface Placement {
  x: number;
  y: number;
  scale: number;
}

const toTransform = (placement: Placement, tiltDeg = 0): string =>
  `translate(${placement.x}px, ${placement.y}px) rotate(${tiltDeg}deg) scale(${placement.scale})`;

const midpoint = (from: Placement, to: Placement): Placement => ({
  x: (from.x + to.x) / 2,
  y: (from.y + to.y) / 2,
  scale: (from.scale + to.scale) / 2,
});

// Places a box of the source's size so that it covers `rect`.
const placementOver = (rect: DOMRect, source: DOMRect): Placement => ({
  x: rect.left + rect.width / 2 - source.width / 2,
  y: rect.top + rect.height / 2 - source.height / 2,
  scale: rect.width / source.width,
});

// Flies the flyer between the source element and the fixed slot
// whenever `docked` changes. Runs as a Web Animation so it stays smooth
// on iOS, where scroll-linked JavaScript lags behind native scrolling.
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

    const setActive = (active: boolean): void => {
      flyer.classList.toggle("is-active", active);
      source.style.visibility = active ? "hidden" : "";
    };

    const measure = (): { atSource: Placement; atSlot: Placement } => {
      const sourceRect = source.getBoundingClientRect();
      flyer.style.width = `${sourceRect.width}px`;
      return {
        atSource: placementOver(sourceRect, sourceRect),
        atSlot: placementOver(slot.getBoundingClientRect(), sourceRect),
      };
    };

    const onResize = (): void => {
      if (docked && flyer.getAnimations().length === 0) {
        flyer.style.transform = toTransform(measure().atSlot);
      }
    };
    window.addEventListener("resize", onResize);
    const cleanup = (): void => window.removeEventListener("resize", onResize);

    flyer.classList.toggle("is-docked", docked);
    const isFirstRun = !flyer.classList.contains("is-ready");
    flyer.classList.add("is-ready");
    const isActive = flyer.classList.contains("is-active");

    if (isFirstRun || (!docked && !isActive)) {
      if (docked) flyer.style.transform = toTransform(measure().atSlot);
      setActive(docked);
      return cleanup;
    }

    const { atSource, atSlot } = measure();
    const [from, to] = docked ? [atSource, atSlot] : [atSlot, atSource];
    const running = flyer.getAnimations();
    const keyframes =
      running.length > 0
        ? [
            { transform: getComputedStyle(flyer).transform },
            { transform: toTransform(to) },
          ]
        : [
            { transform: toTransform(from) },
            { transform: toTransform(midpoint(from, to), FLIGHT_TILT_DEG) },
            { transform: toTransform(to) },
          ];
    running.forEach((animation) => animation.cancel());

    setActive(true);
    flyer.style.transform = toTransform(to);
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const flight = flyer.animate(keyframes, {
      duration: reducedMotion ? 0 : FLIGHT_MS,
      easing: FLIGHT_EASING,
    });

    if (!docked) {
      flight.finished.then(
        () => setActive(false),
        () => undefined,
      );
    }

    return cleanup;
  }, [flyerRef, slotRef, sourceSelector, docked]);
}
