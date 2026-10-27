import Link from "next/link";

const lines = [
  {
    number: "01",
    kicker: "Construcción",
    title: "Análisis de licitaciones públicas",
    text: "Localizar, leer y comparar licitaciones y adjudicaciones de obra con IA, a partir de datos abiertos.",
    href: "/open2licita",
  },
  {
    number: "02",
    kicker: "Ferrocarril",
    title: "Digitalización del ferrocarril",
    text: "Digitaliza el análisis de riesgos ferroviario conforme al Reglamento (UE) 402/2013, sin procesos manuales y con trazabilidad de medidas y responsabilidades.",
    href: "/riskrail402",
  },
];

export function BusinessLines() {
  return (
    <section id="lineas" className="mx-auto max-w-[1240px] px-6 py-24">
      <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-[#9DB0A4]">
        Dos líneas de negocio
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {lines.map((line) => (
          <div key={line.number} className="home-reveal">
            <div className="home-card-hover relative h-full overflow-hidden rounded-[28px] border border-[rgba(157,176,164,0.2)] bg-[#09100B] p-10">
              <span
                aria-hidden="true"
                className="absolute left-8 top-4 text-[120px] font-bold leading-none text-[#ECF3EE] opacity-[0.12]"
              >
                {line.number}
              </span>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#4ADE80] opacity-20 blur-[80px]"
              />

              <div className="relative mt-24">
                <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-[#4ADE80]">
                  {line.kicker}
                </p>
                <h3 className="mt-4 text-3xl font-bold tracking-[-0.02em] text-[#ECF3EE]">
                  {line.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#9DB0A4]">
                  {line.text}
                </p>
                <Link
                  href={line.href}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#4ADE80] transition-colors hover:text-[#BBF7D0]"
                >
                  Conocer más →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
