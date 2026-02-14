import { products } from "../data/products";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-green-800 text-center">
        Our Products
      </h2>

      <div className="grid md:grid-cols-3 gap-10 mt-14">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={p.image}
              alt={p.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="mt-2 text-gray-600">{p.description}</p>

              <Link
                to={`/products/${p.id}`}
                className="inline-block mt-4 text-green-700 font-semibold"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
