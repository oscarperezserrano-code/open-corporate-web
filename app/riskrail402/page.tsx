import type { Metadata } from "next";
import { ScrollHero } from "@/components/product/scroll-hero";
import { FeatureCards } from "@/components/product/feature-cards";
import { KpiCards } from "@/components/product/kpi-cards";
import { ProcessPath } from "@/components/product/process-path";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "RiskRail402 — Análisis de riesgo ferroviario conforme al CSM-RA",
  description:
    "RiskRail402 digitaliza el análisis de riesgo ferroviario conforme al Reglamento de Ejecución (UE) 402/2013, con IA, trazabilidad y firma electrónica.",
};

const features = [
  {
    number: "01",
    title: "Proceso guiado en 7 fases",
    text: "Flujo digital que guía paso a paso el análisis de riesgo conforme al Reglamento de Ejecución (UE) 402/2013, desde la evaluación preliminar hasta la declaración final de conformidad.",
  },
  {
    number: "02",
    title: "IA que redacta el primer borrador",
    text: "A partir de un título y una breve descripción del cambio, el asistente genera el borrador técnico completo, listo para que el equipo experto lo revise y valide.",
  },
  {
    number: "03",
    title: "Trazabilidad y firma electrónica",
    text: "Cada expediente queda registrado: quién hizo qué, cuándo y con qué justificación, con firma electrónica integrada. El informe de auditoría se genera automáticamente.",
  },
];

const steps = [
  { label: "Fase 1", title: "Evaluación inicial", text: "Se decide si el cambio afecta a la seguridad y si es significativo, según los criterios del reglamento." },
  { label: "Fase 2", title: "Definición del sistema", text: "Se describe qué cambia, sus límites, interfaces, entorno, medidas existentes e hipótesis de partida." },
  { label: "Fase 3", title: "Registro de peligros", text: "Se identifican y registran los peligros que puede introducir el cambio, con su causa y su responsable." },
  { label: "Fase 4", title: "Evaluación del riesgo", text: "Cada peligro se evalúa con un principio de aceptación y se determina si su riesgo es aceptable." },
  { label: "Fase 5", title: "Medidas de control", text: "Se definen las medidas para los riesgos no aceptables y se evalúa el riesgo residual." },
  { label: "Fase 6", title: "Evaluación independiente", text: "En cambios significativos, se registra la evaluación del organismo de evaluación independiente y sus conclusiones." },
  { label: "Fase 7", title: "Declaración", text: "El proponente, los expertos y el instructor firman la declaración de seguridad y se cierra el expediente." },
];

const audience = [
  "Operadores ferroviarios",
  "Administradores de infraestructura (públicos y privados)",
  "Entidades encargadas del mantenimiento",
  "Propietarios de material rodante",
];

function RailDecoration() {
  const endpoints: [number, number][] = [
    [120, 900],
    [330, 900],
    [560, 900],
    [840, 900],
    [1070, 900],
    [1280, 900],
  ];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1400 900"
      preserveAspectRatio="xMidYMax slice"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-45"
    >
      <style>{`
        @keyframes rr-pulse {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 1; }
        }
        .rr-pulse-dot { animation: rr-pulse 4s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .rr-pulse-dot { animation: none; opacity: 1; }
        }
      `}</style>
      {endpoints.map(([x, y]) => (
        <line
          key={`${x}-${y}`}
          x1={700}
          y1={300}
          x2={x}
          y2={y}
          stroke="#4ADE80"
          strokeOpacity={0.5}
          strokeWidth={1.3}
        />
      ))}
      <circle cx={700} cy={300} r={5} fill="#4ADE80" className="rr-pulse-dot" />
    </svg>
  );
}

export default function RiskRail402Page() {
  return (
    <>
      <ScrollHero
        eyebrow="RISKRAIL402 · FERROVIARIO"
        title=""
        titleAccent="La seguridad en el ferrocarril empieza con el análisis de riesgos."
        paragraph="Plataforma SaaS con IA que guía el análisis conforme al Reglamento (UE) 402/2013, propone riesgos y medidas a partir de datos históricos y deja trazabilidad completa."
        primaryCta={{ label: "Solicita una demo", href: "#demo" }}
        secondaryCta={{ label: "Ver el proceso →", href: "#proceso" }}
        frameTitle="RiskRail402 · Expediente"
        screens={[
          {
            src: "/riskrail402/riskrail402-pantalla-1-analisis.png",
            alt: "RiskRail402: listado de análisis con estado, progreso por fases y peligros controlados",
            width: 2880,
            height: 1558,
          },
          {
            src: "/riskrail402/riskrail402-pantalla-2-fase.png",
            alt: "RiskRail402: formulario de la fase 1, Evaluación inicial, con el estepero de las 7 fases",
            width: 2880,
            height: 1558,
          },
          {
            src: "/riskrail402/riskrail402-pantalla-3-dashboard.png",
            alt: "RiskRail402: dashboard con análisis por estado, estado de peligros, peligros por nivel de riesgo y medidas de control",
            width: 2880,
            height: 1558,
          },
        ]}
        bgDecoration={<RailDecoration />}
      />

      <FeatureCards
        id="funciones"
        eyebrow="Funciones"
        title="Del borrador a la firma, en un solo flujo."
        features={features}
      />

      <KpiCards
        eyebrow="Resultados"
        title="Lo que cambia al dejar las hojas de cálculo."
        big={{
          label: "Normativa de referencia",
          number: "402/2013",
          unit: "",
          note: "Reglamento de Ejecución (UE) 402/2013.",
          minFontSize: 56,
        }}
        small={[
          { label: "Fases del proceso guiado", number: "7", unit: " fases" },
          { label: "Roles de firma", number: "3", unit: " roles", note: "Proponente, expertos e instructor firman cada declaración." },
        ]}
      />

      <ProcessPath
        id="proceso"
        eyebrow="El proceso"
        title="Siete fases. Ninguna sin documentar."
        steps={steps}
      />

      <section id="normativa" className="mx-auto max-w-[1240px] px-6 py-24">
        <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-[#9DB0A4]">
          Cumplimiento normativo
        </p>
        <h2 className="home-reveal mt-4 max-w-3xl text-[clamp(28px,3.6vw,44px)] font-bold tracking-[-0.02em] text-[#ECF3EE]">
          Construido sobre el Reglamento (UE) 402/2013.
        </h2>
        <p className="home-reveal mt-6 max-w-[62ch] text-lg leading-relaxed text-[#9DB0A4]">
          El flujo de RiskRail402 sigue el método común de seguridad para la
          evaluación y valoración del riesgo establecido en el Reglamento de
          Ejecución (UE) 402/2013, de modo que cada fase queda documentada y
          lista para inspección.
        </p>
        <div className="home-reveal mt-10 flex flex-wrap gap-3">
          {audience.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#4ADE80] px-5 py-2.5 text-sm font-medium text-[#ECF3EE]"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section
        id="demo"
        className="bg-gradient-to-b from-transparent to-[#4ADE80]/10 px-6 py-24"
      >
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-2">
          <h2 className="home-reveal text-[clamp(32px,4.2vw,52px)] font-bold leading-[1.06] tracking-[-0.02em] text-[#ECF3EE]">
            Veamos RiskRail402 en acción.
          </h2>
          <div className="home-reveal">
            <ContactForm product="RiskRail402" />
          </div>
        </div>
      </section>
    </>
  );
}
