import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Products from "@/components/home/Products";
import Services from "@/components/home/Services";
import Projects from "@/components/home/Projects";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B1220]">
      <Header />

      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}