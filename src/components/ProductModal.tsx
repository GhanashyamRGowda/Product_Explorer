import { useEffect, useRef } from "react";
import type { Product } from "../types/product";
import { formatPrice } from "../utils/format";
import { ProductImage } from "./ProductImage";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Close details"
        >
          &times;
        </button>
        <ProductImage className="modal__img" src={product.image} alt={product.name} />
        <div className="modal__body">
          <span className="badge">{product.category}</span>
          <h2 id="modal-title" className="modal__title">
            {product.name}
          </h2>
          <p className="modal__price">{formatPrice(product.price)}</p>
          <p className="modal__desc">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
