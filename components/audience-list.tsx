export function AudienceList({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-[clamp(80px,9vw,120px)]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-x-12 gap-y-8">
        <div>
          <h2 className="text-[clamp(28px,3.2vw,42px)] font-bold tracking-[-0.035em] text-ink">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-body">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border-chip bg-surface px-[19px] py-[11px] text-[15.5px] font-medium text-chip"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
