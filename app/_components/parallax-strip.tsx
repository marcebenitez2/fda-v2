"use client";

import Image from "next/image";
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
      <div className="img-slot has-photo" data-parallax="0.06">
        <Image
          src="/club/entrada.jpg"
          alt="Entrada arbolada del Club Social y Deportivo Fábrica de Armas Domingo Matheu"
          fill
          sizes="(max-width: 760px) 65vw, 50vw"
          className="photo-cover photo-cover--entrance"
        />
        <span className="tag">Nuestro club</span>
      </div>
      <div className="img-slot has-photo" data-parallax="0.10">
        <Image
          src="/club/pileta.jpg"
          alt="Pileta al aire libre con trampolín en el club"
          fill
          sizes="(max-width: 760px) 35vw, 25vw"
          className="photo-cover photo-cover--pool"
        />
        <span className="tag">Verano en la pileta</span>
      </div>
      <div className="img-slot has-photo" data-parallax="0.14">
        <Image
          src="/club/familia-festejo.jpg"
          alt="Familia reunida durante el festejo del club en el predio"
          fill
          sizes="25vw"
          className="photo-cover"
        />
        <span className="tag">Un club de familia</span>
      </div>
    </div>
  );
}
