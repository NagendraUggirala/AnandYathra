import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HomeBanner() {
  // Background images (You can add more)
  const images = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?w=1600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=1600&q=80&auto=format&fit=crop"
  ];

  const [index, setIndex] = useState(0);

  // Auto change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[350px] sm:h-[450px] md:h-[520px] lg:h-[480px] mt-[70px] rounded-3xl overflow-hidden shadow-xl">

      {/* ========== BACKGROUND CAROUSEL ========== */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === i ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/80"></div>

      {/* ========== CENTER TEXT CONTENT ========== */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5">

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-yellow-500 bg-clip-text text-transparent text-center drop-shadow w-full">
          Discover Your Next Journey with Anand Yatra
        </motion.h1>

        <div className="w-20 sm:w-28 h-1 bg-gradient-to-r from-yellow-300 to-yellow-500 mx-auto my-4 rounded-full"></div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="text-white/80 text-sm sm:text-lg max-w-xl leading-relaxed"
        >
          Unique experiences, breathtaking destinations, curated itineraries, and Packages specially for you.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 sm:px-10 sm:py-4 bg-yellow-500 text-black font-semibold rounded-full shadow-xl"
        >
          Explore Trips
        </motion.button>
      </div>

    </section>
  );
}
