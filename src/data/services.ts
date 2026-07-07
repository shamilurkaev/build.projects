export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Building Construction",
    description: "Residential, commercial and industrial construction projects.",
    icon: "🏗️",
  },
  {
    id: 2,
    title: "Architecture",
    description: "Modern architectural planning and design services.",
    icon: "📐",
  },
  {
    id: 3,
    title: "Engineering",
    description: "Structural, electrical and mechanical engineering.",
    icon: "⚙️",
  },
  {
    id: 4,
    title: "Renovation",
    description: "Complete renovation and restoration solutions.",
    icon: "🔨",
  },
  {
    id: 5,
    title: "Building Materials",
    description: "Premium construction materials from trusted brands.",
    icon: "🧱",
  },
  {
    id: 6,
    title: "Project Management",
    description: "End-to-end construction project management.",
    icon: "📋",
  },
];