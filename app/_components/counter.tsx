"use client";

import { useEffect, useRef } from "react";

interface CounterProps {
  target: number;
  suffix?: string;
  decimals?: number;
}

export function Counter({ target, suffix = "", decimals = 0 }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(el, target, suffix, decimals);
          io.unobserve(el);
        }
      },
      { threshold: 0.6 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [target, suffix, decimals]);

  return <div ref={ref} className="n">0</div>;
}

function animate(el: HTMLElement, target: number, suffix: string, decimals: number): void {
  const dur = 1400;
  const start = performance.now();

  function tick(now: number): void {
    const p = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    const value = target * eased;
    const displayValue = decimals > 0
      ? value.toFixed(decimals).replace(".", ",")
      : Math.round(value).toString();
    el.textContent = displayValue + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}
