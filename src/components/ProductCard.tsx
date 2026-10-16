import type { Product } from "../types/product";
import { formatPrice } from "../utils/format";
import { ProductImage } from "./ProductImage";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <article className="card">
      <button
        type="button"
        className="card__media"
        onClick={() => onSelect(product)}
        aria-label={`View details for ${product.name}`}
      >
        <ProductImage src={product.image} alt={product.name} loading="lazy" />
        <span className="card__hint">View details</span>
      </button>
      <div className="card__body">
        <h3 className="card__name">{product.name}</h3>
        <div className="card__row">
          <p className="card__price">{formatPrice(product.price)}</p>
          <span className="badge">{product.category}</span>
        </div>
      </div>
    </article>
  );
}
