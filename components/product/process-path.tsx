export function ProcessPath({
  id,
  eyebrow,
  title,
  steps,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  steps: { label: string; title: string; text: string }[];
}) {
  return (
    <section id={id} className="mx-auto max-w-[1240px] px-6 py-24">
      <style>{`
        @supports (animation-timeline: view()) {
          @media (prefers-reduced-motion: no-preference) {
            .pp-line-fill {
              animation: pp-line-fill-in linear both;
              animation-timeline: view();
              animation-range: entry 30% cover 70%;
            }
          }
        }
        @keyframes pp-line-fill-in {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
      `}</style>

      <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-[#9DB0A4]">
        {eyebrow}
      </p>
      <h2 className="home-reveal mt-4 max-w-3xl text-[clamp(28px,3.6vw,44px)] font-bold tracking-[-0.02em] text-[#ECF3EE]">
        {title}
      </h2>

      <div className="relative mt-14">
        <div className="absolute bottom-4 left-[15px] top-4 w-[2px] bg-[rgba(157,176,164,0.18)]" />
        <div className="pp-line-fill absolute bottom-4 left-[15px] top-4 w-[2px] origin-top bg-gradient-to-b from-[#4ADE80] to-[#22C55E] shadow-[0_0_12px_rgba(74,222,128,0.6)]" />

        <div className="flex flex-col gap-10">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <div key={step.label} className="home-reveal relative flex gap-6">
                <span
                  aria-hidden="true"
                  className="relative z-10 mt-1 h-8 w-8 shrink-0 rounded-full bg-[#4ADE80]"
                  style={{
                    boxShadow: isLast
                      ? "0 0 0 6px #030604, 0 0 18px 4px rgba(74,222,128,0.85)"
                      : "0 0 0 6px #030604",
                  }}
                />
                <div
                  className={`flex-1 rounded-2xl border bg-[#09100B] p-8 ${
                    isLast
                      ? "border-[rgba(74,222,128,0.45)]"
                      : "border-[rgba(157,176,164,0.2)]"
                  }`}
                >
                  <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-[#4ADE80]">
                    {step.label}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-[#ECF3EE]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-[#9DB0A4]">
                    {step.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
