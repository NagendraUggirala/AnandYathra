import { useParams } from "react-router-dom";
import placesData from "../data/places.json";
import packagesData from "../data/packages.json";

export default function PlaceDetails() {
  const { categoryId, placeId } = useParams();
  const place = placesData[categoryId].find(p => p.id === placeId);

  const firstPackage = place.packages[0];
  const pkg = packagesData[firstPackage];

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <img src={place.img} className="w-full h-72 object-cover rounded-xl" />

      <h2 className="text-4xl font-bold mt-6">{place.name}</h2>
      <p className="text-gray-600 mt-2">{place.desc}</p>

      <div className="mt-8 bg-white shadow-lg rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-3">{pkg.title}</h3>
        <p className="text-yellow-600 text-xl font-bold">₹{pkg.price}</p>

        <h4 className="mt-4 font-semibold">Itinerary</h4>
        <ul className="list-disc ml-6 text-gray-700">
          {pkg.itinerary.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
