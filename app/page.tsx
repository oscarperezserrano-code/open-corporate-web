import { Target, BrainCircuit, ShieldCheck } from "lucide-react";
import { Hero } from "@/components/hero";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/site-config";

const reasons = [
  {
    icon: Target,
    title: "Especialización sectorial",
    description:
      "No hacemos software genérico: cada producto está diseñado desde el conocimiento profundo de su sector, su normativa y sus flujos de trabajo reales.",
  },
  {
    icon: BrainCircuit,
    title: "IA aplicada",
    description:
      "Usamos inteligencia artificial para procesar documentación compleja y convertirla en información estructurada y accionable, no como una etiqueta de marketing.",
  },
  {
    icon: ShieldCheck,
    title: "Cumplimiento normativo",
    description:
      "Nuestras plataformas se construyen alrededor de los marcos legales y reglamentarios de cada sector, con trazabilidad y auditoría integradas.",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        title="Software especializado para sectores de infraestructura y construcción"
        subtitle="Diseñamos plataformas SaaS que digitalizan procesos críticos en sectores altamente regulados, combinando datos abiertos, inteligencia artificial y cumplimiento normativo."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Nuestras soluciones
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Por qué nosotros
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason.title}>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <reason.icon size={22} strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-muted">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
