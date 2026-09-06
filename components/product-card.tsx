import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/site-config";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={product.href}
      className="group block overflow-hidden rounded-2xl border border-border bg-surface transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-accent hover:shadow-[0_24px_60px_-30px_rgba(62,232,154,0.35)]"
    >
      <div className="h-[220px] overflow-hidden border-b border-border bg-bg">
        <Image
          src={product.image}
          alt={product.name}
          width={2404}
          height={1601}
          className="w-full opacity-90"
        />
      </div>
      <div className="p-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
          {product.sector}
        </p>
        <h3 className="mt-4 text-[32px] font-bold tracking-[-0.03em] text-ink">
          {product.name}
        </h3>
        <p className="mt-3.5 text-[16.5px] leading-[1.6] text-body">
          {product.tagline}
        </p>
        <div className="mt-7 inline-flex items-center gap-2 text-[15px] font-bold text-accent">
          Ver más <span className="font-mono">→</span>
        </div>
      </div>
    </Link>
  );
}
