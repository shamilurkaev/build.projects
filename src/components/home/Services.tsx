"use client";

import { motion } from "framer-motion";

import SectionTitle from "@/components/ui/SectionTitle";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#111827] py-28"
    >
      <div className="container mx-auto px-6">

        <SectionTitle
          subtitle="Our Services"
          title="Complete Construction Solutions"
          description="From design and engineering to construction and project management."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (

            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .1,
                duration: .5,
              }}
              className="rounded-3xl border border-gray-800 bg-[#1F2937] p-8 transition hover:-translate-y-2 hover:border-orange-500"
            >

              <div className="text-5xl">
                {service.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                {service.title}
              </h3>

              <p className="mt-5 leading-7 text-gray-400">
                {service.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}