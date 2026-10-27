"use client";

import { useRef, type ReactNode } from "react";
import { useReveal } from "./use-reveal";

interface RevealProps {
  children: ReactNode;
  delay?: string;
  className?: string;
  id?: string;
}

export function Reveal({ children, delay, className, id }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useReveal(ref);

  return (
    <div
      ref={ref}
      id={id}
      className={`reveal${className ? ` ${className}` : ""}`}
      style={delay ? ({ "--d": delay } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
