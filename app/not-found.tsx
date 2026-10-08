import type { Metadata } from "next";
import Link from "next/link";
import { StatusPage } from "./_components/status-page";

export const metadata: Metadata = {
  title: "Página no encontrada | Club Domingo Matheu",
};

export default function NotFound() {
  return (
    <StatusPage
      badge="Error 404"
      title={
        <>
          Esta página <em>no existe.</em>
        </>
      }
      lede="Puede que el link esté mal escrito o que la página se haya movido. Volvé al inicio para seguir recorriendo el club."
      actions={
        <>
          <Link href="/" className="status-cta">
            Volver al inicio
          </Link>
          <Link href="/#disciplinas" className="status-ghost">
            Ver disciplinas
          </Link>
        </>
      }
    />
  );
}
