import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Luxury Villa",
    category: "Residential",
    image: "https://picsum.photos/600/700?random=1",
  },
  {
    title: "Business Center",
    category: "Commercial",
    image: "https://picsum.photos/600/700?random=2",
  },
  {
    title: "Industrial Factory",
    category: "Industrial",
    image: "https://picsum.photos/600/700?random=3",
  },
  {
    title: "Shopping Mall",
    category: "Commercial",
    image: "https://picsum.photos/600/700?random=4",
  },
  {
    title: "Apartment Complex",
    category: "Residential",
    image: "https://picsum.photos/600/700?random=5",
  },
  {
    title: "Modern Office",
    category: "Office",
    image: "https://picsum.photos/600/700?random=6",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0F172A] py-24 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Our Projects
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Featured Construction Works
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Explore some of our completed residential, commercial and industrial
            construction projects.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80"></div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-orange-500 text-sm uppercase tracking-widest">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {project.title}
                </h3>

                <button className="mt-6 flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition">
                  View Project
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}