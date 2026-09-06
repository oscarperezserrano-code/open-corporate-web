import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FeatureCard } from "@/components/feature-card";
import { CTASection } from "@/components/cta-section";
import { ContactForm } from "@/components/contact-form";
import { BrowserMockup } from "@/components/browser-mockup";
import { AudienceList } from "@/components/audience-list";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "RiskRail402 — Análisis de riesgo ferroviario conforme al CSM-RA",
  description:
    "RiskRail402 digitaliza el análisis de riesgo ferroviario conforme al Reglamento de Ejecución (UE) 402/2013, con IA, trazabilidad y firma electrónica.",
};

const features = [
  {
    title: "Proceso guiado en 7 fases, sin Excel ni Word",
    description:
      "Sustituimos las hojas de cálculo y documentos sueltos por un flujo digital que guía paso a paso el análisis de riesgo conforme al Reglamento de Ejecución (UE) 402/2013, desde la evaluación preliminar hasta la declaración final de conformidad. Ningún paso queda sin documentar, y el estado del expediente es visible en tiempo real para todo el equipo.",
  },
  {
    title: "IA que redacta el primer borrador del análisis",
    description:
      "A partir de un título y una breve descripción del cambio, el asistente genera automáticamente el borrador técnico completo (objetivo del sistema, peligros identificados, evaluación de riesgo y medidas de control), listo para que el equipo experto lo revise y valide. Lo que antes llevaba horas de redacción, ahora se plantea en segundos.",
  },
  {
    title: "Trazabilidad y firma electrónica de principio a fin",
    description:
      "Cada expediente queda blindado de principio a fin: quién hizo qué, cuándo y con qué justificación, con firma electrónica de proponente, expertos e instructor integrada en el propio flujo. El informe de auditoría se genera solo, listo para inspección regulatoria en cualquier momento.",
  },
];

const audience = [
  "Operadores ferroviarios",
  "Administradores de infraestructura",
  "Gestores de seguridad",
  "Entidades evaluadoras",
];

export default function RiskRail402Page() {
  return (
    <>
      <Hero
        breadcrumb={{ label: "← Soluciones", href: "/#soluciones" }}
        eyebrow="Ferroviario · Gestión de riesgos"
        title="El análisis de riesgo ferroviario merece algo mejor que Excel y Word"
        problemSolution={{
          problem:
            "Hoy, el análisis de riesgo ante cambios ferroviarios según el Reglamento (UE) 402/2013 se gestiona con hojas de cálculo y documentos sueltos, sin trazabilidad ni control de versiones.",
          solution:
            "RiskRail402 es la plataforma digital guiada que blinda todo el proceso, de principio a fin.",
        }}
        primaryCta={{ label: "Solicita una demo", href: "#demo" }}
      />

      <Reveal className="px-6 pt-[clamp(56px,7vw,88px)]">
        <BrowserMockup
          src="/screenshots/rr-dashboard.png"
          alt="RiskRail402 — dashboard de análisis, peligros y medidas de control"
          width={2880}
          height={1456}
          wide
          caption="Dashboard de control: análisis por estado, peligros por nivel de riesgo y seguimiento de medidas."
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

      <Reveal>
        <section className="mx-auto max-w-[1240px] px-6 pb-[clamp(80px,9vw,120px)]">
          <div className="rounded-[20px] border border-border bg-surface-deep p-[clamp(40px,5vw,76px)]">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Cumplimiento normativo
            </p>
            <h2 className="mt-[26px] max-w-[30ch] text-[clamp(26px,3vw,40px)] font-bold leading-[1.12] tracking-[-0.035em] text-ink">
              Diseñado alrededor del Reglamento de Ejecución (UE) 402/2013
            </h2>
            <p className="mt-6 max-w-[62ch] text-[17.5px] leading-[1.62] text-muted">
              RiskRail402 no es un gestor documental genérico adaptado al
              sector ferroviario: su flujo de trabajo se construye directamente
              sobre el método común de seguridad para la evaluación y
              valoración de riesgos (CSM-RA) que establece el Reglamento de
              Ejecución (UE) n.º 402/2013. Cada fase, cada rol y cada
              documento generado responde a un requisito concreto del
              reglamento, para que el expediente esté listo para inspección
              en cualquier momento.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <AudienceList
          title="Para quién"
          description="RiskRail402 está pensado para cualquier organización implicada en la evaluación de riesgo de cambios ferroviarios significativos."
          items={audience}
        />
      </Reveal>

      <CTASection
        title="Solicita una demo de RiskRail402"
        subtitle="Cuéntanos sobre tu proceso actual de análisis de riesgo y te mostramos cómo RiskRail402 puede blindarlo de principio a fin."
      >
        <ContactForm product="RiskRail402" />
      </CTASection>
    </>
  );
}
