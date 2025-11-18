import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function PaymentPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.trip || !state.form) {
    return (
      <>
       
        <div className="max-w-lg mx-auto p-8 text-center">No payment data. Please start booking from a trip.</div>
        
      </>
    );
  }

  const { trip, form } = state;
  const total = trip.price * (Number(form.travellers) || 1);

  function handlePay() {
    // dummy success -> navigate success with payment details
    navigate("/success", { state: { trip, form, total } });
  }

  return (
    <>
      
       <div className="max-w-xl mx-auto px-5 pt-28 pb-20">
        <h2 className="text-2xl font-bold mb-4">Payment</h2>
        <p className="mb-2"><strong>Trip:</strong> {trip.title}</p>
        <p className="mb-2"><strong>Name:</strong> {form.name}</p>
        <p className="mb-2"><strong>Email:</strong> {form.email}</p>
        <p className="mb-2"><strong>Travellers:</strong> {form.travellers}</p>
        <p className="mb-4 text-lg font-bold">Amount: ₹{total.toLocaleString()}</p>

        <button onClick={handlePay} className="w-full bg-green-600 text-white py-3 rounded-lg">Pay Now (Dummy)</button>
      </div>
     
    </>
  );
}
