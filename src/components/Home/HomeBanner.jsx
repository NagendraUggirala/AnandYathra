import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HomeBanner() {
  const { scrollY } = useScroll();

  const bgY = useTransform(scrollY, [0, 300], [0, 120]);
  const cardY = useTransform(scrollY, [0, 300], [0, -40]);

  return (
    <section
      className="
        relative rounded-2xl overflow-hidden shadow-xl
        h-[300px] sm:h-[380px] md:h-[460px] lg:h-[520px]
        mt-[85px]     /* 👈 FIXED: prevents header overlap */
      "
    >
      {/* Background Parallax Image */}
      <motion.div
        style={{
          y: bgY,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80&auto=format&fit=crop')",
        }}
        className="absolute inset-0 bg-cover bg-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80"></div>

      {/* Floating Card */}
      <motion.div
        style={{ y: cardY }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          absolute
          bottom-4 sm:bottom-8
          left-1/2 -translate-x-1/2
          w-[92%] sm:w-auto max-w-xl
          bg-white/20 backdrop-blur-lg border border-white/30
          rounded-2xl px-4 sm:px-8 py-5 sm:py-6
          text-center shadow-xl
        "
      >
        <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white drop-shadow-xl">
          Travel Beyond Expectations
        </h2>

        <div className="w-20 sm:w-28 h-1 bg-gradient-to-r from-yellow-300 to-yellow-500 mx-auto mt-2 rounded-full"></div>

        <p className="text-white/80 mt-3 text-xs sm:text-base leading-relaxed">
          Beaches to mountains, temples to trails — journeys crafted for every traveler.
        </p>
      </motion.div>
    </section>
  );
}
