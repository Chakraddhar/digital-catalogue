export default function Applications() {
  const apps = [
    { title: "Residential", desc: "Homes & Apartments" },
    { title: "Commercial", desc: "Offices & Retail Spaces" },
    { title: "Industrial", desc: "Factories & Warehouses" },
    { title: "Agriculture", desc: "Farms & Irrigation Systems" },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Applications
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {apps.map((app, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 text-center hover:shadow-lg transition bg-white"
            >
              <h3 className="text-xl font-semibold mb-2">
                {app.title}
              </h3>
              <p className="text-gray-600">
                {app.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
