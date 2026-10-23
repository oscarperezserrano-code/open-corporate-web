export function FeatureCards({
  id,
  eyebrow,
  title,
  features,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  features: { number: string; title: string; text: string }[];
}) {
  return (
    <section id={id} className="mx-auto max-w-[1240px] px-6 py-24">
      <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-[#9DB0A4]">
        {eyebrow}
      </p>
      <h2 className="home-reveal mt-4 max-w-3xl text-[clamp(28px,3.6vw,44px)] font-bold tracking-[-0.02em] text-[#ECF3EE]">
        {title}
      </h2>

      <div className="mt-14 flex flex-wrap gap-6">
        {features.map((feature) => (
          <div key={feature.number} className="home-reveal min-w-[280px] flex-1">
            <div className="home-card-hover h-full rounded-2xl border border-[rgba(157,176,164,0.2)] bg-[#09100B] p-8">
              <p className="font-mono text-sm text-[#4ADE80]">
                {feature.number}
              </p>
              <h3 className="mt-5 text-[26px] font-bold leading-tight text-[#ECF3EE]">
                {feature.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#9DB0A4]">
                {feature.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
