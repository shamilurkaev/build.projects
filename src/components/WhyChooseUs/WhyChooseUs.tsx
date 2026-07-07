import {
  ShieldCheck,
  Clock3,
  Award,
  Users,
} from "lucide-react";

const stats = [
  {
    number: "15+",
    title: "Years Experience",
  },
  {
    number: "500+",
    title: "Completed Projects",
  },
  {
    number: "120+",
    title: "Professional Engineers",
  },
  {
    number: "100%",
    title: "Client Satisfaction",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description:
      "We deliver every project with strict quality standards and premium materials.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description:
      "Projects are completed according to schedule without compromising quality.",
  },
  {
    icon: Award,
    title: "Certified Experts",
    description:
      "Experienced architects, engineers and construction specialists.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "Every client receives personal attention and transparent communication.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="bg-[#111827] text-white py-24"
    >
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Building Trust Through Excellence
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Our commitment to quality, innovation, and customer satisfaction
            makes us a trusted partner for every construction project.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-[#1F2937] p-8 text-center border border-gray-800"
            >
              <h3 className="text-5xl font-bold text-orange-500">
                {item.number}
              </h3>

              <p className="text-gray-400 mt-3">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="rounded-2xl bg-[#1F2937] p-8 border border-gray-800 hover:border-orange-500 transition duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-orange-500 flex items-center justify-center mb-6">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}