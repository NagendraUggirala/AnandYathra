import React from "react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Aarav Sharma",
      review: "Amazing experience! The Bali package was well planned.",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=300&q=60",
      color: "blue",
    },
    {
      name: "Sneha Reddy",
      review: "Quick booking, best hotels, and great support. Loved it!",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=300&q=60",
      color: "yellow",
    },
    {
      name: "Vikram Singh",
      review: "Family trip to Kerala was outstanding. Highly recommend!",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=60",
      color: "green",
    },
    {
      name: "Nisha Verma",
      review:
        "The Dubai trip was luxurious and perfectly organized. Truly memorable!",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=60",
      color: "purple",
    },
    {
      name: "Rohit Mehta",
      review:
        "Excellent service! The team guided us at every step of our Thailand tour.",
      img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=300&q=60",
      color: "orange",
    },
    {
      name: "Harika Nandan",
      review:
        "Our Shimla–Manali honeymoon was magical. Thanks for making it special!",
      img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=300&q=60",
      color: "pink",
    },
  ];

  return (
    <section className="mt-20">
      {/* Heading */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold 
        bg-gradient-to-r from-blue-500 to-yellow-500 bg-clip-text text-transparent 
        text-center drop-shadow w-full"
      >
        What Travelers Say
      </h2>

      <p className="mt-2 text-gray-600 text-center">
        Real stories from real journeys
      </p>

      {/* CARD GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {reviews.map((item, i) => (
          <div
            key={i}
            className={`
              bg-white shadow-lg rounded-3xl p-6 
              border-t-4 border-${item.color}-500 
              hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02]
              transition-all duration-300
            `}
          >
            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
              />
            </div>

            {/* NAME */}
            <h4
              className={`text-lg font-bold text-center mt-3 text-${item.color}-600`}
            >
              {item.name}
            </h4>

            {/* REVIEW */}
            <p className="mt-2 text-gray-600 text-center leading-relaxed">
              “{item.review}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
