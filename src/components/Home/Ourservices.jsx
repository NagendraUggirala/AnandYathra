import React from "react";

export default function TravelServices() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      
      {/* ================= SERVICES ================= */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1b2b47] text-center mb-4">
        Our Travel Services
      </h2>

      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto text-sm sm:text-base">
        All-in-one travel booking: flights, stays, packages, trains, buses, cabs, visas, and activities.
      </p>

      {/* GRID – FULLY RESPONSIVE */}
      <div className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-4 
        lg:grid-cols-4 
        gap-4 
        sm:gap-6
      ">
        {[
          {
            title: "Flights",
            desc: "Search & compare 500+ airlines • Flexible fares",
            iconBg: "bg-blue-50",
            iconColor: "text-blue-700",
            icon: <path d="M2 16l20 6-9-13L2 16z" />,
          },
          {
            title: "Hotels",
            desc: "Instant confirmations • Free cancellation on many hotels",
            iconBg: "bg-orange-50",
            iconColor: "text-orange-700",
            icon: <path d="M3 21v-9a2 2 0 012-2h3a2 2 0 012 2v9M7 10V7a3 3 0 116 0v3" />,
          },
          {
            title: "Holiday Packages",
            desc: "Tailor-made packages • Local experiences",
            iconBg: "bg-yellow-50",
            iconColor: "text-yellow-700",
            icon: <path d="M21 10v11H3V10l9-6 9 6z" />,
          },
          {
            title: "Trains",
            desc: "IRCTC integration • PNR & seat options",
            iconBg: "bg-teal-50",
            iconColor: "text-teal-700",
            icon: (
              <>
                <path d="M3 10v7a2 2 0 002 2h14a2 2 0 002-2v-7" />
                <path d="M7 10V6a5 5 0 0110 0v4" />
              </>
            ),
          },
          {
            title: "Buses",
            desc: "Intercity & tourist bus bookings",
            iconBg: "bg-amber-50",
            iconColor: "text-amber-800",
            icon: (
              <>
                <path d="M3 13v-3a2 2 0 012-2h14a2 2 0 012 2v3" />
                <path d="M5 21h.01M19 21h.01" />
              </>
            ),
          },
          {
            title: "Cabs",
            desc: "Airport transfers & city cabs",
            iconBg: "bg-orange-100",
            iconColor: "text-orange-800",
            icon: (
              <>
                <path d="M3 13l1-2h16l1 2" />
                <path d="M5 13v5a1 1 0 001 1h12a1 1 0 001-1v-5" />
              </>
            ),
          },
          {
            title: "Visa Support",
            desc: "Document guidance • Fast processing",
            iconBg: "bg-gray-100",
            iconColor: "text-gray-700",
            icon: (
              <>
                <path d="M3 3h18v18H3z" />
                <path d="M8 7h8M8 12h8M8 17h8" />
              </>
            ),
          },
          {
            title: "Activities",
            desc: "Local tours, tickets & experiences",
            iconBg: "bg-pink-50",
            iconColor: "text-pink-600",
            icon: <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4L8.5 13 3 9h7z" />,
          },
        ].map((s, idx) => (
          <div
            key={idx}
            className="
              bg-white/90 backdrop-blur-md border border-gray-200 
              p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl 
              shadow-sm hover:shadow-xl 
              transition-all duration-300 hover:-translate-y-1
              flex flex-col gap-3
            "
          >
            <div className="flex items-start gap-3">
              {/* ICON CONTAINER */}
              <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl ${s.iconBg}`}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className={`${s.iconColor}`}
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {s.icon}
                </svg>
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-[#1b2b47]">
                  {s.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-gray-600 leading-snug">
                  {s.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
