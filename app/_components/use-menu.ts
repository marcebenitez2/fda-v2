"use client";

import { useState } from "react";
import { useEscapeKey } from "./use-escape-key";

interface Menu {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

export function useMenu(): Menu {
  const [isOpen, setIsOpen] = useState(false);
  const close = (): void => setIsOpen(false);
  useEscapeKey(isOpen, close);

  return {
    isOpen,
    toggle: () => setIsOpen((open) => !open),
    close,
  };
}
