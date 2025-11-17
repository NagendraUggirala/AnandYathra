import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import tripsData from "../data/tripsData.json";

export default function TripDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const trip = tripsData.find((t) => t.id === Number(id));

  if (!trip) {
    return (
      <div className="max-w-3xl mx-auto px-5 pt-28 pb-20 text-center text-xl">
        Trip not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-5 pt-28 pb-20">
      {/* Image */}
      <img
        src={trip.image}
        alt={trip.title}
        className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-xl shadow-lg"
      />

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold mt-6 bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
        {trip.title}
      </h1>

      {/* Location */}
      <p className="text-gray-600 mt-2 font-medium">{trip.location}</p>

      {/* Description */}
      <p className="mt-4 text-gray-700 leading-relaxed">
        {trip.description}
      </p>

      {/* Price + Button */}
      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="text-2xl font-bold text-green-600">
          ₹{trip.price.toLocaleString()}
        </div>

        <button
          onClick={() => navigate(`/book/${trip.id}`)}
          className="sm:ml-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
