export function FeatureCard({
  index,
  title,
  description,
  first,
  last,
}: {
  index: number;
  title: string;
  description: string;
  first?: boolean;
  last?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-start gap-x-12 gap-y-6 ${
        first ? "pb-14" : last ? "pt-14" : "py-14"
      } ${last ? "" : "border-b border-border"}`}
    >
      <div>
        <p className="mb-5 font-mono text-xs tracking-[0.1em] text-accent">
          {String(index).padStart(2, "0")}
        </p>
        <h3 className="text-2xl font-bold leading-tight tracking-[-0.028em] text-ink">
          {title}
        </h3>
      </div>
      <p className="text-lg leading-[1.62] text-muted">{description}</p>
    </div>
  );
}
