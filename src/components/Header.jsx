import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useAuth } from "../auth/AuthContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <header className="fixed w-full top-0 z-50 bg-white text-navy shadow-lg border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* ⭐ BRAND — EXACT OLD DESIGN RESTORED */}
        <div className="flex items-center gap-3">
          {/* Founder Photo */}
          <img
            src="/assets/founder.jpg"
            alt="Founder"
            className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full object-cover object-top shadow-lg"
          />

          {/* Logo */}
          <img
            src="/assets/Anandlogo.png"
            alt="Logo"
            className="w-12 h-12 object-contain"
          />

          {/* Yatra Text */}
          <div>
            <h1 className="text-xl font-bold text-orange-600">ANAND YATRA</h1>
            <p className="text-sm text-gray-600 italic mt-0.5">
              "Dharmo Rakshati Rakshitah"
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-lg font-medium text-[#1b2b47]">
          <Link to="/" className="hover:text-orange-600 transition">Home</Link>
          <Link to="/destinations" className="hover:text-orange-600 transition">Destinations</Link>
          <Link to="/trips" className="hover:text-orange-600 transition">Trips</Link>
          <Link to="/about" className="hover:text-orange-600 transition">About</Link>
          <Link to="/contact" className="hover:text-orange-600 transition">Contact</Link>
        </nav>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-4">
          {!user ? (
            <>
              <Link
                to="/signup"
                className="bg-green-500 text-white px-5 py-2 rounded-lg shadow hover:bg-green-600 transition"
              >
                Sign Up
              </Link>

              <Link
                to="/signin"
                className="bg-green-500 text-white px-5 py-2 rounded-lg shadow hover:bg-green-600 transition"
              >
                Sign In
              </Link>
            </>
          ) : (
            <>
              {/* Avatar + Name */}
              <Link to="/profile" className="flex items-center gap-2">
                <img
                  src={user.avatar}
                  alt="avatar"
                  className="w-10 h-10 rounded-full border shadow"
                />
                <span className="font-semibold text-[#1b2b47]">
                  {user.name}
                </span>
              </Link>

              {/* Logout */}
              <button
                onClick={signOut}
                className="text-red-600 font-semibold hover:text-red-700 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-[#1b2b47]"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4 space-y-4">
          <Link to="/" onClick={() => setOpen(false)} className="block text-lg font-medium">
            Home
          </Link>
          <Link to="/destinations" onClick={() => setOpen(false)} className="block text-lg">
            Destinations
          </Link>
          <Link to="/trips" onClick={() => setOpen(false)} className="block text-lg">
            Trips
          </Link>
          <Link to="/about" onClick={() => setOpen(false)} className="block text-lg">
            About
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block text-lg">
            Contact
          </Link>

          {!user ? (
            <>
              <Link
                to="/signup"
                onClick={() => setOpen(false)}
                className="block text-lg bg-green-500 text-white text-center py-2 rounded-lg shadow"
              >
                Sign Up
              </Link>

              <Link
                to="/signin"
                onClick={() => setOpen(false)}
                className="block text-lg bg-green-500 text-white text-center py-2 rounded-lg shadow"
              >
                Sign In
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  signOut();
                  setOpen(false);
                }}
                className="text-red-600 font-semibold"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
}
