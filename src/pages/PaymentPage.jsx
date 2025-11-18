import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function PaymentPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.data || !state.form) {
    return (
      <div className="max-w-lg mx-auto p-8 pt-32 text-center text-lg">
        No payment data found. Please start your booking again.
      </div>
    );
  }

  const { data, form } = state;

  const persons = Number(form.persons) || 1;
  const travelType = form.travelType;
  const roomType = form.roomType;

  // PERSON-WISE PRICE CALCULATION
  let travelCost = 0;
  let roomCost = 0;

  if (travelType === "flight") travelCost = 5000 * persons;
  if (travelType === "train") travelCost = 1500 * persons;
  if (travelType === "bus") travelCost = 800 * persons;
  if (travelType === "no-flight") travelCost = 0;

  if (roomType === "deluxe") roomCost = 1000 * persons;
  if (roomType === "premium") roomCost = 2500 * persons;
  if (roomType === "standard") roomCost = 0;

  const basePrice = data.price * persons;
  const grandTotal = basePrice + travelCost + roomCost;

  // ⭐ UPDATED FUNCTION (ONLY THIS PART IS CHANGED)
  function handlePay() {
    // Load existing bookings
    const allBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    // New booking entry
    const newBooking = {
      title: data.title,
      image: data.image || data.img || "/assets/default.jpg",
      email: form.email,
      date: form.date,
      travellers: persons,
      travelType,
      roomType,
      total: grandTotal,
      bookedAt: new Date().toISOString()
    };

    // Save to localStorage
    allBookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(allBookings));

    // Redirect to Success Page
    navigate("/success", { state: { data, form, total: grandTotal } });
  }

  return (
    <div className="max-w-xl mx-auto px-5 pt-32 pb-20">

      <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
        Payment Summary
      </h2>

      <div className="p-5 bg-white rounded-2xl shadow-md border">
        <p className="text-lg font-semibold mb-2">
          Package / Trip: {data.title}
        </p>

        <p><strong>Name:</strong> {form.name}</p>
        <p><strong>Email:</strong> {form.email}</p>
        <p><strong>Persons:</strong> {persons}</p>
        <p><strong>Travel Type:</strong> {travelType}</p>
        <p><strong>Room Type:</strong> {roomType}</p>
      </div>

      <div className="mt-6 p-6 bg-gray-50 rounded-2xl border shadow-sm">
        <h3 className="text-xl font-bold mb-4">Price Breakdown</h3>

        <p className="text-lg">
          <span className="font-semibold">Base Price × {persons}: </span>
          ₹{basePrice.toLocaleString()}
        </p>

        <p className="text-lg mt-2">
          <span className="font-semibold">Traveling Charges: </span>
          ₹{travelCost.toLocaleString()}
        </p>

        <p className="text-lg mt-2">
          <span className="font-semibold">Room Charges: </span>
          ₹{roomCost.toLocaleString()}
        </p>

        <hr className="my-4" />

        <p className="text-3xl font-bold text-green-700">
          Total: ₹{grandTotal.toLocaleString()}
        </p>
      </div>

      <button
        onClick={handlePay}
        className="mt-8 w-full bg-gradient-to-r from-green-500 to-green-700 
                   text-white py-3 rounded-xl font-semibold shadow-lg
                   hover:scale-[1.04] hover:shadow-xl transition-all"
      >
        Pay Now (Demo)
      </button>
    </div>
  );
}
