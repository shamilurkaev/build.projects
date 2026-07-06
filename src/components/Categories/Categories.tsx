const categories = [
  {
    title: "Tikinti Materialları",
    description: "Sement, kərpic, bloklar",
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Elektrik",
    description: "Kabel, rozetka, avtomat",
    color: "from-yellow-500 to-amber-500",
  },
  {
    title: "Santexnika",
    description: "Borular, kranlar, duş",
    color: "from-cyan-500 to-sky-600",
  },
  {
    title: "Alətlər",
    description: "Makita, Bosch, Total",
    color: "from-blue-600 to-indigo-700",
  },
  {
    title: "Boyalar",
    description: "İnteryer və fasad",
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Dam örtüyü",
    description: "Metal və kirəmit",
    color: "from-slate-700 to-slate-900",
  },
  {
    title: "Qapılar",
    description: "Daxili və giriş",
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Pəncərələr",
    description: "PVC və Alüminium",
    color: "from-violet-600 to-purple-700",
  },
];

export default function Categories() {
  return (
    <section className="bg-white py-16">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10">

          <h2 className="text-4xl font-black text-slate-900">
            Populyar Kateqoriyalar
          </h2>

          <p className="mt-2 text-slate-500">
            Lazım olan hər şeyi bir yerdə tapın.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {categories.map((category) => (
            <div
              key={category.title}
              className={`group cursor-pointer rounded-3xl bg-gradient-to-br ${category.color} p-8 text-white transition duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >

              <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-3xl backdrop-blur">
                🏗️
              </div>

              <h3 className="text-2xl font-bold">
                {category.title}
              </h3>

              <p className="mt-3 text-white/80">
                {category.description}
              </p>

              <div className="mt-8 flex items-center gap-2 font-semibold">

                Bax

                <span className="transition group-hover:translate-x-2">
                  →
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}