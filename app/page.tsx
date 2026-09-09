import { Hero } from "@/components/hero";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { products } from "@/lib/site-config";

const reasons = [
  {
    title: "Especialización sectorial",
    description:
      "No hacemos software genérico: cada producto está diseñado desde el conocimiento profundo de su sector, su normativa y sus flujos de trabajo reales.",
  },
  {
    title: "IA aplicada",
    description:
      "Usamos inteligencia artificial para procesar documentación compleja y convertirla en información estructurada, no como una etiqueta de marketing, y para recibir propuestas que refuercen la toma de decisiones.",
  },
  {
    title: "Cumplimiento normativo",
    description:
      "Nuestras plataformas se construyen alrededor de los marcos legales y reglamentarios de cada sector, con trazabilidad y auditoría integradas.",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        showMesh
        title="Software especializado para sectores de infraestructura y construcción"
        subtitle="Diseñamos plataformas SaaS que digitalizan procesos críticos en sectores altamente regulados, combinando datos abiertos, inteligencia artificial y cumplimiento normativo para el sector de la construcción y el sector ferroviario."
        primaryCta={{ label: "Ver soluciones", href: "#soluciones" }}
        secondaryCta={{
          label: "Solicita una demo",
          href: "/open2licita#demo",
        }}
      />

      <Reveal>
        <section
          id="soluciones"
          className="mx-auto max-w-[1240px] scroll-mt-24 px-6 py-[clamp(80px,9vw,120px)]"
        >
          <div className="mb-13 flex flex-wrap items-baseline justify-between gap-7">
            <h2 className="text-[clamp(30px,3.6vw,48px)] font-bold leading-[1.06] tracking-[-0.035em] text-ink">
              Nuestras soluciones
            </h2>
            <p className="max-w-[42ch] text-[16.5px] leading-[1.6] text-muted">
              Plataformas verticales construidas sobre el pilar básico de
              cumplimiento de la normativa y de la fiabilidad de los datos
              del sector.
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-6">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section
          id="nosotros"
          className="mx-auto max-w-[1240px] scroll-mt-24 px-6 pb-[clamp(80px,9vw,120px)]"
        >
          <h2 className="text-[clamp(30px,3.6vw,48px)] font-bold leading-[1.06] tracking-[-0.035em] text-ink">
            Por qué nosotros
          </h2>
          <div className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-px overflow-hidden rounded-2xl border border-border bg-border-subtle">
            {reasons.map((reason, i) => (
              <div key={reason.title} className="bg-surface p-[34px] md:p-11">
                <p className="font-mono text-xs tracking-[0.1em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-6 text-[22px] font-bold tracking-[-0.02em] text-ink">
                  {reason.title}
                </h3>
                <p className="mt-3.5 text-base leading-[1.62] text-muted">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>
    </>
  );
}
