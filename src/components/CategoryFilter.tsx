import type { Category, CategoryFilter as CategoryFilterType } from "../types/product";

interface CategoryFilterProps {
  categories: Category[];
  value: CategoryFilterType;
  onChange: (value: CategoryFilterType) => void;
}

export function CategoryFilter({ categories, value, onChange }: CategoryFilterProps) {
  return (
    <div className="field">
      <label htmlFor="category" className="field__label">
        Category
      </label>
      <select
        id="category"
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value as CategoryFilterType)}
      >
        <option value="All">All categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
}
