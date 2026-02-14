import residential from "../assets/applications/residential.jpg";
import commercial from "../assets/applications/commercial.jpg";
import industrial from "../assets/applications/industrial.jpg";
import agriculture from "../assets/applications/agriculture.jpg";

export default function Applications() {
  const apps = [
    {
      title: "Residential",
      desc: "Homes & Apartments",
      image: residential,
    },
    {
      title: "Commercial",
      desc: "Offices & Retail Spaces",
      image: commercial,
    },
    {
      title: "Industrial",
      desc: "Factories & Warehouses",
      image: industrial,
    },
    {
      title: "Agriculture",
      desc: "Farms & Irrigation Systems",
      image: agriculture,
    },
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
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={app.image}
                alt={app.title}
                className="h-40 w-full object-cover"
              />

              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold mb-2">
                  {app.title}
                </h3>
                <p className="text-gray-600">
                  {app.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
