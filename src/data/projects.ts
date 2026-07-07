export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Luxury Villa",
    category: "Residential",
    image: "/images/projects/project1.jpg",
  },
  {
    id: 2,
    title: "Business Center",
    category: "Commercial",
    image: "/images/projects/project2.jpg",
  },
  {
    id: 3,
    title: "Industrial Factory",
    category: "Industrial",
    image: "/images/projects/project3.jpg",
  },
  {
    id: 4,
    title: "Shopping Mall",
    category: "Commercial",
    image: "/images/projects/project4.jpg",
  },
  {
    id: 5,
    title: "Apartment Complex",
    category: "Residential",
    image: "/images/projects/project5.jpg",
  },
  {
    id: 6,
    title: "Office Building",
    category: "Business",
    image: "/images/projects/project6.jpg",
  },
];