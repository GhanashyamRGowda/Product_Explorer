import type { Product } from "../types/product";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  onSelect: (product: Product) => void;
}

export function ProductGrid({ products, onSelect }: ProductGridProps) {
  return (
    <section className="grid" aria-label="Product list">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onSelect={onSelect} />
      ))}
    </section>
  );
}
