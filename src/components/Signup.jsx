import React from "react";
import { motion } from "framer-motion";

export default function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign up submitted");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lightyellow via-white to-lightorange 
                    flex items-center justify-center p-6 relative overflow-hidden pt-32">
      {/* ↑ pt-32 added so content sits below fixed navbar */}

      {/* ☁ Cloud Left */}
      <motion.img
        src="/assets/cloud.png"
        alt="cloud"
        className="w-24 h-14 object-contain absolute bottom-20 left-5 opacity-70"
        animate={{ x: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* ☁ Cloud Right */}
      <motion.img
        src="/assets/cloud.png"
        alt="cloud"
        className="w-32 h-20 object-contain absolute top-32 right-10 opacity-60"
        animate={{ x: [0, -50, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />

      {/* Sign-up Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 border border-silver/50 relative z-10"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-saffron drop-shadow-sm"
        >
          Create Your Account
        </motion.h1>

        <p className="text-center text-skyblue mt-2 text-sm">
          Sign up and start planning your perfect trips.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Name */}
          <div>
            <label className="block text-saffron font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="Your name"
              className="w-full p-3 border border-silver rounded-xl focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          {/* Email */}
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

          {/* Password */}
          <div>
            <label className="block text-saffron font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="Create a password"
              className="w-full p-3 border border-silver rounded-xl focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-saffron font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              required
              placeholder="Re-enter password"
              className="w-full p-3 border border-silver rounded-xl focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-skyblue text-white py-3 rounded-xl font-semibold shadow-md 
                       hover:bg-gradient-to-r hover:from-saffron hover:to-lightorange 
                       transition-all duration-300"
          >
            Sign Up
          </motion.button>
        </form>

        {/* Already have account */}
        <p className="text-center text-saffron mt-6 text-sm">
          Already have an account?{" "}
          <a href="/signin" className="text-skyblue hover:underline">
            Sign In
          </a>
        </p>
      </motion.div>
    </div>
  );
}
