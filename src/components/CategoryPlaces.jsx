import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import placesData from "../data/places.json";
import { ArrowLeft } from "lucide-react";

export default function CategoryPlaces() {
  const { categoryId } = useParams();

  const places = placesData[categoryId] || [];

  return (
    <div className="max-w-7xl mx-auto px-5 pt-28 pb-16">
      
      {/* Back Button */}
      <Link
        to="/destinations"
        className="flex items-center gap-2 px-4 py-2 w-fit bg-gray-100 
                   hover:bg-gray-200 rounded-xl text-gray-700 font-medium transition mb-6"
      >
        <ArrowLeft size={18} /> Back
      </Link>

      {/* Title */}
      <h2 className="text-3xl font-extrabold mb-8 capitalize bg-gradient-to-r 
                     from-blue-600 to-yellow-500 bg-clip-text text-transparent">
        {categoryId.replace("-", " ")}
      </h2>

      {/* Places */}
      {places.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {places.map((place) => (
            <Link
              key={place.id}
              to={`/category/${categoryId}/${place.id}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border cursor-pointer"
              >
                <img
                  src={place.img}
                  alt={place.name}
                  className="w-full h-52 object-cover"
                />

                <div className="p-4">
                  <h3 className="text-xl font-bold">{place.name}</h3>
                  <p className="text-gray-600 text-sm mt-2">{place.desc}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      ) : (
        <h3 className="text-red-600 text-xl font-bold text-center mt-20">
          Destination Not Found ❌
        </h3>
      )}
    </div>
  );
}
