"use client";

import { useEffect, useState } from "react";

interface Menu {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

export function useMenu(): Menu {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return {
    isOpen,
    toggle: () => setIsOpen((open) => !open),
    close: () => setIsOpen(false),
  };
}
