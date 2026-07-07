export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  review: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Johnson",
    position: "CEO",
    company: "MJ Group",
    review:
      "Buildix delivered our project on time with exceptional quality. Highly recommended.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    position: "Project Manager",
    company: "Future Build",
    review:
      "Professional team, excellent communication and outstanding workmanship.",
  },
  {
    id: 3,
    name: "David Brown",
    position: "Business Owner",
    company: "Brown Construction",
    review:
      "From planning to completion everything exceeded our expectations.",
  },
];