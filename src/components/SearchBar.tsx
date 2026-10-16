interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="field field--search">
      <label htmlFor="search" className="field__label">
        Search products
      </label>
      <input
        id="search"
        type="search"
        className="input"
        placeholder="Search by name, e.g. headphones"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
      />
    </div>
  );
}
