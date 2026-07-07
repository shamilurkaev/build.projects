import {
  Building2,
  Hammer,
  DraftingCompass,
  Wrench,
  Factory,
  Trees,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Building Construction",
    description:
      "Professional construction of residential, commercial, and industrial buildings.",
  },
  {
    icon: Hammer,
    title: "Renovation",
    description:
      "Complete renovation and modernization of existing properties with premium quality.",
  },
  {
    icon: DraftingCompass,
    title: "Architecture",
    description:
      "Innovative architectural planning and custom building design solutions.",
  },
  {
    icon: Wrench,
    title: "Engineering",
    description:
      "Electrical, plumbing, HVAC, and structural engineering services.",
  },
  {
    icon: Factory,
    title: "Industrial Projects",
    description:
      "Large-scale industrial construction with modern technologies and safety standards.",
  },
  {
    icon: Trees,
    title: "Landscape Design",
    description:
      "Outdoor spaces, gardens, paving, and landscape improvement services.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#0B1220] py-24 text-white"
    >
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-orange-500 uppercase tracking-[5px] font-semibold">
            Our Services
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Construction Solutions
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            We provide innovative construction and engineering services with
            exceptional quality, safety, and professionalism.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl bg-[#131C2F] p-8 border border-gray-800 hover:border-orange-500 transition duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-xl bg-orange-500 flex items-center justify-center mb-6 group-hover:rotate-6 transition">
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {service.description}
                </p>

                <button className="mt-8 text-orange-500 font-semibold hover:text-orange-400 transition">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}