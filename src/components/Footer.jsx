import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-100 via-blue-50 to-yellow-100 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* BRAND + LOGO */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/assets/Anandlogo.png"   
                alt="Anand Yatra Logo"
                className="w-10 h-10 object-contain"
              />
              <h2 className="text-2xl font-extrabold text-blue-900">Anand Yatra</h2>
            </div>

            <p className="text-sm text-gray-700 mt-1"><br></br>Travel Safe • Travel Happy</p>

            {/* MOBILE SOCIAL ICONS */}
            <div className="mt-8 sm:hidden flex justify-start gap-5">
              <a href="#" className="text-pink-600 hover:scale-110 transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-700 hover:scale-110 transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-500 hover:scale-110 transition">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <h4 className="text-lg font-semibold text-blue-900 mb-3">Explore</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="hover:text-yellow-600 cursor-pointer">Destinations</li>
              <li className="hover:text-yellow-600 cursor-pointer">Packages</li>
              <li className="hover:text-yellow-600 cursor-pointer">Hotels</li>
              <li className="hover:text-yellow-600 cursor-pointer">Travel Blogs</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="text-lg font-semibold text-blue-900 mb-3">Support</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="hover:text-yellow-600 cursor-pointer">Contact Us</li>
              <li className="hover:text-yellow-600 cursor-pointer">Help Center</li>
              <li className="hover:text-yellow-600 cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-yellow-600 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-semibold text-blue-900 mb-3">Get in Touch</h4>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-blue-700" />
                support@anandyatra.com
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-blue-700" />
                +91 98765 43210
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-blue-700" />
                Hyderabad, Telangana, India
              </li>
            </ul>

            {/* DESKTOP SOCIAL ICONS */}
            <div className="hidden sm:flex gap-5 mt-6">
              <a href="#" className="text-pink-600 hover:scale-110 transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-700 hover:scale-110 transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-500 hover:scale-110 transition">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-gray-300 my-8"></div>

        {/* COPYRIGHT */}
        <div className="text-center text-sm text-gray-700">
          © {new Date().getFullYear()} <span className="font-semibold text-blue-900">Anand Yatra</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
