import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

type Cta = { label: string; href: string };

export function ScrollHero({
  eyebrow,
  title,
  titleAccent,
  paragraph,
  primaryCta,
  secondaryCta,
  frameTitle,
  src,
  bgDecoration,
  children,
}: {
  eyebrow: string;
  title: string;
  titleAccent: string;
  paragraph: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  frameTitle: string;
  src?: string;
  bgDecoration?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="ph-heroscroll relative">
      <style>{`
        .ph-heroscroll {
          height: 2100px;
        }
        .ph-stage {
          position: sticky;
          top: 0;
          height: 900px;
          overflow: hidden;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }
        .ph-hl {
          position: absolute;
          top: 96px;
          left: 50%;
          width: min(760px, 92%);
          text-align: center;
          z-index: 2;
          transform: translateX(-50%);
        }
        .ph-fr {
          position: absolute;
          top: 640px;
          left: 50%;
          width: min(1100px, 92%);
          z-index: 1;
          transform: translateX(-50%);
          transform-origin: 50% 0;
        }

        @supports (animation-timeline: view()) {
          @media (prefers-reduced-motion: no-preference) and (min-width: 768px) {
            .ph-heroscroll { view-timeline: --hero block; }
            .ph-hl {
              animation: ph-hl-anim linear both;
              animation-timeline: --hero;
              animation-range: cover 26% cover 44%;
            }
            .ph-fr {
              animation: ph-fr-anim linear both;
              animation-timeline: --hero;
              animation-range: cover 26% cover 62%;
            }
          }
        }
        @keyframes ph-hl-anim {
          from { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
          to { opacity: 0; transform: translateX(-50%) translateY(-80px) scale(0.96); }
        }
        @keyframes ph-fr-anim {
          from { transform: translateX(-50%) translateY(0) scale(0.8); }
          to { transform: translateX(-50%) translateY(-470px) scale(1.12); }
        }

        @media (prefers-reduced-motion: reduce), (max-width: 767px) {
          .ph-heroscroll { height: auto; }
          .ph-stage {
            position: static;
            height: auto;
            flex-direction: column;
            gap: 56px;
            padding: 140px 0 64px;
          }
          .ph-hl, .ph-fr {
            position: static;
            transform: none !important;
            opacity: 1 !important;
            width: min(760px, 92%);
            margin: 0 auto;
          }
          .ph-fr { width: min(1100px, 92%); }
        }
        @supports not (animation-timeline: view()) {
          .ph-heroscroll { height: auto; }
          .ph-stage {
            position: static;
            height: auto;
            flex-direction: column;
            gap: 56px;
            padding: 140px 0 64px;
          }
          .ph-hl, .ph-fr {
            position: static;
            transform: none !important;
            opacity: 1 !important;
            width: min(760px, 92%);
            margin: 0 auto;
          }
          .ph-fr { width: min(1100px, 92%); }
        }
      `}</style>

      <div className="ph-stage">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 85% 10%, rgba(74,222,128,0.16), transparent 70%), radial-gradient(55% 45% at 5% 20%, rgba(74,222,128,0.12), transparent 70%)",
          }}
        />
        {bgDecoration}

        <div className="ph-hl">
          <span className="inline-flex items-center rounded-full border border-[#4ADE80] bg-black/20 px-4 py-2 font-mono text-[13px] uppercase tracking-[0.12em] text-[#ECF3EE]">
            {eyebrow}
          </span>
          <h1 className="mt-8 text-[clamp(40px,6vw,84px)] font-bold leading-[0.96] tracking-[-0.03em] text-[#ECF3EE]">
            {title}{" "}
            <span className="bg-gradient-to-r from-[#4ADE80] to-[#BBF7D0] bg-clip-text text-transparent">
              {titleAccent}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#9DB0A4]">
            {paragraph}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <Link
              href={primaryCta.href}
              className="rounded-full bg-[#ECF3EE] px-7 py-3.5 text-sm font-semibold text-[#030604] transition-colors hover:bg-[#4ADE80]"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="text-sm font-semibold text-[#ECF3EE] transition-colors hover:text-[#4ADE80]"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="ph-fr">
          <div className="overflow-hidden rounded-[20px] border border-[rgba(157,176,164,0.25)] bg-[#09100B] shadow-[0_40px_120px_-30px_rgba(34,197,94,0.35)]">
            <div className="flex h-[42px] items-center gap-2 border-b border-[rgba(157,176,164,0.2)] bg-black/30 px-4">
              <span className="h-2.5 w-2.5 rounded-full bg-[rgba(157,176,164,0.3)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[rgba(157,176,164,0.3)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[rgba(157,176,164,0.3)]" />
              <span className="ml-2 font-mono text-[11px] text-[#9DB0A4]">
                {frameTitle}
              </span>
            </div>
            {src ? (
              <div className="relative aspect-[16/9] w-full">
                <Image src={src} alt={frameTitle} fill className="object-cover" />
              </div>
            ) : (
              <div className="min-h-[460px] p-8">{children}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
