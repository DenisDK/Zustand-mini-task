"use client";

import { useCartStore } from "../store/cart.store";
import CartItem from "./CartItem";

// Icons
import { FaDollarSign } from "react-icons/fa6";

const Cart = () => {
  const cartItems = useCartStore((state) => state.cartItems);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <div className="mt-5">
      <h2 className="font-bold">Cart:</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className="flex items-center mt-5 font-bold">
            Total quantity: {totalQuantity}
          </div>

          <div className="flex items-center mt-1 font-bold">
            Total cart price: {totalPrice} <FaDollarSign />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
