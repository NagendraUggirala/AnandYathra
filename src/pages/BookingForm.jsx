import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
      <>
        <Header />
        <div className="max-w-3xl mx-auto p-8 text-center">Trip not found</div>
        <Footer />
      </>
    );
  }

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // navigate to payment with trip + form
    navigate("/payment", { state: { trip, form } });
  }

  return (
    <>
      <Header />
      <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow mt-8">
        <h2 className="text-2xl font-bold mb-4">Booking — {trip.title}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" value={form.name} onChange={handleChange} required placeholder="Full name" className="w-full p-3 border rounded" />
          <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Email address" className="w-full p-3 border rounded" />
          <input name="travellers" value={form.travellers} onChange={handleChange} min="1" type="number" placeholder="Number of travellers" className="w-full p-3 border rounded" />
          <input name="date" value={form.date} onChange={handleChange} required type="date" className="w-full p-3 border rounded" />

          <div className="flex items-center justify-between mt-4">
            <div className="text-lg font-bold">Total: <span className="text-green-600">₹{(trip.price * (form.travellers || 1)).toLocaleString()}</span></div>
            <button type="submit" className="bg-blue-600 text-white px-5 py-2 rounded-lg">Proceed to Payment</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
