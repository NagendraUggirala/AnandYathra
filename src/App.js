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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* All pages inside Layout */}
        <Route element={<Layout />}>
  <Route path="/" element={<Home />} />
  <Route path="/trips" element={<Trips />} />   {/* NEW */}
  <Route path="/destinations" element={<Destinations />} />

  <Route path="/category/:categoryId" element={<CategoryPlaces />} />
  <Route path="/category/:categoryId/:placeId" element={<PlaceDetails />} />

  <Route path="/trip/:id" element={<TripDetails />} />
  <Route path="/book/:id" element={<BookingForm />} />
  <Route path="/payment" element={<PaymentPage />} />
  <Route path="/success" element={<SuccessPage />} />

  <Route path="/signin" element={<SignIn />} />
  <Route path="/signup" element={<SignUp />} />
</Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
