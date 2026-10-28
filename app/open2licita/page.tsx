import type { Metadata } from "next";
import { ScrollHero } from "@/components/product/scroll-hero";
import { FeatureCards } from "@/components/product/feature-cards";
import { KpiCards } from "@/components/product/kpi-cards";
import { ProcessPath } from "@/components/product/process-path";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Open2Licita — Licitaciones de construcción con IA",
  description:
    "Open2Licita agrega, analiza y te alerta automáticamente sobre licitaciones públicas de construcción, combinando open data e inteligencia artificial.",
};

const features = [
  {
    number: "01",
    title: "Cobertura integral vía Open Data",
    text: "Agregamos automáticamente datos públicos de contratación de múltiples fuentes de open data, con actualización continua. Sin huecos, sin depender de revisiones manuales de boletines.",
  },
  {
    number: "02",
    title: "IA para analizar licitaciones y adjudicaciones",
    text: "Nuestros modelos de IA procesan cada expediente para extraer y estructurar la información clave (importes, plazos, adjudicatarios, criterios de valoración) y detectan patrones en el histórico de adjudicaciones.",
  },
  {
    number: "03",
    title: "Alertas e informes automáticos",
    text: "El sistema identifica oportunidades relevantes para cada usuario y genera alertas e informes periódicos sin intervención manual.",
  },
];

const steps = [
  {
    label: "Paso 1",
    title: "Agrega",
    text: "Reunimos los datos públicos de contratación de múltiples fuentes de open data, con actualización continua.",
  },
  {
    label: "Paso 2",
    title: "Analiza",
    text: "La IA extrae y estructura importes, plazos, adjudicatarios y criterios de valoración de cada expediente.",
  },
  {
    label: "Paso 3",
    title: "Alerta",
    text: "Cada usuario recibe las oportunidades relevantes y los informes periódicos, sin intervención manual.",
  },
];

const audience = [
  "Constructoras",
  "Ingenierías",
  "Asociaciones",
  "Estudios",
  "Consultoras",
];

function CircuitDecoration() {
  const lines = [
    "M700 120 H1000 V260 H1250",
    "M700 220 H900 V380 H1250",
    "M700 320 H1100 V500 H1250",
    "M700 420 H860 V600 H1250",
  ];
  const dots: [number, number][] = [
    [1250, 260],
    [1250, 380],
    [1250, 500],
    [1250, 600],
  ];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1400 900"
      preserveAspectRatio="xMaxYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
    >
      <style>{`
        @keyframes o2l-dash { to { stroke-dashoffset: -60; } }
        .o2l-dash-line { animation: o2l-dash 3s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .o2l-dash-line { animation: none; }
        }
      `}</style>
      {lines.map((d) => (
        <path key={d} d={d} stroke="#4ADE80" strokeOpacity={0.35} strokeWidth={1} fill="none" />
      ))}
      {[lines[0], lines[2]].map((d, i) => (
        <path
          key={`w-${i}`}
          d={d}
          stroke="#ECF3EE"
          strokeWidth={1.5}
          fill="none"
          strokeDasharray="6 14"
          className="o2l-dash-line"
        />
      ))}
      {dots.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={4} fill="#4ADE80" />
      ))}
    </svg>
  );
}

export default function Open2LicitaPage() {
  return (
    <>
      <ScrollHero
        eyebrow="Construcción · Licitaciones públicas"
        title="Open2Licita."
        titleAccent="Todas las licitaciones, analizadas."
        paragraph="Unifica la información de todos los organismos licitadores de construcción y te entrega los datos relevantes en cada fase del proceso. Con su asistente de IA propio, consultas cualquier indicador en el formato que quieras y recibes una propuesta de oferta basada en el histórico y en la situación actual de tu competencia."
        primaryCta={{ label: "Solicita una demo", href: "#demo" }}
        secondaryCta={{ label: "Ver cómo funciona →", href: "#proceso" }}
        frameTitle="Open2Licita · Licitaciones"
        src="/open2licita-licitaciones.png"
        alt="Open2Licita: listado de licitaciones activas con presupuesto, organismo y fin de plazo"
        imageWidth={2880}
        imageHeight={1800}
        bgDecoration={<CircuitDecoration />}
      />

      <FeatureCards
        id="funciones"
        eyebrow="Funciones"
        title="Del boletín disperso a la oportunidad concreta."
        features={features}
      />

      <KpiCards
        eyebrow="Resultados"
        title="Más oportunidades vistas, menos horas buscando."
        big={{
          label: "Tiempo de búsqueda y revisión de licitaciones",
          number: "[XX]",
          unit: "%",
          note: "menos con la agregación y el análisis automáticos. [Dato provisional]",
        }}
        small={[
          { label: "Fuentes de open data agregadas", number: "[XX]", unit: " fuentes" },
          { label: "Expedientes analizados", number: "[X.XXX]", unit: "+" },
        ]}
      />

      <ProcessPath
        id="proceso"
        eyebrow="Cómo funciona"
        title="Agrega. Analiza. Alerta."
        steps={steps}
      />

      <section id="para-quien" className="mx-auto max-w-[1240px] px-6 py-24">
        <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-[#9DB0A4]">
          Para quién
        </p>
        <h2 className="home-reveal mt-4 max-w-3xl text-[clamp(28px,3.6vw,44px)] font-bold tracking-[-0.02em] text-[#ECF3EE]">
          Pensado para quien vive de las licitaciones.
        </h2>
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
            Veamos Open2Licita en acción.
          </h2>
          <div className="home-reveal">
            <ContactForm product="Open2Licita" />
          </div>
        </div>
      </section>
    </>
  );
}
