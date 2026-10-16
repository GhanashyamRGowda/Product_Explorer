import { useCallback, useState } from "react";
import { CATEGORIES, PRODUCTS } from "./data/products";
import { useProductFilters } from "./hooks/useProductFilters";
import { SearchBar } from "./components/SearchBar";
import { CategoryFilter } from "./components/CategoryFilter";
import { SortSelect } from "./components/SortSelect";
import { ProductGrid } from "./components/ProductGrid";
import { EmptyState } from "./components/EmptyState";
import { ProductModal } from "./components/ProductModal";
import type { Product } from "./types/product";

export default function App() {
  const {
    filters,
    visibleProducts,
    hasActiveFilters,
    setSearch,
    setCategory,
    setSort,
    reset,
  } = useProductFilters(PRODUCTS);

  const [selected, setSelected] = useState<Product | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">Product Explorer</h1>
        <p className="header__sub">Find what you need by name, category or price.</p>
      </header>

      <main className="container">
        <div className="toolbar">
          <SearchBar value={filters.search} onChange={setSearch} />
          <CategoryFilter
            categories={CATEGORIES}
            value={filters.category}
            onChange={setCategory}
          />
          <SortSelect value={filters.sort} onChange={setSort} />
        </div>

        <div className="meta" aria-live="polite">
          <span>
            {visibleProducts.length} of {PRODUCTS.length} products
          </span>
          {hasActiveFilters && (
            <button type="button" className="link-btn" onClick={reset}>
              Clear filters
            </button>
          )}
        </div>

        {visibleProducts.length > 0 ? (
          <ProductGrid products={visibleProducts} onSelect={setSelected} />
        ) : (
          <EmptyState onReset={reset} />
        )}
      </main>

      {selected && <ProductModal product={selected} onClose={closeModal} />}
    </div>
  );
}
