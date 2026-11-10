import Link from "next/link";

export function BusinessLines() {
  return (
    <section id="lineas" className="mx-auto max-w-[1240px] px-6 py-24">
      <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-[#9DB0A4]">
        Nuestra primera aplicación
      </p>

      <div className="home-reveal mt-10">
        <div className="home-card-hover relative h-full overflow-hidden rounded-[28px] border border-[rgba(157,176,164,0.2)] bg-[#09100B] p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#4ADE80] opacity-20 blur-[80px]"
          />

          <div className="relative">
            <h3 className="text-3xl font-bold tracking-[-0.02em] text-[#ECF3EE]">
              RiskRail402
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[#9DB0A4]">
              Digitaliza el análisis de riesgos ferroviario conforme al
              Reglamento (UE) 402/2013, sin procesos manuales y con
              trazabilidad de medidas y responsabilidades.
            </p>
            <Link
              href="/riskrail402"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#4ADE80] transition-colors hover:text-[#BBF7D0]"
            >
              Ver producto →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
