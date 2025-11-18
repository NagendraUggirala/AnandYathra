import React from "react";
import { useAuth } from "../auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Trash2, Edit3, Heart } from "lucide-react";

export default function Profile() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  // Redirect if not logged in
  if (!user) {
    navigate("/signin");
    return null;
  }

  // Get bookings from localStorage
  const allBookings = JSON.parse(localStorage.getItem("bookings")) || [];
  const userBookings = allBookings.filter((b) => b.email === user.email);

  function cancelBooking(index) {
    const newList = [...allBookings];
    newList.splice(index, 1);
    localStorage.setItem("bookings", JSON.stringify(newList));
    window.location.reload();
  }

  return (
    <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">

      {/* USER HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200 flex flex-col md:flex-row gap-8 items-center"
      >
        {/* Avatar */}
        <div className="relative">
          <img
            src={user.avatar}
            alt="avatar"
            className="w-32 h-32 rounded-full border-4 border-orange-500 shadow-lg object-cover"
          />

          {/* Edit Profile Icon */}
          <button className="absolute bottom-1 right-1 bg-orange-500 text-white p-2 rounded-full shadow hover:bg-orange-600">
            <Edit3 size={18} />
          </button>
        </div>

        {/* Details */}
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold text-gray-800">{user.name}</h2>
          <p className="text-gray-600 text-lg">{user.email}</p>

          <div className="mt-5 flex gap-4">
            <button
              onClick={() => navigate("/")}
              className="px-5 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 shadow"
            >
              Go Home
            </button>
            <button
              onClick={signOut}
              className="px-5 py-2 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 shadow"
            >
              Log Out
            </button>
          </div>
        </div>
      </motion.div>

      {/* BOOKING HISTORY */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Your Bookings
        </h3>

        {userBookings.length === 0 ? (
          <div className="text-gray-500 text-lg">
            You have no bookings yet.  
            <Link to="/trips" className="ml-2 text-blue-500 underline">
              Book a trip →
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {userBookings.map((b, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
              >
                {/* Image */}
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-40 object-cover"
                />

                <div className="p-5">
                  <h4 className="text-xl font-bold text-gray-800">{b.title}</h4>
                  <p className="text-gray-500 mt-1">{b.date}</p>

                  <p className="text-gray-700 mt-2">
                    Travellers:{" "}
                    <span className="font-semibold">{b.travellers}</span>
                  </p>

                  <p className="text-green-600 font-bold mt-2">
                    Paid: ₹{b.total.toLocaleString()}
                  </p>

                  <button
                    onClick={() => cancelBooking(index)}
                    className="mt-4 w-full py-2 rounded-xl bg-red-100 text-red-600 font-semibold 
                               hover:bg-red-200 flex items-center justify-center gap-2"
                  >
                    <Trash2 size={18} /> Cancel Booking
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* WISHLIST SECTION */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          Wishlist <Heart className="text-red-500" />
        </h3>

        <div className="mt-4 text-gray-500">
          No wishlist items yet.
        </div>
      </div>
    </div>
  );
}
