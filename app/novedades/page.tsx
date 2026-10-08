import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { InstagramIcon } from "../_components/instagram-icon";

export const metadata: Metadata = {
  title: "Novedades | Club Domingo Matheu",
  description:
    "Muy pronto, todas las novedades del Club Domingo Matheu en un solo lugar.",
  robots: { index: false, follow: true },
};

const INSTAGRAM_URL = "https://www.instagram.com/clubdomingomatheurosario/";
const PLACEHOLDER_POSTS = [0, 1, 2, 3, 4, 5];
// The tape text is rendered twice so the marquee can loop seamlessly.
const TAPE_ITEMS = Array.from({ length: 12 }, (_, index) => index);

export default function NovedadesPage() {
  return (
    <main className="news">
      <header className="wrap news-top">
        <Link href="/" className="news-home">
          <Image
            src="/escudo-limpio.svg"
            alt=""
            width={36}
            height={39}
            unoptimized
          />
          <span>Club Domingo Matheu</span>
        </Link>
      </header>

      <section className="wrap news-body">
        <div className="news-copy">
          <span className="news-badge">
            <span className="dot" />
            En desarrollo
          </span>
          <h1 className="display news-title">
            Las novedades del club, <em>muy pronto acá.</em>
          </h1>
          <p className="news-lede">
            Estamos armando un espacio con torneos, actividades, eventos y todo
            lo que pasa en el club, conectado directo a nuestro Instagram.
            Mientras tanto, enterate de todo ahí.
          </p>
          <div className="news-actions">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="news-cta"
            >
              <InstagramIcon />
              Seguinos en Instagram
            </a>
            <Link href="/" className="news-ghost">
              Volver al inicio
            </Link>
          </div>
        </div>

        <div className="news-feed" aria-hidden="true">
          {PLACEHOLDER_POSTS.map((post) => (
            <div
              key={post}
              className="news-post"
              style={{ "--i": post } as CSSProperties}
            >
              <span className="news-post-head">
                <span className="news-avatar" />
                <span className="news-line short" />
              </span>
              <span className="news-post-media" />
              <span className="news-line" />
              <span className="news-line short" />
            </div>
          ))}
          <div className="news-tape">
            <div className="news-tape-track">
              {TAPE_ITEMS.map((item) => (
                <span key={item} className="news-tape-item">
                  En desarrollo <span className="news-tape-star">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
