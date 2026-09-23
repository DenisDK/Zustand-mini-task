"use client";

import { Button } from "@/components/ui/button";
import { products } from "../data/products";
import { useWishlistStore } from "../store/wishlist.store";
import Image from "next/image";

// Icons
import { FaRegStar } from "react-icons/fa";

const ProductList = () => {
  const toggleFavorite = useWishlistStore((state) => state.toggleFavorite);

  return (
    <div className="flex items-center gap-5">
      {products.map((product) => (
        <div className="max-w-52 border rounded-lg bg-white/5" key={product.id}>
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
            <p className="text-sm mt-1">{product.category}</p>
          </div>
          <div className="flex items-center justify-between p-2">
            <p className="font-bold">{product.price}$</p>
            <Button
              className={""}
              variant="outline"
              onClick={() => toggleFavorite(product)}
            >
              <FaRegStar />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
