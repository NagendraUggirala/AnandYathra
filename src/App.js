import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import TripDetails from "./pages/TripDetails";
import BookingForm from "./pages/BookingForm";
import PaymentPage from "./pages/PaymentPage";
import SuccessPage from "./pages/SuccessPage";
import Trips from "./pages/Trips";
import SignIn from "./components/SignIn";
import SignUp from "./components/Signup";

import Destinations from "./components/Destinations";
import CategoryPlaces from "./components/CategoryPlaces";
import PlaceDetails from "./components/PlaceDetails";


import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* All pages inside layout */}
        <Route element={<Layout />}>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Trips */}
          <Route path="/trips" element={<Trips />} />

          {/* Destination Pages */}
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/category/:categoryId" element={<CategoryPlaces />} />
          <Route
            path="/category/:categoryId/:placeId"
            element={<PlaceDetails />}
          />

          {/* Trip Details */}
          <Route path="/trip/:id" element={<TripDetails />} />

          {/* Booking */}
          <Route path="/booking/:id" element={<BookingForm />} />

          {/* Payment Flow */}
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/success" element={<SuccessPage />} />

          {/* Auth */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* ⭐ New Added Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
