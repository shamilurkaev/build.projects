import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  label: string;
  badge?: number;
}

export default function IconButton({
  icon,
  label,
  badge,
}: Props) {
  return (
    <button className="group relative flex flex-col items-center gap-1">

      {badge !== undefined && badge > 0 && (
        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
          {badge}
        </span>
      )}

      <div className="rounded-xl p-2 transition group-hover:bg-slate-100">
        {icon}
      </div>

      <span className="text-xs text-slate-600">
        {label}
      </span>

    </button>
  );
}