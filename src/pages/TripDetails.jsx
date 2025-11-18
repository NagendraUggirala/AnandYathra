import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import tripsData from "../data/tripsData.json";

export default function TripDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // ⭐ ID NOW STRING (not Number)
  const trip = tripsData.find((t) => t.id === id);

  if (!trip) {
    return (
      <div className="max-w-3xl mx-auto px-5 pt-32 pb-24 text-center text-xl">
        Trip not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-5 pt-32 pb-24">
      {/* IMAGE */}
      <img
        src={trip.image}
        alt={trip.title}
        className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-2xl shadow-xl"
      />

      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-extrabold mt-8 
                     bg-gradient-to-r from-blue-600 to-yellow-500 
                     bg-clip-text text-transparent">
        {trip.title}
      </h1>

      {/* LOCATION */}
      <p className="text-gray-600 mt-2 font-medium">{trip.location}</p>

      {/* DESCRIPTION */}
      <p className="mt-4 text-gray-700 leading-relaxed">
        {trip.description}
      </p>

      {/* PRICE + BUTTON */}
      <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="text-2xl font-bold text-green-600">
          ₹{trip.price.toLocaleString()}
        </div>

        {/* BOOK NOW */}
        <button
          onClick={() => navigate(`/booking/${trip.id}`)}
          className="
            sm:ml-auto px-8 py-3 rounded-xl 
            bg-gradient-to-r from-skyblue to-blue-600 
            text-white font-semibold shadow-lg 
            hover:shadow-xl hover:scale-[1.04] transition-all
          "
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
