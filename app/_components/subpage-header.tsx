import Image from "next/image";
import Link from "next/link";
import { CLUB_NAME_MAIN, CLUB_NAME_PREFIX } from "./club-info";

// Sticky bar for content pages outside the home. It mirrors the home nav once
// the shield has docked, since these pages have no hero for it to fly from.
export function SubpageHeader() {
  return (
    <header className="subpage-header">
      <Link href="/" className="subpage-brand">
        <Image
          src="/escudo-limpio.svg"
          alt=""
          width={40}
          height={44}
          unoptimized
        />
        <span className="subpage-brand-name">
          <span className="subpage-brand-prefix">{CLUB_NAME_PREFIX}</span>
          <span className="subpage-brand-main">{CLUB_NAME_MAIN}</span>
        </span>
      </Link>
      <Link href="/" className="subpage-back">
        Volver al inicio
      </Link>
    </header>
  );
}
