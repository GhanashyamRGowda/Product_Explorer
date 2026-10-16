export type Category = "Electronics" | "Fashion" | "Home" | "Sports" | "Books";

export interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  image: string;
  description: string;
}

export type CategoryFilter = Category | "All";

export type SortOrder = "default" | "price-asc" | "price-desc";

export interface Filters {
  search: string;
  category: CategoryFilter;
  sort: SortOrder;
}
