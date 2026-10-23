"use client";

import { useEffect, useRef, useState } from "react";

// Only on pointer-capable devices, and never when reduced motion is
// preferred — checked once on mount and kept in sync via matchMedia.
export function CursorGlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const hoverQuery = window.matchMedia("(hover: hover)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(hoverQuery.matches && !motionQuery.matches);
    update();
    hoverQuery.addEventListener("change", update);
    motionQuery.addEventListener("change", update);
    return () => {
      hoverQuery.removeEventListener("change", update);
      motionQuery.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const node = containerRef.current;
    if (!node) return;

    function handleMove(e: MouseEvent) {
      const rect = node!.getBoundingClientRect();
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[5] overflow-hidden"
    >
      {pos && (
        <div
          className="absolute h-[500px] w-[500px] rounded-full transition-transform duration-150 ease-out"
          style={{
            left: -250,
            top: -250,
            transform: `translate(${pos.x}px, ${pos.y}px)`,
            background:
              "radial-gradient(circle, rgba(74,222,128,0.22) 0%, rgba(74,222,128,0) 65%)",
          }}
        />
      )}
    </div>
  );
}
