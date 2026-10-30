import Link from "next/link";
import { BrainNetwork } from "@/components/home/brain-network";
import { CursorGlow } from "@/components/home/cursor-glow";

export function HeroHome() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-6 pb-24 pt-[clamp(120px,16vw,180px)]"
    >
      <BrainNetwork />
      <CursorGlow />

      <div className="relative z-10 mx-auto max-w-[1240px]">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-[#4ADE80] bg-black/20 px-4 py-2 font-mono text-[13px] uppercase tracking-[0.12em] text-[#ECF3EE]">
            Productos SaaS · Inteligencia artificial
          </span>

          <h1 className="mt-8 text-[clamp(40px,6.4vw,84px)] font-bold leading-[0.96] tracking-[-0.03em] text-[#ECF3EE]">
            Software e IA que{" "}
            <span className="bg-gradient-to-r from-[#4ADE80] to-[#BBF7D0] bg-clip-text text-transparent">
              resuelven problemas reales.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#9DB0A4]">
            Plataformas SaaS con IA para la construcción y el ferroviario, que
            facilitan el trabajo de equipos técnicos y de dirección.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="#lineas"
              className="rounded-full bg-[#ECF3EE] px-7 py-3.5 text-sm font-semibold text-[#030604] transition-colors hover:bg-[#4ADE80]"
            >
              Ver productos
            </Link>
            <Link
              href="#contacto"
              className="text-sm font-semibold text-[#ECF3EE] transition-colors hover:text-[#4ADE80]"
            >
              Solicita una demo →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
