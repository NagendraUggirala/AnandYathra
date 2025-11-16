import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-yellow-50 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">Anand Yatra</h2>
            <p className="text-sm text-gray-600 mt-1">Travel Safe • Travel Happy</p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-4">
              <Facebook className="w-5 h-5 text-gray-600 hover:text-yellow-600 cursor-pointer transition" />
              <Instagram className="w-5 h-5 text-gray-600 hover:text-yellow-600 cursor-pointer transition" />
              <Twitter className="w-5 h-5 text-gray-600 hover:text-yellow-600 cursor-pointer transition" />
            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Explore</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-yellow-600 cursor-pointer">Destinations</li>
              <li className="hover:text-yellow-600 cursor-pointer">Packages</li>
              <li className="hover:text-yellow-600 cursor-pointer">Hotels</li>
              <li className="hover:text-yellow-600 cursor-pointer">Travel Blogs</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Support</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-yellow-600 cursor-pointer">Contact Us</li>
              <li className="hover:text-yellow-600 cursor-pointer">Help Center</li>
              <li className="hover:text-yellow-600 cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-yellow-600 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Get in Touch</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-gray-700" />
                support@anandyatra.com
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-gray-700" />
                +91 98765 43210
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-gray-700" />
                Hyderabad, Telangana, India
              </li>
            </ul>
          </div>
        </div>

       

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-gray-200 my-8"></div>

        {/* COPYRIGHT */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="font-semibold">Anand Yatra</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
