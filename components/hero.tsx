import Link from "next/link";
import { MeshArt } from "@/components/mesh-art";

type HeroCta = {
  label: string;
  href: string;
};

export function Hero({
  breadcrumb,
  eyebrow,
  title,
  subtitle,
  problemSolution,
  primaryCta,
  secondaryCta,
  showMesh,
}: {
  breadcrumb?: HeroCta;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  problemSolution?: { problem: string; solution: string };
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  showMesh?: boolean;
}) {
  const isProduct = Boolean(problemSolution);

  return (
    <section
      className={`relative overflow-hidden ${
        showMesh ? "border-b border-border-subtle" : ""
      }`}
    >
      {showMesh && (
        <>
          <MeshArt
            style={{
              top: "-8%",
              right: "-14%",
              width: "min(1180px,105%)",
              opacity: 0.85,
              filter: "saturate(1.15)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 90% at 12% 40%, #060B09 42%, rgba(6,11,9,0.55) 68%, rgba(6,11,9,0) 100%)",
            }}
          />
        </>
      )}

      <div
        className={`relative mx-auto max-w-[1240px] px-6 ${
          isProduct
            ? "pt-[clamp(72px,8vw,104px)] pb-0"
            : "pt-[clamp(96px,12vw,170px)] pb-[clamp(80px,9vw,120px)]"
        }`}
      >
        {breadcrumb && (
          <Link
            href={breadcrumb.href}
            className="mb-11 inline-block font-mono text-[11px] uppercase tracking-[0.14em] text-dim transition-colors hover:text-accent"
          >
            {breadcrumb.label}
          </Link>
        )}

        {eyebrow && (
          <p className="font-mono text-[11.5px] uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </p>
        )}

        <h1
          className={
            isProduct
              ? "mt-[30px] max-w-4xl text-[clamp(44px,7vw,98px)] font-bold leading-[0.96] tracking-[-0.045em] text-ink"
              : "mt-[34px] max-w-[19ch] text-[clamp(40px,6.4vw,86px)] font-bold leading-[1] tracking-[-0.04em] text-ink"
          }
        >
          {title}
        </h1>

        {subtitle && (
          <p className="mt-[34px] max-w-[58ch] text-xl leading-[1.55] text-body">
            {subtitle}
          </p>
        )}

        {problemSolution && (
          <div className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-x-12 gap-y-8 border-t border-border pt-11">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                El problema
              </p>
              <p className="mt-[18px] text-[21px] leading-[1.5] tracking-[-0.01em] text-muted">
                {problemSolution.problem}
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                La solución
              </p>
              <p className="mt-[18px] text-[21px] font-medium leading-[1.5] tracking-[-0.01em] text-ink">
                {problemSolution.solution}
              </p>
            </div>
          </div>
        )}

        {(primaryCta || secondaryCta) && (
          <div className="mt-[46px] flex flex-wrap items-center gap-3">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-[10px] bg-accent px-7 py-[15px] text-[15.5px] font-bold text-accent-ink transition-colors hover:bg-accent-hover"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-[10px] border border-border-strong bg-surface/60 px-7 py-[15px] text-[15.5px] font-semibold text-ink-strong transition-colors hover:border-accent hover:text-accent"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
