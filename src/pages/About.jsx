import React from "react";

export default function AboutFounder() {
  return (
    <div className="pt-28">

      {/* =======================
          STORY EXPANSION / FOUNDER
      ========================== */}
      {/* =======================
     1. ABOUT FOUNDER 
========================= */}
<section className="max-w-7xl mx-auto px-5 pt-26 mb-16">

  {/* Title + Logo */}
  <div className="flex items-center gap-4 mb-12">
    {/* <img
      src="/assets/Anandlogo.png"
      alt="Anand Yatra Logo"
      className="w-16 h-16 object-contain drop-shadow-lg"
    /> */}

    <h1
  className="text-3xl sm:text-4xl md:text-5xl font-extrabold  bg-gradient-to-r from-blue-500 to-yellow-500 bg-clip-text text-transparent drop-shadow  text-center w-full">
  About Our Founder
</h1>

  </div>

  <div className="grid md:grid-cols-2 gap-12">

    {/* Founder Image */}
    <div className="flex justify-center">
      <img
        src="/assets/founder.jpg"
        alt="Founder"
        className="rounded-3xl shadow-2xl w-full max-w-md object-cover border-4"
      />
    </div>

    {/* Founder Text */}
    <div className="flex flex-col justify-center">

      <p className="text-lg text-gray-700 leading-relaxed">
        Anand Yatra was built on the foundation of trust, devotion, and a deep-rooted
        respect for India’s cultural and spiritual heritage. Our founder,
        <span className="text-blue-700 font-semibold"> Shri Anand Sharma </span>,
        envisioned a travel service that goes far beyond transportation—one that creates
        emotional connections, inspires inner peace, and celebrates the true soul of India.
      </p>

      <p className="mt-5 text-gray-700 leading-relaxed text-lg">
        Guided by the timeless principle:
        <span className="text-orange-600 font-bold"> “Dharmo Rakshati Rakshitah”</span>,
        he believes that travel is not just movement from one place to another — it
        is a journey of discovery, reflection, and devotion. This philosophy is the
        heartbeat of Anand Yatra.
      </p>

      <p className="mt-5 text-gray-700 leading-relaxed text-lg">
        With decades of experience, he has transformed countless journeys into meaningful
        memories. His vision is to ensure that every traveler—whether on a spiritual
        pilgrimage, family trip, or heritage tour—feels protected, respected, and valued.
      </p>

      <p className="mt-5 text-gray-700 leading-relaxed text-lg">
        Today, Anand Yatra stands strong because of his commitment to honesty, quality,
        and service excellence. Under his guidance, the team continues to design journeys
        that blend comfort, culture, spirituality, and joy into one unforgettable
        experience.
      </p>

      <p className="mt-6 text-gray-800 font-semibold text-xl bg-yellow-100 p-4 rounded-xl shadow-md border-l-4 border-yellow-500">
        “Travel is not just about visiting places — it is about touching lives,  
        discovering purpose, and connecting with the divine.”
      </p>

    </div>
  </div>
</section>


      {/* =======================
          2. WHY CHOOSE ANAND YATRA
      ========================== */}
      <section className="bg-blue-50 py-20 px-6">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold 
          bg-gradient-to-r from-yellow-500 to-blue-500 bg-clip-text text-transparent drop-shadow">
          Why Choose Anand Yatra?
        </h2>

        <p className="text-center mt-4 text-gray-700 max-w-3xl mx-auto text-lg">
          We combine spirituality, comfort, and trust to deliver a travel experience
          that is meaningful, safe, and unforgettable.
        </p>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-14">

          {/* Card 1 - Blue */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500 
            transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-200 hover:shadow-xl">
            <div className="text-blue-600 text-4xl mb-3">🧭</div>
            <h3 className="text-xl font-semibold text-blue-700">Expert Trip Guidance</h3>
            <p className="mt-3 text-gray-600">
              Our experienced travel planners guide you with transparent details and proper support.
            </p>
          </div>

          {/* Card 2 - Yellow */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-yellow-400
            transition-all duration-300 hover:-translate-y-2 hover:shadow-yellow-200 hover:shadow-xl">
            <div className="text-yellow-500 text-4xl mb-3">🎒</div>
            <h3 className="text-xl font-semibold text-yellow-600">Customizable Packages</h3>
            <p className="mt-3 text-gray-600">
              Select from budget, premium, and family packages — tailored to your needs.
            </p>
          </div>

          {/* Card 3 - Emerald */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-emerald-500
            transition-all duration-300 hover:-translate-y-2 hover:shadow-emerald-200 hover:shadow-xl">
            <div className="text-emerald-600 text-4xl mb-3">🛡️</div>
            <h3 className="text-xl font-semibold text-emerald-600">100% Safety Assurance</h3>
            <p className="mt-3 text-gray-600">
              Verified stays, safe transport, and well-planned routes for a stress-free journey.
            </p>
          </div>

          {/* Card 4 - Orange */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-500
            transition-all duration-300 hover:-translate-y-2 hover:shadow-orange-200 hover:shadow-xl">
            <div className="text-orange-600 text-4xl mb-3">🌍</div>
            <h3 className="text-xl font-semibold text-orange-600">Heritage & Cultural Travel</h3>
            <p className="mt-3 text-gray-600">
              Explore the spiritual, cultural, and historical wonders of India in a guided way.
            </p>
          </div>

          {/* Card 5 - Purple */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-purple-500
            transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-200 hover:shadow-xl">
            <div className="text-purple-600 text-4xl mb-3">💺</div>
            <h3 className="text-xl font-semibold text-purple-600">Comfort-Focused Travel</h3>
            <p className="mt-3 text-gray-600">
              Clean hotels, smooth travel, and a comfortable experience from start to finish.
            </p>
          </div>

          {/* Card 6 - Pink */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-pink-500
            transition-all duration-300 hover:-translate-y-2 hover:shadow-pink-200 hover:shadow-xl">
            <div className="text-pink-500 text-4xl mb-3">🔔</div>
            <h3 className="text-xl font-semibold text-pink-600">24/7 Dedicated Support</h3>
            <p className="mt-3 text-gray-600">
              A dedicated team always available for help during your trip — anytime, anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* =======================
           3. OUR MISSION
      ========================== */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold 
          bg-gradient-to-r from-blue-500 to-yellow-500 bg-clip-text text-transparent drop-shadow">
          Our Mission
        </h2>

        <p className="mt-6 text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          At Anand Yatra, our mission is to create journeys that go beyond sightseeing —
          journeys that awaken emotion, connect you to culture, and leave you with
          memories that last a lifetime.
        </p>

        <p className="mt-4 text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          We aim to blend spirituality, heritage, comfort, and trust into every travel experience,
          ensuring every traveler feels safe, valued, and enriched.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* Card 1 - Blue */}
          <div className="bg-white p-6 shadow-md rounded-xl border-l-4 border-blue-500
            transition-all duration-300 hover:shadow-blue-300 hover:-translate-y-2 hover:scale-[1.03]">
            <h4 className="text-xl font-semibold text-blue-600">Enrich Lives</h4>
            <p className="mt-2 text-gray-600">
              Craft meaningful journeys filled with culture and connection.
            </p>
          </div>

          {/* Card 2 - Yellow */}
          <div className="bg-white p-6 shadow-md rounded-xl border-l-4 border-yellow-500
            transition-all duration-300 hover:shadow-yellow-300 hover:-translate-y-2 hover:scale-[1.03]">
            <h4 className="text-xl font-semibold text-yellow-600">Build Trust</h4>
            <p className="mt-2 text-gray-600">
              Deliver safe, transparent, and reliable travel services.
            </p>
          </div>

          {/* Card 3 - Orange */}
          <div className="bg-white p-6 shadow-md rounded-xl border-l-4 border-orange-500
            transition-all duration-300 hover:shadow-orange-300 hover:-translate-y-2 hover:scale-[1.03]">
            <h4 className="text-xl font-semibold text-orange-600">Promote Heritage</h4>
            <p className="mt-2 text-gray-600">
              Celebrate India’s spiritual and cultural legacy.
            </p>
          </div>

          {/* Card 4 - Purple */}
          <div className="bg-white p-6 shadow-md rounded-xl border-l-4 border-purple-500
            transition-all duration-300 hover:shadow-purple-300 hover:-translate-y-2 hover:scale-[1.03]">
            <h4 className="text-xl font-semibold text-purple-600">Ensure Comfort</h4>
            <p className="mt-2 text-gray-600">
              We prioritize your safety, comfort, and peace of mind.
            </p>
          </div>

          {/* Card 5 - Emerald */}
          <div className="bg-white p-6 shadow-md rounded-xl border-l-4 border-emerald-500
            transition-all duration-300 hover:shadow-emerald-300 hover:-translate-y-2 hover:scale-[1.03]">
            <h4 className="text-xl font-semibold text-emerald-600">Affordable Travel</h4>
            <p className="mt-2 text-gray-600">
              Quality experiences designed for every budget.
            </p>
          </div>

          {/* Card 6 - Pink */}
          <div className="bg-white p-6 shadow-md rounded-xl border-l-4 border-pink-500
            transition-all duration-300 hover:shadow-pink-300 hover:-translate-y-2 hover:scale-[1.03]">
            <h4 className="text-xl font-semibold text-pink-600">Inspire Exploration</h4>
            <p className="mt-2 text-gray-600">
              Encourage travellers to discover, learn, and grow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
