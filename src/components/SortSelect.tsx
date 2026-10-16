import type { SortOrder } from "../types/product";

interface SortSelectProps {
  value: SortOrder;
  onChange: (value: SortOrder) => void;
}

export function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <div className="field">
      <label htmlFor="sort" className="field__label">
        Sort by price
      </label>
      <select
        id="sort"
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value as SortOrder)}
      >
        <option value="default">Featured</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  );
}
