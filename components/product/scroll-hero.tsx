"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Cta = { label: string; href: string };
type Screen = { src: string; alt: string; width?: number; height?: number };

function ScreenCarousel({
  screens,
  label,
  defaultWidth,
  defaultHeight,
}: {
  screens: Screen[];
  label: string;
  defaultWidth: number;
  defaultHeight: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const last = screens.length - 1;

  function go(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const target = Math.max(0, Math.min(last, index));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({
      left: target * track.clientWidth,
      behavior: reduced ? "auto" : "smooth",
    });
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  }

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(active - 1);
    }
  }

  const arrowClass =
    "absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(157,176,164,0.3)] bg-[#030604]/70 text-[#ECF3EE] backdrop-blur transition-colors hover:border-[#4ADE80] hover:text-[#4ADE80] focus-visible:outline-2 focus-visible:outline-[#4ADE80] disabled:pointer-events-none disabled:opacity-0";

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carrusel"
      aria-label={label}
    >
      <div
        ref={trackRef}
        tabIndex={0}
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
        className="ph-track flex snap-x snap-mandatory overflow-x-auto focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#4ADE80]"
      >
        {screens.map((screen, i) => (
          <div
            key={screen.src}
            className="w-full shrink-0 snap-start"
            role="group"
            aria-roledescription="pantalla"
            aria-label={`${i + 1} de ${screens.length}`}
          >
            <Image
              src={screen.src}
              alt={screen.alt}
              width={screen.width ?? defaultWidth}
              height={screen.height ?? defaultHeight}
              className="block h-auto w-full"
              draggable={false}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => go(active - 1)}
        disabled={active === 0}
        aria-label="Pantalla anterior"
        className={`${arrowClass} left-3`}
      >
        <ChevronLeft size={20} aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => go(active + 1)}
        disabled={active === last}
        aria-label="Pantalla siguiente"
        className={`${arrowClass} right-3`}
      >
        <ChevronRight size={20} aria-hidden="true" />
      </button>

      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#030604]/70 px-3 py-2 backdrop-blur">
        {screens.map((screen, i) => (
          <button
            key={screen.src}
            type="button"
            onClick={() => go(i)}
            aria-label={`Ir a la pantalla ${i + 1}`}
            aria-current={i === active ? "true" : undefined}
            className={`h-2 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4ADE80] ${
              i === active ? "w-5 bg-[#4ADE80]" : "w-2 bg-[rgba(236,243,238,0.45)] hover:bg-[#ECF3EE]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function ScrollHero({
  eyebrow,
  title,
  titleAccent,
  paragraph,
  primaryCta,
  secondaryCta,
  frameTitle,
  src,
  alt,
  imageWidth,
  imageHeight,
  screens,
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
  alt?: string;
  imageWidth?: number;
  imageHeight?: number;
  screens?: Screen[];
  bgDecoration?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="ph-heroscroll relative">
      <style>{`
        .ph-heroscroll {
          height: 2100px;
        }
        .ph-track { scrollbar-width: none; }
        .ph-track::-webkit-scrollbar { display: none; }
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
          width: min(1100px, 92%);
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
          <h1 className="mt-8 text-[clamp(40px,4.4vw,64px)] font-bold leading-[0.96] tracking-[-0.03em] text-[#ECF3EE]">
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
            {screens && screens.length > 1 ? (
              <ScreenCarousel
                screens={screens.slice(0, 3)}
                label={frameTitle}
                defaultWidth={imageWidth ?? 2880}
                defaultHeight={imageHeight ?? 1620}
              />
            ) : screens && screens.length === 1 ? (
              <Image
                src={screens[0].src}
                alt={screens[0].alt}
                width={screens[0].width ?? imageWidth ?? 2880}
                height={screens[0].height ?? imageHeight ?? 1620}
                className="block h-auto w-full"
              />
            ) : src ? (
              <Image
                src={src}
                alt={alt ?? frameTitle}
                width={imageWidth ?? 2880}
                height={imageHeight ?? 1620}
                className="block h-auto w-full"
              />
            ) : (
              <div className="min-h-[460px] p-8">{children}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
