"use client";

import Image from "next/image";
import { ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";

import SectionTitle from "@/components/ui/SectionTitle";
import { products } from "@/data/products";

export default function Products() {
  return (
    <section
      id="products"
      className="bg-[#0F172A] py-28"
    >
      <div className="container mx-auto px-6">

        <SectionTitle
          subtitle="Our Products"
          title="Professional Construction Equipment"
          description="Discover premium tools and construction materials from the world's leading manufacturers."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product, index) => (

            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .1,
              }}
              className="overflow-hidden rounded-3xl bg-[#1F2937] border border-gray-800 hover:border-orange-500 transition"
            >

              <div className="relative h-64 bg-[#111827]">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 transition duration-300 hover:scale-110"
                />

              </div>

              <div className="p-6">

                <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-orange-500">
                  {product.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-white">
                  {product.name}
                </h3>

                <p className="mt-4 text-gray-400 leading-7">
                  {product.description}
                </p>

                <div className="mt-5 flex items-center gap-1 text-orange-500">

                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />

                </div>

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-3xl font-bold text-orange-500">
                    ${product.price}
                  </span>

                  <button className="rounded-xl bg-orange-500 p-3 transition hover:bg-orange-600">
                    <ShoppingCart size={20} className="text-white" />
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}