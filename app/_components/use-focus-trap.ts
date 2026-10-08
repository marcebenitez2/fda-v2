"use client";

import { RefObject, useEffect } from "react";

const FOCUSABLE = "a[href], button:not([disabled])";

// While active, keeps keyboard focus inside the container: focus moves to the
// first element matching `initialFocus`, Tab and Shift+Tab wrap around, and
// focus returns to `returnFocusRef` once the trap is released.
export function useFocusTrap(
  containerRef: RefObject<HTMLElement | null>,
  returnFocusRef: RefObject<HTMLElement | null>,
  active: boolean,
  initialFocus = "a[href]",
): void {
  useEffect(() => {
    const container = containerRef.current;
    const returnTarget = returnFocusRef.current;
    if (!active || !container) return;

    const focusables = (): HTMLElement[] => [
      ...container.querySelectorAll<HTMLElement>(FOCUSABLE),
    ];
    container.querySelector<HTMLElement>(initialFocus)?.focus();

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key !== "Tab") return;
      const items = focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      if (container.contains(document.activeElement)) {
        returnTarget?.focus();
      }
    };
  }, [containerRef, returnFocusRef, active, initialFocus]);
}
