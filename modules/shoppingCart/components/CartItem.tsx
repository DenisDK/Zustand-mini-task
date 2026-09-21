import type { CartItem as CartItemType } from "../types/cart.types";

import { Button } from "@/components/ui/button";
import { useCartStore } from "../store/cart.store";

// Icons
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa6";

type CartItemProps = {
  item: CartItemType;
};

const CartItem = ({ item }: CartItemProps) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  return (
    <div className="mt-2">
      <p>Name: {item.name}</p>
      <p className="flex items-center gap-3">
        Quantity:
        <Button
          onClick={() => decreaseQuantity(item.id)}
          variant="outline"
          className={""}
        >
          <FaMinus />
        </Button>
        {item.quantity}
        <Button
          onClick={() => increaseQuantity(item.id)}
          variant="outline"
          className={""}
        >
          <FaPlus />
        </Button>
      </p>
      <p>Price: {item.price}</p>
      <p className="flex items-center">
        Price for ({item.name}): {item.price * item.quantity} <FaDollarSign />
      </p>
      <Button
        onClick={() => removeFromCart(item.id)}
        variant="outline"
        className={"mt-1"}
      >
        Remove
      </Button>
    </div>
  );
};

export default CartItem;
