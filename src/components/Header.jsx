import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useAuth } from "../auth/AuthContext";
import toast from "react-hot-toast";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();   

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        
        {/* ⭐ BRAND */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/founder.jpg"
            alt="Founder"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover object-top shadow-md"
          />

          <img
            src="/assets/Anandlogo.png"
            alt="Logo"
            className="w-10 h-10 object-contain sm:w-12 sm:h-12"
          />

          <div className="flex flex-col leading-tight">
            <h1 className="text-lg sm:text-xl font-bold text-orange-600">
              ANAND YATRA
            </h1>
            <p className="text-[10px] sm:text-xs text-gray-600 italic">
              "Dharmo Rakshati Rakshitah"
            </p>
          </div>
        </div>

        {/* ⭐ Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[16px] font-medium text-[#1b2b47]">
          <Link to="/" className="hover:text-orange-600 transition">Home</Link>
          <Link to="/destinations" className="hover:text-orange-600 transition">Destinations</Link>
          <Link to="/trips" className="hover:text-orange-600 transition">Packages</Link>
          <Link to="/about" className="hover:text-orange-600 transition">About</Link>
          <Link to="/contact" className="hover:text-orange-600 transition">Contact</Link>
        </nav>

        {/* ⭐ Desktop Auth */}
        <div className="hidden md:flex items-center gap-4">
          {!user ? (
            <>
              <Link
                to="/signup"
                className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
              >
                Sign Up
              </Link>

              <Link
                to="/signin"
                className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
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
                  className="w-9 h-9 rounded-full border shadow"
                />
                <span className="font-semibold text-[#1b2b47]">
                  {user.name}
                </span>
              </Link>

              {/* Logout */}
              <button
                onClick={() => {
                  toast.success("Logged out successfully ✨");
                  signOut();
                  setTimeout(() => navigate("/"), 600);
                }}
                className="px-6 py-2 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 shadow"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* ⭐ Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-[#1b2b47]"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* ⭐ Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">

          {/* 📌 Mobile Profile */}
          {user && (
            <Link
              to="/profile"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 border-b pb-3"
            >
              <img
                src={user.avatar}
                className="w-10 h-10 rounded-full shadow"
              />
              <span className="font-semibold text-[#1b2b47] text-lg">
                {user.name}
              </span>
            </Link>
          )}

          {/* Nav Links */}
          <Link onClick={() => setOpen(false)} to="/" className="block text-lg">Home</Link>
          <Link onClick={() => setOpen(false)} to="/destinations" className="block text-lg">Destinations</Link>
          <Link onClick={() => setOpen(false)} to="/trips" className="block text-lg">Trips</Link>
          <Link onClick={() => setOpen(false)} to="/about" className="block text-lg">About</Link>
          <Link onClick={() => setOpen(false)} to="/contact" className="block text-lg">Contact</Link>

          {/* Auth Buttons */}
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
            <button
              onClick={() => {
                toast.success("Logged out successfully ✨");
                signOut();
                setOpen(false);
                navigate("/");
              }}
              className="text-red-600 font-semibold text-lg"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}
