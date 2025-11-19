import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../auth/AuthContext";

export default function SignIn() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState(null);

  function showToast(type, message) {
    setToast({ type, message });
    setTimeout(() => setToast(null), 2500);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const ok = signIn(email, password);
    if (!ok) {
      showToast("error", "Invalid email or password ❌");
    } else {
      showToast("success", "Login Successful 🎉");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center pt-28 bg-gradient-to-br from-blue-50 via-white to-yellow-50 px-6">

      {/* 🚀 BEAUTIFUL POPUP TOAST MESSAGE */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            className={`fixed top-6 mx-auto left-1/2 -translate-x-1/2 px-5 py-3 rounded-xl shadow-xl text-white font-semibold 
              ${toast.type === "success" ? "bg-green-600" : "bg-red-500"} 
            `}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/40"
      >
        <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r 
                       from-blue-600 to-orange-500 bg-clip-text text-transparent drop-shadow">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600 mt-2">Sign in to continue your journey ✨</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">

          {/* Email Input */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="example@mail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition"
            />
          </div>

          <button
            className="w-full bg-gradient-to-r from-blue-600 to-orange-500 
                       text-white py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition">
            Sign In
          </button>
        </form>

        <p className="text-center mt-6 text-gray-700">
          Don’t have an account?{" "}
          <Link className="text-blue-600 font-semibold hover:underline" to="/signup">
            Create Account
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
