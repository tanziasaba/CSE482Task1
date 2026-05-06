export default function ServicesSection({ services }) {
  return (
    <div className="grid md:grid-cols-3 gap-6 py-10">
      {services.map((service, index) => (
        <div key={index} className="p-6 border rounded-2xl bg-white shadow-sm hover:shadow-lg transition">
          <h3 className="font-bold text-purple-600">{service.title}</h3>
          <p className="text-sm text-gray-500">{service.desc}</p>
        </div>
      ))}
    </div>
  );
}