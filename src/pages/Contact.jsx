import React, { useState } from "react";

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);

  // Form fields state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowPopup(true);

    // Clear form values
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="pt-28">

      {/* HEADING */}
      <div className="text-center mb-16">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold 
        bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text 
        text-transparent drop-shadow-lg"
        >
          Contact Us
        </h1>

        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
          Reach out for bookings, support, or general travel queries. We’re always available for you.
        </p>
      </div>

      {/* ===========================
          COMBINED CARDS (NO GAP)
      ============================ */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-0">

        {/* LEFT CARD – FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-blue-50 to-blue-100 
          p-10 rounded-l-3xl rounded-r-none shadow-xl border border-blue-200"
        >
          <h2 className="text-2xl font-bold text-blue-700 mb-6">
            Send a Message
          </h2>

          <div className="space-y-5">

            {/* Full Name */}
            <div>
              <label className="block text-gray-700 mb-1 font-semibold">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 rounded-xl border border-blue-300 bg-white
                focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-1 font-semibold">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 rounded-xl border border-blue-300 bg-white
                focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 mb-1 font-semibold">Phone Number</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-3 rounded-xl border border-blue-300 bg-white
                focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                placeholder="Enter your mobile number"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 mb-1 font-semibold">Message</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 rounded-xl h-32 border border-blue-300 bg-white
                focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 
              text-white font-bold py-3 rounded-xl shadow-lg transition-all
              hover:scale-105 hover:shadow-2xl"
            >
              Submit
            </button>
          </div>
        </form>

        {/* RIGHT CARD – GET IN TOUCH */}
        <div
          className="bg-gradient-to-br from-blue-100 to-blue-50 
          p-10 rounded-r-3xl rounded-l-none shadow-xl border border-blue-200"
        >
          <h2 className="text-3xl font-extrabold text-blue-700 mb-6">
            Get in Touch
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            For quick assistance on bookings, packages, or travel support — our team is here to guide you.
          </p>

          {/* CONTACT OPTIONS */}
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
            <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-md border-l-4 border-blue-400 hover:shadow-xl transition-all">
              <div className="text-blue-500 text-3xl">📧</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Email Assistance</h4>
                <p className="text-gray-600 mt-1">support@anandyatra.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-md border-l-4 border-blue-300 hover:shadow-xl transition-all">
              <div className="text-blue-400 text-3xl">📍</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Office Address</h4>
                <p className="text-gray-600 mt-1">Hyderabad, Telangana, India</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-md border-l-4 border-blue-200 hover:shadow-xl transition-all">
              <div className="text-blue-300 text-3xl">🕒</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Working Hours</h4>
                <p className="text-gray-600 mt-1">Monday – Sunday: 7 AM to 10 PM</p>
              </div>
            </div>
          </div>

          {/* BOTTOM BOX */}
          <div className="mt-10 border-t border-gray-300"></div>

          <div className="mt-8 bg-white p-6 rounded-2xl shadow-md text-center border border-blue-200 hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-blue-700">Need Quick Help?</h3>
            <p className="text-gray-600 mt-2">
              Our response time is just a few minutes. Contact us anytime!
            </p>
          </div>
        </div>
      </div>

      {/* POPUP MESSAGE */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-sm w-full border-t-4 border-blue-500">
            <h3 className="text-2xl font-bold text-blue-700">Thank You!</h3>
            <p className="mt-3 text-gray-600">Your message has been submitted. We’ll get back shortly!</p>
          </div>
        </div>
      )}

    </div>
  );
}
