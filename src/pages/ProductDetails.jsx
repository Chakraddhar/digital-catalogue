import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <p className="p-10">Product not found</p>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
      <img
        src={product.image}
        alt={product.name}
        className="rounded-xl shadow-md"
      />

      <div>
        <h2 className="text-3xl font-bold text-green-800">
          {product.name}
        </h2>
        <p className="mt-4 text-gray-600">{product.description}</p>

        <h4 className="mt-6 font-semibold">Key Features</h4>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          {product.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
