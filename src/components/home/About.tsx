"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Professional Construction Team",
  "Premium Quality Materials",
  "Modern Engineering Solutions",
  "100% Customer Satisfaction",
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#111827] py-28 text-white"
    >
      <div className="container mx-auto px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <span className="text-orange-500 uppercase tracking-[5px] font-semibold">
              About Buildix
            </span>

            <h2 className="mt-5 text-5xl font-bold leading-tight">
              Building Dreams With
              <span className="block text-orange-500">
                Innovation & Quality
              </span>
            </h2>

            <p className="mt-8 text-gray-400 leading-8">
              We deliver premium construction services, architecture,
              engineering and building materials with modern technologies
              and experienced professionals.
            </p>

            <div className="mt-10 grid gap-5">

              {features.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2
                    className="text-orange-500"
                    size={24}
                  />

                  <span className="text-lg">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <div className="grid grid-cols-2 gap-6">

              <div className="rounded-3xl bg-[#1F2937] p-10 text-center">

                <h3 className="text-5xl font-bold text-orange-500">
                  15+
                </h3>

                <p className="mt-4 text-gray-400">
                  Years Experience
                </p>

              </div>

              <div className="rounded-3xl bg-[#1F2937] p-10 text-center">

                <h3 className="text-5xl font-bold text-orange-500">
                  500+
                </h3>

                <p className="mt-4 text-gray-400">
                  Projects
                </p>

              </div>

              <div className="rounded-3xl bg-[#1F2937] p-10 text-center">

                <h3 className="text-5xl font-bold text-orange-500">
                  120+
                </h3>

                <p className="mt-4 text-gray-400">
                  Engineers
                </p>

              </div>

              <div className="rounded-3xl bg-[#1F2937] p-10 text-center">

                <h3 className="text-5xl font-bold text-orange-500">
                  99%
                </h3>

                <p className="mt-4 text-gray-400">
                  Happy Clients
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}