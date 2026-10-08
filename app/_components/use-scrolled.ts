"use client";

import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 30;

export function useScrolled(): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = (): void => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return scrolled;
}
