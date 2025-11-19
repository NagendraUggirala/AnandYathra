import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

// Trips (object)
import trips from "../data/trips.json";
// Destinations (object) — for PlaceDetails
import places from "../data/places.json";

export default function BookingForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { search } = useLocation();

  // Read Query Parameters
  const query = new URLSearchParams(search);
  const persons = Number(query.get("persons")) || 1;
  const travelType = query.get("travel") || "no-flight";
  const roomType = query.get("room") || "standard";
  const totalAmount = Number(query.get("total")) || 0;

  // Identify whether the ID belongs to trip or destination
  const trip = trips[id];
  const place = places[id];

  const data = trip || place; // final selected product

  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
  });

  if (!data) {
    return (
      <div className="max-w-3xl mx-auto px-5 pt-32 pb-20 text-center text-xl text-red-600 font-bold">
        Booking Data Not Found ❌
      </div>
    );
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/payment", {
      state: {
        data, // trip or destination
        form: {
          ...form,
          persons,
          travelType,
          roomType,
        },
        total: totalAmount,
      },
    });
  }

  return (
    <div className="max-w-xl mx-auto px-5 pt-32 pb-20">
      <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">

        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r 
                       from-blue-600 to-yellow-500 bg-clip-text text-transparent">
          Booking — {data.title}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email Address"
            required
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400"
          />

          <input
            name="date"
            value={form.date}
            onChange={handleChange}
            type="date"
            required
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400"
          />

          {/* Booking Summary */}
          <div className="bg-gray-50 p-4 rounded-xl border mt-4">
            <p><strong>Persons:</strong> {persons}</p>
            <p><strong>Travel Type:</strong> {travelType}</p>
            <p><strong>Room Type:</strong> {roomType}</p>

            <p className="text-xl font-bold text-green-700 mt-3">
              Total: ₹{totalAmount.toLocaleString()}
            </p>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700
                       text-white py-3 rounded-xl font-semibold shadow-md 
                       transition"
          >
            Proceed to Payment
          </button>

        </form>
      </div>
    </div>
  );
}
