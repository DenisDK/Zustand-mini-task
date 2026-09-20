"use client";

import { useCartStore } from "../store/cart.store";

// Icons
import { FaDollarSign } from "react-icons/fa6";

const Cart = () => {
  const cartItems = useCartStore((state) => state.cartItems);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="mt-5">
      <h2 className="font-bold">Cart:</h2>

      {cartItems.map((item) => (
        <div key={item.id} className="">
          <p>Name: {item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: {item.price}</p>
          <p className="flex items-center">
            Price for ({item.name}): {item.price * item.quantity}{" "}
            <FaDollarSign />
          </p>
        </div>
      ))}
      <div className="flex items-center mt-5 font-bold">
        Total cart price: {totalPrice} <FaDollarSign />
      </div>
    </div>
  );
};

export default Cart;
