import React, { useState } from "react";
import tripsData from "../../data/tripsData.json";
import TripCard from "./TripCard";
import TripFilters from "./TripFilters";

export default function TripList() {
  const [selected, setSelected] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = tripsData.filter((t) => {
    const catMatch = selected === "all" || t.category === selected;
    const searchLower = search.trim().toLowerCase();
    const searchMatch =
      !searchLower ||
      t.title.toLowerCase().includes(searchLower) ||
      t.location.toLowerCase().includes(searchLower) ||
      (t.category && t.category.toLowerCase().includes(searchLower));
    return catMatch && searchMatch;
  });

  return (
    <div className="py-10">
      <TripFilters selected={selected} onChange={setSelected} search={search} setSearch={setSearch} />

      <div className="max-w-7xl mx-auto px-4 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length ? (
          filtered.map((trip) => <TripCard key={trip.id} trip={trip} />)
        ) : (
          <div className="col-span-full text-center text-gray-600 py-10">No trips match your search.</div>
        )}
      </div>
    </div>
  );
}
