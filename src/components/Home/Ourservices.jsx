import React from "react";

export default function TravelServices() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-6">
      {/* ================= SERVICES ================= */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 text-center mb-6">
        Our Travel Services
      </h2>

      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        All-in-one travel booking: flights, stays, packages, trains, buses,
        cabs, visas and activities.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {[
          {
            title: "Flights",
            desc: "Search & compare 500+ airlines • Flexible fares",
            icon: (
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1e40af"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 16l20 6-9-13L2 16z" />
              </svg>
            ),
          },
          {
            title: "Hotels",
            desc: "Instant confirmations • Free cancellation on many hotels",
            icon: (
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#c2410c"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 21v-9a2 2 0 012-2h3a2 2 0 012 2v9M7 10V7a3 3 0 116 0v3" />
              </svg>
            ),
          },
          {
            title: "Holiday Packages",
            desc: "Tailor-made packages • Local experiences",
            icon: (
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#a16207"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10v11H3V10l9-6 9 6z" />
              </svg>
            ),
          },
          {
            title: "Trains",
            desc: "IRCTC integration • PNR & seat options",
            icon: (
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0f766e"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 10v7a2 2 0 002 2h14a2 2 0 002-2v-7" />
                <path d="M7 10V6a5 5 0 0110 0v4" />
              </svg>
            ),
          },
          {
            title: "Buses",
            desc: "Intercity & tourist bus bookings",
            icon: (
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7c2d12"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 13v-3a2 2 0 012-2h14a2 2 0 012 2v3" />
                <path d="M5 21h.01M19 21h.01" />
              </svg>
            ),
          },
          {
            title: "Cabs",
            desc: "Airport transfers & city cabs",
            icon: (
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#92400e"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 13l1-2h16l1 2" />
                <path d="M5 13v5a1 1 0 001 1h12a1 1 0 001-1v-5" />
              </svg>
            ),
          },
          {
            title: "Visa Support",
            desc: "Document guidance • Fast processing",
            icon: (
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#374151"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 3h18v18H3z" />
                <path d="M8 7h8M8 12h8M8 17h8" />
              </svg>
            ),
          },
          {
            title: "Activities",
            desc: "Local tours, tickets & experiences",
            icon: (
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#db2777"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4L8.5 13 3 9h7z" />
              </svg>
            ),
          },
        ].map((s, idx) => (
          <div
            key={idx}
            className="bg-white p-4 md:p-5 rounded-xl shadow hover:shadow-lg border border-gray-200 flex flex-col gap-3 fade-in"
            style={{ animationDelay: `${idx * 60}ms` }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50">
                {s.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-blue-900">
                  {s.title}
                </h3>
                <p className="text-xs text-gray-600">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
