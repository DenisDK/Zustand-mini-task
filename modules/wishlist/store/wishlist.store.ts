import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { WishlistStore } from "../types/wishlist.types";

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set) => ({
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

      clearFavorites: () => set({ favorites: [] }),
    }),
    {
      name: "wishlist-storage",
    },
  ),
);
