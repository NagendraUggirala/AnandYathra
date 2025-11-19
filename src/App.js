import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Layout from "./components/Layout";

// Pages
import Home from "./pages/Home";
import Trips from "./pages/Trips";
import TripDetails from "./pages/TripDetails";
import BookingForm from "./pages/BookingForm";
import PaymentPage from "./pages/PaymentPage";
import SuccessPage from "./pages/SuccessPage";
import Favorites from "./pages/Favorites";   // ⭐ NEW PAGE

// Auth
import SignIn from "./components/SignIn";
import SignUp from "./components/Signup";

// Destinations
import Destinations from "./components/Destinations";
import CategoryPlaces from "./components/CategoryPlaces";
import PlaceDetails from "./components/PlaceDetails";

function App() {
  return (
    <BrowserRouter>

      {/* ⭐ Toast Notification Provider */}
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>

        {/* Wrap all pages inside Layout */}
        <Route element={<Layout />}>

          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Trips List */}
          <Route path="/trips" element={<Trips />} />

          {/* Trip Details */}
          <Route path="/trip/:id" element={<TripDetails />} />

          {/* Booking Form */}
          <Route path="/booking/:id" element={<BookingForm />} />

          {/* Payment */}
          <Route path="/payment" element={<PaymentPage />} />

          {/* Success After Payment */}
          <Route path="/success" element={<SuccessPage />} />

          {/* ⭐ Favorites Page */}
          <Route path="/favorites" element={<Favorites />} />

          {/* Destinations */}
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/category/:categoryId" element={<CategoryPlaces />} />
          <Route
            path="/category/:categoryId/:placeId"
            element={<PlaceDetails />}
          />

          {/* Authentication */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
