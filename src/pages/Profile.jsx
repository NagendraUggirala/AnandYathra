import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useAuth } from "../auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Trash2,
  Edit3,
  Heart,
  Clock,
  CheckCircle,
  User,
} from "lucide-react";

import { getWishlist, removeFromWishlist } from "../utils/wishlist";

export default function Profile() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const [tab, setTab] = useState("profile");
  const [wishlistState, setWishlistState] = useState([]);

  // ---- Refs for underline animation ----
  const tabRefs = {
    profile: useRef(null),
    upcoming: useRef(null),
    past: useRef(null),
    wishlist: useRef(null),
  };

  const underlineRef = useRef(null);

  // ---- Move underline smoothly ----
  useLayoutEffect(() => {
    const activeTab = tabRefs[tab]?.current;
    const underline = underlineRef.current;

    if (activeTab && underline) {
      const { offsetLeft, offsetWidth } = activeTab;
      underline.style.left = offsetLeft + "px";
      underline.style.width = offsetWidth + "px";
    }
  }, [tab]);

  // ---- Load wishlist ----
  useEffect(() => {
    setWishlistState(getWishlist());
  }, []);

  // ---- Protect route ----
  if (!user) {
    navigate("/signin");
    return null;
  }

  // ================= BOOKINGS =================
  const allBookings = JSON.parse(localStorage.getItem("bookings")) || [];
  const myBookings = allBookings.filter((b) => b.email === user.email);

  const today = new Date();
  const upcoming = myBookings.filter((b) => new Date(b.date) >= today);
  const past = myBookings.filter((b) => new Date(b.date) < today);

  function cancelBooking(index) {
    const updated = [...allBookings];
    updated.splice(index, 1);
    localStorage.setItem("bookings", JSON.stringify(updated));
    window.location.reload();
  }

  function removeWish(id) {
    removeFromWishlist(id);
    setWishlistState(getWishlist());
  }

  // ================= TAB ANIMATION =================
  const tabAnimation = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.35 },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-20">

      {/* ===================== TAB NAVIGATION ===================== */}
      <div className="relative flex items-center justify-center gap-8 sm:gap-12 border-b pb-3">

        {[
          { id: "profile", label: "Profile", icon: <User size={18} /> },
          { id: "upcoming", label: "Upcoming Trips", icon: <Clock size={18} /> },
          { id: "past", label: "Past Trips", icon: <CheckCircle size={18} /> },
          { id: "wishlist", label: "Wishlist", icon: <Heart size={18} className="text-red-500" /> },
        ].map((t) => (
          <button
            key={t.id}
            ref={tabRefs[t.id]}
            onClick={() => setTab(t.id)}
            className={`pb-2 flex items-center gap-2 text-base sm:text-lg font-semibold transition 
              ${tab === t.id ? "text-blue-600" : "text-gray-500 hover:text-gray-700"}`}
          >
            {t.icon} {t.label}
          </button>
        ))}

        {/* Animated Underline */}
        <motion.div
          ref={underlineRef}
          layoutId="underline"
          className="absolute bottom-0 h-[3px] bg-blue-600 rounded-full"
        />
      </div>

      {/* ===================== TABS ===================== */}

      {/* -------- Profile Tab -------- */}
      {tab === "profile" && (
        <motion.div key="profile" {...tabAnimation}
          className="mt-10 bg-white rounded-3xl shadow-xl p-10"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

            {/* Avatar */}
            <div className="relative group flex-shrink-0">
              <img
                src={user.avatar}
                className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-blue-500 shadow-lg object-cover"
              />
              <button className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-700">
                <Edit3 size={18} />
              </button>
            </div>

            {/* Name + Email */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">{user.name}</h2>
              <p className="text-gray-600 text-lg">{user.email}</p>

              {/* Home + Logout */}
              <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <button
                  onClick={() => navigate("/")}
                  className="px-6 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 shadow"
                >
                  Home
                </button>
                <button
                  onClick={signOut}
                  className="px-6 py-2 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 shadow"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Quick Access */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">

            <button className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl shadow border hover:shadow-lg transition">
              <Edit3 className="text-blue-600" />
              <span className="mt-2 text-sm font-semibold">Edit Profile</span>
            </button>

            <button className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl shadow border hover:shadow-lg transition">
              <span className="text-yellow-600 text-xl">🔐</span>
              <span className="mt-2 text-sm font-semibold">Change Password</span>
            </button>

            <button
              onClick={() => setTab("upcoming")}
              className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl shadow border hover:shadow-lg transition"
            >
              <Clock className="text-blue-500" />
              <span className="mt-2 text-sm font-semibold">View Bookings</span>
            </button>

            <button className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl shadow border hover:shadow-lg transition">
              <span className="text-green-600 text-xl">💳</span>
              <span className="mt-2 text-sm font-semibold">Payments</span>
            </button>

            <button className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl shadow border hover:shadow-lg transition">
              <span className="text-orange-600 text-xl">🧍</span>
              <span className="mt-2 text-sm font-semibold">Saved Travellers</span>
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl shadow border hover:shadow-lg transition"
            >
              <span className="text-orange-600 text-xl">📞</span>
              <span className="mt-2 text-sm font-semibold">Support</span>
            </button>

          </div>
        </motion.div>
      )}

      {/* -------- Upcoming Trips -------- */}
      {tab === "upcoming" && (
        <motion.div key="upcoming" {...tabAnimation} className="mt-10">
          <h3 className="text-2xl font-extrabold mb-4">Upcoming Trips</h3>

          {upcoming.length === 0 ? (
            <p className="text-gray-500">
              No upcoming trips.{" "}
              <Link to="/trips" className="text-blue-600 underline">Book now →</Link>
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {upcoming.map((b, index) => (
                <div key={index} className="bg-white rounded-3xl border shadow-lg p-6">
                  <img src={b.image} className="w-full h-48 rounded-xl object-cover" />
                  <h4 className="text-xl font-bold mt-3">{b.title}</h4>
                  <p className="text-gray-600">{b.date}</p>
                  <p className="mt-2 text-gray-700">{b.travellers} Travellers</p>
                  <p className="text-green-600 font-bold mt-2">₹{b.total.toLocaleString()}</p>

                  <button
                    onClick={() => cancelBooking(index)}
                    className="mt-4 w-full py-2 bg-red-100 text-red-600 rounded-xl font-bold hover:bg-red-200 flex items-center justify-center gap-2"
                  >
                    <Trash2 size={18} /> Cancel
                  </button>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      )}

      {/* -------- Past Trips -------- */}
      {tab === "past" && (
        <motion.div key="past" {...tabAnimation} className="mt-10">
          <h3 className="text-2xl font-extrabold mb-4">Past Trips</h3>

          {past.length === 0 ? (
            <p className="text-gray-500">No past trips yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {past.map((b, index) => (
                <div key={index} className="bg-white rounded-3xl border shadow-lg p-6">
                  <img src={b.image} className="w-full h-48 rounded-xl object-cover" />
                  <h4 className="text-xl font-bold mt-3">{b.title}</h4>
                  <p className="text-gray-600">{b.date}</p>
                  <p className="mt-2 text-gray-700">{b.travellers} Travellers</p>
                  <p className="text-green-600 font-bold mt-2">₹{b.total.toLocaleString()}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      )}

      {/* -------- Wishlist -------- */}
      {tab === "wishlist" && (
        <motion.div key="wishlist" {...tabAnimation} className="mt-10">
          <h3 className="text-2xl font-extrabold mb-4">Wishlist</h3>

          {wishlistState.length === 0 ? (
            <div className="text-gray-500 bg-white p-10 text-center rounded-3xl border shadow-inner">
              No wishlist items yet.
              <Link className="text-blue-600 underline ml-1" to="/destinations">
                Explore →
              </Link>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {wishlistState.map((item) => (
                <Link
                  key={item.id}
                  to={
                    item.tripId
                      ? `/trip/${item.tripId}`
                      : `/category/${item.categoryId}/${item.placeId}`
                  }
                >
                  <div className="bg-white rounded-3xl border shadow-lg overflow-hidden hover:scale-[1.02] transition">
                    <img src={item.image} className="w-full h-48 object-cover" />
                    <div className="p-5">
                      <h3 className="font-bold text-xl">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.location}</p>

                      <div className="flex justify-between items-center mt-4">
                        {item.price ? (
                          <p className="text-green-600 font-bold">₹{item.price}</p>
                        ) : (
                          <p className="text-blue-600 font-semibold">Explore →</p>
                        )}

                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            removeWish(item.id);
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
        </motion.div>
      )}

    </div>
  );
}
