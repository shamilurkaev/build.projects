"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#0F172A] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#f97316_0%,transparent_35%)] opacity-20" />

      <div className="container mx-auto px-6 relative z-10">

        <div className="max-w-3xl">

          <motion.span
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            className="inline-block rounded-full border border-orange-500/40 bg-orange-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-orange-500"
          >
            Build Beyond Expectations
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            className="mt-8 text-6xl md:text-7xl font-extrabold leading-tight text-white"
          >
            Building the
            <span className="block text-orange-500">
              Future Today
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .4 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-gray-300"
          >
            Buildix provides premium construction services, engineering,
            architecture and building materials for residential,
            commercial and industrial projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .6 }}
            className="mt-12 flex flex-wrap gap-5"
          >
            <Link
              href="#projects"
              className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
            >
              View Projects
            </Link>

            <Link
              href="#contact"
              className="flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-orange-500 hover:text-orange-500"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
}