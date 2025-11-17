import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import tripsData from "../data/tripsData.json";

export default function BookingForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const trip = tripsData.find((t) => t.id === Number(id));

  const [form, setForm] = useState({
    name: "",
    email: "",
    travellers: 1,
    date: ""
  });

  if (!trip) {
    return (
      <div className="max-w-3xl mx-auto px-5 pt-28 pb-20 text-center text-xl">
        Trip not found
      </div>
    );
  }

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/payment", { state: { trip, form } });
  }

  return (
    <div className="max-w-xl mx-auto px-5 pt-28 pb-20">
      <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">

        {/* Title */}
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
          Booking — {trip.title}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Full Name"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            name="travellers"
            value={form.travellers}
            onChange={handleChange}
            min="1"
            type="number"
            placeholder="Number of Travellers"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            type="date"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Total + Button */}
          <div className="flex items-center justify-between mt-4">
            <div className="text-lg font-bold">
              Total:
              <span className="text-green-600 ml-1">
                ₹{(trip.price * (form.travellers || 1)).toLocaleString()}
              </span>
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl shadow-md transition"
            >
              Proceed to Payment
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
