import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { CLUB_SHORT_NAME } from "./club-info";

interface StatusPageProps {
  badge: string;
  title: ReactNode;
  lede: ReactNode;
  actions: ReactNode;
  aside?: ReactNode;
}

// Full-screen green layout shared by standalone pages (novedades, 404, error).
export function StatusPage({ badge, title, lede, actions, aside }: StatusPageProps) {
  return (
    <main className="status">
      <header className="wrap status-top">
        <Link href="/" className="status-home">
          <Image
            src="/escudo-limpio.svg"
            alt=""
            width={36}
            height={39}
            unoptimized
          />
          <span>{CLUB_SHORT_NAME}</span>
        </Link>
      </header>

      <section className="wrap status-body">
        <div className="status-copy">
          <span className="status-badge">
            <span className="dot" />
            {badge}
          </span>
          <h1 className="display status-title">{title}</h1>
          <p className="status-lede">{lede}</p>
          <div className="status-actions">{actions}</div>
        </div>
        {aside}
      </section>
    </main>
  );
}
