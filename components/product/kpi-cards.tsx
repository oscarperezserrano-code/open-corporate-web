type Kpi = { label: string; number: string; unit: string };
type SmallKpi = Kpi & { note?: string };

export function KpiCards({
  eyebrow,
  title,
  big,
  small,
}: {
  eyebrow: string;
  title: string;
  big: Kpi & { note: string; minFontSize?: number };
  small: [SmallKpi, SmallKpi];
}) {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-24">
      <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-[#9DB0A4]">
        {eyebrow}
      </p>
      <h2 className="home-reveal mt-4 max-w-3xl text-[clamp(28px,3.6vw,44px)] font-bold tracking-[-0.02em] text-[#ECF3EE]">
        {title}
      </h2>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="home-reveal relative min-h-[340px] overflow-hidden rounded-[28px] border border-[rgba(157,176,164,0.2)] bg-[#09100B] p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#4ADE80] opacity-20 blur-[90px]"
          />
          <div className="relative flex h-full flex-col justify-between">
            <p className="text-base text-[#9DB0A4]">{big.label}</p>
            <div>
              <p
                className="font-light leading-none tracking-[-0.04em] text-[#ECF3EE]"
                style={{ fontSize: `clamp(${big.minFontSize ?? 72}px, 10vw, 140px)` }}
              >
                {big.number}
                <span className="text-[#4ADE80]">{big.unit}</span>
              </p>
              <p className="mt-4 max-w-md text-base text-[#9DB0A4]">
                {big.note}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {small.map((kpi) => (
            <div key={kpi.label} className="home-reveal">
              <div className="rounded-[28px] border border-[rgba(157,176,164,0.2)] bg-[#09100B] p-8">
                <p className="text-base text-[#9DB0A4]">{kpi.label}</p>
                <p
                  className="mt-3 font-light leading-none tracking-[-0.04em] text-[#ECF3EE]"
                  style={{ fontSize: "clamp(56px, 7vw, 96px)" }}
                >
                  {kpi.number}
                  <span className="text-[#4ADE80]">{kpi.unit}</span>
                </p>
                {kpi.note && (
                  <p className="mt-4 text-sm text-[#9DB0A4]">{kpi.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
