import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import placesData from "../data/places.json";
import packagesData from "../data/packages.json";
import { Users, Plane, Train, Bus, Hotel } from "lucide-react";

export default function PlaceDetails() {
  const { categoryId, placeId } = useParams();
  const navigate = useNavigate();

  const place = placesData[categoryId]?.find((p) => p.id === placeId);

  // ✅ Hooks ALWAYS at top — before any conditional returns
  const [persons, setPersons] = useState(1);
  const [travelType, setTravelType] = useState("no-flight");
  const [roomType, setRoomType] = useState("standard");

  // ❌ Now safe to check condition after hooks
  if (!place) {
    return (
      <div className="text-center py-32 text-2xl font-bold text-red-600">
        Destination Not Found ❌
      </div>
    );
  }

  // Use first package
  const pkgId = place.packages[0];
  const pkg = packagesData[pkgId];

  // ⭐ PRICE CALCULATION
  const calculateTotal = () => {
    let travelExtra = 0;
    let roomExtra = 0;

    if (travelType === "flight") travelExtra = 5000;
    if (travelType === "train") travelExtra = 1500;
    if (travelType === "bus") travelExtra = 800;

    if (roomType === "deluxe") roomExtra = 1000;
    if (roomType === "premium") roomExtra = 2500;

    return (pkg.price + travelExtra + roomExtra) * persons;
  };

  const total = calculateTotal();

  return (
    <div className="max-w-4xl mx-auto px-5 pt-28 pb-16">

      {/* IMAGE */}
      <img
        src={place.img}
        className="w-full h-72 md:h-96 object-cover rounded-xl shadow-lg"
        alt={place.name}
      />

      {/* TITLE */}
      <h2 className="text-4xl font-bold mt-8 text-blue-800">
        {place.name}
      </h2>

      <p className="text-gray-600 mt-2 text-lg">{place.desc}</p>

      {/* PACKAGE DETAILS */}
      <div className="mt-10 bg-white shadow-xl rounded-xl p-6 border">
        <h3 className="text-2xl font-bold">{pkg.title}</h3>
        <p className="text-yellow-600 text-xl font-bold">₹{pkg.price}</p>

        <h4 className="mt-5 font-semibold text-lg">Itinerary</h4>
        <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
          {pkg.itinerary.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>
      </div>

      {/* CUSTOMIZATION SECTION */}
      <div className="mt-12 bg-white p-6 rounded-2xl shadow-xl border">
        <h3 className="text-2xl font-bold mb-4">Customize Your Trip</h3>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Persons */}
          <div>
            <label className="font-semibold flex items-center gap-2">
              <Users size={18} className="text-blue-600" /> Persons
            </label>
            <select
              className="w-full mt-2 p-3 border rounded-xl"
              value={persons}
              onChange={(e) => setPersons(Number(e.target.value))}
            >
              {[1,2,3,4,5,6,7,8,9,10].map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>

          {/* Travel */}
          <div>
            <label className="font-semibold flex items-center gap-2">
              <Plane size={18} className="text-blue-600" /> Travel Type
            </label>
            <select
              className="w-full mt-2 p-3 border rounded-xl"
              value={travelType}
              onChange={(e) => setTravelType(e.target.value)}
            >
              <option value="no-flight">Without Flight</option>
              <option value="flight">Flight ✈️</option>
              <option value="train">Train 🚆</option>
              <option value="bus">Bus 🚌</option>
            </select>
          </div>

          {/* Room */}
          <div>
            <label className="font-semibold flex items-center gap-2">
              <Hotel size={18} className="text-blue-600" /> Room Type
            </label>
            <select
              className="w-full mt-2 p-3 border rounded-xl"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
            >
              <option value="standard">Standard (₹0)</option>
              <option value="deluxe">Deluxe (₹1000/person)</option>
              <option value="premium">Premium (₹2500/person)</option>
            </select>
          </div>

        </div>

        {/* SUMMARY */}
        <div className="mt-8 bg-gray-50 p-5 rounded-xl border">
          <p className="text-lg font-semibold">
            Base Price × Persons = ₹{(pkg.price * persons).toLocaleString()}
          </p>

          <p className="text-lg mt-2 font-semibold">
            Travel Charges:{" "}
            {travelType === "flight" && "₹5000 / person"}
            {travelType === "train" && "₹1500 / person"}
            {travelType === "bus" && "₹800 / person"}
            {travelType === "no-flight" && "₹0"}
          </p>

          <p className="text-lg mt-2 font-semibold">
            Room Charges:{" "}
            {roomType === "standard" && "₹0"}
            {roomType === "deluxe" && "₹1000 / person"}
            {roomType === "premium" && "₹2500 / person"}
          </p>

          <hr className="my-4" />

          <p className="text-2xl font-bold text-green-700">
            Total: ₹{total.toLocaleString()}
          </p>
        </div>

        {/* BOOK NOW */}
        <button
          onClick={() =>
            navigate(
              `/booking/${pkgId}?persons=${persons}&travel=${travelType}&room=${roomType}&total=${total}`
            )
          }
          className="mt-6 w-full py-3 rounded-xl bg-blue-600 text-white text-lg font-semibold shadow-md hover:bg-blue-700"
        >
          Book Now
        </button>

      </div>
    </div>
  );
}
