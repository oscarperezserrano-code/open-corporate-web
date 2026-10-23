"use client";

import { useEffect, useMemo, useState } from "react";

// Fixed seed so the generated network is identical on every load (server
// and client render the same markup — no hydration mismatch).
const SEED = 20260922;
const VB_W = 1400;
const VB_H = 760;
const NODE_COUNT = 85;
const MIN_DIST = 62;
const EDGE_MAX_DIST = 170;
const NEIGHBORS = 3;
const SIGNAL_COUNT = 14;

function mulberry32(seed: number) {
  let a = seed;
  return function random() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Two overlapping lobes with a flattened bottom and a central notch —
// a simplified brain silhouette, not an anatomical outline.
function inBrain(x: number, y: number) {
  const lx = (x - 560) / 345;
  const ly = (y - 345) / 275;
  const rx = (x - 840) / 345;
  const ry = (y - 345) / 275;
  const inLeft = lx * lx + ly * ly <= 1;
  const inRight = rx * rx + ry * ry <= 1;
  if (!inLeft && !inRight) return false;

  const notch = 95 * Math.exp(-((x - 700) ** 2) / (2 * 75 * 75));
  const bottomLimit = 555 - notch;
  return y <= bottomLimit;
}

type Node = { x: number; y: number; r: number; dur: number; begin: number };
type Edge = { a: number; b: number };
type Signal = { a: number; b: number; dur: number; begin: number };

function generateNetwork() {
  const rand = mulberry32(SEED);
  const nodes: Node[] = [];
  let attempts = 0;

  while (nodes.length < NODE_COUNT && attempts < 40000) {
    attempts++;
    const x = 60 + rand() * (VB_W - 120);
    const y = 40 + rand() * (VB_H - 80);
    if (!inBrain(x, y)) continue;

    let ok = true;
    for (const n of nodes) {
      const dx = n.x - x;
      const dy = n.y - y;
      if (dx * dx + dy * dy < MIN_DIST * MIN_DIST) {
        ok = false;
        break;
      }
    }
    if (!ok) continue;

    nodes.push({
      x,
      y,
      r: 2.5 + rand() * 2.5,
      dur: 3.5 + rand() * 3.5,
      begin: -(rand() * 7),
    });
  }

  const edgeMap = new Map<string, Edge>();
  nodes.forEach((n, i) => {
    const nearest = nodes
      .map((m, j) => ({ j, d: Math.hypot(m.x - n.x, m.y - n.y) }))
      .filter((e) => e.j !== i)
      .sort((a, b) => a.d - b.d)
      .slice(0, NEIGHBORS);

    nearest.forEach(({ j, d }) => {
      if (d > EDGE_MAX_DIST) return;
      const a = Math.min(i, j);
      const b = Math.max(i, j);
      const key = `${a}-${b}`;
      if (!edgeMap.has(key)) edgeMap.set(key, { a, b });
    });
  });
  const edges = Array.from(edgeMap.values());

  const pool = [...edges];
  const signals: Signal[] = [];
  for (let k = 0; k < SIGNAL_COUNT && pool.length > 0; k++) {
    const idx = Math.floor(rand() * pool.length);
    const e = pool.splice(idx, 1)[0];
    const dur = 2.5 + rand() * 2.5;
    signals.push({ a: e.a, b: e.b, dur, begin: -(rand() * dur) });
  }

  return { nodes, edges, signals };
}

export function BrainNetwork() {
  const { nodes, edges, signals } = useMemo(() => generateNetwork(), []);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    // The server always renders the animated variant, so the client's
    // first render must match it to avoid a hydration mismatch; this
    // effect then corrects to the real preference right after mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
    >
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        preserveAspectRatio="xMidYMid meet"
        className="w-full max-w-[1500px] opacity-75"
      >
        <style>{`
          @keyframes bn-drift {
            0%, 100% { transform: translate(0px, 0px); }
            50% { transform: translate(10px, 6px); }
          }
          .bn-drift { animation: bn-drift 16s ease-in-out infinite; }
          @media (prefers-reduced-motion: reduce) {
            .bn-drift { animation: none; }
          }
        `}</style>
        <g className="bn-drift">
          {edges.map((e, i) => {
            const a = nodes[e.a];
            const b = nodes[e.b];
            return (
              <line
                key={`e-${i}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="#4ADE80"
                strokeOpacity={0.28}
                strokeWidth={1}
              />
            );
          })}

          {nodes.map((n, i) => (
            <circle key={`n-${i}`} cx={n.x} cy={n.y} r={n.r} fill="#4ADE80">
              {!reducedMotion && (
                <>
                  <animate
                    attributeName="opacity"
                    values="0.5;1;0.5"
                    dur={`${n.dur}s`}
                    begin={`${n.begin}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="r"
                    values={`${n.r * 0.7};${n.r};${n.r * 0.7}`}
                    dur={`${n.dur}s`}
                    begin={`${n.begin}s`}
                    repeatCount="indefinite"
                  />
                </>
              )}
            </circle>
          ))}

          {!reducedMotion &&
            signals.map((s, i) => {
              const a = nodes[s.a];
              const b = nodes[s.b];
              return (
                <circle key={`s-${i}`} r={2.2} fill="#ECF3EE">
                  <animateMotion
                    dur={`${s.dur}s`}
                    begin={`${s.begin}s`}
                    repeatCount="indefinite"
                    path={`M${a.x},${a.y} L${b.x},${b.y}`}
                  />
                </circle>
              );
            })}
        </g>
      </svg>
    </div>
  );
}
