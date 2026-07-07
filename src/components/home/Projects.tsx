"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import SectionTitle from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0F172A] py-28"
    >
      <div className="container mx-auto px-6">

        <SectionTitle
          subtitle="Our Projects"
          title="Latest Construction Projects"
          description="Explore some of our completed residential, commercial and industrial projects."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .1,
                duration: .5,
              }}
              className="group overflow-hidden rounded-3xl bg-[#1F2937]"
            >

              <div className="relative h-80 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

              </div>

              <div className="p-6">

                <span className="text-orange-500 uppercase tracking-widest text-sm">
                  {project.category}
                </span>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <button className="mt-6 flex items-center gap-2 text-orange-500 hover:text-orange-400 transition">
                  View Project
                  <ArrowUpRight size={18} />
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}