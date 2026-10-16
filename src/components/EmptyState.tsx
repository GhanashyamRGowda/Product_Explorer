interface EmptyStateProps {
  onReset: () => void;
}

export function EmptyState({ onReset }: EmptyStateProps) {
  return (
    <div className="empty" role="status">
      <h2 className="empty__title">No products match your search</h2>
      <p className="empty__text">
        Try a different name, pick another category, or clear your filters.
      </p>
      <button type="button" className="btn" onClick={onReset}>
        Clear filters
      </button>
    </div>
  );
}
