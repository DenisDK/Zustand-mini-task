import { create } from "zustand";
import { WishlistStore } from "../types/wishlist.types";

export const useWishlistStore = create<WishlistStore>((set) => ({
  favorites: [],

  toggleFavorite: (product) =>
    set((state) => {
      const isFavorite = state.favorites.some(
        (favorite) => favorite.id === product.id,
      );

      if (isFavorite) {
        return {
          favorites: state.favorites.filter(
            (favorite) => favorite.id !== product.id,
          ),
        };
      }

      return {
        favorites: [...state.favorites, product],
      };
    }),
}));
