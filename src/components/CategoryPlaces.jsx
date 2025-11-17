import { useParams, Link } from "react-router-dom";
import placesData from "../data/places.json";

export default function CategoryPlaces() {
  const { categoryId } = useParams();
  const places = placesData[categoryId] || [];

  return (
    <div className="max-w-6xl mx-auto p-5 mt-10">
      <h2 className="text-3xl font-bold mb-6 capitalize">{categoryId}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {places.map((place) => (
          <Link
            to={`/category/${categoryId}/${place.id}`}
            key={place.id}
            className="bg-white shadow rounded-xl overflow-hidden"
          >
            <img src={place.img} className="h-52 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{place.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{place.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
