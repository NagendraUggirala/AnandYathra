import { useParams, Link } from "react-router-dom";
import placesData from "../data/places.json";
import packagesData from "../data/packages.json";

export default function PlaceDetails() {
  const { categoryId, placeId } = useParams();
  const place = placesData[categoryId].find((p) => p.id === placeId);

  const firstPackage = place.packages[0];
  const pkg = packagesData[firstPackage];

  return (
    <div className="max-w-4xl mx-auto px-5 pt-28 pb-16">
      {/* ↑ Navbar spacing */}

      {/* IMAGE */}
      <img
        src={place.img}
        className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-xl shadow-lg"
      />

      {/* TITLE */}
      <h2 className="text-4xl font-bold mt-8 bg-gradient-to-r from-skyblue to-saffron bg-clip-text text-transparent">
        {place.name}
      </h2>

      {/* DESCRIPTION */}
      <p className="text-gray-600 mt-3 text-lg leading-relaxed">
        {place.desc}
      </p>

      {/* PACKAGE CARD */}
      <div className="mt-10 bg-white shadow-xl rounded-xl p-6 border border-gray-200">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{pkg.title}</h3>

        <p className="text-yellow-600 text-xl font-bold">₹{pkg.price}</p>

        {/* ITINERARY */}
        <h4 className="mt-5 font-semibold text-lg text-gray-800">Itinerary</h4>
        <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
          {pkg.itinerary.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>

        {/* ⭐ UPDATED BOOK NOW BUTTON (Option B Dynamic Route) */}
        <Link
          to={`/booking/${firstPackage}`}
          className="
            mt-6 inline-block w-full text-center px-5 py-3 rounded-xl 
            bg-gradient-to-r from-skyblue to-blue-600 
            text-white font-semibold text-lg shadow-md
            hover:shadow-lg hover:scale-[1.03] transition-all
          "
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
