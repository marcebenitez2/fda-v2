"use client";

import { useEffect, useRef } from "react";

interface CounterProps {
  target: number;
  suffix?: string;
}

export function Counter({ target, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(el, target, suffix);
          io.unobserve(el);
        }
      },
      { threshold: 0.6 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [target, suffix]);

  return <div ref={ref} className="n">0</div>;
}

function animate(el: HTMLElement, target: number, suffix: string): void {
  const dur = 1400;
  const start = performance.now();

  function tick(now: number): void {
    const p = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}
