export function ContactCta() {
  return (
    <section
      id="contacto"
      className="bg-gradient-to-b from-transparent to-[#4ADE80]/10 px-6 py-28"
    >
      <div className="mx-auto flex max-w-[1240px] flex-col items-center text-center">
        <h2 className="home-reveal max-w-3xl text-[clamp(32px,4.6vw,56px)] font-bold tracking-[-0.02em] text-[#ECF3EE]">
          ¿Quieres ver nuestros productos en acción?
        </h2>
        <a
          href="mailto:info@openvarez.com"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#ECF3EE] px-8 py-4 text-base font-semibold text-[#030604] transition-colors hover:bg-[#4ADE80]"
        >
          info@openvarez.com →
        </a>
      </div>
    </section>
  );
}
