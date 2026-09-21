import { create } from "zustand";
import { CartStore } from "../types/cart.types";

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],

  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id,
      );

      if (existingItem) {
        return {
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem,
          ),
        };
      }

      return {
        cartItems: [...state.cartItems, item],
      };
    }),

  removeFromCart: (productId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== productId),
    })),

  increaseQuantity: (productId) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    })),

  decreaseQuantity: (productId) =>
    set((state) => ({
      cartItems: state.cartItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    })),
}));
