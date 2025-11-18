import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import tripsData from "../data/tripsData.json";
import packagesData from "../data/packages.json";

export default function BookingForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  // CHECK TRIP OR PACKAGE (ALWAYS RUN HOOKS FIRST)
  const trip = tripsData.find((t) => t.id === id);
  const pkg = packagesData[id];

  // DECIDE WHICH DATA TO USE
  const data = trip || pkg;
  const name = data?.title;
  const price = data?.price;

  // ALWAYS CALL useState BEFORE ANY CONDITIONAL RETURNS
  const [form, setForm] = useState({
    name: "",
    email: "",
    travellers: 1,
    date: "",
  });

  // NOW YOU CAN Safely Return
  if (!data) {
    return (
      <div className="max-w-3xl mx-auto px-5 pt-32 pb-20 text-center text-xl">
        Package or Trip not found
      </div>
    );
  }

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/payment", { state: { data, form } });
  }

  return (
    <div className="max-w-xl mx-auto px-5 pt-32 pb-20">
      <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">

        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
          Booking — {name}
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
            name="travellers"
            value={form.travellers}
            onChange={handleChange}
            type="number"
            min="1"
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

          <div className="flex items-center justify-between mt-5">
            <div className="text-lg font-bold">
              Total: <span className="text-green-600">₹{price.toLocaleString()}</span>
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
