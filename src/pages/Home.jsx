import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-green-50 to-white py-28 text-center">
        <h1 className="text-5xl font-bold text-green-800 animate-fadeIn">
          Powering a Sustainable Future
        </h1>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          A professional digital catalogue of advanced renewable energy solutions
          designed for dealers.
        </p>
        <Link
          to="/products"
          className="inline-block mt-10 bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
        >
          Explore Products
        </Link>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
        {["Solar Panels", "Power Inverters", "Energy Batteries"].map((item) => (
          <div
            key={item}
            className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold text-green-800">{item}</h3>
            <p className="mt-4 text-gray-600">
              High quality solutions designed for modern energy needs.
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
