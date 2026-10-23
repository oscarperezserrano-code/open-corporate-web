const steps = [
  {
    number: "01",
    title: "Entender",
    text: "Partimos del proceso real y de la normativa que lo regula.",
  },
  {
    number: "02",
    title: "Diseñar",
    text: "Definimos el flujo, los datos y los controles necesarios.",
  },
  {
    number: "03",
    title: "Aplicar IA",
    text: "Con revisión experta y registro de cada decisión.",
  },
  {
    number: "04",
    title: "Entregar",
    text: "Software mantenible, documentado y listo para auditoría.",
  },
];

export function Method() {
  return (
    <section id="metodo" className="mx-auto max-w-[1240px] px-6 py-24">
      <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-[#9DB0A4]">
        Cómo trabajamos
      </p>
      <h2 className="home-reveal mt-4 max-w-3xl text-[clamp(28px,3.6vw,44px)] font-bold tracking-[-0.02em] text-[#ECF3EE]">
        Del proceso real al software, en cuatro pasos.
      </h2>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div key={step.number} className="home-reveal">
            <div className="home-card-hover h-full rounded-2xl border border-[rgba(157,176,164,0.2)] bg-[#09100B] p-7">
              <p className="font-mono text-sm text-[#4ADE80]">{step.number}</p>
              <h3 className="mt-4 text-lg font-semibold text-[#ECF3EE]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#9DB0A4]">
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
