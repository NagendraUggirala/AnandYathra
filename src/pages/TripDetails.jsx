import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import tripsData from "../data/tripsData.json";

export default function TripDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const trip = tripsData.find((t) => t.id === Number(id));

  if (!trip) {
    return (
      <>
        <Header />
        <div className="max-w-3xl mx-auto p-8 text-center">Trip not found</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <img src={trip.image} alt={trip.title} className="w-full h-72 object-cover rounded-xl shadow" />
        <h1 className="text-3xl font-bold text-blue-800 mt-6">{trip.title}</h1>
        <p className="text-gray-600 mt-2">{trip.location}</p>
        <p className="mt-4 text-gray-700">{trip.description}</p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <div className="text-xl font-bold text-green-600">₹{trip.price.toLocaleString()}</div>
          <button onClick={() => navigate(`/book/${trip.id}`)} className="ml-auto bg-blue-600 text-white px-6 py-2 rounded-lg">Book Now</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
