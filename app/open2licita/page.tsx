import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FeatureCard } from "@/components/feature-card";
import { CTASection } from "@/components/cta-section";
import { ContactForm } from "@/components/contact-form";
import { BrowserMockup } from "@/components/browser-mockup";
import { AudienceList } from "@/components/audience-list";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Open2Licita — Licitaciones de construcción con IA",
  description:
    "Open2Licita agrega, analiza y te alerta automáticamente sobre licitaciones públicas de construcción, combinando open data e inteligencia artificial.",
};

const features = [
  {
    title: "Cobertura integral vía Open Data",
    description:
      "Agregamos automáticamente datos públicos de contratación de múltiples fuentes de open data, con actualización continua. Sin huecos, sin depender de revisiones manuales de boletines.",
  },
  {
    title: "IA para análisis de licitaciones y adjudicaciones",
    description:
      "Nuestros modelos de IA procesan cada expediente para extraer y estructurar la información clave (importes, plazos, adjudicatarios, criterios de valoración) y detectan patrones en el histórico de adjudicaciones, convirtiendo documentos dispersos en inteligencia accionable.",
  },
  {
    title: "Alertas e informes generados automáticamente",
    description:
      "El sistema identifica oportunidades relevantes para cada usuario y genera alertas e informes periódicos sin intervención manual, combinando reglas de negocio con análisis inteligente del contenido de las licitaciones.",
  },
  {
    title: "Asistente IA propio para consultas y ofertas",
    description:
      "Con un asistente IA propio, puedes consultar cualquier indicador en el formato deseado y obtener propuesta a tu oferta en base al análisis del histórico y de la situación actual de tu competencia.",
  },
];

const audience = [
  "Constructoras",
  "Ingenierías",
  "Asociaciones",
  "Estudios",
  "Consultoras",
];

export default function Open2LicitaPage() {
  return (
    <>
      <Hero
        showMesh
        breadcrumb={{ label: "← Soluciones", href: "/#soluciones" }}
        eyebrow="Construcción · Licitaciones públicas"
        title="Encontrar y analizar licitaciones de construcción, sin el trabajo manual"
        problemSolution={{
          problem:
            "Hoy, seguir las licitaciones relevantes significa revisar a mano decenas de boletines dispersos.",
          solution:
            "Unifica la información de todos los organismos licitadores de construcción, la analiza y me facilita los datos relevantes que necesito en cada fase del proceso.",
        }}
        primaryCta={{ label: "Solicita una demo", href: "#demo" }}
      />

      <Reveal className="px-6 pt-[clamp(56px,7vw,88px)]">
        <BrowserMockup
          src="/screenshots/o2l-mapa.png"
          alt="Open2Licita — panel de mando: contratos por provincia y por tipo de organismo"
          width={2880}
          height={1456}
          wide
        />
      </Reveal>

      <Reveal>
        <section className="mx-auto max-w-[1240px] px-6 py-[clamp(80px,9vw,120px)]">
          <h2 className="mb-14 text-[clamp(28px,3.2vw,42px)] font-bold tracking-[-0.035em] text-ink">
            Cómo funciona
          </h2>
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              index={i + 1}
              first={i === 0}
              last={i === features.length - 1}
              {...feature}
            />
          ))}
        </section>
      </Reveal>

      <Reveal className="px-6 pt-[clamp(80px,9vw,112px)]">
        <BrowserMockup
          src="/screenshots/o2l-licitaciones.png"
          alt="Open2Licita — listado de licitaciones activas"
          width={2404}
          height={1541}
          framed={false}
          wide
          caption="Listado de licitaciones activas con filtros por organismo, provincia, categoría y fuente."
        />
      </Reveal>

      <Reveal>
        <AudienceList
          title="Para quién"
          description="Open2Licita está pensado para cualquier organización que necesite seguir de cerca la contratación pública de obra y construcción."
          items={audience}
        />
      </Reveal>

      <CTASection
        title="Solicita una demo de Open2Licita"
        subtitle="Cuéntanos sobre tu operativa actual y te mostramos cómo Open2Licita puede simplificar tu búsqueda de licitaciones."
      >
        <ContactForm product="Open2Licita" />
      </CTASection>
    </>
  );
}
