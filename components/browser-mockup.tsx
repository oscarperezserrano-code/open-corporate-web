import Image from "next/image";

export function BrowserMockup({
  src,
  alt,
  width,
  height,
  framed = true,
  caption,
  wide,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  framed?: boolean;
  caption?: string;
  wide?: boolean;
}) {
  return (
    <div className={wide ? "mx-auto max-w-[1340px]" : undefined}>
      <div
        className={`overflow-hidden rounded-2xl border border-border bg-surface ${
          framed
            ? "shadow-[0_50px_100px_-60px_rgba(62,232,154,0.4)]"
            : ""
        }`}
      >
        {framed && (
          <div className="flex h-[42px] items-center gap-2 border-b border-border-subtle bg-surface-deep px-4">
            <span className="h-2.5 w-2.5 rounded-full bg-dot" />
            <span className="h-2.5 w-2.5 rounded-full bg-dot" />
            <span className="h-2.5 w-2.5 rounded-full bg-dot" />
          </div>
        )}
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="block w-full"
        />
      </div>
      {caption && (
        <p className="mt-4 font-mono text-[11px] tracking-[0.1em] text-faint">
          {caption}
        </p>
      )}
    </div>
  );
}
