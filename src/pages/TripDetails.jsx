import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import trips from "../data/trips.json";
import { Users, Plane, Train, Bus, Hotel } from "lucide-react";

export default function TripDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { search } = useLocation();

  const personsFromURL = Number(new URLSearchParams(search).get("persons")) || 1;

  const trip = trips[id];

  const [persons, setPersons] = useState(personsFromURL);
  const [travelType, setTravelType] = useState("no-flight");
  const [roomType, setRoomType] = useState("standard");

  if (!trip) {
    return (
      <div className="text-center py-32 text-2xl font-bold text-red-600">
        Trip Not Found ❌
      </div>
    );
  }

  // Calculate total
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

  const total = calculateTotal();

  return (
    <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">

      {/* IMAGE + DETAILS */}
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={trip.image}
          alt={trip.title}
          className="w-full h-[450px] object-cover rounded-3xl shadow-lg"
        />

        <div>
          <h1 className="text-4xl font-extrabold">{trip.title}</h1>
          <p className="mt-2 text-gray-500 text-lg">{trip.destination}</p>

          {/* Persons-wise Price */}
          <div className="mt-4 text-3xl font-bold text-green-600">
            ₹{(trip.price * persons).toLocaleString()}
          </div>

          {persons > 1 && (
            <p className="text-sm text-gray-500">(for {persons} persons)</p>
          )}
        </div>
      </div>

      {/* CUSTOMIZATION */}
      <div className="mt-14 bg-white p-8 rounded-3xl shadow-xl border">

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

        {/* TOTAL */}
        <div className="mt-10 bg-gray-50 p-6 rounded-2xl border">
          <h3 className="text-xl font-bold mb-4">Total Amount</h3>

          <p className="text-3xl font-bold text-green-700">
            ₹{total.toLocaleString()}
          </p>
        </div>

        <button
          onClick={() =>
            navigate(`/booking/${id}`, {
              state: { trip, persons, travelType, roomType, total }
            })
          }
          className="mt-8 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold"
        >
          Book Now
        </button>

      </div>
    </div>
  );
}
