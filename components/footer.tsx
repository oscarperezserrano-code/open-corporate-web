import Link from "next/link";
import { company, nav } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-foreground">
              {company.name}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-muted">
              Software especializado para sectores de infraestructura y
              construcción.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">
              Navegación
            </p>
            <ul className="mt-3 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Contacto</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {company.email}
                </a>
              </li>
              <li>{company.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}. Todos los
            derechos reservados.
          </p>
          <p>{company.taxId}</p>
        </div>
      </div>
    </footer>
  );
}
