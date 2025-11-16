import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiHome, FiMapPin, FiCompass, FiUser, FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/20 border-b border-white/30 shadow-xl">
      
      {/* MAIN NAV */}
      <div className="max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">

        {/* LOGO + ROTATING GLOBE */}
        <Link to="/" className="flex items-center gap-3">
          <motion.img
            src="/assets/globe.png"
            alt="globe"
            className="w-10 h-10 opacity-90"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          />
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-skyblue to-saffron bg-clip-text text-transparent drop-shadow">
            Anand Yatra
          </h1>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-gray-800 font-semibold">

          {/* Nav Links with Animated Underline */}
          <Link className="relative group flex items-center gap-2" to="/">
            <FiHome className="text-skyblue" />
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-skyblue group-hover:w-full transition-all"></span>
          </Link>

          <Link className="relative group flex items-center gap-2" to="/destinations">
            <FiMapPin className="text-saffron" />
            Destinations
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-saffron group-hover:w-full transition-all"></span>
          </Link>

          <Link className="relative group flex items-center gap-2" to="/trips">
            <FiCompass className="text-gold" />
            Trips
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gold group-hover:w-full transition-all"></span>
          </Link>

          {/* SIGN IN */}
          <Link
            to="/signin"
            className="px-5 py-1.5 rounded-full bg-gradient-to-r from-skyblue to-blue-600 
                       text-white shadow-md hover:shadow-lg hover:scale-[1.05] transition-all"
          >
            Sign In
          </Link>

          {/* SIGN UP */}
          <Link
            to="/signup"
            className="px-5 py-1.5 rounded-full bg-gradient-to-r from-gold to-saffron
                       text-gray-900 font-bold shadow-md hover:shadow-lg hover:scale-[1.05] transition-all"
          >
            Sign Up
          </Link>
        </nav>

        {/* MOBILE TOGGLE BUTTON */}
        <button className="md:hidden text-3xl text-gray-800" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-white/40 backdrop-blur-xl border-t border-white/50 p-6 space-y-6 shadow-xl"
        >
          {/* Animated Nav */}
          <Link className="flex items-center gap-3 text-lg" to="/" onClick={() => setOpen(false)}>
            <FiHome className="text-skyblue" /> Home
          </Link>

          <Link className="flex items-center gap-3 text-lg" to="/destinations" onClick={() => setOpen(false)}>
            <FiMapPin className="text-saffron" /> Destinations
          </Link>

          <Link className="flex items-center gap-3 text-lg" to="/trips" onClick={() => setOpen(false)}>
            <FiCompass className="text-gold" /> Trips
          </Link>

          {/* Buttons */}
          <Link
            to="/signin"
            onClick={() => setOpen(false)}
            className="block text-center px-5 py-2 rounded-full 
                       bg-gradient-to-r from-skyblue to-blue-600 text-white shadow-md"
          >
            Sign In
          </Link>

          <Link
            to="/signup"
            onClick={() => setOpen(false)}
            className="block text-center px-5 py-2 rounded-full 
                       bg-gradient-to-r from-gold to-saffron text-white shadow-md"
          >
            Sign Up
          </Link>
        </motion.div>
      )}
    </header>
  );
}
