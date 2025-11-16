import React from "react";
import { motion } from "framer-motion";

export default function Destinations() {
  const places = [
    {
      title: "Beaches",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      desc: "Relaxing beaches with clear skies & soft sands."
    },
    {
      title: "Mountains",
      img: "https://images.unsplash.com/photo-1508264165352-258a6ee1e3c6?auto=format&fit=crop&w=800&q=80",
      desc: "Scenic mountains for adventure & peaceful escapes."
    },
    {
      title: "Family Trips",
      img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
      desc: "Perfect destinations for fun-filled family vacations."
    },
    {
      title: "Spiritual Trails",
      img: "https://images.unsplash.com/photo-1585499226549-89d08f85aa71?auto=format&fit=crop&w=800&q=80",
      desc: "Peaceful temples, ashrams & spiritual retreats."
    },
    {
      title: "Adventure",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
      desc: "Thrilling experiences for adrenaline seekers."
    },
    {
      title: "Waterfalls",
      img: "https://images.unsplash.com/photo-1500622944204-b135684e99fd?auto=format&fit=crop&w=800&q=80",
      desc: "Discover majestic waterfalls across the country."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 mt-24 mb-16">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-skyblue to-saffron bg-clip-text text-transparent drop-shadow">
          Top Destinations
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Explore India’s most beautiful and curated travel spots.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {places.map((place, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer 
                       hover:shadow-2xl transition-all border border-gray-200"
          >
            <div className="h-44 sm:h-52 md:h-56 relative">
              <img
                src={place.img}
                alt={place.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/50"></div>
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold text-saffron">{place.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{place.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
