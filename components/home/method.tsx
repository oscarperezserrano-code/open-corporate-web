const steps = [
  {
    number: "01",
    title: "Entender",
    text: "Conocemos el ferrocarril y su entorno. Por eso entendemos los problemas reales desde el primer día.",
  },
  {
    number: "02",
    title: "Diseñar",
    text: "Diseñamos todo para el ferrocarril y su casuística: flujos, datos y controles a medida del sector.",
  },
  {
    number: "03",
    title: "Aplicar IA",
    text: "IA orientada al ferrocarril para resolver problemas reales. Propone la IA, decide la persona.",
  },
  {
    number: "04",
    title: "Evolucionar",
    text: "Producto en continua evolución, como el ferrocarril. Mantenido, documentado y mejorado con el feedback de los clientes.",
  },
];

export function Method() {
  return (
    <section id="metodo" className="mx-auto max-w-[1240px] px-6 py-24">
      <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-[#9DB0A4]">
        Cómo construimos
      </p>
      <h2 className="home-reveal mt-4 max-w-3xl text-[clamp(28px,3.6vw,44px)] font-bold tracking-[-0.02em] text-[#ECF3EE]">
        Del problema real del ferrocarril a un producto fiable, en cuatro pasos.
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
