import React, { useState, useEffect } from "react";
import { useAuth } from "../auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Trash2, Edit3, Heart, Clock, CheckCircle } from "lucide-react";
import { getWishlist, removeFromWishlist } from "../utils/wishlist";

export default function Profile() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("upcoming");
  const [wishlistState, setWishlistState] = useState([]);

  /* ------------------------------
      LOAD & AUTO UPDATE WISHLIST
  ------------------------------- */
  useEffect(() => {
    setWishlistState(getWishlist());

    const handleWishlistUpdate = () => {
      setWishlistState(getWishlist());
    };

    window.addEventListener("wishlistUpdated", handleWishlistUpdate);
    return () => window.removeEventListener("wishlistUpdated", handleWishlistUpdate);
  }, []);

  // Redirect if user not logged in
  if (!user) {
    navigate("/signin");
    return null;
  }

  /* ------------------------------
           LOAD BOOKINGS
  ------------------------------- */
  const allBookings = JSON.parse(localStorage.getItem("bookings")) || [];
  const userBookings = allBookings.filter((b) => b.email === user.email);

  const today = new Date().setHours(0, 0, 0, 0);

  const upcoming = userBookings.filter(
    (b) => new Date(b.date).setHours(0, 0, 0, 0) >= today
  );

  const past = userBookings.filter(
    (b) => new Date(b.date).setHours(0, 0, 0, 0) < today
  );

  /* ------------------------------
           CANCEL BOOKING
  ------------------------------- */
  const cancelBooking = (bookingId) => {
    const updated = allBookings.filter((b) => b.id !== bookingId);
    localStorage.setItem("bookings", JSON.stringify(updated));
    window.location.reload();
  };

  /* ------------------------------
            REMOVE WISHLIST
  ------------------------------- */
  const handleRemoveWish = (id) => {
    removeFromWishlist(id);
    setWishlistState(getWishlist());
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-32">

      {/* ==================== PROFILE HEADER ==================== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-gradient-to-r from-blue-600/10 to-yellow-500/10 
                   backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 
                   p-10 flex flex-col md:flex-row items-center gap-10 overflow-hidden"
      >
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-300/20 rounded-full blur-3xl"></div>

        {/* Avatar */}
        <div className="relative group">
          <img
            src={user.avatar}
            alt="avatar"
            className="w-36 h-36 rounded-full shadow-xl border-4 border-white object-cover group-hover:scale-105 transition"
          />
          <button className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-700">
            <Edit3 size={18} />
          </button>
        </div>

        {/* User Details */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-900">{user.name}</h2>
          <p className="text-gray-600 text-lg">{user.email}</p>

          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <button
              onClick={() => navigate("/")}
              className="px-6 py-2 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-lg"
            >
              Home
            </button>

            <button
              onClick={signOut}
              className="px-6 py-2 rounded-xl bg-red-500 text-white font-bold hover:bg-red-600 shadow-lg"
            >
              Logout
            </button>
          </div>
        </div>
      </motion.div>

      {/* ==================== TRIP TABS ==================== */}
      <div className="mt-20">
        <h3 className="text-3xl font-extrabold text-gray-900 mb-6">Your Trips</h3>

        <div className="flex gap-6 border-b pb-2">
          {[
            { id: "upcoming", label: "Upcoming", icon: <Clock size={18} /> },
            { id: "past", label: "Past Trips", icon: <CheckCircle size={18} /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-2 flex items-center gap-2 text-lg font-semibold transition ${
                activeTab === tab.id
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* ==================== TRIP CARDS ==================== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {(activeTab === "upcoming" ? upcoming : past).map((b) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition"
            >
              <img src={b.image} alt={b.title} className="w-full h-48 object-cover" />

              <div className="p-6">
                <h4 className="text-xl font-extrabold text-gray-900">{b.title}</h4>
                <p className="text-gray-500">{b.date}</p>

                <p className="text-gray-700 mt-2">
                  Travellers: <span className="font-semibold">{b.travellers}</span>
                </p>

                {/* SAFE total display */}
                <p className="text-green-600 font-extrabold mt-2">
                  ₹{(b.total ?? 0).toLocaleString()}
                </p>

                {activeTab === "upcoming" && (
                  <button
                    onClick={() => cancelBooking(b.id)}
                    className="mt-4 w-full py-2 rounded-xl bg-red-100 text-red-600 font-bold hover:bg-red-200 flex items-center justify-center gap-2"
                  >
                    <Trash2 size={18} /> Cancel
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* EMPTY STATES */}
        {activeTab === "upcoming" && upcoming.length === 0 && (
          <p className="text-gray-500 mt-6">
            No upcoming trips.{" "}
            <Link to="/trips" className="text-blue-600 underline">
              Book now →
            </Link>
          </p>
        )}

        {activeTab === "past" && past.length === 0 && (
          <p className="text-gray-500 mt-6">No past trips yet.</p>
        )}
      </div>

      {/* ==================== WISHLIST ==================== */}
      <div className="mt-24">
        <h3 className="text-3xl font-extrabold text-gray-900 flex items-center gap-2 mb-6">
          Wishlist <Heart className="text-red-500" fill="red" size={28} />
        </h3>

        {wishlistState.length === 0 ? (
          <div className="text-gray-500 bg-white p-10 rounded-3xl shadow-inner text-center border">
            No wishlist items yet.  
            <Link className="text-blue-600 underline ml-1" to="/trips">
              Explore →
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {wishlistState.map((item) => (
              <Link key={item.id} to={`/trip/${item.id}`} className="block group">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition flex flex-col">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                  />

                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                      {item.location}
                    </p>

                    <div className="flex justify-between items-center mt-4">
                      <p className="text-green-600 font-extrabold text-lg">
                        ₹{(item.price ?? 0).toLocaleString()}
                      </p>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleRemoveWish(item.id);
                        }}
                        className="text-red-500 font-semibold hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
