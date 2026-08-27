import type { Metadata } from "next";
import { Workflow, Sparkles, FileSignature } from "lucide-react";
import { TrainFront, Building2, ShieldCheck, ClipboardCheck } from "lucide-react";
import { Hero } from "@/components/hero";
import { FeatureCard } from "@/components/feature-card";
import { CTASection } from "@/components/cta-section";
import { ContactForm } from "@/components/contact-form";
import { BrowserMockup } from "@/components/browser-mockup";

export const metadata: Metadata = {
  title: "RiskRail402 — Análisis de riesgo ferroviario conforme al CSM-RA",
  description:
    "RiskRail402 digitaliza el análisis de riesgo ferroviario conforme al Reglamento de Ejecución (UE) 402/2013, con IA, trazabilidad y firma electrónica.",
};

const features = [
  {
    icon: Workflow,
    title: "Proceso guiado en 7 fases, sin Excel ni Word",
    description:
      "Sustituimos las hojas de cálculo y documentos sueltos por un flujo digital que guía paso a paso el análisis de riesgo conforme al Reglamento de Ejecución (UE) 402/2013, desde la evaluación preliminar hasta la declaración final de conformidad. Ningún paso queda sin documentar, y el estado del expediente es visible en tiempo real para todo el equipo.",
  },
  {
    icon: Sparkles,
    title: "IA que redacta el primer borrador del análisis",
    description:
      "A partir de un título y una breve descripción del cambio, el asistente genera automáticamente el borrador técnico completo (objetivo del sistema, peligros identificados, evaluación de riesgo y medidas de control), listo para que el equipo experto lo revise y valide. Lo que antes llevaba horas de redacción, ahora se plantea en segundos.",
  },
  {
    icon: FileSignature,
    title: "Trazabilidad y firma electrónica de principio a fin",
    description:
      "Cada expediente queda blindado de principio a fin: quién hizo qué, cuándo y con qué justificación, con firma electrónica de proponente, expertos e instructor integrada en el propio flujo. El informe de auditoría se genera solo, listo para inspección regulatoria en cualquier momento.",
  },
];

const audience = [
  { icon: TrainFront, label: "Operadores ferroviarios" },
  { icon: Building2, label: "Administradores de infraestructura" },
  { icon: ShieldCheck, label: "Gestores de seguridad" },
  { icon: ClipboardCheck, label: "Entidades evaluadoras" },
];

export default function RiskRail402Page() {
  return (
    <>
      <Hero
        eyebrow="Ferroviario · Gestión de riesgos"
        title="El análisis de riesgo ferroviario merece algo mejor que Excel y Word"
        subtitle="Hoy, el análisis de riesgo ante cambios ferroviarios según el Reglamento (UE) 402/2013 se gestiona con hojas de cálculo y documentos sueltos, sin trazabilidad ni control de versiones. RiskRail402 es la plataforma digital guiada que blinda todo el proceso, de principio a fin."
        primaryCta={{ label: "Solicita una demo", href: "#demo" }}
        visual={<BrowserMockup url="app.riskrail402.com/expediente" />}
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
          <div className="max-w-3xl rounded-2xl border border-accent/20 bg-accent-soft p-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Cumplimiento normativo
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Diseñado alrededor del Reglamento de Ejecución (UE) 402/2013
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
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
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Para quién
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
          RiskRail402 está pensado para cualquier organización implicada en
          la evaluación de riesgo de cambios ferroviarios significativos.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audience.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-xl border border-border bg-surface p-6"
            >
              <item.icon size={22} className="text-accent" strokeWidth={2} />
              <span className="text-base font-medium text-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Solicita una demo de RiskRail402"
        subtitle="Cuéntanos sobre tu proceso actual de análisis de riesgo y te mostramos cómo RiskRail402 puede blindarlo de principio a fin."
      >
        <ContactForm product="RiskRail402" />
      </CTASection>
    </>
  );
}
