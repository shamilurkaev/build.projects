"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-[#0F172A]"
    >
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="max-w-3xl"
        >

          <span className="rounded-full bg-orange-500/20 px-5 py-2 text-orange-500 uppercase tracking-widest">
            Build Beyond Expectations
          </span>

          <h1 className="mt-8 text-6xl font-bold leading-tight text-white">
            Building the
            <span className="block text-orange-500">
              Future Today
            </span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            Professional construction company specializing in
            residential, commercial and industrial projects.
          </p>

          <div className="mt-10 flex gap-5">

            <Link
              href="#projects"
              className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white hover:bg-orange-600"
            >
              Our Projects
            </Link>

            <Link
              href="#contact"
              className="flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 text-white hover:border-orange-500 hover:text-orange-500"
            >
              Contact
              <ArrowRight size={18} />
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}