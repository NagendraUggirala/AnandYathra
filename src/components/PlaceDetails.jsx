import { useParams } from "react-router-dom";
import placesData from "../data/places.json";
import packagesData from "../data/packages.json";

export default function PlaceDetails() {
  const { categoryId, placeId } = useParams();
  const place = placesData[categoryId].find((p) => p.id === placeId);

  const firstPackage = place.packages[0];
  const pkg = packagesData[firstPackage];

  return (
    <div className="max-w-4xl mx-auto px-5 pt-28 pb-16">
      {/* ↑ Added pt-28 for navbar spacing + px-5 for consistent padding */}

      {/* Image */}
      <img
        src={place.img}
        className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-xl shadow-lg"
      />

      {/* Title */}
      <h2 className="text-4xl font-bold mt-8 bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
        {place.name}
      </h2>

      {/* Description */}
      <p className="text-gray-600 mt-3 text-lg leading-relaxed">
        {place.desc}
      </p>

      {/* Package Details */}
      <div className="mt-10 bg-white shadow-xl rounded-xl p-6 border border-gray-200">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{pkg.title}</h3>

        <p className="text-yellow-600 text-xl font-bold">₹{pkg.price}</p>

        {/* Itinerary */}
        <h4 className="mt-5 font-semibold text-lg">Itinerary</h4>
        <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
          {pkg.itinerary.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
