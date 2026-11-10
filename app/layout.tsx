import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { company } from "@/lib/site-config";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} — Soluciones de software e IA para el ferrocarril`,
    template: `%s — ${company.name}`,
  },
  description:
    "Desarrollamos software especializado para el sector ferroviario, combinando inteligencia artificial y cumplimiento normativo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
