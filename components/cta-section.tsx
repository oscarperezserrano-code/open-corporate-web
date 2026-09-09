import type { ReactNode } from "react";
import { MeshArt } from "@/components/mesh-art";

export function CTASection({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section
      id="demo"
      className="mx-auto max-w-[1240px] px-6 pb-[clamp(96px,10vw,140px)] pt-[clamp(80px,9vw,120px)]"
    >
      <div className="relative overflow-hidden rounded-[20px] border border-border bg-surface p-[clamp(40px,5vw,76px)]">
        <MeshArt
          style={{
            top: "-28%",
            right: "-6%",
            width: "min(720px,80%)",
            opacity: 0.55,
          }}
        />
        <div className="relative grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="max-w-[22ch] text-[clamp(28px,3.4vw,46px)] font-bold leading-[1.06] tracking-[-0.035em] text-ink">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-5 max-w-[48ch] text-[17px] leading-[1.6] text-body">
                {subtitle}
              </p>
            )}
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}
