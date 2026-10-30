const items = [
  {
    title: "Producto propio",
    text: "Plataformas SaaS que desarrollamos y mantenemos nosotros, con un equipo de experiencia en sistemas críticos de transporte.",
  },
  {
    title: "Inteligencia artificial aplicada",
    text: "Usamos inteligencia artificial para convertir documentación compleja en información estructurada y para proponerte decisiones mejor fundamentadas. No es una etiqueta de marketing.",
  },
];

export function WhatWeDo() {
  return (
    <section id="que-hacemos" className="mx-auto max-w-[1240px] px-6 py-24">
      <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-[#9DB0A4]">
        Qué hacemos
      </p>
      <h2 className="home-reveal mt-4 max-w-3xl text-[clamp(28px,3.6vw,44px)] font-bold tracking-[-0.02em] text-[#ECF3EE]">
        Construimos productos que convierten procesos documentales y
        normativos en software fiable.
      </h2>

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.title}
            className="home-reveal border-t-2 border-[#4ADE80] pt-6"
          >
            <h3 className="text-xl font-semibold text-[#ECF3EE]">
              {item.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-[#9DB0A4]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
