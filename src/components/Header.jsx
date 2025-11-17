import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white text-navy shadow-lg backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-4 lg:py-3 flex items-center justify-between">
        
        {/* Logo + Profile Section */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/founder.jpg"
            alt="Profile"
            className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full shadow-lg object-cover object-top"
          />
<br />
          <img
            src="/assets/Anandlogo.png"
            alt="Logo"
            className="w-12 h-13 object-contain"
          />

          <div>
            <h1 className="text-xl font-bold text-orange-600">ANAND YATRA</h1>
            <p className="text-sm text-gray-600 italic">
              "Dharmo Rakshati Rakshitah"
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-lg font-medium text-[#1b2b47]">
          <Link to="/" className="hover:text-orange-600 transition">Home</Link>
          <Link to="/destinations" className="hover:text-orange-600 transition">Destinations</Link>
          <Link to="/trips" className="hover:text-orange-600 transition">Trips</Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/signup"
            className="bg-green-500 text-white px-5 py-2 rounded-lg font-medium shadow hover:bg-green-600 transition"
          >
            Sign Up
          </Link>
          <Link
            to="/signin"
            className="bg-green-500 text-white px-5 py-2 rounded-lg font-medium shadow hover:bg-green-600 transition"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl text-[#1b2b47]"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4 space-y-4">
          <Link
            onClick={() => setOpen(false)}
            to="/"
            className="block text-lg font-medium text-[#1b2b47] hover:text-orange-600 transition"
          >
            Home
          </Link>

          <Link
            onClick={() => setOpen(false)}
            to="/destinations"
            className="block text-lg font-medium text-[#1b2b47] hover:text-orange-600 transition"
          >
            Destinations
          </Link>

          <Link
            onClick={() => setOpen(false)}
            to="/trips"
            className="block text-lg font-medium text-[#1b2b47] hover:text-orange-600 transition"
          >
            Trips
          </Link>

          <div className="flex flex-col gap-3 pt-3">
            <Link
              onClick={() => setOpen(false)}
              to="/signup"
              className="bg-green-500 text-white px-5 py-2 rounded-lg font-medium shadow hover:bg-green-600 transition text-center"
            >
              Sign Up
            </Link>
            <Link
              onClick={() => setOpen(false)}
              to="/signin"
              className="bg-green-500 text-white px-5 py-2 rounded-lg font-medium shadow hover:bg-green-600 transition text-center"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
