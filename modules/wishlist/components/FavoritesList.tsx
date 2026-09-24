"use client";

import { useWishlistStore } from "../store/wishlist.store";

// Icons
import { FaDollarSign } from "react-icons/fa6";

const FavoritesList = () => {
  const favorites = useWishlistStore((state) => state.favorites);

  return (
    <div className="mt-5 ">
      <h2 className="font-bold mb-2">Favorites:</h2>

      {favorites.length === 0 ? (
        <p>Your wishlist is empty {":("}</p>
      ) : (
        favorites.map((product) => (
          <div key={product.id} className="flex items-center gap-1 ">
            <p>{product.name}:</p>
            <p className="flex items-center">
              {product.price} <FaDollarSign />
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
