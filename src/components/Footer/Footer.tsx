"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const links = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Products", href: "#products" },
  { title: "Services", href: "#services" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] border-t border-gray-800">

      <div className="container mx-auto px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Logo */}

          <div>

            <h2 className="text-4xl font-bold text-white">
              Build<span className="text-orange-500">ix</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Professional construction company delivering
              premium quality projects with modern engineering
              and innovative solutions.
            </p>

          </div>

          {/* Links */}

          <div>

            <h3 className="text-xl font-bold text-white">
              Navigation
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              {links.map((link) => (

                <Link
                  key={link.title}
                  href={link.href}
                  className="text-gray-400 transition hover:text-orange-500"
                >
                  {link.title}
                </Link>

              ))}

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-bold text-white">
              Services
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-gray-400">

              <span>Construction</span>
              <span>Architecture</span>
              <span>Engineering</span>
              <span>Renovation</span>
              <span>Project Management</span>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex gap-3">

                <MapPin className="text-orange-500" />

                <span className="text-gray-400">
                  Baku, Azerbaijan
                </span>

              </div>

              <div className="flex gap-3">

                <Phone className="text-orange-500" />

                <span className="text-gray-400">
                  +994 50 123 45 67
                </span>

              </div>

              <div className="flex gap-3">

                <Mail className="text-orange-500" />

                <span className="text-gray-400">
                  info@buildix.com
                </span>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-gray-800 pt-8 md:flex-row">

          <p className="text-gray-500">
            © {new Date().getFullYear()} Buildix. All rights reserved.
          </p>

          <button className="flex items-center gap-2 text-orange-500 hover:text-orange-400">

            Back to top

            <ArrowUpRight size={18} />

          </button>

        </div>

      </div>

    </footer>
  );
}