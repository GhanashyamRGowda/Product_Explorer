import { useCallback, useMemo, useState } from "react";
import type { CategoryFilter, Filters, Product, SortOrder } from "../types/product";
import { useDebounce } from "./useDebounce";

const INITIAL_FILTERS: Filters = { search: "", category: "All", sort: "default" };

export function useProductFilters(products: Product[]) {
  const [filters, setFilters] = useState<Filters>(INITIAL_FILTERS);
  const debouncedSearch = useDebounce(filters.search, 250);

  const setSearch = useCallback(
    (search: string) => setFilters((f) => ({ ...f, search })),
    []
  );
  const setCategory = useCallback(
    (category: CategoryFilter) => setFilters((f) => ({ ...f, category })),
    []
  );
  const setSort = useCallback(
    (sort: SortOrder) => setFilters((f) => ({ ...f, sort })),
    []
  );
  const reset = useCallback(() => setFilters(INITIAL_FILTERS), []);

  const visibleProducts = useMemo(() => {
    const query = debouncedSearch.trim().toLowerCase();

    const result = products.filter((p) => {
      const matchesName = p.name.toLowerCase().includes(query);
      const matchesCategory =
        filters.category === "All" || p.category === filters.category;
      return matchesName && matchesCategory;
    });

    if (filters.sort === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }
    return result;
  }, [products, debouncedSearch, filters.category, filters.sort]);

  const hasActiveFilters =
    filters.search.trim() !== "" ||
    filters.category !== "All" ||
    filters.sort !== "default";

  return {
    filters,
    visibleProducts,
    hasActiveFilters,
    setSearch,
    setCategory,
    setSort,
    reset,
  };
}
