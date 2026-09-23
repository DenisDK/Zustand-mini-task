export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
};

export type WishlistStore = {
  favorites: Product[];

  toggleFavorite: (product: Product) => void;
};
