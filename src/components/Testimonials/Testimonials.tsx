import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Johnson",
    company: "CEO, MJ Group",
    review:
      "Buildix exceeded our expectations. The project was completed on time, within budget, and with exceptional quality.",
  },
  {
    name: "Sarah Williams",
    company: "Property Developer",
    review:
      "Professional team, excellent communication, and outstanding workmanship. We highly recommend Buildix.",
  },
  {
    name: "David Brown",
    company: "Business Owner",
    review:
      "From planning to completion, every stage was handled professionally. We couldn't be happier with the result.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#0B1220] py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Testimonials
          </p>

          <h2 className="text-4xl font-bold mt-4">
            What Our Clients Say
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Our clients trust us for quality, reliability, and professional
            construction services.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-[#131C2F] p-8 border border-gray-800 hover:border-orange-500 transition duration-300"
            >
              <Quote className="text-orange-500 mb-6" size={40} />

              <div className="flex gap-1 text-orange-500 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-300 leading-7">
                "{item.review}"
              </p>

              <div className="mt-8 border-t border-gray-700 pt-6">
                <h3 className="font-semibold text-xl">
                  {item.name}
                </h3>

                <span className="text-gray-400">
                  {item.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}