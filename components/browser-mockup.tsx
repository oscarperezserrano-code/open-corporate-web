import { ImageIcon } from "lucide-react";

export function BrowserMockup({
  url,
  label,
}: {
  url: string;
  label?: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-background shadow-xl shadow-black/5">
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-border" />
        <span className="h-3 w-3 rounded-full bg-border" />
        <span className="h-3 w-3 rounded-full bg-border" />
        <div className="ml-3 flex-1 truncate rounded-md bg-background px-3 py-1 text-xs text-muted">
          {url}
        </div>
      </div>
      <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 bg-surface text-muted">
        <ImageIcon size={28} strokeWidth={1.5} />
        <p className="text-sm">{label ?? "Captura de producto"}</p>
      </div>
    </div>
  );
}
