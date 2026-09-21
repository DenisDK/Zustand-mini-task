"use client";

import { Button } from "@/components/ui/button";
import { products } from "../data/products";
import Image from "next/image";

// Zustand
import { useCartStore } from "../store/cart.store";

// Icons
import { FaCartPlus } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";

const ProductList = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="flex items-center justify-between gap-5">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg bg-white/5">
          <Image
            className="w-full h-48 object-cover rounded-t-lg"
            src={product.image}
            alt={product.name}
            width={1000}
            height={1000}
            loading="eager"
          />
          <div className="p-2">
            <h3 className="font-bold">{product.name}</h3>
            <p className="font-light italic text-sm mt-2">
              {product.description}
            </p>
            <div className="flex items-center justify-between mt-2">
              <p className="flex items-center">
                {product.price} <FaDollarSign />
              </p>
              <Button
                onClick={() => addToCart({ ...product, quantity: 1 })}
                variant="outline"
                className={""}
              >
                <FaCartPlus />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
