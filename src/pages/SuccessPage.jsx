import React from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SuccessPage() {
  const { state } = useLocation();
  if (!state || !state.trip) {
    return (
      <>
        <Header />
        <div className="max-w-3xl mx-auto p-8 text-center">No booking data</div>
        <Footer />
      </>
    );
  }

  const { trip, form, total } = state;

  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto p-8 text-center">
        <div className="inline-block bg-green-100 p-4 rounded-full mb-4">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>

        <h2 className="text-2xl font-bold">Booking Confirmed!</h2>
        <p className="mt-3">{trip.title} — {trip.location}</p>
        <p className="mt-2">Traveller: {form.name} • {form.travellers} pax</p>
        <p className="mt-2 text-lg font-semibold text-green-600">Paid: ₹{total.toLocaleString()}</p>

        <Link to="/" className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded">Back to Home</Link>
      </div>
      <Footer />
    </>
  );
}
