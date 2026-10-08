import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { CLUB_INSTAGRAM_URL } from "../_components/club-info";
import { InstagramIcon } from "../_components/instagram-icon";
import { StatusPage } from "../_components/status-page";

export const metadata: Metadata = {
  title: "Novedades | Club Domingo Matheu",
  description:
    "Muy pronto, todas las novedades del Club Domingo Matheu en un solo lugar.",
  robots: { index: false, follow: true },
};

const PLACEHOLDER_POSTS = [0, 1, 2, 3, 4, 5];
// The tape text is rendered twice so the marquee can loop seamlessly.
const TAPE_ITEMS = Array.from({ length: 12 }, (_, index) => index);

function PlaceholderFeed() {
  return (
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
  );
}

export default function NovedadesPage() {
  return (
    <StatusPage
      badge="En desarrollo"
      title={
        <>
          Las novedades del club, <em>muy pronto acá.</em>
        </>
      }
      lede="Estamos armando un espacio con torneos, actividades, eventos y todo lo que pasa en el club, conectado directo a nuestro Instagram. Mientras tanto, enterate de todo ahí."
      actions={
        <>
          <a
            href={CLUB_INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="status-cta"
          >
            <InstagramIcon />
            Seguinos en Instagram
          </a>
          <Link href="/" className="status-ghost">
            Volver al inicio
          </Link>
        </>
      }
      aside={<PlaceholderFeed />}
    />
  );
}
