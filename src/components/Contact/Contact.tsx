import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#111827] text-white py-24"
    >
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Contact Us
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Let's Build Something Great Together
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Have a project in mind? Contact our team and we'll help turn your vision into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          <div className="space-y-6">

            <div className="flex gap-5 rounded-2xl bg-[#1F2937] p-6 border border-gray-800">
              <MapPin className="text-orange-500" size={30} />
              <div>
                <h3 className="font-semibold text-xl">Office</h3>
                <p className="text-gray-400">
                  Baku, Azerbaijan
                </p>
              </div>
            </div>

            <div className="flex gap-5 rounded-2xl bg-[#1F2937] p-6 border border-gray-800">
              <Phone className="text-orange-500" size={30} />
              <div>
                <h3 className="font-semibold text-xl">Phone</h3>
                <p className="text-gray-400">
                  +994 50 123 45 67
                </p>
              </div>
            </div>

            <div className="flex gap-5 rounded-2xl bg-[#1F2937] p-6 border border-gray-800">
              <Mail className="text-orange-500" size={30} />
              <div>
                <h3 className="font-semibold text-xl">Email</h3>
                <p className="text-gray-400">
                  info@buildix.com
                </p>
              </div>
            </div>

            <div className="flex gap-5 rounded-2xl bg-[#1F2937] p-6 border border-gray-800">
              <Clock className="text-orange-500" size={30} />
              <div>
                <h3 className="font-semibold text-xl">Working Hours</h3>
                <p className="text-gray-400">
                  Mon - Fri: 09:00 - 18:00
                </p>
              </div>
            </div>

          </div>

          <form className="rounded-2xl bg-[#1F2937] p-8 border border-gray-800 space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl bg-[#111827] p-4 outline-none border border-gray-700 focus:border-orange-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl bg-[#111827] p-4 outline-none border border-gray-700 focus:border-orange-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl bg-[#111827] p-4 outline-none border border-gray-700 focus:border-orange-500"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full rounded-xl bg-[#111827] p-4 outline-none border border-gray-700 focus:border-orange-500"
            />

            <button
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold"
            >
              <Send size={18} />
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}