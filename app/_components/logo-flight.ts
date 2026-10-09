// Runs as an inline script right after the hero is parsed, before the
// JavaScript bundle loads, so the nav reacts to the first scroll even on a
// slow connection. It must stay self-contained: it is serialized with
// toString(), so it cannot use imports or module-level values.
//
// React does not run inline scripts after a client-side navigation (e.g. a
// <Link> back to the home page), so the nav also calls it on mount. Calling it
// again on the same page returns the running flight's stop function.
export function initLogoFlight(): () => void {
  const DOCK_SCROLL_Y = 30;
  const FLIGHT_MS = 480;
  const FLIGHT_TILT_DEG = -14;
  const FLIGHT_EASING = "cubic-bezier(0.65, 0, 0.35, 1)";

  type Flyer = HTMLElement & { stopLogoFlight?: () => void };

  const root = document.documentElement;
  const nav = document.querySelector<HTMLElement>(".nav");
  const slot = document.querySelector<HTMLElement>(".logo-slot");
  const flyer = document.querySelector<Flyer>(".logo-fly");
  const source = document.querySelector<HTMLElement>(".hero-logo");
  if (!nav || !slot || !flyer || !source) return () => undefined;
  if (flyer.stopLogoFlight) return flyer.stopLogoFlight;

  interface Placement {
    x: number;
    y: number;
    scale: number;
  }

  const toTransform = (placement: Placement, tiltDeg: number): string =>
    `translate(${placement.x}px, ${placement.y}px) rotate(${tiltDeg}deg) scale(${placement.scale})`;

  const midpoint = (from: Placement, to: Placement): Placement => ({
    x: (from.x + to.x) / 2,
    y: (from.y + to.y) / 2,
    scale: (from.scale + to.scale) / 2,
  });

  // Places a box of the source's size so that it covers `rect`.
  const placementOver = (rect: DOMRect, sourceRect: DOMRect): Placement => ({
    x: rect.left + rect.width / 2 - sourceRect.width / 2,
    y: rect.top + rect.height / 2 - sourceRect.height / 2,
    scale: rect.width / sourceRect.width,
  });

  const measure = (): { atSource: Placement; atSlot: Placement } => {
    const sourceRect = source.getBoundingClientRect();
    flyer.style.width = `${sourceRect.width}px`;
    return {
      atSource: placementOver(sourceRect, sourceRect),
      atSlot: placementOver(slot.getBoundingClientRect(), sourceRect),
    };
  };

  const shouldDock = (): boolean =>
    nav.classList.contains("is-open") || window.scrollY > DOCK_SCROLL_Y;

  const fly = (docked: boolean): void => {
    const { atSource, atSlot } = measure();
    const from = docked ? atSource : atSlot;
    const to = docked ? atSlot : atSource;
    const running = flyer.getAnimations();
    const keyframes =
      running.length > 0
        ? [
            { transform: getComputedStyle(flyer).transform },
            { transform: toTransform(to, 0) },
          ]
        : [
            { transform: toTransform(from, 0) },
            { transform: toTransform(midpoint(from, to), FLIGHT_TILT_DEG) },
            { transform: toTransform(to, 0) },
          ];
    running.forEach((animation) => animation.cancel());

    root.setAttribute("data-logo-active", "");
    flyer.style.transform = toTransform(to, 0);
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const flight = flyer.animate(keyframes, {
      duration: reducedMotion ? 0 : FLIGHT_MS,
      easing: FLIGHT_EASING,
    });

    if (!docked) {
      flight.finished.then(
        () => root.removeAttribute("data-logo-active"),
        () => undefined,
      );
    }
  };

  let docked = false;
  const sync = (): void => {
    root.toggleAttribute("data-scrolled", window.scrollY > DOCK_SCROLL_Y);
    const next = shouldDock();
    if (next === docked) return;
    docked = next;
    root.toggleAttribute("data-logo-docked", docked);
    fly(docked);
  };

  const onResize = (): void => {
    if (docked && flyer.getAnimations().length === 0) {
      flyer.style.transform = toTransform(measure().atSlot, 0);
    }
  };

  const navObserver = new MutationObserver(sync);
  const stop = (): void => {
    window.removeEventListener("scroll", sync);
    window.removeEventListener("resize", onResize);
    navObserver.disconnect();
    root.removeAttribute("data-scrolled");
    root.removeAttribute("data-logo-docked");
    root.removeAttribute("data-logo-active");
    delete flyer.stopLogoFlight;
  };
  flyer.stopLogoFlight = stop;

  sync();
  window.addEventListener("scroll", sync, { passive: true });
  window.addEventListener("resize", onResize);
  navObserver.observe(nav, { attributeFilter: ["class"] });
  return stop;
}
