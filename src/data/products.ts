export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Makita Drill",
    category: "Power Tools",
    price: 249,
    image: "/images/products/makita.jpg",
    description: "Professional cordless drill for construction work.",
  },
  {
    id: 2,
    name: "Bosch Hammer",
    category: "Power Tools",
    price: 319,
    image: "/images/products/bosch.jpg",
    description: "Heavy-duty demolition hammer with high performance.",
  },
  {
    id: 3,
    name: "Hilti Impact Driver",
    category: "Professional",
    price: 499,
    image: "/images/products/hilti.jpg",
    description: "Industrial impact driver for demanding projects.",
  },
  {
    id: 4,
    name: "Stanley Toolbox",
    category: "Hand Tools",
    price: 159,
    image: "/images/products/stanley.jpg",
    description: "Durable toolbox with multiple storage compartments.",
  },
  {
    id: 5,
    name: "Knauf Cement",
    category: "Building Materials",
    price: 18,
    image: "/images/products/knauf.jpg",
    description: "Premium cement for professional construction.",
  },
  {
    id: 6,
    name: "Ceresit Adhesive",
    category: "Building Materials",
    price: 24,
    image: "/images/products/ceresit.jpg",
    description: "High-strength tile adhesive.",
  },
  {
    id: 7,
    name: "TOTAL Circular Saw",
    category: "Power Tools",
    price: 279,
    image: "/images/products/total.jpg",
    description: "Precision cutting for wood and metal.",
  },
  {
    id: 8,
    name: "DeWalt Grinder",
    category: "Power Tools",
    price: 215,
    image: "/images/products/dewalt.jpg",
    description: "Professional angle grinder with powerful motor.",
  },
];