"use client";

import { RefObject, useEffect, useState } from "react";
import { useEscapeKey } from "./use-escape-key";

interface Dropdown {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

// Open state for a dropdown that closes with Escape (handing focus back to
// its toggle), with a click outside it, or when focus moves out of it.
export function useDropdown(
  containerRef: RefObject<HTMLElement | null>,
  toggleRef: RefObject<HTMLElement | null>,
): Dropdown {
  const [isOpen, setIsOpen] = useState(false);
  const close = (): void => setIsOpen(false);

  useEscapeKey(isOpen, () => {
    if (containerRef.current?.contains(document.activeElement)) {
      toggleRef.current?.focus();
    }
    close();
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!isOpen || !container) return;
    const closeIfOutside = (event: Event): void => {
      if (!container.contains(event.target as Node)) setIsOpen(false);
    };
    document.addEventListener("pointerdown", closeIfOutside);
    document.addEventListener("focusin", closeIfOutside);
    return () => {
      document.removeEventListener("pointerdown", closeIfOutside);
      document.removeEventListener("focusin", closeIfOutside);
    };
  }, [containerRef, isOpen]);

  return {
    isOpen,
    toggle: () => setIsOpen((open) => !open),
    close,
  };
}
