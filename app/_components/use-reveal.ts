"use client";

import { RefObject, useEffect } from "react";
import { isInViewport } from "./in-viewport";

// Content is visible by default so it never waits on JavaScript.
// Only elements still below the fold get hidden and revealed on scroll.
export function useReveal(ref: RefObject<HTMLElement | null>): void {
  useEffect(() => {
    const el = ref.current;
    if (!el || isInViewport(el)) return;

    el.classList.add("is-armed");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
}
