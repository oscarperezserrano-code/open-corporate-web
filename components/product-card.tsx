import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/site-config";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-background p-10">
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">
        {product.sector}
      </p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
        {product.name}
      </h3>
      <p className="mt-4 flex-1 text-base leading-7 text-muted">
        {product.tagline}
      </p>
      <Link
        href={product.href}
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent"
      >
        Ver más
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
