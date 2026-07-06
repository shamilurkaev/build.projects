import { Heart, ShoppingCart, Eye, Star } from "lucide-react";

type Product = {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
  oldPrice: number;
  badge: "TOP" | "NEW" | "SALE";
  reviews: number;
};

const products: Product[] = [
  { id: 1, name: "Makita DHP482Z", brand: "Makita", image: "/images/products/makita.jpg", price: 289, oldPrice: 329, badge: "TOP", reviews: 127 },
  { id: 2, name: "Bosch GSB 13 RE", brand: "Bosch", image: "/images/products/bosch.jpg", price: 179, oldPrice: 210, badge: "NEW", reviews: 83 },
  { id: 3, name: "Hilti TE 6-A36", brand: "Hilti", image: "/images/products/hilti.jpg", price: 1299, oldPrice: 1499, badge: "SALE", reviews: 42 },
  { id: 4, name: "Knauf Rotband", brand: "Knauf", image: "/images/products/knauf.jpg", price: 12, oldPrice: 15, badge: "TOP", reviews: 250 },
  { id: 5, name: "DeWalt DCD796", brand: "DeWalt", image: "/images/products/dewalt.jpg", price: 399, oldPrice: 459, badge: "TOP", reviews: 98 },
  { id: 6, name: "Stanley FatMax", brand: "Stanley", image: "/images/products/stanley.jpg", price: 59, oldPrice: 79, badge: "SALE", reviews: 143 },
  { id: 7, name: "Ceresit CM11", brand: "Ceresit", image: "/images/products/ceresit.jpg", price: 18, oldPrice: 22, badge: "NEW", reviews: 176 },
  { id: 8, name: "Total THT106291", brand: "Total", image: "/images/products/total.jpg", price: 89, oldPrice: 109, badge: "TOP", reviews: 66 },
];

function Badge({ value }: { value: Product["badge"] }) {
  const colors = {
    TOP: "bg-orange-500",
    NEW: "bg-green-600",
    SALE: "bg-red-600",
  };
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-bold text-white ${colors[value]}`}>
      {value}
    </span>
  );
}

export default function Products() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-black">Populyar Məhsullar</h2>
            <p className="mt-2 text-slate-500">Ən çox satılan məhsullar</p>
          </div>
          <button className="rounded-xl border bg-white px-6 py-3 font-semibold hover:bg-slate-50">
            Hamısını göstər
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((p) => (
            <article key={p.id} className="group overflow-hidden rounded-3xl bg-white shadow transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative">
                <div className="absolute left-4 top-4 z-10">
                  <Badge value={p.badge} />
                </div>

                <div className="absolute right-4 top-4 z-10 flex gap-2">
                  <button className="rounded-full bg-white p-2 shadow"><Heart size={18} /></button>
                  <button className="rounded-full bg-white p-2 shadow"><Eye size={18} /></button>
                </div>

                <img
                  src={p.image}
                  alt={p.name}
                  className="h-60 w-full bg-slate-200 object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <p className="text-sm font-semibold text-blue-600">{p.brand}</p>
                <h3 className="mt-2 h-14 text-lg font-bold">{p.name}</h3>

                <div className="mt-3 flex items-center gap-1 text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                  <span className="ml-2 text-sm text-slate-500">({p.reviews})</span>
                </div>

                <div className="mt-5 flex items-end gap-3">
                  <span className="text-3xl font-black">{p.price} ₼</span>
                  <span className="text-slate-400 line-through">{p.oldPrice} ₼</span>
                </div>

                <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-bold text-white hover:bg-blue-700">
                  <ShoppingCart size={18} />
                  Səbətə əlavə et
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
