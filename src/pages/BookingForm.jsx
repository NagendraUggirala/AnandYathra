import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import tripsData from "../data/tripsData.json";
import packagesData from "../data/packages.json";
import { useAuth } from "../auth/AuthContext";

export default function BookingForm() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();

  // Redirect user to login safely (AFTER render)
  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user, navigate]);

  // Fetch trip/package data
  const trip = tripsData.find((t) => t.id === id);
  const pkg = packagesData[id];
  const data = trip || pkg;

  // State ALWAYS declared before conditional return
  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    travellers: 1,
    date: "",
  });

  if (!data) {
    return (
      <div className="max-w-3xl mx-auto px-5 pt-32 pb-20 text-center text-xl">
        Package or Trip not found.
      </div>
    );
  }

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const booking = {
      title: data.title,
      id: id,
      date: form.date,
      travellers: form.travellers,
      total: data.price * (Number(form.travellers) || 1),
      email: form.email,
      image: data.image || data.img,
    };

    // Save booking history
    const old = JSON.parse(localStorage.getItem("bookings")) || [];
    localStorage.setItem("bookings", JSON.stringify([...old, booking]));

    navigate("/payment", { state: { data, form } });
  }

  return (
    <div className="max-w-xl mx-auto px-5 pt-32 pb-20">
      <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
        
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
          Booking — {data.title}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Full Name"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            required
            placeholder="Email Address"
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
              Total:
              <span className="text-green-600 ml-1">
                ₹{data.price.toLocaleString()}
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
