"use client";

import Link from "next/link";
import {
  Bell,
  ChevronDown,
  Heart,
  Menu,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      <div className="bg-slate-900 text-white">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-6 text-sm">
            <span>Bakı şəhərinə çatdırılma</span>
            <span className="cursor-pointer hover:text-orange-400">Endirimlər</span>
            <span className="cursor-pointer hover:text-orange-400">Satıcı ol</span>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <button className="font-semibold text-orange-400">AZ</button>
            <button>RU</button>
            <button>EN</button>
          </div>
        </div>
      </div>

      <div className="border-b bg-white">
        <div className="mx-auto flex h-24 max-w-7xl items-center gap-6 px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-black text-white shadow-lg">
              B
            </div>

            <div>
              <h1 className="text-3xl font-black tracking-tight text-slate-900">
                Buildix
              </h1>
              <p className="text-xs text-slate-500">
                Construction Marketplace
              </p>
            </div>
          </Link>

          <button className="flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600">
            <Menu size={20} />
            Kataloq
            <ChevronDown size={18} />
          </button>

          <div className="flex flex-1 overflow-hidden rounded-xl border-2 border-blue-600">
            <input
              type="text"
              placeholder="Məhsul, marka və ya kateqoriya axtarın..."
              className="w-full px-5 py-3 outline-none"
            />
            <button className="bg-blue-600 px-8 text-white hover:bg-blue-700">
              <Search />
            </button>
          </div>

          <div className="flex items-center gap-6">
            <button className="group relative flex flex-col items-center">
              <span className="absolute -right-2 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">2</span>
              <Heart size={22} />
              <span className="mt-1 text-xs">Seçilmiş</span>
            </button>

            <button className="group relative flex flex-col items-center">
              <span className="absolute -right-2 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">3</span>
              <Bell size={22} />
              <span className="mt-1 text-xs">Bildiriş</span>
            </button>

            <button className="group relative flex flex-col items-center">
              <span className="absolute -right-2 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-[10px] font-bold text-white">5</span>
              <ShoppingCart size={22} />
              <span className="mt-1 text-xs">Səbət</span>
            </button>

            <button className="group flex flex-col items-center">
              <User size={22} />
              <span className="mt-1 text-xs">Hesab</span>
            </button>
          </div>
        </div>
      </div>

      <div className="border-b bg-white">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-8 px-6 text-sm font-medium">
          <button className="text-blue-600 hover:text-orange-500">Tikinti Materialları</button>
          <button>Elektrik</button>
          <button>Santexnika</button>
          <button>Alətlər</button>
          <button>Boyalar</button>
          <button>Qapılar</button>
          <button>Pəncərələr</button>
          <button>Dam örtüyü</button>
        </div>
      </div>
    </header>
  );
}
