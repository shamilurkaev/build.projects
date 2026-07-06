import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold text-white shadow-lg">
        B
      </div>

      <div>
        <h1 className="text-2xl font-black tracking-tight text-slate-900">
          Buildix
        </h1>

        <p className="text-xs text-slate-500">
          Construction Marketplace
        </p>
      </div>
    </Link>
  );
}