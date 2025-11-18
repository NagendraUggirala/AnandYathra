import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  // Load favorites from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  // Remove a trip from favorites
  const removeFavorite = (id) => {
    const updated = favorites.filter((item) => item.id !== id);
    localStorage.setItem("favorites", JSON.stringify(updated));
    setFavorites(updated);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h2 className="text-3xl font-bold mb-6 text-blue-700">My Favorites</h2>

      {/* Empty Message */}
      {favorites.length === 0 ? (
        <div className="text-center text-gray-600 text-lg mt-20">
          ❤️ No favorites added yet.
          <br />
          <button
            onClick={() => navigate("/trips")}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Browse Trips
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {favorites.map((trip) => (
            <div
              key={trip.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden"
            >
              {/* Image */}
              <img
                src={trip.image}
                alt={trip.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <h3 className="text-xl font-bold text-blue-700">{trip.title}</h3>
                <p className="text-gray-500">{trip.location}</p>

                <p className="text-sm text-gray-500 mt-1">
                  {trip.days} Days • {trip.nights} Nights
                </p>

                <p className="mt-3 text-lg font-bold text-green-600">
                  ₹{trip.price}
                </p>

                {/* Remove Favorite Button */}
                <button
                  onClick={() => removeFavorite(trip.id)}
                  className="mt-3 bg-red-500 text-white w-full py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Remove from Favorites
                </button>

                {/* View Details */}
                <button
                  onClick={() => navigate(`/trip/${trip.id}`)}
                  className="mt-2 bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}
