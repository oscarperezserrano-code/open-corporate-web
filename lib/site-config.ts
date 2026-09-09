export const company = {
  name: "OPENvarez",
  legalName: "OPENvarez TechLab S.L.",
  taxId: "B00000000 (CIF a completar)",
  address: "Calle Ejemplo 123, 28001 Madrid, España",
  email: "info@openvarez.example",
};

export type Product = {
  slug: string;
  name: string;
  sector: string;
  tagline: string;
  href: string;
  image: string;
};

export const products: Product[] = [
  {
    slug: "open2licita",
    name: "Open2Licita",
    sector: "Construcción y licitaciones públicas",
    tagline:
      "Agrega, analiza y te alerta sobre licitaciones de construcción en toda España, automáticamente.",
    href: "/open2licita",
    image: "/screenshots/o2l-panel.png",
  },
  {
    slug: "riskrail402",
    name: "RiskRail402",
    sector: "Ferroviario y gestión de riesgos",
    tagline:
      "Digitaliza el análisis de riesgos ferroviario conforme al Reglamento (UE) 402/2013, sin procesos manuales, proporcionando trazabilidad de medidas y responsabilidades.",
    href: "/riskrail402",
    image: "/screenshots/rr-dashboard.png",
  },
];

export const nav = [
  { label: "Inicio", href: "/" },
  { label: "Open2Licita", href: "/open2licita" },
  { label: "RiskRail402", href: "/riskrail402" },
];
