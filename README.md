# Product Explorer

A responsive product browsing app built with **React, TypeScript, CSS** (Vite).

## Features
- Product cards with image, name, price and category
- Click a product image to open a details popup (Esc or outside click closes it)
- Search by product name (debounced)
- Category filter
- Sort by price (low to high, plus high to low)
- "No products found" message with a Clear filters button
- Mobile-first responsive layout
- Reusable components, custom hooks, strict TypeScript types

## Prerequisites
- [Node.js](https://nodejs.org/) v18 or newer (check with `node -v`)
- npm (comes with Node.js)

## Setup
```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```
Open the URL shown in the terminal (usually http://localhost:5173).

## Production build
```bash
npm run build     # type-checks and builds to /dist
npm run preview   # serves the production build locally
```

## Project structure
```
src/
  components/   SearchBar, CategoryFilter, SortSelect, ProductCard, ProductGrid, EmptyState
  hooks/        useDebounce, useProductFilters
  data/         products.ts (mock data)
  types/        product.ts (TypeScript types)
  utils/        format.ts (currency formatting)
  App.tsx       Page composition
  styles.css    Global + component styles
```

## Deployment (Vercel)
1. Push this repo to GitHub.
2. Go to vercel.com > Add New Project > import the repo.
3. Framework preset: **Vite** (auto-detected). Click **Deploy**.

## Notes
Product images live in `public/images`. Each product uses `<name>.jpg` (real photo) and falls back to the `<name>.svg` illustration if the photo is missing. To use real photos, drop them in that folder and update the paths in `src/data/products.ts`. Click a product image to see its details.
