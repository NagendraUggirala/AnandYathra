import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TripDetails from "./pages/TripDetails";
import BookingForm from "./pages/BookingForm";
import PaymentPage from "./pages/PaymentPage";
import SuccessPage from "./pages/SuccessPage";

import SignIn from "./components/SignIn";
import SignUp from "./components/Signup";
import Destinations from "./components/Destinations";

// NEW IMPORTS
import CategoryPlaces from "./components/CategoryPlaces";
import PlaceDetails from "./components/PlaceDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />

        {/* Auth */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Trip Booking Flow */}
        <Route path="/trip/:id" element={<TripDetails />} />
        <Route path="/book/:id" element={<BookingForm />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/success" element={<SuccessPage />} />

        {/* NEW: Category → Places → Details */}
        <Route path="/category/:categoryId" element={<CategoryPlaces />} />
        <Route path="/category/:categoryId/:placeId" element={<PlaceDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
