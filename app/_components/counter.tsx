"use client";

import { useRef } from "react";
import { formatCount, useCountUp } from "./use-count-up";

interface CounterProps {
  target: number;
  suffix?: string;
  decimals?: number;
}

export function Counter({ target, suffix = "", decimals = 0 }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  useCountUp(ref, target, suffix, decimals);

  return (
    <div ref={ref} className="n">
      {formatCount(target, suffix, decimals)}
    </div>
  );
}
