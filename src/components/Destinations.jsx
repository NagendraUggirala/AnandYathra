import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import categories from "../data/categories.json";

export default function Destinations() {
  return (
    // Add padding-top instead of margin-top to avoid overlap with fixed navbar
    <section className="max-w-7xl mx-auto px-5 pt-32 mb-16">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-yellow-500 bg-clip-text text-transparent drop-shadow">
          Top Destinations
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Explore India’s most beautiful and curated travel spots.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map((place) => (
          <Link to={`/category/${place.id}`} key={place.id}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer 
                         hover:shadow-2xl transition-all border border-gray-200"
            >
              {/* Image */}
              <div className="h-44 sm:h-52 md:h-56 relative">
                <img
                  src={place.img}
                  alt={place.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/50"></div>
              </div>

              {/* Text */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-yellow-600">
                  {place.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{place.desc}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
