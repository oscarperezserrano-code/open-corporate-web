"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { interTight } from "@/lib/fonts";

export type HomeNavLink = { label: string; href: string };

const defaultLinks: HomeNavLink[] = [
  { label: "Líneas de negocio", href: "#lineas" },
  { label: "Qué hacemos", href: "#que-hacemos" },
  { label: "Cómo trabajamos", href: "#metodo" },
];

export function HomeNavbar({
  links = defaultLinks,
  ctaLabel = "Contacto",
  ctaHref = "#contacto",
  logoHref = "#inicio",
}: {
  links?: HomeNavLink[];
  ctaLabel?: string;
  ctaHref?: string;
  logoHref?: string;
} = {}) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`${interTight.className} sticky top-0 z-50 border-b border-[rgba(157,176,164,0.2)] bg-[#030604]/80 backdrop-blur-[14px]`}
    >
      <div className="mx-auto flex min-h-[76px] max-w-[1240px] flex-wrap items-center justify-between gap-x-7 gap-y-3 px-6 py-3">
        <Link
          href={logoHref}
          aria-label="OPENvarez Tech Lab"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-openvarez.svg"
            alt="OPENvarez Tech Lab"
            width={259}
            height={46}
            className="h-[46px] w-auto mix-blend-lighten"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2.5 text-sm font-medium text-[#9DB0A4] transition-colors hover:text-[#ECF3EE]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={ctaHref}
            className="ml-2.5 rounded-full bg-[#ECF3EE] px-5 py-2.5 text-sm font-semibold text-[#030604] transition-colors hover:bg-[#4ADE80]"
          >
            {ctaLabel}
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[#ECF3EE] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[rgba(157,176,164,0.2)] bg-[#030604] md:hidden">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-1 px-6 py-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-[#ECF3EE]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={ctaHref}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-[#ECF3EE] px-5 py-2.5 text-sm font-semibold text-[#030604]"
            >
              {ctaLabel}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
