import type { Metadata } from "next";
import { interTight } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad de OPENVAREZ TECHLAB, S.L.: qué datos tratamos, para qué y cómo ejercer tus derechos.",
};

const h2 = "mt-12 text-2xl font-semibold tracking-[-0.01em] text-[#ECF3EE]";
const p = "mt-4 text-base leading-relaxed text-[#9DB0A4]";

export default function PrivacidadPage() {
  return (
    <div className={`${interTight.className} bg-[#030604] text-[#ECF3EE]`}>
      <article className="mx-auto max-w-[68ch] px-6 py-24">
        <h1 className="text-[clamp(36px,5vw,56px)] font-bold leading-[1.05] tracking-[-0.03em] text-[#ECF3EE]">
          Política de privacidad
        </h1>

        <h2 className={h2}>1. Responsable del tratamiento</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-[#9DB0A4]">
          <li>Responsable: OPENVAREZ TECHLAB, S.L.</li>
          <li>NIF: B05784590</li>
          <li>Domicilio: Paseo de la Castellana, 194, Piso 0, Puerta B, 28046 Madrid</li>
          <li>Correo electrónico: info@openvarez.com</li>
        </ul>

        <h2 className={h2}>2. Qué datos tratamos y para qué</h2>
        <p className={p}>
          Cuando nos escribes desde el formulario de contacto o solicitas una
          demo, tu programa de correo se abre con un mensaje dirigido a
          info@openvarez.com y los datos que incluyas en él (nombre, correo
          electrónico, empresa y mensaje) nos llegan por correo electrónico
          cuando lo envías. Los usamos con la única finalidad de atender tu
          consulta o solicitud y, en su caso, contactar contigo para ofrecerte
          la información o la demo que has pedido. Esta web no guarda esos
          datos en ningún servidor propio.
        </p>

        <h2 className={h2}>3. Base jurídica</h2>
        <p className={p}>
          La base que nos legitima es tu consentimiento, que otorgas al enviar
          el formulario (art. 6.1.a del Reglamento (UE) 2016/679, RGPD).
        </p>

        <h2 className={h2}>4. Conservación</h2>
        <p className={p}>
          Conservaremos tus datos durante el tiempo necesario para atender tu
          solicitud y, después, durante los plazos de prescripción de las
          posibles responsabilidades legales. Pasado ese tiempo se eliminarán o
          se bloquearán según la ley.
        </p>

        <h2 className={h2}>5. Destinatarios</h2>
        <p className={p}>
          No cedemos tus datos a terceros, salvo obligación legal. Utilizamos
          un proveedor de correo electrónico que presta servicios técnicos por
          nuestra cuenta: Microsoft 365.
        </p>

        <h2 className={h2}>6. Tus derechos</h2>
        <p className={p}>
          Puedes ejercer tus derechos de acceso, rectificación, supresión,
          oposición, limitación del tratamiento y portabilidad escribiendo a
          info@openvarez.com, indicando el derecho que quieres ejercer. Si
          consideras que no hemos tratado tus datos correctamente, puedes
          presentar una reclamación ante la Agencia Española de Protección de
          Datos (www.aepd.es).
        </p>

        <h2 className={h2}>7. Cookies</h2>
        <p className={p}>
          Este sitio web no utiliza cookies ni herramientas de analítica o
          seguimiento.
        </p>

        <h2 className={h2}>8. Cambios</h2>
        <p className={p}>
          Podemos actualizar esta política para adaptarla a cambios legales o
          del sitio. La versión vigente es siempre la publicada en esta página.
        </p>
      </article>
    </div>
  );
}
