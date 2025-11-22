import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import destinations from "../data/destinations.json";
import { Heart } from "lucide-react";
import toast from "react-hot-toast";

import { getWishlist, addToWishlist, removeFromWishlist } from "../utils/wishlist";

export default function Destinations() {
  const [wishlistIds, setWishlistIds] = useState([]);

  // Load wishlist
  useEffect(() => {
    const list = getWishlist().map((item) => String(item.id));
    setWishlistIds(list);

    const updateHandler = () => {
      setWishlistIds(getWishlist().map((item) => String(item.id)));
    };

    window.addEventListener("wishlistUpdated", updateHandler);
    return () => window.removeEventListener("wishlistUpdated", updateHandler);
  }, []);

  const toggleWishlist = (category) => {
    const id = String(category.id);

    if (wishlistIds.includes(id)) {
      removeFromWishlist(id);
      toast.error("Removed from Wishlist 💔");
    } else {
      addToWishlist({
        id: id,
        title: category.title,
        image: category.image,
        location: `${category.title} Destinations`,
        price: null
      });
      toast.success("Added to Wishlist ❤️");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-5 pt-28 pb-20">

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold
bg-gradient-to-r from-[#B45309] via-[#F28A1E] via-[#FDBA74] to-[#2348C7]
bg-clip-text text-transparent drop-shadow-lg brightness-115
text-center mb-12">
        Explore Destinations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {Object.values(destinations).map((cat) => {
          const inWish = wishlistIds.includes(String(cat.id));

          return (
            <div key={cat.id} className="relative group">

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(cat)}
                className="absolute top-3 right-3 bg-white p-2 rounded-full shadow z-20 hover:scale-110 transition"
              >
                <Heart
                  className={`w-6 h-6 ${
                    inWish ? "text-red-500 fill-red-500" : "text-gray-600"
                  }`}
                />
              </button>

              <Link to={`/category/${cat.id}`}>
                <div className="bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-2xl transition cursor-pointer">

                  {/* Category Image */}
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Body */}
                  <div className="p-5">
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition">
                      {cat.title}
                    </h3>

                    <p className="text-gray-600 mt-2">
                      {cat.destinations.length} Places
                    </p>

                    <button className="mt-5 w-full py-2 bg-gradient-to-r 
                                       from-blue-600 to-yellow-500 text-white rounded-xl font-semibold shadow 
                                       hover:from-blue-700 hover:to-yellow-600 transition">
                      View Places
                    </button>
                  </div>

                </div>
              </Link>

            </div>
          );
        })}

      </div>
    </div>
  );
}
