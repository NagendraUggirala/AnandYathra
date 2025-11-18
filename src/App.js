import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Trips from "./pages/Trips";
import TripDetails from "./pages/TripDetails";

import BookingForm from "./pages/BookingForm";
import PaymentPage from "./pages/PaymentPage";
import SuccessPage from "./pages/SuccessPage";

import SignIn from "./components/SignIn";
import SignUp from "./components/Signup";

import Destinations from "./components/Destinations";
import CategoryPlaces from "./components/CategoryPlaces";
import PlaceDetails from "./components/PlaceDetails";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

function App() {
  return (
    
      <Routes>

        {/* 🚫 AUTH PAGES WITHOUT HEADER/FOOTER */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* 🌍 ALL OTHER PAGES INSIDE LAYOUT */}
        <Route element={<Layout />}>

          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* TRIPS */}
          <Route path="/trips" element={<Trips />} />
          <Route path="/trip/:id" element={<TripDetails />} />

          {/* DESTINATIONS */}
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/category/:categoryId" element={<CategoryPlaces />} />
          <Route
            path="/category/:categoryId/:placeId"
            element={<PlaceDetails />}
          />

          {/* BOOKING FLOW */}
          <Route path="/booking/:id" element={<BookingForm />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/success" element={<SuccessPage />} />

          {/* PROFILE */}
          <Route path="/profile" element={<Profile />} />

          {/* STATIC PAGES */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Route>
      </Routes>
    
  );
}

export default App;
