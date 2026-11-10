import Link from "next/link";

export const pillButtonClass =
  "rounded-full bg-[#ECF3EE] px-7 py-3.5 text-sm font-semibold text-[#030604] transition-colors hover:bg-[#4ADE80]";

export function BusinessLines() {
  return (
    <section id="lineas" className="mx-auto max-w-[1240px] px-6 py-24">
      <h2 className="home-reveal max-w-3xl text-[clamp(28px,3.6vw,44px)] font-bold tracking-[-0.02em] text-[#ECF3EE]">
        Desarrollamos software especializado para la gestión de la
        seguridad ferroviaria.
      </h2>
      <p className="home-reveal mt-6 max-w-3xl text-lg leading-relaxed text-[#9DB0A4]">
        Aplicaciones específicas, como RiskRail402, que da respuesta al
        análisis de riesgos del Reglamento (UE) 402/2013 para todos los
        actores ferroviarios.
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
            <div className="mt-7 flex flex-wrap items-center gap-6">
              <Link
                href="/riskrail402"
                className={pillButtonClass}
              >
                Ver RiskRail402
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
      </div>
    </section>
  );
}
