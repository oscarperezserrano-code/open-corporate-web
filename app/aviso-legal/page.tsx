import type { Metadata } from "next";
import { interTight } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Aviso legal del sitio web openvarez.com, titularidad de OPENVAREZ TECHLAB, S.L.",
};

const h2 = "mt-12 text-2xl font-semibold tracking-[-0.01em] text-[#ECF3EE]";
const p = "mt-4 text-base leading-relaxed text-[#9DB0A4]";

export default function AvisoLegalPage() {
  return (
    <div className={`${interTight.className} bg-[#030604] text-[#ECF3EE]`}>
      <article className="mx-auto max-w-[68ch] px-6 py-24">
        <h1 className="text-[clamp(36px,5vw,56px)] font-bold leading-[1.05] tracking-[-0.03em] text-[#ECF3EE]">
          Aviso legal
        </h1>

        <h2 className={h2}>1. Titular del sitio web</h2>
        <p className={p}>
          En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la
          Información y de Comercio Electrónico (LSSI-CE), se informa de que
          este sitio web, openvarez.com, es titularidad de:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-[#9DB0A4]">
          <li>Denominación social: OPENVAREZ TECHLAB, S.L.</li>
          <li>NIF: B05784590</li>
          <li>Domicilio social: Paseo de la Castellana, 194, Piso 0, Puerta B, 28046 Madrid</li>
          <li>
            Inscrita en el Registro Mercantil de Madrid, hoja M-898335,
            inscripción 1ª
          </li>
          <li>Correo electrónico de contacto: info@openvarez.com</li>
        </ul>

        <h2 className={h2}>2. Objeto</h2>
        <p className={p}>
          Este sitio web ofrece información sobre los servicios y productos de
          OPENVAREZ TECHLAB, S.L., en particular la plataforma RiskRail402.
        </p>

        <h2 className={h2}>3. Condiciones de uso</h2>
        <p className={p}>
          El acceso al sitio web es gratuito y atribuye la condición de
          usuario. El usuario se compromete a hacer un uso adecuado del sitio y
          de sus contenidos, conforme a la ley, la buena fe y el orden público,
          y a no emplearlo para actividades ilícitas o que puedan dañar a
          terceros o al funcionamiento del sitio.
        </p>

        <h2 className={h2}>4. Propiedad intelectual e industrial</h2>
        <p className={p}>
          Los contenidos del sitio web (textos, imágenes, logotipos, diseño,
          código y demás elementos) y las marcas y nombres comerciales son
          titularidad de OPENVAREZ TECHLAB, S.L. o de sus licenciantes. No está
          permitida su reproducción, distribución o transformación sin
          autorización expresa.
        </p>

        <h2 className={h2}>5. Responsabilidad</h2>
        <p className={p}>
          OPENVAREZ TECHLAB, S.L. procura que la información del sitio sea
          correcta y esté actualizada, pero no garantiza la ausencia de errores
          ni la disponibilidad continua del sitio, y no se hace responsable de
          los daños derivados de su uso, salvo en los casos exigidos por la
          ley. El sitio puede incluir enlaces a páginas de terceros, sobre cuyo
          contenido no tiene control ni responsabilidad.
        </p>

        <h2 className={h2}>6. Legislación aplicable y jurisdicción</h2>
        <p className={p}>
          Este aviso se rige por la legislación española. Para cualquier
          controversia, las partes se someterán a los juzgados y tribunales que
          correspondan conforme a la ley.
        </p>
      </article>
    </div>
  );
}
