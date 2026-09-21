export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
};

export type CartItem = Product & {
  quantity: number;
};

export type CartStore = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: number) => void;
  // increaseQuantity: (productId: number) => void;
  // decreaseQuantity: (productId: number) => void;
};
