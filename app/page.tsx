import type { Metadata } from "next";
import { interTight } from "@/lib/fonts";
import { HeroHome } from "@/components/home/hero-home";
import { ThreeIdeas } from "@/components/home/three-ideas";
import { BusinessLines } from "@/components/home/business-lines";
import { WhatWeDo } from "@/components/home/what-we-do";
import { Method } from "@/components/home/method";
import { ContactCta } from "@/components/home/contact-cta";

export const metadata: Metadata = {
  title: { absolute: "OPENvarez — Productos SaaS con IA para sectores regulados" },
  description:
    "Plataformas SaaS con IA para el análisis de licitaciones públicas de la construcción y la digitalización del ferrocarril.",
};

export default function Home() {
  return (
    <div className={`${interTight.className} bg-[#030604] text-[#ECF3EE]`}>
      <HeroHome />
      <ThreeIdeas />
      <BusinessLines />
      <WhatWeDo />
      <Method />
      <ContactCta />
    </div>
  );
}
