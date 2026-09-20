"use client";

import { useCartStore } from "../store/cart.store";

// Icons
import { FaDollarSign } from "react-icons/fa6";

const Cart = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  return (
    <div>
      <h2 className="">Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id} className="">
          <p>{item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>{item.price}</p>
          <p className="flex items-center">
            Price for ({item.name}): {item.price * item.quantity}{" "}
            <FaDollarSign />
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
