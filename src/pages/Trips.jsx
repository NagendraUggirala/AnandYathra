import React from "react";
import trips from "../data/trips.json";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Star, Calendar } from "lucide-react";

export default function Trips() {
  const tripList = Object.values(trips);

  return (
    <div className="max-w-7xl mx-auto px-5 pt-32 pb-16">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
        Explore All Trips
      </h1>

      <p className="text-center text-gray-600 mt-2 mb-10">
        Handpicked experiences crafted for unforgettable journeys.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {tripList.map((trip) => (
          <Link key={trip.id} to={`/trip/${trip.id}`}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border cursor-pointer"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800 mb-1">
                  {trip.title}
                </h2>

                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <MapPin size={16} className="text-red-500" />
                  {trip.destination}
                </div>

                <div className="flex items-center gap-3 text-gray-600 text-sm mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar size={15} className="text-blue-500" />
                    {trip.days}D / {trip.nights}N
                  </span>

                  <span className="flex items-center gap-1">
                    <Star size={15} className="text-yellow-500" />
                    {trip.rating}
                  </span>
                </div>

                <p className="text-green-600 text-lg font-bold">
                  ₹{trip.price}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
