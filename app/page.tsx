import type { Metadata } from "next";
import { interTight } from "@/lib/fonts";
import { HeroHome } from "@/components/home/hero-home";
import { ThreeIdeas } from "@/components/home/three-ideas";
import { BusinessLines } from "@/components/home/business-lines";
import { WhatWeDo } from "@/components/home/what-we-do";
import { Method } from "@/components/home/method";
import { ContactCta } from "@/components/home/contact-cta";

export const metadata: Metadata = {
  title: { absolute: "OPENvarez — Software e IA para sectores regulados" },
  description:
    "Ingeniería de software e inteligencia artificial aplicada a licitaciones públicas de la construcción y a la digitalización del ferrocarril.",
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
