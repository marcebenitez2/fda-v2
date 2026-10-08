"use client";

import Link from "next/link";
import { StatusPage } from "./_components/status-page";

interface ErrorPageProps {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}

export default function ErrorPage({ unstable_retry }: ErrorPageProps) {
  return (
    <StatusPage
      badge="Algo falló"
      title={
        <>
          Ups, algo <em>salió mal.</em>
        </>
      }
      lede="No pudimos cargar esta parte de la página. Probá de nuevo en unos segundos; si sigue pasando, escribinos por WhatsApp."
      actions={
        <>
          <button
            type="button"
            className="status-cta"
            onClick={() => unstable_retry()}
          >
            Reintentar
          </button>
          <Link href="/" className="status-ghost">
            Volver al inicio
          </Link>
        </>
      }
    />
  );
}
