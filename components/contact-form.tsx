"use client";

import { useState, type FormEvent } from "react";
import { company } from "@/lib/site-config";

export function ContactForm({ product }: { product: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const businessName = String(formData.get("company") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = `Solicitud de demo — ${product}`;
    const body = [
      `Nombre: ${name}`,
      `Email: ${email}`,
      `Empresa: ${businessName}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  const inputClasses =
    "w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-soft";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-border bg-background p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={`mt-1.5 ${inputClasses}`}
            placeholder="Tu nombre"
          />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={`mt-1.5 ${inputClasses}`}
            placeholder="tu@empresa.com"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="company"
            className="text-sm font-medium text-foreground"
          >
            Empresa
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            className={`mt-1.5 ${inputClasses}`}
            placeholder="Nombre de tu empresa"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-foreground"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`mt-1.5 ${inputClasses}`}
            placeholder={`Cuéntanos qué te gustaría ver en la demo de ${product}`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover sm:w-auto"
      >
        Solicita una demo
      </button>

      {sent && (
        <p className="mt-4 text-sm text-muted">
          Se ha abierto tu cliente de correo con los datos rellenados.
          Confirma el envío para que recibamos tu solicitud.
        </p>
      )}
    </form>
  );
}
