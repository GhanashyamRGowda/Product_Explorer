import type { Category, Product } from "../types/product";

// Images live in /public/images and are served from the site root.
// Add a real photo named <file>.jpg there; until then the <file>.svg illustration is shown.
const img = (file: string): string => `/images/${file}.jpg`;

export const CATEGORIES: Category[] = [
  "Electronics",
  "Fashion",
  "Home",
  "Sports",
  "Books",
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 4999,
    category: "Electronics",
    image: img("headphones"),
    description:
      "Over-ear Bluetooth headphones with deep bass, soft cushions and up to 30 hours of battery life.",
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    price: 8499,
    category: "Electronics",
    image: img("smartwatch"),
    description:
      "Tracks steps, heart rate and sleep, and shows call and message alerts on a bright always-on display.",
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    price: 2799,
    category: "Electronics",
    image: img("speaker"),
    description:
      "Compact, splash-resistant speaker with room-filling sound and 12 hours of playtime.",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 3999,
    category: "Electronics",
    image: img("keyboard"),
    description:
      "Tactile mechanical switches, full-size layout and a sturdy frame for comfortable all-day typing.",
  },
  {
    id: 5,
    name: "Denim Jacket",
    price: 2499,
    category: "Fashion",
    image: img("denim-jacket"),
    description:
      "Classic blue denim jacket with button front and chest pockets. Easy to layer in any season.",
  },
  {
    id: 6,
    name: "Canvas Sneakers",
    price: 1799,
    category: "Fashion",
    image: img("sneakers"),
    description:
      "Lightweight canvas sneakers with a cushioned insole and rubber sole for everyday wear.",
  },
  {
    id: 7,
    name: "Leather Wallet",
    price: 999,
    category: "Fashion",
    image: img("wallet"),
    description:
      "Slim bifold wallet in genuine leather with card slots and a roomy bill compartment.",
  },
  {
    id: 8,
    name: "Ceramic Table Lamp",
    price: 1599,
    category: "Home",
    image: img("table-lamp"),
    description:
      "Hand-glazed ceramic base with a fabric shade that gives your room a warm, soft glow.",
  },
  {
    id: 9,
    name: "Cotton Bedsheet Set",
    price: 1899,
    category: "Home",
    image: img("bedsheet"),
    description:
      "Breathable 100% cotton set with one fitted sheet and two pillow covers. Gets softer after every wash.",
  },
  {
    id: 10,
    name: "Stainless Steel Bottle",
    price: 699,
    category: "Home",
    image: img("steel-bottle"),
    description:
      "Double-wall insulated bottle that keeps drinks cold for 24 hours or hot for 12. Leak-proof lid.",
  },
  {
    id: 11,
    name: "Yoga Mat",
    price: 1199,
    category: "Sports",
    image: img("yoga-mat"),
    description:
      "Non-slip 6 mm mat with extra cushioning for joints. Comes with a carry strap.",
  },
  {
    id: 12,
    name: "Running Shoes",
    price: 3499,
    category: "Sports",
    image: img("running-shoes"),
    description:
      "Breathable mesh upper with a responsive cushioned sole built for daily runs and gym sessions.",
  },
  {
    id: 13,
    name: "Adjustable Dumbbell Set",
    price: 5999,
    category: "Sports",
    image: img("dumbbells"),
    description:
      "Change the weight in seconds with removable plates. A full home workout in one compact set.",
  },
  {
    id: 14,
    name: "Atomic Habits",
    price: 499,
    category: "Books",
    image: img("atomic-habits"),
    description:
      "A practical guide to building good habits and breaking bad ones through small, consistent changes.",
  },
  {
    id: 15,
    name: "The Pragmatic Programmer",
    price: 1299,
    category: "Books",
    image: img("pragmatic-programmer"),
    description:
      "Timeless advice on writing flexible, maintainable code and growing as a software developer.",
  },
  {
    id: 16,
    name: "Clean Code",
    price: 1099,
    category: "Books",
    image: img("clean-code"),
    description:
      "Learn how to write readable, well-structured code, with real examples of cleaning up messy code.",
  },
];
