"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock3, Award, Users } from "lucide-react";

import SectionTitle from "@/components/ui/SectionTitle";
import StatCard from "@/components/ui/StatCard";
import { stats } from "@/data/stats";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description:
      "We use only high-quality materials and follow strict construction standards.",
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
      "Experienced architects, engineers and certified specialists.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "Every project is tailored to the customer's requirements.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="bg-[#111827] py-28"
    >
      <div className="container mx-auto px-6">

        <SectionTitle
          subtitle="Why Choose Us"
          title="Building Trust Through Excellence"
          description="Our experience and dedication allow us to deliver exceptional construction projects."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-20">
          {stats.map((item) => (
            <StatCard
              key={item.title}
              value={item.value}
              title={item.title}
            />
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="rounded-3xl border border-gray-800 bg-[#1F2937] p-8"
              >
                <Icon
                  size={40}
                  className="text-orange-500"
                />

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}