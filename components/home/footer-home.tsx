import Link from "next/link";
import Image from "next/image";
import { interTight } from "@/lib/fonts";

export function HomeFooter() {
  return (
    <footer
      className={`${interTight.className} border-t border-[rgba(157,176,164,0.2)] bg-[#030604] px-6 py-14`}
    >
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-8">
        <Image
          src="/logos/logo-openvarez.png"
          alt="OPENvarez"
          width={220}
          height={220}
        />

        <div className="flex flex-col items-start gap-3 sm:items-end">
          <p className="text-sm text-[#9DB0A4]">
            © 2026 OPENvarez TechLab S.L. · Paseo de la Castellana, 194, 28046 Madrid
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-[#9DB0A4] transition-colors hover:text-[#4ADE80]"
            >
              Aviso legal
            </Link>
            <Link
              href="#"
              className="text-sm text-[#9DB0A4] transition-colors hover:text-[#4ADE80]"
            >
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
