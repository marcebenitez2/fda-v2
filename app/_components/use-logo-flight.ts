"use client";

import { useEffect } from "react";
import { initLogoFlight } from "./logo-flight";

// Starts the logo flight when the nav mounts after a client-side navigation,
// where the inline script does not run, and stops it when the nav unmounts.
export function useLogoFlight(): void {
  useEffect(() => initLogoFlight(), []);
}
