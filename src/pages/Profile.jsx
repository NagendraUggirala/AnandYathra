import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useAuth } from "../auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Edit3, Heart, Clock, CheckCircle, User } from "lucide-react";
import { getWishlist, removeFromWishlist } from "../utils/wishlist";

export default function Profile() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  // ---------- MAIN STATES ----------
  const [tab, setTab] = useState("profile");
  const [wishlistState, setWishlistState] = useState([]);

  // ---------- TABS ----------
  const tabs = [
    { id: "profile", label: "Profile", icon: <User size={18} /> },
    { id: "upcoming", label: "Upcoming Trips", icon: <Clock size={18} /> },
    { id: "past", label: "Past Trips", icon: <CheckCircle size={18} /> },
    { id: "wishlist", label: "Wishlist", icon: <Heart size={18} className="text-red-500" /> }
  ];

  // ---------- Underline Refs ----------
  const navRef = useRef(null);
  const tabRefs = useRef({});
  const underlineRef = useRef(null);

  // ---------- Load wishlist ----------
  useEffect(() => {
    setWishlistState(getWishlist());
  }, []);

  // ---------- Move underline ----------
  const updateUnderline = () => {
    const nav = navRef.current;
    const line = underlineRef.current;
    const active = tabRefs.current[tab];
    if (!nav || !line || !active) return;

    const navRect = nav.getBoundingClientRect();
    const tabRect = active.getBoundingClientRect();

    line.style.width = `${tabRect.width}px`;
    line.style.transform = `translateX(${tabRect.left - navRect.left}px)`;
  };

  useLayoutEffect(() => {
    updateUnderline();
    const timer = setTimeout(updateUnderline, 50);
    return () => clearTimeout(timer);
  }, [tab, wishlistState]);

  useEffect(() => {
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, []);

  // ---------- Early return AFTER all hooks ----------
  if (!user) {
    navigate("/signin");
    return null;
  }

  // ---------- Booking logic ----------
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

  // ---------- Tab Animation Settings ----------
  const tabAnimation = {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
    transition: { duration: 0.35 }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-20">

      {/* ===================== TAB NAVIGATION ===================== */}
      <div className="relative">
        <div ref={navRef} className="flex justify-center gap-6 border-b pb-3 overflow-x-auto no-scrollbar">
          {tabs.map((t) => (
            <button
              key={t.id}
              ref={(el) => (tabRefs.current[t.id] = el)}
              onClick={() => setTab(t.id)}
              className={`pb-2 flex items-center gap-2 text-lg font-semibold transition ${
                tab === t.id ? "text-blue-600" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {t.icon}
              <span className="hidden sm:inline">{t.label}</span>
            </button>
          ))}
        </div>

        <motion.div
          ref={underlineRef}
          className="absolute bottom-0 left-0 h-0.5 bg-blue-600 rounded-full"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>

      {/* ===================== TAB CONTENT ===================== */}
      <AnimatePresence mode="wait">
        {/* -------- PROFILE TAB -------- */}
      {tab === "profile" && (
  <motion.div
    key="profile"
    {...tabAnimation}
    className="mt-10 bg-white rounded-3xl shadow-xl p-10"
  >
    {/* ================= USER INFO ROW ================= */}
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

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

      {/* Name + Email + Buttons */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          {user.name}
        </h2>
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

    {/* ================= QUICK ACCESS BUTTONS ================= */}
    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">

      {/* Edit Profile */}
      <button className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl shadow border hover:shadow-lg transition">
        <Edit3 className="text-blue-600" />
        <span className="mt-2 text-sm font-semibold">Edit Profile</span>
      </button>

      {/* Change Password */}
      <button className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl shadow border hover:shadow-lg transition">
        <span className="text-yellow-600 text-xl">🔐</span>
        <span className="mt-2 text-sm font-semibold">Change Password</span>
      </button>

      {/* View Bookings */}
      <button
        onClick={() => setTab("upcoming")}
        className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl shadow border hover:shadow-lg transition"
      >
        <Clock className="text-blue-500" />
        <span className="mt-2 text-sm font-semibold">View Bookings</span>
      </button>

      {/* Payments */}
      <button className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl shadow border hover:shadow-lg transition">
        <span className="text-green-600 text-xl">💳</span>
        <span className="mt-2 text-sm font-semibold">Payments</span>
      </button>

      {/* Saved Travellers */}
      <button className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl shadow border hover:shadow-lg transition">
        <span className="text-orange-600 text-xl">🧍</span>
        <span className="mt-2 text-sm font-semibold">Saved Travellers</span>
      </button>

      {/* Support */}
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



        {/* -------- UPCOMING TRIPS TAB -------- */}
        {tab === "upcoming" && (
          <motion.div key="upcoming" {...tabAnimation} className="mt-10">
            <h3 className="text-2xl font-bold mb-4">Upcoming Trips</h3>

            {upcoming.length === 0 ? (
              <p>No upcoming trips. <Link to="/trips" className="text-blue-600 underline">Book now →</Link></p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {upcoming.map((b, index) => (
                  <div key={index} className="bg-white p-6 rounded-3xl shadow-xl border">
                    <img src={b.image} className="w-full h-48 object-cover rounded-xl" />
                    <h4 className="text-xl font-bold mt-3">{b.title}</h4>
                    <p className="text-gray-600">{b.date}</p>
                    <p className="mt-2">Travellers: {b.travellers}</p>
                    <p className="text-green-600 font-bold mt-2">₹{b.total}</p>

                    <button
                      onClick={() => cancelBooking(index)}
                      className="mt-4 w-full bg-red-100 text-red-600 py-2 rounded-xl flex items-center justify-center gap-2"
                    >
                      <Trash2 size={18} /> Cancel
                    </button>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* -------- PAST TRIPS TAB -------- */}
        {tab === "past" && (
          <motion.div key="past" {...tabAnimation} className="mt-10">
            <h3 className="text-2xl font-bold mb-4">Past Trips</h3>

            {past.length === 0 ? (
              <p>No past trips yet.</p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {past.map((b, index) => (
                  <div key={index} className="bg-white p-6 rounded-3xl shadow-xl border">
                    <img src={b.image} className="w-full h-48 object-cover rounded-xl" />
                    <h4 className="text-xl font-bold mt-3">{b.title}</h4>
                    <p className="text-gray-600">{b.date}</p>
                    <p className="mt-2">Travellers: {b.travellers}</p>
                    <p className="text-green-600 font-bold mt-2">₹{b.total}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* -------- WISHLIST TAB -------- */}
        {tab === "wishlist" && (
          <motion.div key="wishlist" {...tabAnimation} className="mt-10">
            <h3 className="text-2xl font-bold mb-4">Wishlist</h3>

            {wishlistState.length === 0 ? (
              <div className="p-10 bg-white rounded-3xl shadow-xl text-center border">
                No wishlist items yet.
                <Link to="/destinations" className="text-blue-600 underline ml-1">Explore →</Link>
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
                    <div className="bg-white rounded-3xl shadow-xl p-5 border hover:shadow-2xl transition">
                      <img src={item.image} className="w-full h-48 object-cover rounded-xl" />
                      <h3 className="mt-3 font-bold text-xl">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.location}</p>

                      <div className="flex justify-between items-center mt-4">
                        <p className="text-green-600 font-bold">{item.price ? `₹${item.price}` : "Explore →"}</p>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            removeWish(item.id);
                          }}
                          className="text-red-500 font-semibold"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
