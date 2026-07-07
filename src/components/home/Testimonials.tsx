"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#0F172A] py-28"
    >
      <div className="container mx-auto px-6">

        <SectionTitle
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Customer satisfaction is our greatest achievement."
        />

        <div className="grid gap-8 md:grid-cols-3">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: .5,
              }}
              className="rounded-3xl border border-gray-800 bg-[#1F2937] p-8"
            >

              <Quote
                className="text-orange-500"
                size={42}
              />

              <div className="mt-6 flex gap-1 text-orange-500">

                {[1,2,3,4,5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    fill="currentColor"
                  />
                ))}

              </div>

              <p className="mt-6 leading-8 text-gray-400">
                "{item.review}"
              </p>

              <div className="mt-8 border-t border-gray-700 pt-6">

                <h3 className="text-xl font-bold text-white">
                  {item.name}
                </h3>

                <p className="text-gray-400">
                  {item.position} • {item.company}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}