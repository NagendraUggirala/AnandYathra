import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../auth/AuthContext";

export default function SignIn() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const ok = signIn(email, password);
    if (!ok) {
      setError("Invalid email or password ❌");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center pt-32 bg-gray-50 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl"
      >
        <h2 className="text-3xl font-bold text-center text-orange-600">
          Sign In
        </h2>

        {error && <p className="text-red-500 text-center mt-3">{error}</p>}

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
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
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-xl"
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold">
            Sign In
          </button>
        </form>

        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <Link className="text-blue-600" to="/signup">
            Create Account
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
