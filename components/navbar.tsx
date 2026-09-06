"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/site-config";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-bg/78 backdrop-blur-[14px]">
      <div className="mx-auto flex min-h-[76px] max-w-[1240px] flex-wrap items-center justify-between gap-x-7 gap-y-3 px-6 py-3">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/mark.png"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 rounded-md object-contain mix-blend-screen"
          />
          <span className="font-mono text-base font-bold leading-none tracking-[-0.01em]">
            <span className="text-ink-strong">OPEN</span>
            <span className="text-accent">varez</span>
          </span>
        </Link>

        <nav className="hidden flex-wrap items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors hover:bg-nav-hover hover:text-ink-strong ${
                  active ? "text-accent" : "text-nav-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/open2licita#demo"
            className="ml-2.5 rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-accent-ink transition-colors hover:bg-accent-hover"
          >
            Solicita una demo
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border-subtle bg-bg md:hidden">
          <div className="mx-auto flex max-w-[1240px] flex-col px-6 py-3">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`py-3 text-base font-medium ${
                    active ? "text-accent" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
