import type { LucideIcon } from "lucide-react";

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-background p-8">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
        <Icon size={22} strokeWidth={2} />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-base leading-7 text-muted">{description}</p>
    </div>
  );
}
