import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function PaymentPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // If no data received
  if (!state || !state.data || !state.form) {
    return (
      <div className="max-w-lg mx-auto p-8 pt-32 text-center text-lg">
        No payment data found. Please start your booking again.
      </div>
    );
  }

  const { data, form } = state;   // data = trip OR package
  const total = data.price * (Number(form.travellers) || 1);

  function handlePay() {
    navigate("/success", { state: { data, form, total } });
  }

  return (
    <div className="max-w-xl mx-auto px-5 pt-32 pb-20">
      <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
        Payment
      </h2>

      <p className="mb-2 text-lg"><strong>Package / Trip:</strong> {data.title}</p>
      <p className="mb-2"><strong>Name:</strong> {form.name}</p>
      <p className="mb-2"><strong>Email:</strong> {form.email}</p>
      <p className="mb-2"><strong>Travellers:</strong> {form.travellers}</p>

      <p className="mt-4 mb-6 text-2xl font-bold text-green-600">
        Amount: ₹{total.toLocaleString()}
      </p>

      <button
        onClick={handlePay}
        className="w-full bg-gradient-to-r from-green-500 to-green-700 
                   text-white py-3 rounded-xl font-semibold shadow-lg
                   hover:scale-[1.03] hover:shadow-xl transition-all"
      >
        Pay Now (Demo)
      </button>
    </div>
  );
}
