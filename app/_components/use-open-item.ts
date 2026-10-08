"use client";

import { useState } from "react";
import { useEscapeKey } from "./use-escape-key";

interface OpenItem {
  openId: string | null;
  toggle: (id: string) => void;
  close: () => void;
}

// Tracks which item of a list is open, keeping at most one open at a time.
export function useOpenItem(): OpenItem {
  const [openId, setOpenId] = useState<string | null>(null);
  const close = (): void => setOpenId(null);
  useEscapeKey(openId !== null, close);

  return {
    openId,
    toggle: (id) => setOpenId((current) => (current === id ? null : id)),
    close,
  };
}
