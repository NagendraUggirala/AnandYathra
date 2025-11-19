import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Trips from "./pages/Trips";
import TripDetails from "./pages/TripDetails";

// ✅ FIXED PATH
import BlogDetails from "./components/Home/Blog";

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
    <>
      {/* Toast for Favorites & Alerts */}
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>

        {/* Auth pages without Layout */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* All other pages inside Layout */}
        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />

          <Route path="/trips" element={<Trips />} />
          <Route path="/trip/:id" element={<TripDetails />} />

          {/* ✅ Blog Details Route */}
          <Route path="/blogdetails/:id" element={<BlogDetails />} />

          <Route path="/destinations" element={<Destinations />} />
          <Route path="/category/:categoryId" element={<CategoryPlaces />} />
          <Route
            path="/category/:categoryId/:placeId"
            element={<PlaceDetails />}
          />

          <Route path="/booking/:id" element={<BookingForm />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/success" element={<SuccessPage />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
