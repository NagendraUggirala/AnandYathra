import React, { useState } from "react";

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);

  // Form fields state to clear after submit
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowPopup(true);

    // Clear all form data after submit
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    // Auto close popup
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="pt-28">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold 
          bg-gradient-to-r from-blue-500 to-yellow-500 bg-clip-text 
          text-transparent drop-shadow-lg">
          Contact Us
        </h1>

        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
          Reach out to us for travel bookings, package details or any support.
          We’re always here for you.
        </p>
      </div>

      {/* ==========================
           GRID (LEFT FORM)
           (RIGHT INFO)
      =========================== */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* =======================
           LEFT SIDE — FORM
        ======================== */}
        <form
          onSubmit={handleSubmit}
          className="bg-blue-50 p-10 rounded-3xl shadow-xl border border-blue-300"
        >
          <h2 className="text-2xl font-bold text-blue-700 mb-6">
            Send a Message
          </h2>

          <div className="space-y-5">

            <div>
              <label className="block text-gray-700 mb-1 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-3 rounded-xl border border-gray-300 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-semibold">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-3 rounded-xl border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-semibold">
                Phone Number
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full p-3 rounded-xl border border-gray-300 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your mobile number"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-semibold">
                Message
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full p-3 rounded-xl h-32 border border-gray-300 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-yellow-500 
              text-white font-bold py-3 rounded-xl shadow-lg transition-all
              hover:scale-105 hover:shadow-2xl"
            >
              Submit
            </button>
          </div>
        </form>

        {/* =======================
           RIGHT SIDE — GET IN TOUCH
        ======================== */}
  {/* =======================
   RIGHT SIDE — GET IN TOUCH (NEW DESIGN)
======================= */}
<div className="bg-gradient-to-br from-yellow-50 to-blue-50 p-10 rounded-3xl shadow-xl border border-blue-200">

  <h2 className="text-3xl font-extrabold text-blue-700 mb-6">
    Get in Touch
  </h2>

  <p className="text-gray-700 leading-relaxed text-lg">
    We're here to assist you with travel planning, package information, and all booking-related queries.  
    Our support team responds quickly and ensures you have a smooth experience.
  </p>

  {/* Contact Cards */}
  <div className="mt-10 space-y-6">

    {/* Phone */}
    <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-md border-l-4 border-blue-500 hover:shadow-xl transition-all">
      <div className="text-blue-600 text-3xl">📞</div>
      <div>
        <h4 className="text-lg font-semibold text-gray-800">Phone Support</h4>
        <p className="text-gray-600 mt-1">+91 98765 43210</p>
      </div>
    </div>

    {/* Email */}
    <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-md border-l-4 border-yellow-500 hover:shadow-xl transition-all">
      <div className="text-yellow-600 text-3xl">📧</div>
      <div>
        <h4 className="text-lg font-semibold text-gray-800">Email Assistance</h4>
        <p className="text-gray-600 mt-1">support@anandyatra.com</p>
      </div>
    </div>

    {/* Address */}
    <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-md border-l-4 border-orange-500 hover:shadow-xl transition-all">
      <div className="text-orange-600 text-3xl">📍</div>
      <div>
        <h4 className="text-lg font-semibold text-gray-800">Office Address</h4>
        <p className="text-gray-600 mt-1">
          Hyderabad, Telangana, India  
        </p>
      </div>
    </div>

    {/* Working Hours */}
    <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-md border-l-4 border-pink-500 hover:shadow-xl transition-all">
      <div className="text-pink-600 text-3xl">🕒</div>
      <div>
        <h4 className="text-lg font-semibold text-gray-800">Working Hours</h4>
        <p className="text-gray-600 mt-1">Monday – Sunday: 7 AM to 10 PM</p>
      </div>
    </div>

  </div>

  {/* Divider */}
  <div className="mt-10 border-t border-gray-300"></div>

  {/* Call to Action */}
  <div className="mt-8 bg-white p-6 rounded-2xl shadow-md text-center border border-yellow-300 hover:shadow-xl transition-all">
    <h3 className="text-xl font-semibold text-blue-700">Need Quick Help?</h3>
    <p className="text-gray-600 mt-2">
      Our team responds within minutes. Feel free to reach out anytime!
    </p>
  </div>

</div>

</div>


      {/* =======================
         POPUP MESSAGE 
      ======================== */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-sm w-full border-t-4 border-yellow-500">
            <h3 className="text-2xl font-bold text-blue-700">Thank You!</h3>
            <p className="mt-3 text-gray-600">
              Your message has been submitted.  
              Our team will get back to you soon.
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
