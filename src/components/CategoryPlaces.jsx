import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import placesData from "../data/places.json";
import { ArrowLeft } from "lucide-react";

export default function CategoryPlaces() {
  const { categoryId } = useParams();
  const places = placesData[categoryId] || [];

  const formattedTitle = categoryId.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="max-w-7xl mx-auto px-5 py-16">

      {/* Back Button */}
      <div className="mb-6">
        <Link
          to="/destinations"
          className="flex items-center gap-2 px-4 py-2 w-fit bg-gray-100 hover:bg-gray-200 rounded-xl text-gray-700 font-medium transition"
        >
          <ArrowLeft size={18} /> Back
        </Link>
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent capitalize">
        {formattedTitle} Destinations
      </h2>

      {/* Places Grid */}
      {places.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {places.map((place) => (
            <Link
              to={`/category/${categoryId}/${place.id}`}
              key={place.id}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border cursor-pointer hover:shadow-2xl transition"
              >
                {/* Image */}
                <div className="h-52 w-full overflow-hidden">
                  <img
                    src={place.img}
                    alt={place.name}
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">{place.name}</h3>
                  <p className="text-gray-600 text-sm mt-2">{place.desc}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-gray-500 text-center py-20 text-lg">
          No destinations available in this category.
        </div>
      )}
    </div>
  );
}
