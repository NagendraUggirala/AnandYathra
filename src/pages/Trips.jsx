import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import trips from "../data/trips.json";
import { Heart } from "lucide-react";
import toast from "react-hot-toast";

import { getWishlist, addToWishlist, removeFromWishlist } from "../utils/wishlist";

export default function Trips() {
  const navigate = useNavigate();
  const { search } = useLocation();

  // --- PERSON FILTER ---
  const query = new URLSearchParams(search);
  const persons = Number(query.get("persons")) || 1;

  const handlePersonsChange = (e) => {
    const value = e.target.value;
    query.set("persons", value);
    navigate(`/trips?${query.toString()}`);
  };

  // --- WISHLIST STATE ---
  const [wishlistIds, setWishlistIds] = useState([]);

  useEffect(() => {
    const saved = getWishlist().map((i) => String(i.id));
    setWishlistIds(saved);
  }, []);

  const toggleWishlist = (trip) => {
    const id = String(trip.id);

    if (wishlistIds.includes(id)) {
      removeFromWishlist(id);
      setWishlistIds(wishlistIds.filter((x) => x !== id));
      toast.error("Removed from Wishlist 💔");
    } else {
      addToWishlist({
        id,
        image: trip.image,
        title: trip.title,
        location: trip.destination,
        price: trip.price,
      });
      setWishlistIds([...wishlistIds, id]);
      toast.success("Added to Wishlist ❤️");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-5 pt-28 pb-20">
      
      <h2 className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-blue-500 to-yellow-500 bg-clip-text text-transparent">
        Our Best Trips
      </h2>

      {/* Persons Filter */}
      <div className="flex justify-center mb-10">
        <select
          value={persons}
          onChange={handlePersonsChange}
          className="px-4 py-2 border rounded-lg shadow-md bg-white text-gray-700 font-medium"
        >
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1} Person{i + 1 > 1 ? "s" : ""}
            </option>
          ))}
        </select>
      </div>

      {/* Trip Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {Object.values(trips).map((trip) => {
          
          const totalPrice = trip.price * persons;
          const originalTotal = trip.originalPrice
            ? trip.originalPrice * persons
            : null;

          const discount =
            trip.originalPrice && trip.originalPrice > trip.price
              ? Math.round(((trip.originalPrice - trip.price) / trip.originalPrice) * 100)
              : 0;

          const savedAmount =
            originalTotal ? originalTotal - totalPrice : 0;

          const isWish = wishlistIds.includes(String(trip.id));

          return (
            <div key={trip.id} className="relative">

              {/* Wishlist Button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleWishlist(trip);
                }}
                className="absolute top-3 right-3 z-20 bg-white p-2 rounded-full shadow hover:scale-110 transition"
              >
                <Heart
                  className={`w-6 h-6 ${isWish ? "text-red-500 fill-red-500" : "text-gray-600"}`}
                />
              </button>

              <Link to={`/trip/${trip.id}?persons=${persons}`}>
                <div className="bg-white rounded-2xl shadow-lg border hover:shadow-2xl transition overflow-hidden cursor-pointer h-full flex flex-col">

                  {/* Image */}
                  <div className="h-52 w-full relative">
                    <img src={trip.image} alt={trip.title} className="w-full h-full object-cover" />

                    {/* Discount Badge */}
                    {discount > 0 && (
                      <span className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-semibold shadow-lg animate-pulse">
                        {discount}% OFF
                      </span>
                    )}

                    {/* SAVE ₹xxx Blinkit Style */}
                    {savedAmount > 0 && (
                      <span className="absolute bottom-3 left-3 bg-green-500/90 text-white px-2 py-1 text-xs rounded-lg font-semibold shadow">
                        SAVE ₹{savedAmount.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-800">{trip.title}</h3>
                    <p className="mt-1 text-gray-500 text-sm">{trip.destination}</p>

                    {/* PRICE SECTION */}
                    <div className="mt-4">

                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-green-700">
                          ₹{totalPrice.toLocaleString()}
                        </span>

                        {originalTotal && (
                          <span className="text-gray-400 line-through text-lg">
                            ₹{originalTotal.toLocaleString()}
                          </span>
                        )}
                      </div>

                      {persons > 1 && (
                        <p className="text-xs text-gray-500">(for {persons} persons)</p>
                      )}
                    </div>

                    <p className="mt-2 text-gray-600 text-sm">
                      {trip.days} Days • {trip.nights} Nights
                    </p>

                    <div className="mt-4 text-sm text-gray-700 space-y-1">
                      <p><strong>🚗 Travel:</strong> Travel charges included</p>
                      <p><strong>🏨 Room:</strong> Standard Room</p>
                      <p><strong>🍽 Food:</strong> Breakfast Included</p>
                      <p><strong>👨‍✈️ Guide:</strong> Available</p>
                    </div>

                    <button className="mt-auto w-full py-2 bg-gradient-to-r from-blue-700 to-yellow-500 hover:from-blue-800 hover:to-yellow-600 text-white rounded-xl font-medium transition shadow-md">
                      View Details
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
