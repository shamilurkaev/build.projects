"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

import SectionTitle from "@/components/ui/SectionTitle";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#111827] py-28"
    >
      <div className="container mx-auto px-6">

        <SectionTitle
          subtitle="Contact"
          title="Let's Build Together"
          description="Have a project in mind? Contact our team today."
        />

        <div className="grid gap-12 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <div className="flex gap-4 rounded-3xl bg-[#1F2937] p-6">
              <MapPin className="text-orange-500" />
              <div>
                <h3 className="text-xl font-bold text-white">Address</h3>
                <p className="text-gray-400">Baku, Azerbaijan</p>
              </div>
            </div>

            <div className="flex gap-4 rounded-3xl bg-[#1F2937] p-6">
              <Phone className="text-orange-500" />
              <div>
                <h3 className="text-xl font-bold text-white">Phone</h3>
                <p className="text-gray-400">+994 50 123 45 67</p>
              </div>
            </div>

            <div className="flex gap-4 rounded-3xl bg-[#1F2937] p-6">
              <Mail className="text-orange-500" />
              <div>
                <h3 className="text-xl font-bold text-white">Email</h3>
                <p className="text-gray-400">info@buildix.com</p>
              </div>
            </div>

            <div className="flex gap-4 rounded-3xl bg-[#1F2937] p-6">
              <Clock className="text-orange-500" />
              <div>
                <h3 className="text-xl font-bold text-white">Working Hours</h3>
                <p className="text-gray-400">Mon - Fri | 09:00 - 18:00</p>
              </div>
            </div>

          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-[#1F2937] p-8"
          >

            <div className="space-y-5">

              <input
                placeholder="Full Name"
                className="w-full rounded-xl bg-[#111827] p-4 text-white outline-none"
              />

              <input
                placeholder="Email Address"
                className="w-full rounded-xl bg-[#111827] p-4 text-white outline-none"
              />

              <input
                placeholder="Subject"
                className="w-full rounded-xl bg-[#111827] p-4 text-white outline-none"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full rounded-xl bg-[#111827] p-4 text-white outline-none"
              />

              <button
                className="flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
              >
                <Send size={18} />
                Send Message
              </button>

            </div>

          </motion.form>

        </div>

      </div>
    </section>
  );
}