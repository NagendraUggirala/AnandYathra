import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../auth/AuthContext";

export default function SignUp() {
  const { signUp } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name.length < 2) {
      setError("Name must be at least 2 characters.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    signUp(name, email, password);
  }

  return (
    <div className="min-h-screen flex items-center justify-center pt-32 px-6 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl"
      >
        <h2 className="text-3xl font-bold text-center text-orange-600">
          Create Account
        </h2>

        {error && <p className="text-red-500 text-center mt-3">{error}</p>}

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="password"
            placeholder="Password (min 6 chars)"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-xl"
          />

          <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold">
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link className="text-blue-600" to="/signin">
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
