import React from "react";
import { useNavigate } from "react-router-dom";

export default function TripCard({ trip }) {
  const navigate = useNavigate();

  if (!trip) return null;

  return (
    <div
      onClick={() => navigate(`/trip/${trip.id}`)}
      className="bg-white rounded-xl shadow hover:shadow-2xl transform hover:-translate-y-1 transition overflow-hidden cursor-pointer"
    >
      <div className="h-44 w-full">
        <img src={trip.image} alt={trip.title} className="w-full h-full object-cover" />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-blue-700">{trip.title}</h3>
          <div className="text-green-600 font-bold">₹{trip.price.toLocaleString()}</div>
        </div>

        <p className="text-gray-600 mt-1">{trip.location}</p>
        <p className="text-sm text-gray-500 mt-2">{trip.days} days • {trip.nights ?? Math.max(1, trip.days - 1)} nights</p>
      </div>
    </div>
  );
}
