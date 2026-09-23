import type { Product } from "../types/wishlist.types";

export const products: Product[] = [
  {
    id: 1,
    name: "Mechanical Keyboard",
    description: "Mechanical keyboard with RGB backlight",
    price: 120,
    category: "Accessories",
    image: "/keyboard.jpg",
  },
  {
    id: 2,
    name: "Gaming Mouse",
    description: "Ergonomic gaming mouse",
    price: 70,
    category: "Accessories",
    image: "/mouse.jpg",
  },
  {
    id: 3,
    name: "4K Monitor",
    description: "27-inch 4K monitor",
    price: 350,
    category: "Displays",
    image: "/monitor.jpg",
  },
  {
    id: 4,
    name: "Gaming Headset",
    description: "Wireless gaming headset",
    price: 100,
    category: "Audio",
    image: "/headset.jpg",
  },
];
