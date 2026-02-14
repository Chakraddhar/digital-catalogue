export default function About() {
  return (
    <div className="bg-white">
      <section className="bg-green-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Powering a Sustainable Tomorrow
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          We deliver reliable renewable energy solutions trusted by dealers across India.
        </p>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <p className="text-gray-600 leading-relaxed">
          We are a clean energy solutions provider specializing in solar panels,
          inverters, and energy storage systems. Our digital catalogue helps
          dealers confidently showcase products to customers.
        </p>
      </section>

      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "High Quality Products",
            "Dealer-Friendly Catalogue",
            "Nationwide Support"
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item}</h3>
              <p className="text-gray-600">
                Designed to help dealers explain and sell products easily.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
          <p className="text-gray-600">
            To make clean energy accessible and affordable for everyone.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
          <p className="text-gray-600">
            Empower dealers with reliable products and professional tools.
          </p>
        </div>
      </section>
    </div>
  );
}
