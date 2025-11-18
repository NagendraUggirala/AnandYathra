import React, { useState } from "react";
import { motion } from "framer-motion";
import {Instagram,Facebook,Youtube,Twitter,Phone,Mail, MapPin,Clock,MessageCircle,Send } from "lucide-react";

export default function ContactPremium() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [faqOpen, setFaqOpen] = useState(null);

  const faqs = [
    { q: "How do I book a travel package?", a: "You can book a package by contacting us or using our booking page. We'll guide you through the process and confirm availability." },
    { q: "Can I customize my itinerary?", a: "Absolutely — we build custom itineraries to match your budget, interests and travel dates. Share your preferences in the message field." },
    { q: "What is the cancellation policy?", a: "Cancellation terms vary by package. Please contact support with your booking details and we'll advise on refunds or credits." },
    { q: "How fast do you respond?", a: "Typical response time is within minutes during working hours. For urgent help use WhatsApp (fastest) or call our emergency line." },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app you'd send formData to an API here
    setShowPopup(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setShowPopup(false), 3000);
  };

  const toggleFAQ = (i) => setFaqOpen(faqOpen === i ? null : i);

  return (
    <div className="max-w-7xl mx-auto px-5 pt-26 mb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold  bg-gradient-to-r from-blue-500 to-yellow-500 bg-clip-text text-transparent drop-shadow  text-center w-full">
            Contact Us
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Need help planning your next trip? Reach out for bookings, custom itineraries, or urgent travel support.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Form card */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-transparent"
            aria-label="Contact form"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Send a Message</h2>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Send className="w-4 h-4 text-gray-600" /> <span>Fast response</span>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Full name</span>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-gray-200 p-3 focus:outline-none focus:ring-4 focus:ring-indigo-200 transition"
                  placeholder="Your name"
                />
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Email</span>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-gray-200 p-3 focus:outline-none focus:ring-4 focus:ring-indigo-200 transition"
                    placeholder="you@company.com"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Phone</span>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-gray-200 p-3 focus:outline-none focus:ring-4 focus:ring-indigo-200 transition"
                    placeholder="+91 98765 43210"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">Message</span>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-gray-200 p-3 h-28 focus:outline-none focus:ring-4 focus:ring-indigo-200 transition"
                  placeholder="Tell us about your trip or question..."
                />
              </label>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-semibold shadow-lg transform transition hover:scale-105 hover:shadow-[0_10px_40px_rgba(99,102,241,0.16)]"
              >
                <Send className="w-4 h-4" />
                <span>Submit</span>
              </button>

              <p className="text-xs text-gray-500">We respect your privacy — your details are safe with us.</p>
            </div>
          </motion.form>

          {/* Info card */}
          <motion.aside
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-transparent flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-800 mb-4">Get in Touch</h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-white rounded-2xl border border-rose-50 shadow-sm">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50">
                    <Phone className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Phone Support</p>
                    <p className="text-sm text-gray-600 mt-1">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-2xl border border-rose-50 shadow-sm">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50">
                    <Mail className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Email</p>
                    <p className="text-sm text-gray-600 mt-1">support@anandyatra.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-2xl border border-rose-50 shadow-sm">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50">
                    <MapPin className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Office</p>
                    <p className="text-sm text-gray-600 mt-1">Hyderabad, Telangana, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-2xl border border-rose-50 shadow-sm">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50">
                    <Clock className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Working Hours</p>
                    <p className="text-sm text-gray-600 mt-1">Mon – Sun: 7 AM to 10 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials + CTA */}
            <div className="mt-6">
              <div className="flex flex-wrap gap-3 items-center mb-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="p-3 rounded-xl bg-gradient-to-br from-pink-400 to-yellow-400 text-white transform transition hover:scale-105 hover:shadow-[0_10px_30px_rgba(236,72,153,0.18)]"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-500 text-white transform transition hover:scale-105 hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)]"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  aria-label="YouTube"
                  className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-red-400 text-white transform transition hover:scale-105 hover:shadow-[0_10px_30px_rgba(239,68,68,0.12)]"
                >
                  <Youtube className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  aria-label="Twitter"
                  className="p-3 rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 text-white transform transition hover:scale-105 hover:shadow-[0_10px_30px_rgba(17,24,39,0.12)]"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>

              <div className="text-center sm:text-left">
                <h4 className="text-sm font-semibold text-gray-800">Need Quick Help?</h4>
                <p className="text-xs text-gray-600 mt-1">For the fastest reply use WhatsApp or call our support line.</p>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Mobile social row (visible on small screens) */}
        <div className="mt-8 sm:hidden flex justify-center gap-5">
          <a href="#" aria-label="Instagram" className="text-pink-500 hover:scale-110 transition">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Facebook" className="text-blue-600 hover:scale-110 transition">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" aria-label="YouTube" className="text-red-600 hover:scale-110 transition">
            <Youtube className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Twitter" className="text-slate-800 hover:scale-110 transition">
            <Twitter className="w-6 h-6" />
          </a>
        </div>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto mt-12 px-2 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-rose-50">
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex items-center justify-between text-left gap-3 text-sm sm:text-base font-semibold text-gray-800"
                  aria-expanded={faqOpen === i}
                >
                  <span>{f.q}</span>
                  <span className="text-2xl">{faqOpen === i ? "−" : "+"}</span>
                </button>

                {faqOpen === i && <p className="mt-3 text-sm text-gray-600">{f.a}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl max-w-sm w-full text-center">
              <h3 className="text-lg font-bold text-gray-800">Thanks — we received your message!</h3>
              <p className="text-sm text-gray-600 mt-2">We'll get back to you shortly.</p>
            </div>
          </div>
        )}

        {/* WhatsApp floating button */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed right-5 bottom-5 z-50 rounded-full p-3 shadow-lg bg-gradient-to-br from-green-500 to-teal-400 text-white transform transition hover:scale-110"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
