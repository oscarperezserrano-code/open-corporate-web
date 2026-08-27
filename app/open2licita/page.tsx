import type { Metadata } from "next";
import { Database, BrainCircuit, BellRing } from "lucide-react";
import { HardHat, Building2, Users, ClipboardList } from "lucide-react";
import { Hero } from "@/components/hero";
import { FeatureCard } from "@/components/feature-card";
import { CTASection } from "@/components/cta-section";
import { ContactForm } from "@/components/contact-form";
import { BrowserMockup } from "@/components/browser-mockup";

export const metadata: Metadata = {
  title: "Open2Licita — Licitaciones de construcción con IA",
  description:
    "Open2Licita agrega, analiza y te alerta automáticamente sobre licitaciones públicas de construcción, combinando open data e inteligencia artificial.",
};

const features = [
  {
    icon: Database,
    title: "Cobertura integral vía Open Data",
    description:
      "Agregamos automáticamente datos públicos de contratación de múltiples fuentes de open data, con actualización continua. Sin huecos, sin depender de revisiones manuales de boletines.",
  },
  {
    icon: BrainCircuit,
    title: "IA para análisis de licitaciones y adjudicaciones",
    description:
      "Nuestros modelos de IA procesan cada expediente para extraer y estructurar la información clave (importes, plazos, adjudicatarios, criterios de valoración) y detectan patrones en el histórico de adjudicaciones, convirtiendo documentos dispersos en inteligencia accionable.",
  },
  {
    icon: BellRing,
    title: "Alertas e informes generados automáticamente",
    description:
      "El sistema identifica oportunidades relevantes para cada usuario y genera alertas e informes periódicos sin intervención manual, combinando reglas de negocio con análisis inteligente del contenido de las licitaciones.",
  },
];

const audience = [
  { icon: HardHat, label: "Constructoras" },
  { icon: Building2, label: "Estudios de arquitectura" },
  { icon: ClipboardList, label: "Contratistas" },
  { icon: Users, label: "Consultoras de licitaciones" },
];

export default function Open2LicitaPage() {
  return (
    <>
      <Hero
        eyebrow="Construcción · Licitaciones públicas"
        title="Encontrar y analizar licitaciones de construcción, sin el trabajo manual"
        subtitle="Hoy, seguir las licitaciones relevantes significa revisar a mano decenas de boletines dispersos. Open2Licita agrega, analiza y te alerta automáticamente sobre las oportunidades que importan para tu negocio."
        primaryCta={{ label: "Solicita una demo", href: "#demo" }}
        visual={<BrowserMockup url="app.open2licita.com/panel" />}
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Para quién
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
            Open2Licita está pensado para cualquier organización que necesite
            seguir de cerca la contratación pública de obra y construcción.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audience.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-xl border border-border bg-background p-6"
              >
                <item.icon size={22} className="text-accent" strokeWidth={2} />
                <span className="text-base font-medium text-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Solicita una demo de Open2Licita"
        subtitle="Cuéntanos sobre tu operativa actual y te mostramos cómo Open2Licita puede simplificar tu búsqueda de licitaciones."
      >
        <ContactForm product="Open2Licita" />
      </CTASection>
    </>
  );
}
