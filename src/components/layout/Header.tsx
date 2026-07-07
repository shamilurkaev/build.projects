"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0F172A]/95 backdrop-blur shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-5">

        <Link href="/" className="text-3xl font-bold text-white">
          Build<span className="text-orange-500">ix</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">

          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white hover:text-orange-500 transition"
            >
              {item.label}
            </a>
          ))}

        </nav>

        <div className="hidden lg:block">
          <button className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
            Get Quote
          </button>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[#111827] border-t border-gray-800">

          <div className="flex flex-col p-6 gap-5">

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-white hover:text-orange-500 transition"
              >
                {item.label}
              </a>
            ))}

            <button className="mt-4 rounded-xl bg-orange-500 py-3 font-semibold">
              Get Quote
            </button>

          </div>

        </div>
      )}
    </header>
  );
}