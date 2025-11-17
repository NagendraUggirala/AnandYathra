import React from "react";
import { useNavigate } from "react-router-dom";

function TripCard({ trip }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300">

      <img
        src={trip.image}
        alt={trip.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-bold text-blue-700">{trip.title}</h3>
        <p className="text-gray-600">{trip.location}</p>

        <p className="text-sm text-gray-500 mt-1">
          {trip.days} Days • {trip.nights} Nights
        </p>

        <p className="mt-3 text-lg font-extrabold text-green-600">₹{trip.price}</p>

        <button
          onClick={() => navigate(`/trip/${trip.id}`)}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          View Details
        </button>
      </div>

    </div>
  );
}

export default TripCard;
