"use client";

import { useEffect, useRef } from "react";

export function ParallaxStrip() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const revealIo = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          container.classList.add("is-in");
          revealIo.unobserve(container);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    revealIo.observe(container);

    let ticking = false;
    const applyParallax = () => {
      const items = container.querySelectorAll<HTMLElement>("[data-parallax]");
      items.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const speed = parseFloat(el.dataset["parallax"] ?? "0");
        const offset =
          (rect.top + rect.height / 2 - window.innerHeight / 2) * speed * -1;
        el.style.transform = `translateY(${offset.toFixed(1)}px)`;
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(applyParallax);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    applyParallax();

    return () => {
      revealIo.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="hero-strip reveal"
      style={{ "--d": ".3s" } as React.CSSProperties}
    >
      <div className="img-slot" data-parallax="0.06">
        <span className="center-label">Foto · del predio</span>
        <span className="tag">hero · 1600×1000</span>
      </div>
      <div className="img-slot" data-parallax="0.10">
        <span className="center-label">Pileta</span>
        <span className="tag">800×1000</span>
      </div>
      <div className="img-slot" data-parallax="0.14">
        <span className="center-label">Familia en el quincho</span>
        <span className="tag">900×1000</span>
      </div>
    </div>
  );
}
