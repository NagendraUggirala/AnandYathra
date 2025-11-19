import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import placesData from "../data/places.json";
import { ArrowLeft, Heart } from "lucide-react";
import { addToWishlist, getWishlist } from "../utils/wishlist";

export default function CategoryPlaces() {
  const { categoryId } = useParams();
  const places = placesData[categoryId] || [];

  // Local state to re-render hearts without page reload
  const [wishlistState, setWishlistState] = useState([]);

  useEffect(() => {
    setWishlistState(getWishlist());
  }, []);

  function isInWishlist(id) {
    return wishlistState.some((item) => String(item.id) === String(id));
  }

  function handleWishlist(place, e) {
    e.preventDefault();

    addToWishlist({
      id: String(place.id),
      image: place.img,
      title: place.title || place.name,
      location: place.desc || "Unknown",
      price: place.price || null,
      categoryId: categoryId,
      placeId: place.id,
    });

    // Update local state so heart turns red instantly
    setWishlistState(getWishlist());
  }

  return (
    <div className="max-w-7xl mx-auto px-5 pt-28 pb-16">

      {/* Back Button */}
      <Link
        to="/destinations"
        className="flex items-center gap-2 px-4 py-2 w-fit bg-gray-100 
                 hover:bg-gray-200 rounded-xl text-gray-700 font-medium transition mb-6"
      >
        <ArrowLeft size={18} /> Back
      </Link>

      {/* Title */}
      <h2 className="text-3xl font-extrabold mb-8 capitalize bg-gradient-to-r 
                     from-blue-600 to-yellow-500 bg-clip-text text-transparent">
        {categoryId.replace("-", " ")}
      </h2>

      {/* Places */}
      {places.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {places.map((place) => (
            <Link
              key={place.id}
              to={`/category/${categoryId}/${place.id}`}
              className="relative block"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border cursor-pointer relative"
              >
                {/* Image */}
                <img
                  src={place.img}
                  alt={place.name}
                  className="w-full h-52 object-cover"
                />

                {/* Wishlist Button */}
                <button
                  onClick={(e) => handleWishlist(place, e)}
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow z-20 hover:scale-110 transition"
                >
                  {isInWishlist(place.id) ? (
                    <Heart className="text-red-500" fill="red" />
                  ) : (
                    <Heart className="text-red-500" />
                  )}
                </button>

                {/* Details */}
                <div className="p-4">
                  <h3 className="text-xl font-bold">{place.title || place.name}</h3>
                  <p className="text-gray-600 text-sm mt-2">{place.desc}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      ) : (
        <h3 className="text-red-600 text-xl font-bold text-center mt-20">
          Destination Not Found ❌
        </h3>
      )}
    </div>
  );
}
