export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-20">

        {/* Left */}

        <div className="max-w-2xl text-white">

          <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold">
            Azərbaycanın №1 Tikinti Marketplace-i
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight">
            Tikinti üçün
            <br />
            hər şey
          </h1>

          <p className="mt-6 text-xl text-blue-100">
            Minlərlə məhsul.
            Yüzlərlə satıcı.
            Azərbaycanın hər yerinə çatdırılma.
          </p>

          <div className="mt-10 flex gap-4">

            <button className="rounded-xl bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600">
              Kataloqa keç
            </button>

            <button className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-700">
              Endirimlər
            </button>

          </div>

          <div className="mt-12 flex gap-10">

            <div>
              <h2 className="text-3xl font-bold">
                500K+
              </h2>

              <p className="text-blue-100">
                Məhsul
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                2000+
              </h2>

              <p className="text-blue-100">
                Satıcı
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                24/7
              </h2>

              <p className="text-blue-100">
                Dəstək
              </p>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="hidden lg:block">

          <div className="rounded-3xl bg-white p-8 shadow-2xl">

            <div className="grid grid-cols-2 gap-6">

              <div className="rounded-2xl bg-slate-100 p-8 text-center transition hover:scale-105">
                <div className="text-5xl">🛠️</div>
                <h3 className="mt-3 font-bold">
                  Alətlər
                </h3>
              </div>

              <div className="rounded-2xl bg-slate-100 p-8 text-center transition hover:scale-105">
                <div className="text-5xl">⚡</div>
                <h3 className="mt-3 font-bold">
                  Elektrik
                </h3>
              </div>

              <div className="rounded-2xl bg-slate-100 p-8 text-center transition hover:scale-105">
                <div className="text-5xl">🚿</div>
                <h3 className="mt-3 font-bold">
                  Santexnika
                </h3>
              </div>

              <div className="rounded-2xl bg-slate-100 p-8 text-center transition hover:scale-105">
                <div className="text-5xl">🧱</div>
                <h3 className="mt-3 font-bold">
                  Tikinti
                </h3>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}