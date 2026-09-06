import Link from "next/link";
import Image from "next/image";
import { company, nav } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-alt">
      <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-12 px-6 py-20">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/brand/mark.png"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-md object-contain mix-blend-screen"
            />
            <span className="font-mono text-[15px] font-bold leading-none">
              <span className="text-ink-strong">OPEN</span>
              <span className="text-accent">varez</span>
            </span>
          </div>
          <p className="mt-5 max-w-[30ch] text-[15px] leading-relaxed text-dim">
            Software especializado para sectores de infraestructura y
            construcción.
          </p>
        </div>

        <div>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-faint">
            Navegación
          </p>
          <ul className="mt-5 flex flex-col items-start gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[15.5px] text-chip transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-faint">
            Contacto
          </p>
          <ul className="mt-5 flex flex-col items-start gap-3">
            <li>
              <a
                href={`mailto:${company.email}`}
                className="text-[15.5px] text-chip transition-colors hover:text-accent"
              >
                {company.email}
              </a>
            </li>
            <li className="text-[15.5px] text-dim">{company.address}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 border-t border-border-faint px-6 py-6">
        <p className="font-mono text-[11px] text-faint">
          © {new Date().getFullYear()} · {company.legalName} · {company.taxId}
        </p>
      </div>
    </footer>
  );
}
