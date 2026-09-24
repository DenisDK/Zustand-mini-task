"use client";

import { Button } from "@/components/ui/button";
import { useWishlistStore } from "../store/wishlist.store";

// Icons
import { FaDollarSign } from "react-icons/fa6";

const FavoritesList = () => {
  const favorites = useWishlistStore((state) => state.favorites);

  const clearFavorites = useWishlistStore((state) => state.clearFavorites);

  const favoriteCount = favorites.length;

  return (
    <div className="mt-5 ">
      <h2 className="font-bold mb-2">Favorites count: {favoriteCount}</h2>

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
      <Button onClick={clearFavorites} variant="outline" className={"mt-3"}>
        Clear wishlist
      </Button>
    </div>
  );
};

export default FavoritesList;
