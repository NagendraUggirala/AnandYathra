import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import trips from "../data/trips.json";
import { Users, Plane, Train, Bus, Hotel } from "lucide-react";

export default function TripDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const trip = trips[id];

  const [persons, setPersons] = useState(1);
  const [travelType, setTravelType] = useState("no-flight");
  const [roomType, setRoomType] = useState("standard");

  if (!trip) {
    return (
      <div className="text-center py-32 text-2xl font-bold text-red-600">
        Trip Not Found ❌
      </div>
    );
  }

  // ⭐ PRICE CALCULATION (Person-wise)
  const calculateTotal = () => {
    let travelExtra = 0;
    let roomExtra = 0;

    if (travelType === "flight") travelExtra = 5000;
    if (travelType === "train") travelExtra = 1500;
    if (travelType === "bus") travelExtra = 800;

    if (roomType === "deluxe") roomExtra = 1000;
    if (roomType === "premium") roomExtra = 2500;

    return (trip.price + travelExtra + roomExtra) * persons;
  };

  return (
    <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">

      {/* ========== TOP SECTION ========== */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div>
          <img
            src={trip.image}
            alt={trip.title}
            className="w-full h-80 md:h-[450px] object-cover rounded-3xl shadow-lg"
          />
        </div>

        {/* DETAILS */}
        <div>
          <h1 className="text-4xl font-extrabold text-gray-800 leading-snug">
            {trip.title}
          </h1>

          <p className="mt-2 text-gray-500 text-lg">{trip.destination}</p>

          <p className="mt-5 text-gray-700 leading-relaxed">{trip.description}</p>

          <div className="mt-4 text-3xl font-bold text-green-600">
            ₹{trip.price.toLocaleString()}
          </div>
        </div>
      </div>

      {/* ========== CUSTOMIZATION CARD ========== */}
      <div className="mt-14 bg-white p-8 rounded-3xl shadow-xl border">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Customize Your Trip
        </h2>

        {/* ========== FORM GRID ========== */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Persons */}
          <div>
            <label className="font-semibold flex items-center gap-2">
              <Users size={18} className="text-blue-600" />
              Number of Persons
            </label>
            <select
              className="mt-2 w-full p-3 border rounded-xl"
              value={persons}
              onChange={(e) => setPersons(Number(e.target.value))}
            >
              {[1,2,3,4,5,6,7,8,9,10].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          {/* Travel Type */}
          <div>
            <label className="font-semibold flex items-center gap-2">
              {travelType === "flight" && <Plane size={18} className="text-blue-600" />}
              {travelType === "train" && <Train size={18} className="text-blue-600" />}
              {travelType === "bus" && <Bus size={18} className="text-blue-600" />}
              {travelType === "no-flight" && <Plane size={18} className="opacity-40" />}
              Travel Type
            </label>

            <select
              className="mt-2 w-full p-3 border rounded-xl"
              value={travelType}
              onChange={(e) => setTravelType(e.target.value)}
            >
              <option value="no-flight">Without Flight</option>
              <option value="flight">Flight ✈️</option>
              <option value="train">Train 🚆</option>
              <option value="bus">Bus 🚌</option>
            </select>
          </div>

          {/* Room Type */}
          <div>
            <label className="font-semibold flex items-center gap-2">
              <Hotel size={18} className="text-blue-600" />
              Hotel Room Type
            </label>

            <select
              className="mt-2 w-full p-3 border rounded-xl"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
            >
              <option value="standard">Standard (₹0)</option>
              <option value="deluxe">Deluxe (₹1000/person)</option>
              <option value="premium">Premium (₹2500/person)</option>
            </select>
          </div>
        </div>

        {/* ========== PRICE SUMMARY ========== */}
        <div className="mt-10 bg-gray-50 p-6 rounded-2xl border">
          <h3 className="text-xl font-bold mb-4">Price Breakdown</h3>

          <p className="text-lg">
            <span className="font-semibold">Base Price × Persons:</span>{" "}
            ₹{(trip.price * persons).toLocaleString()}
          </p>

          {/* ⭐ PERSON-WISE TRAVEL COST */}
          <p className="text-lg mt-2">
            <span className="font-semibold">Traveling Charges:</span>{" "}
            {travelType === "flight" && `₹5000 × ${persons} = ₹${5000 * persons}`}
            {travelType === "train" && `₹1500 × ${persons} = ₹${1500 * persons}`}
            {travelType === "bus" && `₹800 × ${persons} = ₹${800 * persons}`}
            {travelType === "no-flight" && "₹0"}
          </p>

          {/* ⭐ PERSON-WISE ROOM COST */}
          <p className="text-lg mt-2">
            <span className="font-semibold">Hotel Room Charges:</span>{" "}
            {roomType === "standard" && "₹0"}
            {roomType === "deluxe" && `₹1000 × ${persons} = ₹${1000 * persons}`}
            {roomType === "premium" && `₹2500 × ${persons} = ₹${2500 * persons}`}
          </p>

          <hr className="my-4" />

          <p className="text-3xl font-bold text-green-700">
            Total: ₹{calculateTotal().toLocaleString()}
          </p>
        </div>

        {/* Book Button */}
        <button
          onClick={() =>
            navigate(
              `/booking/${id}?persons=${persons}&travel=${travelType}&room=${roomType}&total=${calculateTotal()}`
            )
          }
          className="
            mt-8 w-full py-4 text-lg font-semibold 
            bg-blue-600 text-white rounded-2xl 
            shadow-lg hover:bg-blue-700 transition
          "
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
