import type { ReactNode } from "react";

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
    <section id="demo" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 max-w-md text-lg leading-8 text-muted">
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
