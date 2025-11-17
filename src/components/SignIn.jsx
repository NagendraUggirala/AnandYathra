import React from "react";
import { motion } from "framer-motion";

export default function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign in submitted");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lightyellow via-white to-lightorange 
                    flex items-center justify-center p-6 relative overflow-hidden pt-32">
      {/* ↑ pt-32 added so Sign-In page appears below the fixed navbar */}

      {/* ☁ Clouds */}
      <motion.img
        src="/assets/cloud.png"
        alt="cloud"
        className="w-24 h-14 object-contain absolute bottom-20 left-10 opacity-70"
        animate={{ x: [0, 50, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      <motion.img
        src="/assets/cloud.png"
        alt="cloud"
        className="w-36 h-20 object-contain absolute top-40 right-20 opacity-70"
        animate={{ x: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* SIGN-IN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 border border-silver/50 relative z-10"
      >
        {/* Title + rotating globe */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3"
        >
          <h2 className="text-3xl font-bold text-saffron drop-shadow-sm">
            Welcome Back
          </h2>

          <motion.img
            src="/assets/globe.png"
            alt="globe"
            className="w-20 h-20 object-contain opacity-70"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          />
        </motion.div>

        <p className="text-center text-skyblue mt-2 text-sm">
          Sign in to manage your bookings and trips.
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="block text-saffron font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full p-3 border border-silver rounded-xl focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          <div>
            <label className="block text-saffron font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="Enter your password"
              className="w-full p-3 border border-silver rounded-xl focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-skyblue text-white py-3 rounded-xl font-semibold shadow-md hover:bg-lightorange transition"
          >
            Sign In
          </motion.button>
        </form>

        <p className="text-center text-saffron mt-6 text-sm">
          Don't have an account?{" "}
          <a href="/signup" className="text-skyblue hover:underline">
            Sign Up
          </a>
        </p>
      </motion.div>
    </div>
  );
}
